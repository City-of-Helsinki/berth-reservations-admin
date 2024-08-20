import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconTrash } from 'hds-react';
import Card from '../../../common/card/Card';
import CardHeader from '../../../common/cardHeader/CardHeader';
import StatusLabel from '../../../common/statusLabel/StatusLabel';
import { OFFER_STATUS } from '../../../common/utils/constants';
import CardBody from '../../../common/cardBody/CardBody';
import Grid from '../../../common/grid/Grid';
import Section from '../../../common/section/Section';
import styles from './berthSwitchOfferCard.module.scss';
import PlaceDetails from '../berthOfferCard/PlaceDetails';
import Button from '../../../common/button/Button';
import { OfferStatus } from '../../../@types/__generated__/globalTypes';
import ButtonWithConfirmation from '../../../common/buttonWithConfirmation/ButtonWithConfirmation';
import { BerthSwitchOfferDetails, PlaceProperty } from './types';
import Property from '../../../common/property/Property';
import { IconFence, IconPlug, IconStreetLight, IconWaterTap } from '../../../common/icons';

export interface BerthSwitchOfferCardProps {
  className?: string;
  customerName: string;
  isSubmitting: boolean;
  switchOffer: BerthSwitchOfferDetails;
  sendBerthSwitchOffer(): void;
  cancelBerthSwitchOffer(): void;
}

const BerthSwitchOfferCard = ({
  className,
  customerName,
  switchOffer: {
    berthComment,
    berthDepth,
    berthIsAccessible,
    berthLength,
    berthMooringType,
    berthNum,
    berthWidth,
    electricity,
    gate,
    harborName,
    id,
    lighting,
    offerNumber,
    pierIdentifier,
    status,
    wasteCollection,
    water,
  },
  isSubmitting,
  sendBerthSwitchOffer,
  cancelBerthSwitchOffer,
}: BerthSwitchOfferCardProps) => {
  const { t } = useTranslation();

  const mapPlaceProperties = (placeProperties: PlaceProperty[]) =>
    placeProperties.map(
      ({ prop, key, icon }) =>
        prop !== null && (
          <Property
            className={styles.property}
            key={key}
            active={prop}
            icon={icon}
            label={t(`common.terminology.${key}`)}
          />
        )
    );
  const properties: PlaceProperty[] = [
    { prop: wasteCollection, key: 'wasteCollection', icon: IconTrash },
    { prop: electricity, key: 'electricity', icon: IconPlug },
    { prop: lighting, key: 'lighting', icon: IconStreetLight },
    { prop: gate, key: 'gate', icon: IconFence },
    { prop: water, key: 'water', icon: IconWaterTap },
  ];
  const address = [harborName, pierIdentifier, berthNum].filter(Boolean).join(' ');

  return (
    <Card className={className}>
      <CardHeader title={t('common.terminology.switchOffer').toUpperCase()}>
        <StatusLabel type={OFFER_STATUS[status].type} label={t(OFFER_STATUS[status].label)} />
      </CardHeader>
      <CardBody>
        <Grid colsCount={3}>
          <Section title={t('common.terminology.berth').toUpperCase()}>
            <Section>{address}</Section>
            <Section>
              <div className={styles.properties}>{mapPlaceProperties(properties)}</div>
            </Section>
          </Section>
          <Section title={t('invoiceCard.placeDetails.title').toUpperCase()}>
            <PlaceDetails
              berthMooringType={berthMooringType}
              berthWidth={berthWidth}
              berthLength={berthLength}
              berthDepth={berthDepth}
              berthIsAccessible={berthIsAccessible}
              berthComment={berthComment}
            />
          </Section>
          <Section title={`${t('common.terminology.id').toUpperCase()}: ${offerNumber}`}>&nbsp;</Section>
        </Grid>

        <hr />

        <div className={styles.buttonRow}>
          <Button disabled={isSubmitting || status === OfferStatus.CANCELLED} onClick={() => sendBerthSwitchOffer()}>
            {t('applicationView.berthSwitchOffer.sendOffer')}
          </Button>
          <ButtonWithConfirmation
            disabled={isSubmitting || !(status === OfferStatus.OFFERED || status === OfferStatus.EXPIRED)}
            onConfirm={() => cancelBerthSwitchOffer()}
            buttonText={t('applicationView.berthSwitchOffer.cancelOffer')}
            infoText={t('applicationView.berthSwitchOffer.cancelConfirmation.infoText', {
              customerName: customerName,
              address: address,
            })}
            warningText={t('applicationView.berthSwitchOffer.cancelConfirmation.warningText')}
            modalTitle={t('applicationView.berthSwitchOffer.cancelOffer').toUpperCase()}
            onCancelText={t('common.close')}
            onConfirmText={t('applicationView.berthSwitchOffer.cancelOffer')}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default BerthSwitchOfferCard;
