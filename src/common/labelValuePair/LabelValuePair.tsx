import React from 'react';
import classNames from 'classnames';

import styles from './labelValuePair.module.scss';

interface Props {
  label: string;
  value?: string | null | string[];
  labelColor?: 'standard' | 'brand' | 'critical' | 'secondary';
  align?: 'left' | 'center' | 'right';
}

const LabelValuePair = ({
  label,
  value,
  labelColor = 'standard',
  align = 'left',
}: Props) => {
  let valueArr: React.ReactElement[] = [];

  if (Array.isArray(value)) {
    valueArr = value.map((val, i) => (
      <span key={i} className={classNames(styles.value, styles[align])}>
        {val}
      </span>
    ));
  } else if (typeof value === 'string') {
    valueArr = [
      <span key="value" className={classNames(styles.value, styles[align])}>
        {value}
      </span>,
    ];
  }

  return (
    <div className={styles.labelValuePair}>
      <span className={classNames(styles.label, styles[labelColor])}>
        {label}:
      </span>
      {valueArr}
    </div>
  );
};

export default LabelValuePair;
