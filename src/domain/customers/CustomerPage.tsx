import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import { CUSTOMER_QUERY } from './customerQueries';
import { getCustomersData } from './customerUtils';
import { CUSTOMERS } from './__generated__/CUSTOMERS';
import CustomerList from './components/customerList/CustomerListComponent';
import styles from './customersPage.module.scss';

export const CustomersPage: React.SFC = ({ children }) => {
  return <div className={styles.customersPage}>{children}</div>;
};

const CustomersPageContainer: React.FC = () => {
  const { loading, error, data } = useQuery<CUSTOMERS>(CUSTOMER_QUERY);
  if (error)
    return (
      <CustomersPage>
        <p>Error</p>
      </CustomersPage>
    );

  const tableData = getCustomersData(data);

  return (
    <LoadingSpinner isLoading={loading}>
      <CustomersPage>
        <CustomerList data={tableData} />
      </CustomersPage>
    </LoadingSpinner>
  );
};

export default CustomersPageContainer;
