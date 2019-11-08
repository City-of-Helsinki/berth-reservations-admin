import React from 'react';
import classNames from 'classnames';

import styles from './button.module.scss';

export interface Props {
  color?: 'standard' | 'brand' | 'critical' | 'secondary' | 'info';
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'standard' | 'large';
  icon?: JSX.Element;
}

const Button: React.SFC<Props> = ({
  children,
  color = 'standard',
  variant = 'contained',
  size = 'standard',
  icon,
}) => {
  return (
    <button
      type="button"
      className={classNames(
        styles.button,
        styles[color],
        size && styles[size],
        variant && styles[variant]
      )}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
