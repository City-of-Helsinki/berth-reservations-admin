import React, { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './labelValuePair.module.scss';

export interface LabelValuePairProps {
  label?: string;
  value: ReactNode;
  labelColor?: 'standard' | 'brand' | 'critical' | 'secondary';
  valueColor?: 'standard' | 'brand' | 'critical' | 'secondary';
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const LabelValuePair = ({
  label,
  value,
  valueColor,
  labelColor = 'standard',
  align = 'left',
  className,
}: LabelValuePairProps) => (
  <div className={classNames(styles.labelValuePair, className)}>
    <span className={classNames(styles.label, styles[labelColor])}>{label && `${label}:`}</span>
    <span className={classNames(styles.value, styles[align], valueColor && styles[valueColor])}>{value || '-'}</span>
  </div>
);

export default LabelValuePair;
