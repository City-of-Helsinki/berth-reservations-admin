import React from 'react';
import { useTranslation } from 'react-i18next';

import Card from '../card/Card';
import Grid from '../grid/Grid';
import Section from '../section/Section';
import LabelValuePair from '../labelValuePair/LabelValuePair';
import CardHeader from '../cardHeader/CardHeader';
import CardBody from '../cardBody/CardBody';
import { formatDimension, formatWeight } from '../utils/format';
import { Boat } from './types';
import styles from './boatCard.module.scss';

interface BoatCardProps {
  boat: Boat;
}

const BoatCard = ({ boat }: BoatCardProps) => {
  const { t, i18n } = useTranslation();
  return (
    <Card className={styles.card}>
      <CardHeader title={t('common.terminology.customerBoat').toUpperCase()} />
      <CardBody>
        <Grid colsCount={2}>
          <Section>
            <LabelValuePair label={t('common.terminology.boatType')} value={boat.boatType} />
            <LabelValuePair label={t('common.terminology.registrationNumber')} value={boat.boatRegistrationNumber} />
            <LabelValuePair label={t('common.name')} value={boat.boatName} />
            <LabelValuePair label={t('common.terminology.boatModel')} value={boat.boatModel} />
          </Section>
          <Section>
            <LabelValuePair
              label={t('common.terminology.width')}
              value={formatDimension(boat.boatWidth, i18n.language)}
            />
            <LabelValuePair
              label={t('common.terminology.length')}
              value={formatDimension(boat.boatLength, i18n.language)}
            />
            <LabelValuePair
              label={t('common.terminology.draught')}
              value={formatDimension(boat.boatDraught, i18n.language)}
            />
            <LabelValuePair
              label={t('common.terminology.weight')}
              value={formatWeight(boat.boatWeight, i18n.language)}
            />
          </Section>
        </Grid>
      </CardBody>
    </Card>
  );
};

export default BoatCard;
