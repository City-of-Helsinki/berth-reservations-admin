import React from 'react';
import { useTranslation } from 'react-i18next';
import { PureQueryOptions } from 'apollo-client';

import styles from './customerView.module.scss';
import PageTitle from '../../common/pageTitle/PageTitle';
import PageContent from '../../common/pageContent/PageContent';
import CustomerProfileCard, { CustomerProfileCardProps } from '../../common/customerProfileCard/CustomerProfileCard';
import ApplicationsCard from './applicationsCard/ApplicationsCard';
import BoatsCard from './boatsCard/BoatsCard';
import { Application, Invoice, Boat, Lease } from './types';
import BerthLeasesCard from './leasesCard/BerthLeasesCard';
import WinterStorageLeasesCard from './leasesCard/WinterStorageLeasesCard';
import InvoiceCard from './invoiceCard/InvoiceCard';
import { isBerthLease, isWinterStorageLease } from './utils';
import ActionHistoryCard from '../../common/actionHistoryCard/ActionHistoryCard';
import BerthOfferCard, { BerthOfferCardProps } from '../applicationView/berthOfferCard/BerthOfferCard';

export interface CustomerViewProps {
  applications: Application[];
  boats: Boat[];
  customerProfile: CustomerProfileCardProps;
  handleDeleteOffer: (id: string) => void;
  handleEditCustomer: () => void;
  handleNoPlacesAvailable: (id: string) => void;
  isDeletingOffer: boolean;
  invoices: Invoice[];
  leases: Lease[];
  offers: Array<BerthOfferCardProps['leaseDetails'] | null>;
  onClickCreateBoat: () => void;
  refetchQueries: PureQueryOptions[] | string[];
  setBoatToEdit: (boat: Boat | null) => void;
  cancelLease(id: string, type: 'berth' | 'winterStorage'): void;
  createLease(): void;
}

const CustomerView = ({
  applications,
  boats,
  cancelLease,
  createLease,
  customerProfile,
  handleDeleteOffer,
  handleEditCustomer,
  handleNoPlacesAvailable,
  isDeletingOffer,
  invoices,
  leases,
  offers,
  onClickCreateBoat,
  refetchQueries,
  setBoatToEdit,
}: CustomerViewProps) => {
  const { t } = useTranslation();
  const customerName = `${customerProfile.firstName} ${customerProfile.lastName}`;
  const berthLeases = leases.filter(isBerthLease);

  return (
    <PageContent>
      <PageTitle title={t('customerView.title')} />
      <div className={styles.grid}>
        <CustomerProfileCard {...customerProfile} handleEditCustomer={handleEditCustomer} />

        <ActionHistoryCard />

        <ApplicationsCard applications={applications} handleNoPlacesAvailable={handleNoPlacesAvailable} />

        {offers
          .filter((offer): offer is BerthOfferCardProps['leaseDetails'] => !!offer)
          .map((offer) => (
            <BerthOfferCard
              key={offer.id}
              className={styles.fullWidth}
              leaseDetails={offer}
              handleDeleteLease={handleDeleteOffer}
              isDeletingLease={isDeletingOffer}
              refetchQueries={refetchQueries}
            />
          ))}

        <InvoiceCard
          berthLeases={berthLeases}
          className={styles.fullWidth}
          customer={{
            id: customerProfile.customerId as string,
            email: customerProfile.primaryEmail,
          }}
          invoiceData={invoices}
          refetchQueries={refetchQueries}
        />

        <BerthLeasesCard
          customerName={customerName}
          cancelLease={cancelLease}
          createLease={createLease}
          leases={berthLeases}
        />
        <WinterStorageLeasesCard
          customerName={customerName}
          cancelLease={cancelLease}
          leases={leases.filter(isWinterStorageLease)}
        />

        <BoatsCard boats={boats} onEdit={(boat) => setBoatToEdit(boat)} onCreate={onClickCreateBoat} />
      </div>
    </PageContent>
  );
};

export default CustomerView;
