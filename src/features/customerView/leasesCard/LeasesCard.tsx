import React from 'react';
import { useTranslation } from 'react-i18next';

import Card from '../../../common/card/Card';
import styles from './leasesCard.module.scss';
import Section from '../../../common/section/Section';
import LabelValuePair from '../../../common/labelValuePair/LabelValuePair';
import CardHeader from '../../../common/cardHeader/CardHeader';
import CardBody from '../../../common/cardBody/CardBody';
import InternalLink from '../../../common/internalLink/InternalLink';
import { formatDate, formatDimension } from '../../../common/utils/format';
import Button from '../../../common/button/Button';
import { BerthMooringType } from '../../../@types/__generated__/globalTypes';
import { getMooringTypeTKey } from '../../../common/utils/translations';

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
}

export interface LeasesCardProps {
  leaseDetails: LeaseDetail[];
  title: string;
  infoSectionTitle: string;
  addressLabel: string;
  handleShowContract(leaseId: string): void;
}

const LeasesCard = ({ leaseDetails, title, infoSectionTitle, addressLabel, handleShowContract }: LeasesCardProps) => {
  const { t, i18n } = useTranslation();

  return (
    <Card>
      <CardHeader title={title} />
      {leaseDetails?.map(({ id, address, length, width, depth, mooringType, startDate, endDate, link }) => {
        const leaseDate = `${formatDate(startDate, i18n.language)} - ${formatDate(endDate, i18n.language)}`;

        return (
          <CardBody key={id}>
            <Button variant="secondary" onClick={() => handleShowContract(id)} className={styles.button}>
              {t('customerView.leases.showContract')}
            </Button>
            <Section title={infoSectionTitle}>
              <LabelValuePair
                label={addressLabel}
                value={link ? <InternalLink to={link}>{address}</InternalLink> : address}
              />
              {length && (
                <LabelValuePair label={t('common.terminology.length')} value={formatDimension(length, i18n.language)} />
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
          </CardBody>
        );
      })}
    </Card>
  );
};

export default LeasesCard;
