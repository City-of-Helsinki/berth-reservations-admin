import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { IconTrash } from 'hds-react';

import Card from '../card/Card';
import CardHeader from '../cardHeader/CardHeader';
import CardBody from '../cardBody/CardBody';
import ExternalLink from '../externalLink/ExternalLink';
import Text from '../text/Text';
import Grid from '../grid/Grid';
import Property from '../property/Property';
import styles from './harborCard.module.scss';
import Section from '../section/Section';
import placeholderImage from '../placeholderImage.svg';
import MapLinks from '../mapLinks/MapLinks';
import { IconFence, IconPlug, IconStreetLight, IconWaterTap } from '../icons';
import { formatAddress } from '../utils/format';
import { HarborProperties } from '../../generated/types.d';
import { edgesToArr, maybeArrToArr, propertiesArr } from '../../generated/utils';

export interface HarborCardProps {
  className?: string;
  editHarbor?: () => void;
}

const HarborCard = ({
  className,
  name,
  streetAddress,
  zipCode,
  municipality,
  imageFile,
  maps,
  servicemapId,
  piers,
  editHarbor,
  numberOfFreePlaces,
  numberOfPlaces,
  maxWidth,
}: HarborCardProps & HarborProperties) => {
  const { t } = useTranslation();

  const serviceMapUrl = `${process.env.REACT_APP_SERVICE_MAP_URI}${servicemapId}`;

  const pierProperties = propertiesArr(edgesToArr(piers));

  const wasteCollection = pierProperties.some((properties) => properties.wasteCollection);
  const gate = pierProperties.some((properties) => properties.gate);
  const electricity = pierProperties.some((properties) => properties.electricity);
  const water = pierProperties.some((properties) => properties.water);
  const lighting = pierProperties.some((properties) => properties.lighting);

  return (
    <Card className={classNames(className, styles.card)}>
      <CardHeader title={t('harborCard.title')}>
        {editHarbor && (
          <button onClick={editHarbor}>
            <Text weight="normalWeight">{t('common.edit')}</Text>
          </button>
        )}
      </CardHeader>
      <CardBody>
        <div className={styles.cardBody}>
          <div className={styles.details}>
            <div className={styles.imageWrapper}>
              <img
                alt={t('common.imageAltText')}
                src={imageFile ? imageFile : placeholderImage}
                className={styles.image}
              />
            </div>
            <div>
              <Section>
                <Text as="h2" size="xxl">
                  {name}
                </Text>
                <Text>{formatAddress(streetAddress, zipCode, municipality)}</Text>
              </Section>
              <Section>
                <ExternalLink href={serviceMapUrl} variant="withArrow">
                  {t('common.terminology.serviceMap')}
                </ExternalLink>
              </Section>
              <MapLinks maps={maybeArrToArr(maps)} />
            </div>
          </div>
          <Grid colsCount={5} className={styles.propsGrid}>
            <div />
            <Property counter={numberOfPlaces} label={t('harborCard.numberOfPlaces')} />
            <Property counter={numberOfFreePlaces} label={t('harborCard.numberOfFreePlaces')} />
            <Property counter={0} label={t('common.terminology.inQueue')} />
            <Property counter={maxWidth} label={t('harborCard.maxWidth')} />

            <Property icon={IconTrash} label={t('common.terminology.wasteCollection')} active={wasteCollection} />
            <Property icon={IconFence} label={t('common.terminology.gate')} active={gate} />
            <Property icon={IconPlug} label={t('common.terminology.electricity')} active={electricity} />
            <Property icon={IconStreetLight} label={t('common.terminology.lighting')} active={lighting} />
            <Property icon={IconWaterTap} label={t('common.terminology.water')} active={water} />
          </Grid>
        </div>
      </CardBody>
    </Card>
  );
};

export default HarborCard;
