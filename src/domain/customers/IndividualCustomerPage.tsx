import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';

import { INDIVIDUAL_CUSTOMER_QUERY } from './customerQueries';
import { INDIVIDUAL_CUSTOMER } from './__generated__/INDIVIDUAL_CUSTOMER';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import IndividualCustomerPage from './components/individualCustomerPage/IndividualCustomerPage';

const IndividualHarborPageContainer: React.SFC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery<INDIVIDUAL_CUSTOMER>(
    INDIVIDUAL_CUSTOMER_QUERY,
    { variables: { id } }
  );
  const { t } = useTranslation();

  if (error) return <p>Error</p>;

  return (
    <LoadingSpinner isLoading={loading}>
      <IndividualCustomerPage data={data} t={t} />
    </LoadingSpinner>
  );
};

export default IndividualHarborPageContainer;
