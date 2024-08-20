import React from 'react';
import { useTranslation } from 'react-i18next';
import Text from '../../common/text/Text';
import Grid from '../../common/grid/Grid';
import InternalLink from '../../common/internalLink/InternalLink';
import Section from '../../common/section/Section';
import { formatDate } from '../../common/utils/format';
import styles from './berthDetails.module.scss';
import MaintenanceServicesPlaceholder from '../../common/maintenancePlaceholders/MaintenanceServicesPlaceholder';
import { LeaseStatus } from '../../@types/__generated__/globalTypes';

export interface Lease {
  customer: {
    id: string;
    firstName: string;
    lastName: string;
  };
  startDate: string;
  endDate: string;
  status: LeaseStatus;
  isActive: boolean;
}

export interface BerthDetailsProps {
  leases: Lease[];
  comment: string;
  onEdit?(): void;
}

const BerthDetails = ({ leases, comment, onEdit }: BerthDetailsProps) => {
  const { t, i18n } = useTranslation();

  const expiredLeasesElements = leases
    .filter((lease) => !lease.isActive && lease.status === LeaseStatus.PAID)
    .map(({ startDate, endDate, customer }, i) => {
      return (
        <div key={i}>
          <Text>{`${formatDate(startDate, i18n.language)} - ${formatDate(endDate, i18n.language)}`}</Text>{' '}
          <InternalLink to={`/customers/${customer.id}`}>
            {customer.firstName !== '' && customer.lastName !== ''
              ? `${customer.firstName} ${customer.lastName}`
              : t('common.emptyName')}
          </InternalLink>
        </div>
      );
    });

  return (
    <div className={styles.berthDetails}>
      <Grid colsCount={3} className={styles.grid}>
        <Section title={t('offer.previousLeases').toUpperCase()}>
          {expiredLeasesElements.length ? expiredLeasesElements : '-'}
        </Section>
        <Section title={t('common.terminology.comments').toUpperCase()} className={styles.comment}>
          <Text>{comment || '-'}</Text>
        </Section>
        <MaintenanceServicesPlaceholder onClick={onEdit} buttonText={t('common.edit')} />
      </Grid>
    </div>
  );
};

export default BerthDetails;
