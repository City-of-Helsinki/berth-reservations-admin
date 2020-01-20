import React from 'react';

import styles from './individualCustomerPage.module.scss';
import Card from '../../../../common/card/Card';
import BillsCard from '../../components/billsCard/BillsCard';
import CustomerInfoCard from '../../components/customerInfoCard/CustomerInfoCard';

interface ProfileProps {
  firstName: string;
  lastName: string;
  primaryPhone?: {
    phone: string;
  } | null;
  primaryEmail?: {
    email: string;
  };
  comment?: string;
  primaryAddress?: {
    address: string;
    postalCode: string;
    city: string;
  } | null;
}

interface DataProps {
  profile: ProfileProps;
}

export interface IndividualHarborPageProps {
  data: DataProps | undefined;
  t: Function;
}

const IndividualHarborPage: React.SFC<IndividualHarborPageProps> = ({
  data,
  t,
}) => {
  if (data === undefined) {
    return <p>error</p>;
  }

  const firstName = data?.profile?.firstName ?? '';
  const lastName = data?.profile?.lastName ?? '';
  const primaryAddress = data?.profile?.primaryAddress;
  const primaryPhone = data?.profile?.primaryPhone;
  const primaryEmail = data?.profile?.primaryEmail;
  const comment = data?.profile?.comment;

  return (
    <div className={styles.individualCustomerPage}>
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
    </div>
  );
};

export default IndividualHarborPage;
