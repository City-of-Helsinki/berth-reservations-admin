import React from 'react';
import { useTranslation } from 'react-i18next';
import { PureQueryOptions } from 'apollo-client';

import styles from './customerView.module.scss';
import PageTitle from '../../common/pageTitle/PageTitle';
import PageContent from '../../common/pageContent/PageContent';
import CustomerProfileCard, { CustomerProfileCardProps } from '../../common/customerProfileCard/CustomerProfileCard';
import ApplicationsCard from './applicationsCard/ApplicationsCard';
// import OpenInvoicesCard from './openInvoicesCard/OpenInvoicesCard';
// import InvoicingHistoryCard from './invoicingHistoryCard/InvoicingHistoryCard';
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
  onClickCreateAdditionalInvoice: () => void;
  onClickCreateBoat: () => void;
  openInvoices: Invoice[];
  refetchQueries: PureQueryOptions[] | string[];
  setBoatToEdit: (boat: Boat | null) => void;
  setOpenInvoice: (invoice: Invoice | undefined) => void;
  setOpenResendInvoice: (invoice: Invoice | undefined) => void;
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
  onClickCreateAdditionalInvoice,
  onClickCreateBoat,
  openInvoices,
  refetchQueries,
  setBoatToEdit,
  setOpenInvoice,
  setOpenResendInvoice,
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

        {/* TODO: 
          remove these two cards once ensured that all their functionalities are implemented 
          in the new invoice card above (once https://helsinkisolutionoffice.atlassian.net/browse/VEN-1172 
          is tested and approved)
        */}

        {/* <OpenInvoicesCard
          invoices={openInvoices}
          handleShowInvoice={setOpenInvoice}
          handleResendInvoice={setOpenResendInvoice}
        />

        <InvoicingHistoryCard
          invoices={invoices}
          onClick={(invoice) => setOpenInvoice(invoice)}
          onClickCreateAdditionalInvoice={onClickCreateAdditionalInvoice}
        /> */}

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
