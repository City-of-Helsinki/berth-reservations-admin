import React from 'react';
import { useTranslation } from 'react-i18next';

import CancelLeaseButton from './CancelLeaseButton';
import CardBody from '../../../../common/cardBody/CardBody';
import InternalLink from '../../../../common/internalLink/InternalLink';
import LabelValuePair from '../../../../common/labelValuePair/LabelValuePair';
import Section from '../../../../common/section/Section';
import StatusLabel from '../../../../common/statusLabel/StatusLabel';
import { LEASE_STATUS } from '../../../../common/utils/constants';
import { Lease } from '../types';
import { canLeaseBeTerminated } from '../../utils';
import { formatDate, formatDimension } from '../../../../common/utils/format';
import { getMooringTypeTKey } from '../../../../common/utils/translations';
import styles from './leaseDetails.module.scss';
import SwitchPlace from '../switchPlace/SwitchPlace';

type LeaseDetailsProps = {
  addressLabel: string;
  customerName: string;
  infoSectionTitle: string;
  lease: Lease;
  cancelLease(id: string): void;
};

const LeaseDetails = ({ addressLabel, customerName, infoSectionTitle, lease, cancelLease }: LeaseDetailsProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const {
    address,
    depth,
    endDate,
    id,
    length,
    link,
    mooringType,
    renderContractDetails,
    startDate,
    status,
    type,
    width,
  } = lease;
  const leaseDate = `${formatDate(startDate, language)} - ${formatDate(endDate, language)}`;

  return (
    <CardBody>
      <StatusLabel className={styles.status} type={LEASE_STATUS[status].type} label={t(LEASE_STATUS[status].label)} />
      <Section title={infoSectionTitle}>
        <LabelValuePair
          label={addressLabel}
          value={link ? <InternalLink to={link}>{address}</InternalLink> : address}
        />
        {length && <LabelValuePair label={t('common.terminology.length')} value={formatDimension(length, language)} />}
        {width && <LabelValuePair label={t('common.terminology.width')} value={formatDimension(width, language)} />}
        {depth !== undefined && (
          <LabelValuePair label={t('common.terminology.depth')} value={formatDimension(depth, language)} />
        )}
        {mooringType && (
          <LabelValuePair label={t('common.terminology.mooringType')} value={t(getMooringTypeTKey(mooringType))} />
        )}
        <LabelValuePair label={t('customerView.leases.valid')} value={leaseDate} />
      </Section>

      {renderContractDetails()}

      <div className={styles.buttons}>
        {canLeaseBeTerminated(status) && (
          <CancelLeaseButton customerName={customerName} cancelLease={cancelLease} id={id} address={address} />
        )}
        <SwitchPlace id={id} type={type} status={status} />
      </div>
    </CardBody>
  );
};

export default LeaseDetails;
