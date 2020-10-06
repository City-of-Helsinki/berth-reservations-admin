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
import { ApplicationStatus } from '../../@types/__generated__/globalTypes';

export interface InvoiceCardProps {
  buttonsRight?: React.ReactNode;
  className?: string;
  editAdditionalServices: () => void;
  sendButtonLabel?: string;
  sendInvoice: () => void;
  order: Order | null;
  placeType: string;
  placeName: React.ReactNode;
  placeDetails?: React.ReactNode;
  placeProperties: PlaceProperty[];
  title: string;
  applicationStatus: ApplicationStatus;
}

const InvoiceCard = ({
  buttonsRight,
  className,
  editAdditionalServices,
  sendButtonLabel,
  sendInvoice,
  order,
  placeDetails,
  placeName,
  placeProperties,
  placeType,
  title,
  applicationStatus,
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

  const getSendButton = () => {
    if (applicationStatus !== ApplicationStatus.OFFER_GENERATED && applicationStatus !== ApplicationStatus.OFFER_SENT) {
      return null;
    }
    return (
      <Button
        theme="coat"
        onClick={sendInvoice}
        disabled={order === null || applicationStatus !== ApplicationStatus.OFFER_GENERATED}
      >
        {applicationStatus === ApplicationStatus.OFFER_GENERATED
          ? sendButtonLabel ?? t('invoiceCard.sendInvoice.title')
          : t('invoiceCard.invoiceSent')}
      </Button>
    );
  };

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
          <div>{getSendButton()}</div>
          <div>{buttonsRight}</div>
        </div>
      </CardBody>
    </Card>
  );
};

export default InvoiceCard;
