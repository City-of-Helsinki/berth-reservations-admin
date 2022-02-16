import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/react-hooks';
import { useDebounce } from 'use-debounce';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { SortingRule } from 'react-table';
import format from 'date-fns/format';

import { CUSTOMERS_QUERY } from './queries';
import { getCustomersData } from './utils';
import { CUSTOMERS, CUSTOMERSVariables as CUSTOMERS_VARS } from './__generated__/CUSTOMERS';
import CustomerList from './CustomerList';
import { usePagination } from '../../common/utils/usePagination';
import { useRecoilBackendSorting } from '../../common/utils/useBackendSorting';
import { SearchBy } from '../applicationView/ApplicationView';
import { usePrevious } from '../../common/utils/usePrevious';
import { ApplicationData } from '../applicationList/utils';
import { orderByGetter } from '../../common/utils/recoil';
import authService from '../auth/authService';
import useListTableFilters from './customerListTableFilters/useListTableFilters';
import { createIntervalWithSilentError, createDate } from './customerListTableFilters/utils';

const searchByAtom = atom<SearchBy>({
  key: 'CustomerListContainer_searchByAtom',
  default: SearchBy.LAST_NAME,
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
  get: orderByGetter(sortByAtom),
});

const CustomerListContainer = () => {
  const { t } = useTranslation();

  const [customerListTableFilters] = useListTableFilters();

  const [searchBy, setSearchBy] = useRecoilState(searchByAtom);
  const [searchVal, setSearchVal] = useRecoilState(searchValAtom);

  const { cursor, pageSize, pageIndex, getPageCount, goToPage } = usePagination();
  const { sortBy, handleSortedColsChange } = useRecoilBackendSorting(sortByAtom, () => goToPage(0));
  const orderBy = useRecoilValue(orderBySelector);

  const [debouncedSearchVal] = useDebounce(searchVal, 500, {
    equalityFn: (prev, next) => prev === next,
    leading: true,
  });

  const prevSearchBy = usePrevious(searchBy);

  const { dateInterval, ...delegatedCustomerListTableFilters } = customerListTableFilters;
  const { start, end } = createIntervalWithSilentError(dateInterval);
  const profileToken = authService.getProfileToken() as string;
  const customersVars: CUSTOMERS_VARS = {
    first: pageSize,
    after: cursor,
    orderBy,
    [searchBy]: prevSearchBy === searchBy ? debouncedSearchVal : searchVal,
    ...delegatedCustomerListTableFilters,
    startDate: start ? format(createDate(start), 'yyyy-MM-dd') : start,
    endDate: end ? format(createDate(end), 'yyyy-MM-dd') : end,
    apiToken: profileToken,
  };

  const { data, loading, refetch } = useQuery<CUSTOMERS, CUSTOMERS_VARS>(CUSTOMERS_QUERY, {
    variables: customersVars,
    fetchPolicy: 'no-cache',
  });

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

  const tableData = getCustomersData(data);

  return (
    <CustomerList
      loading={loading}
      data={tableData}
      onSortedColsChange={handleSortedColsChange}
      sortBy={sortBy}
      pagination={{
        pageIndex: pageIndex,
        pageCount: getPageCount(data?.berthProfiles?.count),
        onPageChange: ({ selected }) => goToPage(selected),
      }}
      tableTools={{
        refetch,
        searchVal,
        searchBy,
        setSearchVal,
        setSearchBy,
        searchByOptions: [
          { value: SearchBy.FIRST_NAME, label: t('common.firstName') },
          { value: SearchBy.LAST_NAME, label: t('common.lastName') },
          { value: SearchBy.EMAIL, label: t('common.email') },
          { value: SearchBy.ADDRESS, label: t('common.address') },
        ],
      }}
    />
  );
};

export default CustomerListContainer;
