import React from 'react';
import classNames from 'classnames';
import { StatusLabel as HDSStatusLabel, StatusLabelProps as HDSStatusLabelProps } from 'hds-react';

import styles from './statusLabel.module.scss';

export interface StatusLabelProps {
  type: HDSStatusLabelProps['type'] | 'warning';
  label: string;
  className?: string;
}

const StatusLabel = ({ type, label, className }: StatusLabelProps) => {
  const statusLabelType = type === 'warning' ? 'alert' : type;

  return (
    <HDSStatusLabel className={classNames({ [styles.warning]: type === 'warning' }, className)} type={statusLabelType}>
      {label}
    </HDSStatusLabel>
  );
};

export default StatusLabel;
