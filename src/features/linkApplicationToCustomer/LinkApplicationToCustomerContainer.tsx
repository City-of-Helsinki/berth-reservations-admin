import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLazyQuery, useQuery } from '@apollo/react-hooks';
import { useDebounce } from 'use-debounce';

import { getFilteredCustomersData } from './utils';
import { FILTERED_CUSTOMERS_QUERY } from './queries';
import {
  FILTERED_CUSTOMERS,
  FILTERED_CUSTOMERSVariables as FILTERED_CUSTOMERS_VARS,
} from './__generated__/FILTERED_CUSTOMERS';
import { SearchBy } from '../applicationView/ApplicationView';
import { usePrevious } from '../../common/utils/usePrevious';
import { usePagination } from '../../common/utils/usePagination';
import { useBackendSorting } from '../../common/utils/useBackendSorting';
import LinkApplicationToCustomer from './LinkApplicationToCustomer';
import useCreateNewCustomer from '../../common/hooks/useCreateNewCustomer';

export interface LinkApplicationToCustomerContainerProps {
  application: {
    id: string;
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    phoneNumber: string;
    zipCode: string;
    municipality: string;
    businessId: string;
    companyName: string;
  };
  handleLinkCustomer(customerId: string): void;
}

const LinkApplicationToCustomerContainer = ({
  application,
  handleLinkCustomer,
}: LinkApplicationToCustomerContainerProps) => {
  const { t } = useTranslation();

  const [searchBy, setSearchBy] = useState<SearchBy>(SearchBy.EMAIL);
  const prevSearchBy = usePrevious(searchBy);
  const [searchVal, setSearchVal] = useState<string>('');
  const [debouncedSearchVal] = useDebounce(searchVal, 500, {
    equalityFn: (prev, next) => prev === next,
    leading: true,
  });
  const { cursor, pageSize, pageIndex, getPageCount, goToPage } = usePagination();
  const { orderBy, handleSortedColChange } = useBackendSorting(() => goToPage(0));

  const filteredCustomersVars: FILTERED_CUSTOMERS_VARS = {
    first: pageSize,
    after: cursor,
    orderBy,
    [searchBy]: prevSearchBy === searchBy ? debouncedSearchVal : searchVal,
  };
  const [fetchFilteredCustomers, { data: customersData, called, loading: loadingCustomers }] = useLazyQuery<
    FILTERED_CUSTOMERS,
    FILTERED_CUSTOMERS_VARS
  >(FILTERED_CUSTOMERS_QUERY, {
    variables: filteredCustomersVars,
  });

  const exactlyFilteredCustomersVars: FILTERED_CUSTOMERS_VARS = {
    first: 1,
    [SearchBy.FIRST_NAME]: application.firstName,
    [SearchBy.LAST_NAME]: application.lastName,
    [SearchBy.EMAIL]: application.email,
  };
  const { data: exactlyFilteredCustomersData, loading: loadingExactlyFilteredCustomers } = useQuery<
    FILTERED_CUSTOMERS,
    FILTERED_CUSTOMERS_VARS
  >(FILTERED_CUSTOMERS_QUERY, {
    variables: exactlyFilteredCustomersVars,
  });

  const createNewCustomer = useCreateNewCustomer([
    {
      query: FILTERED_CUSTOMERS_QUERY,
      variables: filteredCustomersVars,
    },
    {
      query: FILTERED_CUSTOMERS_QUERY,
      variables: exactlyFilteredCustomersVars,
    },
  ]);

  useEffect(() => {
    setSearchVal(application[searchBy]);
  }, [application, searchBy]);

  useEffect(() => {
    goToPage(0);
  }, [searchVal, searchBy, goToPage]);

  useEffect(() => {
    // Only fetch customers if the application doesn't have an attached customer.
    if (!called) {
      fetchFilteredCustomers();
    }
  }, [called, fetchFilteredCustomers]);

  const filteredCustomersData = getFilteredCustomersData(customersData);
  const canCreateNewCustomer =
    !getFilteredCustomersData(exactlyFilteredCustomersData).length && !loadingExactlyFilteredCustomers;

  const handleCreateCustomer = () => {
    createNewCustomer(application);
  };

  return (
    <LinkApplicationToCustomer
      data={filteredCustomersData}
      customersTableTools={{
        searchVal,
        searchBy,
        setSearchVal,
        canCreateNewCustomer,
        setSearchBy: (searchBy) => {
          setSearchBy(searchBy);
          setSearchVal(application[searchBy] ?? '');
        },
        handleCreateCustomer,
        searchByOptions: [
          { value: SearchBy.FIRST_NAME, label: t('common.firstName') },
          { value: SearchBy.LAST_NAME, label: t('common.lastName') },
          { value: SearchBy.EMAIL, label: t('common.email') },
          { value: SearchBy.ADDRESS, label: t('common.address') },
        ],
      }}
      loadingCustomers={loadingCustomers}
      pagination={{
        forcePage: pageIndex,
        pageCount: getPageCount(customersData?.profiles?.count),
        onPageChange: ({ selected }) => goToPage(selected),
      }}
      onSortedColChange={handleSortedColChange({ name: 'lastName' })}
      handleLinkCustomer={handleLinkCustomer}
    />
  );
};

export default LinkApplicationToCustomerContainer;
