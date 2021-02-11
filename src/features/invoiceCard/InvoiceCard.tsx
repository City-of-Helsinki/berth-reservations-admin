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
import { ApplicationStatus, LeaseStatus } from '../../@types/__generated__/globalTypes';

export interface InvoiceCardProps {
  applicationStatus: ApplicationStatus;
  buttonsRight?: React.ReactNode;
  className?: string;
  editAdditionalServices: () => void;
  invoicingDisabled?: boolean;
  leaseStatus: LeaseStatus | null;
  order: Order | null;
  placeDetails?: React.ReactNode;
  placeName: React.ReactNode;
  placeProperties: PlaceProperty[];
  placeType: string;
  sendButtonLabel?: string;
  sendInvoice: () => void;
  title: string;
}

const InvoiceCard = ({
  applicationStatus,
  buttonsRight,
  className,
  editAdditionalServices,
  invoicingDisabled,
  leaseStatus,
  order,
  placeDetails,
  placeName,
  placeProperties,
  placeType,
  sendButtonLabel,
  sendInvoice,
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

  const renderSendButton = () => {
    if (
      invoicingDisabled ||
      (applicationStatus !== ApplicationStatus.OFFER_GENERATED && applicationStatus !== ApplicationStatus.OFFER_SENT)
    ) {
      return null;
    }
    return (
      <Button onClick={sendInvoice} disabled={order === null}>
        {applicationStatus === ApplicationStatus.OFFER_GENERATED
          ? sendButtonLabel ?? t('invoiceCard.sendInvoice.title')
          : t('invoiceCard.resendInvoice')}
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
          {order && (
            <OrderSection order={order} leaseStatus={leaseStatus} editAdditionalServices={editAdditionalServices} />
          )}
        </Grid>
        <hr />
        <div className={styles.buttonRow}>
          <div>{renderSendButton()}</div>
          <div>{buttonsRight}</div>
        </div>
      </CardBody>
    </Card>
  );
};

export default InvoiceCard;
