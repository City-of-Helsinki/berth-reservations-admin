import React from 'react';
import classNames from 'classnames';

import { ReactComponent as HelsinkiLogoSVG } from '../../assets/icons/helsinki-logo.svg';
import styles from './helsinkiLogo.module.scss';

export interface HelsinkiLogoProps {
  size?: 'small' | 'standard' | 'large';
  color?: 'standard' | 'brand' | 'critical' | 'secondary' | 'info' | 'white';
}

const HelsinkiLogo: React.FC<HelsinkiLogoProps> = ({ size = 'standard', color = 'standard' }) => {
  return <HelsinkiLogoSVG className={classNames(styles.helsinkiLogo, styles[size], styles[color])} />;
};

export default HelsinkiLogo;
