import React from 'react';
import { useTranslation } from 'react-i18next';
import Text from '../../common/text/Text';
import { formatDate } from '../../common/utils/format';
import InternalLink from '../../common/internalLink/InternalLink';
import styles from './winterStoragePlaceDetails.module.scss';
import Grid from '../../common/grid/Grid';
import Section from '../../common/section/Section';
import MaintenanceServicesPlaceholder from '../../common/maintenancePlaceholders/MaintenanceServicesPlaceholder';

export interface Lease {
  customer: {
    id: string;
    firstName: string;
    lastName: string;
  };
  startDate: string;
  endDate: string;
  status: string;
  isActive: boolean;
}

export interface WinterStoragePlaceDetailsProps {
  leases: Lease[];
  comment?: string;
  onEdit?(): void;
}

const WinterStoragePlaceDetails = ({ leases, comment, onEdit }: WinterStoragePlaceDetailsProps) => {
  const { t, i18n } = useTranslation();

  const expiredLeasesElements = leases
    .filter((lease) => !lease.isActive)
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
    <div className={styles.placeDetails}>
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

export default WinterStoragePlaceDetails;
