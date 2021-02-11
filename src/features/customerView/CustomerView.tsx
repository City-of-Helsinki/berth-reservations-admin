import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './customerView.module.scss';
import PageTitle from '../../common/pageTitle/PageTitle';
import PageContent from '../../common/pageContent/PageContent';
import CustomerProfileCard, { CustomerProfileCardProps } from '../../common/customerProfileCard/CustomerProfileCard';
import ApplicationsCard from './applicationsCard/ApplicationsCard';
import OpenInvoicesCard from './openInvoicesCard/OpenInvoicesCard';
import InvoicingHistoryCard from './invoicingHistoryCard/InvoicingHistoryCard';
import BoatsCard from './boatsCard/BoatsCard';
import { Application, Invoice, Boat, Lease } from './types';
import BerthLeasesCard from './leasesCard/BerthLeasesCard';
import WinterStorageLeasesCard from './leasesCard/WinterStorageLeasesCard';
import { isBerthLease, isWinterStorageLease } from './utils';
import ActionHistoryCard from '../../common/actionHistoryCard/ActionHistoryCard';

export interface CustomerViewProps {
  applications: Application[];
  boats: Boat[];
  customerProfile: CustomerProfileCardProps;
  handleEditCustomer: () => void;
  handleNoPlacesAvailable: (id: string) => void;
  invoices: Invoice[];
  leases: Lease[];
  onClickCreateBoat: () => void;
  onClickCreateAdditionalInvoice: () => void;
  openInvoices: Invoice[];
  setBoatToEdit: (boat: Boat | null) => void;
  setOpenInvoice: (invoice: Invoice | undefined) => void;
  setOpenResendInvoice: (invoice: Invoice | undefined) => void;
}

const CustomerView = ({
  applications,
  boats,
  customerProfile,
  handleEditCustomer,
  handleNoPlacesAvailable,
  invoices,
  leases,
  onClickCreateBoat,
  onClickCreateAdditionalInvoice,
  openInvoices,
  setBoatToEdit,
  setOpenInvoice,
  setOpenResendInvoice,
}: CustomerViewProps) => {
  const { t } = useTranslation();
  return (
    <PageContent>
      <PageTitle title={t('customerView.title')} />
      <div className={styles.grid}>
        <CustomerProfileCard {...customerProfile} handleEditCustomer={handleEditCustomer} />

        <ActionHistoryCard />

        <ApplicationsCard applications={applications} handleNoPlacesAvailable={handleNoPlacesAvailable} />

        <OpenInvoicesCard
          invoices={openInvoices}
          handleShowInvoice={setOpenInvoice}
          handleResendInvoice={setOpenResendInvoice}
        />

        <InvoicingHistoryCard
          invoices={invoices}
          onClick={(invoice) => setOpenInvoice(invoice)}
          onClickCreateAdditionalInvoice={onClickCreateAdditionalInvoice}
        />

        <BerthLeasesCard leases={leases.filter(isBerthLease)} />
        <WinterStorageLeasesCard leases={leases.filter(isWinterStorageLease)} />

        <BoatsCard boats={boats} onEdit={(boat) => setBoatToEdit(boat)} onCreate={onClickCreateBoat} />
      </div>
    </PageContent>
  );
};

export default CustomerView;
