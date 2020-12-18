import React from 'react';
import { useTranslation } from 'react-i18next';

import { BerthLease } from '../types';
import LeasesCard from './LeasesCard';
import BerthContractDetailsContainer from '../../contractDetails/BerthContractDetailsContainer';

export interface BerthLeasesCardProps {
  leases: BerthLease[];
  handleShowContract(leaseId: string): void;
}

const BerthLeasesCard = ({ leases, handleShowContract }: BerthLeasesCardProps) => {
  const { t } = useTranslation();
  const leaseDetails = leases.map((lease) => {
    return {
      id: lease.id,
      endDate: lease.endDate,
      startDate: lease.startDate,
      length: lease.length,
      width: lease.width,
      depth: lease.depth,
      mooringType: lease.mooringType,
      link: lease.harbor ? `/harbors/${lease.harbor.id}` : undefined,
      address: [lease.harbor?.name || '', lease.pierIdentifier || '', lease.berthNum].filter(Boolean).join(' '),
      renderContractDetails: (leaseId: string) => <BerthContractDetailsContainer leaseId={leaseId} />,
    };
  });

  return (
    <LeasesCard
      leaseDetails={leaseDetails}
      title={t('customerView.leases.berth.title')}
      infoSectionTitle={t('customerView.leases.berth.infoSectionTitle')}
      addressLabel={t('customerView.leases.berth.addressLabel')}
    />
  );
};

export default BerthLeasesCard;
