import React from 'react';
import { useTranslation } from 'react-i18next';

import { WinterStorageAreaData } from '../types';
import Grid from '../../../common/grid/Grid';
import styles from '../../harborList/harborDetails/harborDetails.module.scss';
import Section from '../../../common/section/Section';
import Text from '../../../common/text/Text';
import { formatAddress, formatDimension } from '../../../common/utils/format';
import placeholderImage from '../../../common/placeholderImage.svg';
import ContactInformationDetails from '../../../common/contactInformationCard/ContactInformationDetails';

export type WinterStorageAreaDetailsProps = Pick<
  WinterStorageAreaData,
  'imageFile' | 'maxWidth' | 'municipality' | 'streetAddress' | 'zipCode'
>;

const WinterStorageAreaDetails = ({
  maxWidth,
  municipality,
  streetAddress,
  zipCode,
  imageFile,
}: WinterStorageAreaDetailsProps) => {
  const { t, i18n } = useTranslation();
  const imageSrc = imageFile ? imageFile : placeholderImage;

  return (
    <Grid colsCount={4}>
      <div className={styles.column}>
        <img className={styles.image} src={imageSrc} alt={t('common.imageAltText')} />
      </div>
      <div className={styles.column}>
        <Section className={styles.address} title={t('common.address').toUpperCase()}>
          {formatAddress(streetAddress, zipCode, municipality)}
        </Section>
      </div>
      <div className={styles.column}>
        <Section title={t('common.terminology.maxWidth').toUpperCase()}>
          <Text>{formatDimension(maxWidth, i18n.language)}</Text>
        </Section>
      </div>
      <div className={styles.column}>
        <ContactInformationDetails />
      </div>
    </Grid>
  );
};

export default WinterStorageAreaDetails;
