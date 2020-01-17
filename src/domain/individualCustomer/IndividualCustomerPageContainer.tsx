import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import IndividualCustomerPage from './individualCustomerPage/IndividualCustomerPage';
import { INDIVIDUAL_CUSTOMER_QUERY } from './queries';
import { INDIVIDUAL_CUSTOMER } from './__generated__/INDIVIDUAL_CUSTOMER';
import Card from '../../common/card/Card';
import BillsCard from './billsCard/BillsCard';
import CustomerInfoCard from './customerInfoCard/CustomerInfoCard';

const IndividualHarborPageContainer: React.SFC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery<INDIVIDUAL_CUSTOMER>(
    INDIVIDUAL_CUSTOMER_QUERY,
    { variables: { id } }
  );

  if (loading)
    return (
      <IndividualCustomerPage>
        <p>Loading...</p>
      </IndividualCustomerPage>
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
        mooringFee={['28%', 79.52]}
        electricityFee={['12%', 34.08]}
        waterFee={['2%', 5.68]}
        wasteFee={['8%', 22.72]}
        gateFee={4}
        lightingFee={10}
        total={440}
        handleShowBill={() => alert("Here's your bill!")}
      />
    </IndividualCustomerPage>
  );
};

export default IndividualHarborPageContainer;
