import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/react-hooks';
import { Notification } from 'hds-react';

import CustomerView from './CustomerView';
import { INDIVIDUAL_CUSTOMER_QUERY } from './queries';
import { INDIVIDUAL_CUSTOMER } from './__generated__/INDIVIDUAL_CUSTOMER';
import Card from '../../common/card/Card';
import CardHeader from '../../common/cardHeader/CardHeader';
import CardBody from '../../common/cardBody/CardBody';
import BillsCard from './billsCard/BillsCard';
import CustomerProfileCard from '../../common/customerProfileCard/CustomerProfileCard';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import ApplicationsCard from './applicationsCard/ApplicationsCard';
import BoatsCard from './boatsCard/BoatsCard';
import LeasesCard from './leasesCard/LeasesCard';
import { getLeases, getBoats, getApplications, getCustomerProfile } from './utils';

const CustomerViewContainer = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery<INDIVIDUAL_CUSTOMER>(INDIVIDUAL_CUSTOMER_QUERY, { variables: { id } });

  if (loading) return <LoadingSpinner isLoading={loading} />;
  if (!data?.profile)
    return (
      <Notification labelText={t('common.notification.noData.label')}>
        {t('common.notification.noData.description')}
      </Notification>
    );
  if (error)
    return (
      <Notification labelText={t('common.notification.error.label')} type="error">
        {t('common.notification.error.description')}
      </Notification>
    );

  const customerProfile = getCustomerProfile(data.profile);
  const leases = getLeases(data.profile);
  const boats = getBoats(data.profile);
  const applications = getApplications(data.profile, data.boatTypes || []);

  return (
    <CustomerView>
      <CustomerProfileCard {...customerProfile} />
      <Card>
        <CardHeader title="VIIMEAIKAINEN TOIMINTA" />
        <CardBody>Placeholder</CardBody>
      </Card>
      <ApplicationsCard applications={applications} />
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
      <Card>
        <CardHeader title="LASKUHISTORIA" />
        <CardBody>Placeholder</CardBody>
      </Card>
      <LeasesCard handleShowContract={(id) => alert(`Here's your contract for ${id}`)} leases={leases} />
      <Card>
        <CardHeader title="TALVISÄILYTYSPAIKAT" />
        <CardBody>Placeholder</CardBody>
      </Card>
      <BoatsCard boats={boats} />
    </CustomerView>
  );
};

export default CustomerViewContainer;