import React from 'react';
import classNames from 'classnames';

import Grid from '../../../common/grid/Grid';
import ExternalLink from '../../../common/externalLink/ExternalLink';
import LabelValuePair from '../../../common/labelValuePair/LabelValuePair';
import Text from '../../../common/text/Text';
import { HarborData } from '../utils';
import styles from './harborDetails.module.scss';

type Props = {
  imageFile: HarborData['imageFile'];
  streetAddress: HarborData['streetAddress'];
  zipCode: HarborData['zipCode'];
  municipality: HarborData['municipality'];
  wwwUrl: HarborData['wwwUrl'];
  servicemapId: HarborData['servicemapId'];
};

const HarborDetails: React.SFC<Props> = ({
  imageFile,
  streetAddress,
  zipCode,
  municipality,
  wwwUrl,
  servicemapId,
}) => {
  const address = `${streetAddress} ${zipCode} ${municipality}`;
  const imageSrc = imageFile ? imageFile : '';
  const url = wwwUrl ? wwwUrl : '';
  const serviceMapUrl = `http://palvelukartta.hel.fi/unit/${servicemapId}`;

  return (
    <Grid>
      <div className={classNames(styles.section, styles.harborAddress)}>
        <img className={styles.image} src={imageSrc} alt="map" />
        <div className={classNames(styles.address)}>
          <ExternalLink href="https://www.google.com">{address}</ExternalLink>
          <ExternalLink href={url}>{address}</ExternalLink>
          <ExternalLink href="">Satamakartta (PDF)</ExternalLink>
          <ExternalLink href={serviceMapUrl}>Palvelukartta</ExternalLink>
        </div>
      </div>
      <div className={classNames(styles.section)}>
        <LabelValuePair label="Max leveys" value="2.5m - 4m" />
        <LabelValuePair
          label="Kiinnitys"
          value="Aisa-, Kävelyaisa- ja Peräpoijupaikkoja"
        />
        <LabelValuePair
          label="Päällikkö"
          value="Mikko Mallikas +358 00 000 000"
        />
        <LabelValuePair label="Huoltotiimi" value="Itäinen veneilytiimi" />
      </div>
      <div className={classNames(styles.section)}>
        <Text color="brand" as="h3">
          Viimeaikainen toiminta
        </Text>
        <Text color="brand" size="xs">
          Ei mitään
        </Text>
      </div>
    </Grid>
  );
};

export default HarborDetails;
