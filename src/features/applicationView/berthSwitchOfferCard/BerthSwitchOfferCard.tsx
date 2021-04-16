import React from 'react';
import { useTranslation } from 'react-i18next';
import { PureQueryOptions } from 'apollo-client';
import classNames from 'classnames';
import { IconTrash } from 'hds-react';
import { useMutation } from '@apollo/react-hooks';

import CardHeader from '../../../common/cardHeader/CardHeader';
import Card from '../../../common/card/Card';
import CardBody from '../../../common/cardBody/CardBody';
import Section from '../../../common/section/Section';
import Grid from '../../../common/grid/Grid';
import { BerthSwitchOfferDetails, PlaceProperty } from './types';
import Property from '../../../common/property/Property';
import styles from './berthSwitchOfferCard.module.scss';
import { IconFence, IconPlug, IconStreetLight, IconWaterTap } from '../../../common/icons';
import PlaceDetails from '../berthOfferCard/PlaceDetails';
import Button from '../../../common/button/Button';
import { SEND_BERTH_SWITCH_OFFER_MUTATION } from './mutations';
import {
  SEND_BERTH_SWITCH_OFFER,
  SEND_BERTH_SWITCH_OFFERVariables as SEND_BERTH_SWITCH_OFFER_VARS,
} from './__generated__/SEND_BERTH_SWITCH_OFFER';
import hdsToast from '../../../common/toast/hdsToast';
import StatusLabel from '../../../common/statusLabel/StatusLabel';
import { OFFER_STATUS } from '../../../common/utils/constants';
import { getProfileToken } from '../../../common/utils/auth';

export interface BerthSwitchOfferCardProps {
  className?: string;
  refetchQueries: PureQueryOptions[] | string[];
  switchOffer: BerthSwitchOfferDetails;
}

const BerthSwitchOfferCard = ({
  className,
  refetchQueries,
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
    pierIdentifier,
    status,
    wasteCollection,
    water,
  },
}: BerthSwitchOfferCardProps) => {
  const { t } = useTranslation();

  const [sendBerthSwitchOfferMutation, { loading: isSubmitting }] = useMutation<
    SEND_BERTH_SWITCH_OFFER,
    SEND_BERTH_SWITCH_OFFER_VARS
  >(SEND_BERTH_SWITCH_OFFER_MUTATION, {
    refetchQueries: refetchQueries,
  });
  const sendBerthSwitchOffer = () => {
    sendBerthSwitchOfferMutation({
      variables: {
        input: {
          offers: [id],
          profileToken: getProfileToken(),
        },
      },
    }).then((res) => {
      if (!res.errors) {
        hdsToast({
          type: 'success',
          labelText: 'toast.invoiceSent.label',
          text: 'toast.invoiceSent.description',
          translated: true,
        });
      }
    });
  };

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
  const properties: PlaceProperty[] = [
    { prop: wasteCollection, key: 'wasteCollection', icon: IconTrash },
    { prop: electricity, key: 'electricity', icon: IconPlug },
    { prop: lighting, key: 'lighting', icon: IconStreetLight },
    { prop: gate, key: 'gate', icon: IconFence },
    { prop: water, key: 'water', icon: IconWaterTap },
  ];

  return (
    <>
      <Card className={classNames(className)}>
        <CardHeader title={t('common.terminology.switchOffer').toUpperCase()}>
          <StatusLabel type={OFFER_STATUS[status].type} label={t(OFFER_STATUS[status].label)} />
        </CardHeader>
        <CardBody>
          <Grid colsCount={3}>
            <Section title={t('common.terminology.berth').toUpperCase()}>
              <Section>{[harborName, pierIdentifier, berthNum].filter(Boolean).join(' ')}</Section>
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
          </Grid>
          <hr />
          <div>
            <Button disabled={isSubmitting} onClick={() => sendBerthSwitchOffer()}>
              {t('offer.invoicing.send')}
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default BerthSwitchOfferCard;
