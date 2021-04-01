import React from 'react';
import { useTranslation } from 'react-i18next';

import BerthContractDetailsContainer from '../../contractDetails/BerthContractDetailsContainer';
import { BerthLease } from '../types';
import { Lease } from './types';
import Card from '../../../common/card/Card';
import CardHeader from '../../../common/cardHeader/CardHeader';
import LeaseDetails from './leaseDetails/LeaseDetails';
import Text from '../../../common/text/Text';
import CardBody from '../../../common/cardBody/CardBody';
import styles from './berthLeasesCard.module.scss';

export interface BerthLeasesCardProps {
  cancelLease: (id: string, type: 'berth' | 'winterStorage') => void;
  customerName: string;
  leases: BerthLease[];
  createLease: () => void;
}

const BerthLeasesCard = ({ customerName, cancelLease, createLease, leases }: BerthLeasesCardProps) => {
  const { t } = useTranslation();
  const mapLeaseDetails = (lease: BerthLease): Lease => {
    return {
      address: [lease.harbor?.name || '', lease.pierIdentifier || '', lease.berthNum].filter(Boolean).join(' '),
      depth: lease.depth,
      endDate: lease.endDate,
      id: lease.id,
      length: lease.length,
      link: lease.harbor ? `/harbors/${lease.harbor.id}` : undefined,
      mooringType: lease.mooringType,
      startDate: lease.startDate,
      status: lease.status,
      type: 'berth',
      width: lease.width,
      renderContractDetails: () => <BerthContractDetailsContainer leaseId={lease.id} />,
    };
  };

  return (
    <Card>
      <CardHeader title={t('customerView.leases.berth.title')} />
      {leases.map((lease) => (
        <LeaseDetails
          key={lease.id}
          addressLabel={t('customerView.leases.berth.addressLabel')}
          cancelLease={(id) => cancelLease(id, 'berth')}
          customerName={customerName}
          infoSectionTitle={t('customerView.leases.berth.infoSectionTitle')}
          lease={mapLeaseDetails(lease)}
        />
      ))}
      <CardBody className={styles.createLease}>
        <button onClick={() => createLease()}>
          <Text color="brand">{t('common.addNew')}</Text>
        </button>
      </CardBody>
    </Card>
  );
};

export default BerthLeasesCard;
