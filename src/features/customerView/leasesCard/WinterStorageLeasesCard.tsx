import React from 'react';
import { useTranslation } from 'react-i18next';

import { WinterStorageLease } from '../types';
import LeasesCard from './LeasesCard';
import WinterStorageContractDetailsContainer from '../../contractDetails/WinterStorageContractDetailsContainer';

export interface WinterStorageLeasesCardProps {
  cancelLease: (id: string, type: 'berth' | 'winterStorage') => void;
  customerName: string;
  leases: WinterStorageLease[];
}

const WinterStorageLeasesCard = ({ customerName, cancelLease, leases }: WinterStorageLeasesCardProps) => {
  const { t } = useTranslation();
  const leaseDetails = leases.map((lease) => {
    return {
      address: lease.winterStorageArea?.name || '',
      endDate: lease.endDate,
      id: lease.id,
      link: lease?.winterStorageArea?.id ? `/winter-storage-areas/${lease?.winterStorageArea?.id}` : undefined,
      renderContractDetails: (leaseId: string) => <WinterStorageContractDetailsContainer leaseId={leaseId} />,
      startDate: lease.startDate,
    };
  });

  return (
    <LeasesCard
      addressLabel={t('customerView.leases.winterStorage.addressLabel')}
      customerName={customerName}
      cancelLease={(id) => cancelLease(id, 'winterStorage')}
      infoSectionTitle={t('customerView.leases.winterStorage.infoSectionTitle')}
      leaseDetails={leaseDetails}
      title={t('customerView.leases.winterStorage.title')}
    />
  );
};

export default WinterStorageLeasesCard;
