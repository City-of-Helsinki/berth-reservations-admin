import React from 'react';
import { useTranslation } from 'react-i18next';

import { WinterStorageLease } from '../types';
import LeasesCard from './LeasesCard';
import WinterStorageContractDetailsContainer from '../../contractDetails/WinterStorageContractDetailsContainer';

export interface WinterStorageLeasesCardProps {
  leases: WinterStorageLease[];
}

const WinterStorageLeasesCard = ({ leases }: WinterStorageLeasesCardProps) => {
  const { t } = useTranslation();
  const leaseDetails = leases.map((lease) => {
    return {
      id: lease.id,
      endDate: lease.endDate,
      startDate: lease.startDate,
      link: lease?.winterStorageArea?.id ? `/winter-storage-areas/${lease?.winterStorageArea?.id}` : undefined,
      address: lease.winterStorageArea?.name || '',
      renderContractDetails: (leaseId: string) => <WinterStorageContractDetailsContainer leaseId={leaseId} />,
    };
  });

  return (
    <LeasesCard
      leaseDetails={leaseDetails}
      title={t('customerView.leases.winterStorage.title')}
      infoSectionTitle={t('customerView.leases.winterStorage.infoSectionTitle')}
      addressLabel={t('customerView.leases.winterStorage.addressLabel')}
    />
  );
};

export default WinterStorageLeasesCard;
