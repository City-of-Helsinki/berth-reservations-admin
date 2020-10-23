import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './customerView.module.scss';
import PageTitle from '../../common/pageTitle/PageTitle';
import PageContent from '../../common/pageContent/PageContent';
import CustomerProfileCard, { CustomerProfileCardProps } from '../../common/customerProfileCard/CustomerProfileCard';
import ApplicationsCard from './applicationsCard/ApplicationsCard';
import BillsCard from './billsCard/BillsCard';
import InvoicingHistoryCard from './invoicingHistoryCard/InvoicingHistoryCard';
import BoatsCard from './boatsCard/BoatsCard';
import { Application, Bill, Boat, Lease } from './types';
import BerthLeasesCard from './leasesCard/BerthLeasesCard';
import WinterStorageLeasesCard from './leasesCard/WinterStorageLeasesCard';
import { isBerthLease, isWinterStorageLease } from './utils';
import ActionHistoryCard from '../../common/actionHistoryCard/ActionHistoryCard';

export interface CustomerViewProps {
  applications: Application[];
  bills: Bill[];
  boats: Boat[];
  customerProfile: CustomerProfileCardProps;
  handleEditCustomer: () => void;
  leases: Lease[];
  onClickCreateBoat: () => void;
  openBills: Bill[];
  setBoatToEdit: (boat: Boat | null) => void;
  setOpenBill: (bill: Bill | undefined) => void;
}

const CustomerView = ({
  applications,
  bills,
  boats,
  customerProfile,
  handleEditCustomer,
  leases,
  onClickCreateBoat,
  openBills,
  setBoatToEdit,
  setOpenBill,
}: CustomerViewProps) => {
  const { t } = useTranslation();
  return (
    <PageContent>
      <PageTitle title={t('customerView.title')} />
      <div className={styles.grid}>
        <CustomerProfileCard {...customerProfile} handleEditCustomer={handleEditCustomer} />

        <ActionHistoryCard />

        <ApplicationsCard applications={applications} />

        <BillsCard bills={openBills} handleShowBill={(bill) => setOpenBill(bill)} />

        <InvoicingHistoryCard bills={bills} onClick={(bill) => setOpenBill(bill)} />

        <BerthLeasesCard
          leases={leases.filter(isBerthLease)}
          handleShowContract={(id) => alert(`Here's your contract for ${id}`)}
        />
        <WinterStorageLeasesCard
          leases={leases.filter(isWinterStorageLease)}
          handleShowContract={(id) => alert(`Here's your contract for ${id}`)}
        />

        <BoatsCard boats={boats} onEdit={(boat) => setBoatToEdit(boat)} onCreate={onClickCreateBoat} />
      </div>
    </PageContent>
  );
};

export default CustomerView;
