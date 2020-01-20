import React from 'react';
import classNames from 'classnames';

import styles from './labelValuePair.module.scss';

interface Props {
  label: string;
  value?: string | null | React.ReactElement;
  labelColor?: 'standard' | 'brand' | 'critical' | 'secondary';
  align?: 'left' | 'center' | 'right';
}

const LabelValuePair = ({
  label,
  value,
  labelColor = 'standard',
  align = 'left',
}: Props) => {
  return (
    <div className={styles.labelValuePair}>
      <span className={classNames(styles.label, styles[labelColor])}>
        {label}:
      </span>
      <span key="value" className={classNames(styles.value, styles[align])}>
        {value}
      </span>
    </div>
  );
};

export default LabelValuePair;
