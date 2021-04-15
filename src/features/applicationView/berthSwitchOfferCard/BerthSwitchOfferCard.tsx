import React from 'react';
import { useTranslation } from 'react-i18next';
import { PureQueryOptions } from 'apollo-client';
import classNames from 'classnames';
import { IconTrash } from 'hds-react';

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

export interface BerthSwitchOfferCardProps {
  className?: string;
  refetchQueries: PureQueryOptions[] | string[];
  switchOffer: BerthSwitchOfferDetails;
}

// TODO Send berth switch offers

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
    lighting,
    pierIdentifier,
    wasteCollection,
    water,
  },
}: BerthSwitchOfferCardProps) => {
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
        <CardHeader title={t('common.terminology.switchOffer').toUpperCase()} />
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
            <Button>{t('offer.invoicing.send')}</Button>
          </div>
        </CardBody>
      </Card>

      {/*{order && (*/}
      {/*  <>*/}
      {/*    /!*Send switch offer*!/*/}
      {/*  </>*/}
      {/*)}*/}
    </>
  );
};

export default BerthSwitchOfferCard;
