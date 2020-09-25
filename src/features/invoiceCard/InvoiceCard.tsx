import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import Card from '../../common/card/Card';
import styles from './invoiceCard.module.scss';
import CardHeader from '../../common/cardHeader/CardHeader';
import CardBody from '../../common/cardBody/CardBody';
import Grid from '../../common/grid/Grid';
import Section from '../../common/section/Section';
import Property from '../../common/property/Property';
import OrderSection from './OrderSection';
import { Order, PlaceProperty } from './types';
import Button from '../../common/button/Button';

export interface InvoiceCardProps {
  buttonsRight?: React.ReactNode;
  className?: string;
  editAdditionalServices: () => void;
  sendInvoice: () => void;
  sendButtonLabel?: string;
  order: Order | null;
  placeType: string;
  placeName: React.ReactNode;
  placeDetails?: React.ReactNode;
  placeProperties: PlaceProperty[];
  title: string;
}

const InvoiceCard = ({
  buttonsRight,
  className,
  editAdditionalServices,
  sendInvoice,
  sendButtonLabel,
  order,
  placeDetails,
  placeName,
  placeProperties,
  placeType,
  title,
}: InvoiceCardProps) => {
  const { t } = useTranslation();

  const isNotNull = (property: boolean | null): property is boolean => property !== null;
  const mapPlaceProperties = (placeProperties: PlaceProperty[]) =>
    placeProperties.map(
      ({ prop, key, icon }) =>
        isNotNull(prop) && (
          <Property
            className={styles.property}
            key={key}
            active={prop}
            icon={icon}
            label={t(`common.terminology.${key}`)}
          />
        )
    );

  return (
    <Card className={classNames(styles.offerCard, className)}>
      <CardHeader title={title} />
      <CardBody>
        <Grid colsCount={3}>
          <Section title={placeType}>
            <Section>{placeName}</Section>
            <Section>
              <div className={styles.properties}>{mapPlaceProperties(placeProperties)}</div>
            </Section>
          </Section>
          {placeDetails ? (
            <Section title={t('invoiceCard.placeDetails.title').toUpperCase()}>{placeDetails}</Section>
          ) : (
            <div /> // Grid spacer
          )}
          {order && <OrderSection order={order} editAdditionalServices={editAdditionalServices} />}
        </Grid>
        <hr />
        <div className={styles.buttonRow}>
          <div>
            <Button theme="coat" onClick={sendInvoice} disabled={order === null}>
              {sendButtonLabel ?? t('invoiceCard.sendInvoice.title')}
            </Button>
          </div>
          <div>{buttonsRight}</div>
        </div>
      </CardBody>
    </Card>
  );
};

export default InvoiceCard;
