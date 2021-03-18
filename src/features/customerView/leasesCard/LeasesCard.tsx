import React from 'react';
import { useTranslation } from 'react-i18next';

import Card from '../../../common/card/Card';
import Section from '../../../common/section/Section';
import LabelValuePair from '../../../common/labelValuePair/LabelValuePair';
import CardHeader from '../../../common/cardHeader/CardHeader';
import CardBody from '../../../common/cardBody/CardBody';
import InternalLink from '../../../common/internalLink/InternalLink';
import { formatDate, formatDimension } from '../../../common/utils/format';
import { BerthMooringType, LeaseStatus } from '../../../@types/__generated__/globalTypes';
import { getMooringTypeTKey } from '../../../common/utils/translations';
import ButtonWithConfirmation from '../../../common/buttonWithConfirmation/ButtonWithConfirmation';
import { canLeaseBeTerminated } from '../utils';
import StatusLabel from '../../../common/statusLabel/StatusLabel';
import { LEASE_STATUS } from '../../../common/utils/constants';
import styles from './leasesCard.module.scss';

interface LeaseDetail {
  id: string;
  length?: number;
  width?: number;
  depth?: number | null;
  mooringType?: BerthMooringType;
  address: string;
  startDate: string;
  endDate: string;
  link?: string;
  status: LeaseStatus;
  renderContractDetails?(leaseId: string): React.ReactNode;
}

export interface LeasesCardProps {
  addressLabel: string;
  cancelLease: (id: string) => void;
  customerName: string;
  infoSectionTitle: string;
  leaseDetails: LeaseDetail[];
  title: string;
}

const LeasesCard = ({
  addressLabel,
  cancelLease,
  customerName,
  infoSectionTitle,
  leaseDetails,
  title,
}: LeasesCardProps) => {
  const { t, i18n } = useTranslation();

  return (
    <Card>
      <CardHeader title={title} />
      {leaseDetails?.map(
        ({
          id,
          address,
          length,
          width,
          depth,
          mooringType,
          startDate,
          endDate,
          link,
          renderContractDetails,
          status,
        }) => {
          const leaseDate = `${formatDate(startDate, i18n.language)} - ${formatDate(endDate, i18n.language)}`;

          return (
            <CardBody key={id}>
              <StatusLabel
                className={styles.status}
                type={LEASE_STATUS[status].type}
                label={t(LEASE_STATUS[status].label)}
              />
              <Section title={infoSectionTitle}>
                <LabelValuePair
                  label={addressLabel}
                  value={link ? <InternalLink to={link}>{address}</InternalLink> : address}
                />
                {length && (
                  <LabelValuePair
                    label={t('common.terminology.length')}
                    value={formatDimension(length, i18n.language)}
                  />
                )}
                {width && (
                  <LabelValuePair label={t('common.terminology.width')} value={formatDimension(width, i18n.language)} />
                )}
                {depth !== undefined && (
                  <LabelValuePair label={t('common.terminology.depth')} value={formatDimension(depth, i18n.language)} />
                )}
                {mooringType && (
                  <LabelValuePair
                    label={t('common.terminology.mooringType')}
                    value={t(getMooringTypeTKey(mooringType))}
                  />
                )}
                <LabelValuePair label={t('customerView.leases.valid')} value={leaseDate} />
              </Section>
              {renderContractDetails?.(id)}
              {canLeaseBeTerminated(status) && (
                <ButtonWithConfirmation
                  buttonSize="small"
                  buttonVariant="danger"
                  buttonText={t('customerView.leases.cancelLease')}
                  infoText={t('customerView.leases.cancelConfirmation.infoText', {
                    customerName,
                    address,
                  })}
                  modalTitle={t('customerView.leases.cancelLease')}
                  onCancelText={t('common.cancel')}
                  onConfirm={() => cancelLease(id)}
                  onConfirmText={t('customerView.leases.cancelLease')}
                  confirmButtonVariant="danger"
                  warningText={t('customerView.leases.cancelConfirmation.warningText')}
                />
              )}
            </CardBody>
          );
        }
      )}
    </Card>
  );
};

export default LeasesCard;
