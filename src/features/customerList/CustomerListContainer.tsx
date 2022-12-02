import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDebounce } from 'use-debounce';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { SortingRule } from 'react-table';
import { useHistory, useLocation } from 'react-router-dom';
import format from 'date-fns/format';
import { Notification } from 'hds-react';

import { ALL_CUSTOMERS_QUERY } from './queries';
import { getCustomersData } from './utils';
import CustomerList from './CustomerList';
import { usePagination } from '../../common/utils/usePagination';
import { useRecoilBackendSorting } from '../../common/utils/useBackendSorting';
import { getProfileToken } from '../../common/utils/auth';
import { useTableExport } from '../../common/utils/useTableExport';
import { orderByToString } from '../../common/utils/recoil';
import { usePrevious } from '../../common/utils/usePrevious';
import { ApplicationData } from '../applicationList/utils';
import useListTableFilters from './customerListTableFilters/useListTableFilters';
import { ALL_CUSTOMERS, ALL_CUSTOMERSVariables as ALL_CUSTOMERS_VARS } from './__generated__/ALL_CUSTOMERS';
import useCustomersQuery from './useCustomersQuery';
import { createIntervalWithSilentError, createDate } from './customerListTableFilters/utils';
import { InvoicingType } from '../../@types/__generated__/globalTypes';

export enum SearchBy {
  NAME = 'name',
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  ORGANIZATION_NAME = 'organizationName',
  EMAIL = 'email',
  ADDRESS = 'address',
  STICKER_NUMBER = 'stickerNumber',
  STICKER_NUMBER_SEASON = 'stickerNumberSeason',
  BOAT_REGISTRATION_NUMBER = 'boatRegistrationNumber',
  INVOICING_TYPE = 'invoicingType',
}

const searchByAtom = atom<SearchBy>({
  key: 'CustomerListContainer_searchByAtom',
  default: SearchBy.NAME,
});

const searchValAtom = atom<string>({
  key: 'CustomerListContainer_searchValAtom',
  default: '',
});

const sortByAtom = atom<SortingRule<ApplicationData>[]>({
  key: 'CustomerListContainer_sortByAtom',
  default: [{ id: 'name', desc: false }],
});

const orderBySelector = selector<string | undefined>({
  key: 'CustomerListContainer_orderBySelector',
  get: ({ get }) => {
    const modifiedOrderByAtom = get(sortByAtom).map((sort) => {
      if (sort.id === 'name') {
        return {
          ...sort,
          id: 'lastName',
        };
      }

      return sort;
    });

    return orderByToString(modifiedOrderByAtom);
  },
});

interface SearchByTransformResult<T = string | string[]> {
  [key: string]: T;
}

const transformSearchBy = (searchBy: SearchBy, value: string): SearchByTransformResult => {
  // Backend supports queries for names in the form of firstName, lastName only so
  // this transforms SearchBy.NAME to firstName, lastName.
  if (searchBy === SearchBy.NAME) {
    const [lastName, firstName] = value.split(' ');
    return {
      firstName,
      lastName,
    };
  }
  if (searchBy === SearchBy.INVOICING_TYPE) {
    return {
      invoicingTypes: [value],
    };
  }
  if (searchBy === SearchBy.STICKER_NUMBER_SEASON) {
    if (!value.includes(' ')) {
      return {
        stickerNumber: value,
      };
    }
    const [stickerNumber, season] = value.split(' ');
    return {
      stickerNumber,
      stickerSeason: season,
    };
  }
  return {
    [searchBy]: value,
  };
};

