import React from 'react';
import classNames from 'classnames';
import { StatusLabel, StatusLabelProps } from 'hds-react';

import styles from './chip.module.scss';

export interface ChipProps {
  type: StatusLabelProps['type'] | 'warning';
  label: string;
  className?: string;
}

const Chip = ({ type, label, className }: ChipProps) => {
  const statusLabelType = type === 'warning' ? 'alert' : type;

  return (
    <StatusLabel
      className={classNames({ [styles.warning]: type === 'warning' }, 'foo', className)}
      type={statusLabelType}
    >
      {label}
    </StatusLabel>
  );
};

export default Chip;
