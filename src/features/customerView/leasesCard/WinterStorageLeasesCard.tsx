import React from 'react';
import { useTranslation } from 'react-i18next';

import WinterStorageContractDetailsContainer from '../../contractDetails/WinterStorageContractDetailsContainer';
import { Lease } from './types';
import { WinterStorageLease } from '../types';
import Card from '../../../common/card/Card';
import CardHeader from '../../../common/cardHeader/CardHeader';
import LeaseDetails from './leaseDetails/LeaseDetails';

export interface WinterStorageLeasesCardProps {
  cancelLease: (id: string, type: 'berth' | 'winterStorage') => void;
  customerName: string;
  leases: WinterStorageLease[];
}

const WinterStorageLeasesCard = ({ customerName, cancelLease, leases }: WinterStorageLeasesCardProps) => {
  const { t } = useTranslation();
  const mapLeaseDetails = (lease: WinterStorageLease): Lease => {
    return {
      address: lease.winterStorageArea?.name || '',
      endDate: lease.endDate,
      id: lease.id,
      link: lease?.winterStorageArea?.id ? `/winter-storage-areas/${lease?.winterStorageArea?.id}` : undefined,
      startDate: lease.startDate,
      status: lease.status,
      renderContractDetails: () => <WinterStorageContractDetailsContainer leaseId={lease.id} />,
    };
  };

  return (
    <Card>
      <CardHeader title={t('customerView.leases.winterStorage.title')} />
      {leases.map((lease) => (
        <LeaseDetails
          key={lease.id}
          addressLabel={t('customerView.leases.winterStorage.addressLabel')}
          cancelLease={(id) => cancelLease(id, 'winterStorage')}
          customerName={customerName}
          infoSectionTitle={t('customerView.leases.winterStorage.infoSectionTitle')}
          lease={mapLeaseDetails(lease)}
        />
      ))}
    </Card>
  );
};

export default WinterStorageLeasesCard;