const CustomerListContainer = () => {
  usePersistedSearch();

  const { t } = useTranslation();

  const [customerListTableFilters] = useListTableFilters();

  const [searchBy, setSearchBy] = useRecoilState(searchByAtom);
  const [searchVal, setSearchVal] = useRecoilState(searchValAtom);

  const { cursor, pageSize, pageIndex, getPageCount, goToPage } = usePagination();
  const { sortBy, handleSortedColsChange } = useRecoilBackendSorting(sortByAtom, () => goToPage(0));
  const orderBy = useRecoilValue(orderBySelector);

  const [displayNotification, setDisplayNotification] = useState(false);

  const debounceSlowProfileQueryDelay = 1200;
  const debounceDefaultDelay = 500;
  const debounceWait = [
    SearchBy.STICKER_NUMBER,
    SearchBy.STICKER_NUMBER_SEASON,
    SearchBy.BOAT_REGISTRATION_NUMBER,
  ].includes(searchBy)
    ? debounceSlowProfileQueryDelay
    : debounceDefaultDelay;

  const [debouncedSearchVal] = useDebounce(searchVal, debounceWait, {
    equalityFn: (prev, next) => prev === next,
    leading: true,
  });

  const prevSearchBy = usePrevious(searchBy);

  const { dateInterval, ...delegatedCustomerListTableFilters } = customerListTableFilters;
  const { start, end } = createIntervalWithSilentError(dateInterval);
  const customersVars = {
    first: pageSize,
    after: cursor,
    orderBy,
    ...transformSearchBy(searchBy, prevSearchBy === searchBy ? debouncedSearchVal : searchVal),
    ...delegatedCustomerListTableFilters,
    startDate: start ? format(createDate(start), 'yyyy-MM-dd') : start,
    endDate: end ? format(createDate(end), 'yyyy-MM-dd') : end,
    apiToken: getProfileToken(),
  };

  const { loading, refetch, profiles, count } = useCustomersQuery(customersVars);

  const { exportTable, isExporting } = useTableExport({
    exportType: 'customers',
    fileType: 'xlsx',
    fetchCallback: async (apolloClient, paginationParams) => {
      const { data } = await apolloClient.query<ALL_CUSTOMERS, ALL_CUSTOMERS_VARS>({
        query: ALL_CUSTOMERS_QUERY,
        variables: {
          ...customersVars,
          ...paginationParams,
        },
        fetchPolicy: 'cache-first',
      });
      return data.berthProfiles ?? {};
    },
  });

  const handleCustomersExport = async () => {
    await exportTable();
  };

  const isInitialMount = useRef(true);
  useEffect(() => {
    // Prevent hook running on initial mount because it would force to first page on landing with direct url
    // regardless of the page param
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      // Go to the first page when search values change.
      goToPage(0);
    }
  }, [searchVal, searchBy, goToPage]);

  // There would be a collision between customerGroup set by the table filters
  // and the customerGroup set by the searchBy, since organizations are also
  // searched first by customerGroup. This will notify the user, reset searchBy and disallow
  // organization name search when customerGroup is set by the tableFilters.
  useEffect(() => {
    if (
      customerListTableFilters.customerGroups &&
      customerListTableFilters.customerGroups.length > 0 &&
      searchBy === SearchBy.ORGANIZATION_NAME
    ) {
      setSearchBy(SearchBy.NAME);
      setDisplayNotification(true);
    }
  }, [customerListTableFilters, searchBy, setSearchBy]);

  const tableData = getCustomersData(profiles);

  return (
    <>
      {displayNotification && (
        <Notification
          label={t('customerList.message.customerGroupOverlapLabel')}
          type="alert"
          position="top-right"
          autoClose={true}
          onClose={() => {
            setDisplayNotification(false);
          }}
        >
          {t('customerList.message.customerGroupOverlapMessage')}
        </Notification>
      )}
      <CustomerList
        loading={loading}
        data={tableData}
        onSortedColsChange={handleSortedColsChange}
        sortBy={sortBy}
        pagination={{
          pageIndex: pageIndex,
          pageCount: getPageCount(count),
          onPageChange: ({ selected }) => goToPage(selected),
        }}
        tableTools={{
          refetch,
          searchVal,
          searchBy,
          setSearchVal,
          setSearchBy,
          handleCustomersExport,
          isExporting,
          searchByOptions: [
            {
              value: SearchBy.NAME,
              label: t('common.name'),
              placeholder: `${t('common.lastName')} ${t('common.firstName')}`,
            },
            { value: SearchBy.FIRST_NAME, label: t('common.firstName') },
            { value: SearchBy.LAST_NAME, label: t('common.lastName') },
            { value: SearchBy.ORGANIZATION_NAME, label: t('common.customerGroups.COMPANY') },
            { value: SearchBy.EMAIL, label: t('common.email') },
            { value: SearchBy.ADDRESS, label: t('common.address') },
            { value: SearchBy.STICKER_NUMBER, label: t('common.terminology.stickerNumber') },
            {
              value: SearchBy.STICKER_NUMBER_SEASON,
              label: t('forms.customer.stickerNumberAndSeason'),
              placeholder: t('forms.customer.stickerNumberAndSeasonPlaceholder'),
            },
            { value: SearchBy.BOAT_REGISTRATION_NUMBER, label: t('common.terminology.registrationNumber') },
            {
              value: SearchBy.INVOICING_TYPE,
              label: t('common.terminology.invoicingType'),
              options: [InvoicingType.ONLINE_PAYMENT, InvoicingType.PAPER_INVOICE].map((type) => ({
                label: t(`common.invoicingTypes.${type}`),
                value: type,
              })),
            },
          ],
        }}
      />
    </>
  );
};

const PERSISTED_SEARCH_SESSION_STORAGE_KEY = 'berth-reservations-admin/persistedCustomerListContainer';

function usePersistedSearch() {
  const { search, pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    // Whenever search changes, persist it for the duration of the session
    sessionStorage.setItem(PERSISTED_SEARCH_SESSION_STORAGE_KEY, search);
  }, [search]);

  useEffect(() => {
    const persistedSearch = sessionStorage.getItem(PERSISTED_SEARCH_SESSION_STORAGE_KEY);

    // If search is empty and we have a persisted search, apply the persisted
    // search
    if (!search && persistedSearch) {
      history.replace(`${pathname}${persistedSearch}`);
    }
  }, [history, pathname, search]);
}

export default CustomerListContainer;
