import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';

import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import { CUSTOMER_QUERY } from './customerQueries';
import { getCustomersData } from './customerUtils';
import { CUSTOMERS } from './__generated__/CUSTOMERS';
import CustomerList from './components/customerList/CustomerListComponent';

const CustomersPageContainer: React.SFC = () => {
  const { loading, error, data } = useQuery<CUSTOMERS>(CUSTOMER_QUERY);

  const { t } = useTranslation();
  if (error) return <p>Error</p>;

  const tableData = getCustomersData(data);

  return (
    <LoadingSpinner isLoading={loading}>
      <CustomerList data={tableData} t={t} />
    </LoadingSpinner>
  );
};

export default CustomersPageContainer;
