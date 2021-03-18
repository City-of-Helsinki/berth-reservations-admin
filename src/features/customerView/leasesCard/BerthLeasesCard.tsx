import React from 'react';
import { useTranslation } from 'react-i18next';

import { BerthLease } from '../types';
import LeasesCard from './LeasesCard';
import BerthContractDetailsContainer from '../../contractDetails/BerthContractDetailsContainer';

export interface BerthLeasesCardProps {
  cancelLease: (id: string, type: 'berth' | 'winterStorage') => void;
  customerName: string;
  leases: BerthLease[];
}

const BerthLeasesCard = ({ customerName, cancelLease, leases }: BerthLeasesCardProps) => {
  const { t } = useTranslation();
  const leaseDetails = leases.map((lease) => {
    return {
      address: [lease.harbor?.name || '', lease.pierIdentifier || '', lease.berthNum].filter(Boolean).join(' '),
      depth: lease.depth,
      endDate: lease.endDate,
      id: lease.id,
      length: lease.length,
      link: lease.harbor ? `/harbors/${lease.harbor.id}` : undefined,
      mooringType: lease.mooringType,
      renderContractDetails: (leaseId: string) => <BerthContractDetailsContainer leaseId={leaseId} />,
      startDate: lease.startDate,
      width: lease.width,
      status: lease.status,
    };
  });

  return (
    <LeasesCard
      addressLabel={t('customerView.leases.berth.addressLabel')}
      customerName={customerName}
      cancelLease={(id) => cancelLease(id, 'berth')}
      infoSectionTitle={t('customerView.leases.berth.infoSectionTitle')}
      leaseDetails={leaseDetails}
      title={t('customerView.leases.berth.title')}
    />
  );
};

export default BerthLeasesCard;
