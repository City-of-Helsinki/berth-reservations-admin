import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import styles from './customersPage.module.scss';
import { INDIVIDUAL_CUSTOMER_QUERY } from './customerQueries';
import { INDIVIDUAL_CUSTOMER } from './__generated__/INDIVIDUAL_CUSTOMER';
import Card from '../../common/card/Card';
import BillsCard from './components/billsCard/BillsCard';
import CustomerInfoCard from './components/customerInfoCard/CustomerInfoCard';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';

export const IndividualCustomerPage: React.SFC = ({ children }) => {
  return <div className={styles.individualCustomerPage}>{children}</div>;
};

const IndividualHarborPageContainer: React.SFC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery<INDIVIDUAL_CUSTOMER>(
    INDIVIDUAL_CUSTOMER_QUERY,
    { variables: { id } }
  );

  if (error || !data?.profile)
    return (
      <IndividualCustomerPage>
        <p>Error</p>
      </IndividualCustomerPage>
    );

  const {
    firstName,
    lastName,
    primaryAddress,
    primaryPhone,
    primaryEmail,
    comment,
  } = data.profile;

  return (
    <LoadingSpinner isLoading={loading}>
      <IndividualCustomerPage>
        <CustomerInfoCard
          firstName={firstName}
          lastName={lastName}
          primaryAddress={primaryAddress}
          phone={primaryPhone?.phone}
          email={primaryEmail?.email}
          comment={comment}
        />
        <Card title="VIIMEAIKAINEN TOIMINTA">Placeholder</Card>
        <BillsCard
          berthPlace="Pursilahdenranta B 31"
          contractPeriod="14.9.2019 - 10.6.2019"
          dueDate="1.4.2019"
          basicFee={284}
          mooringFee={[79.52, '28%']}
          electricityFee={[34.08, '12%']}
          waterFee={[5.68, '2%']}
          wasteFee={[22.72, '8%']}
          gateFee={4}
          lightingFee={10}
          total={440}
          handleShowBill={() => alert("Here's your bill!")}
        />
      </IndividualCustomerPage>
    </LoadingSpinner>
  );
};

export default IndividualHarborPageContainer;
