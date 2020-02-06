import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classNames from 'classnames';

import styles from './internalLink.module.scss';

/*
    <Link
      {...props}
      className={classNames(styles.internalLink, styles[color], {
        [styles.underlined]: underlined,
      })}
    >
      {children}
    </Link>
*/

export type Props = {
  underlined?: boolean;
  color?: 'standard' | 'brand' | 'critical' | 'secondary' | 'info';
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'standard' | 'large';
  icon?: JSX.Element;
  className?: string;
} & React.DOMAttributes<HTMLButtonElement> &
  LinkProps;

const Button: React.SFC<Props> = ({
  children,
  color = 'standard',
  variant = 'text',
  size = 'standard',
  underlined,
  icon,
  onClick,
  className,
  ...props
}) => {
  return (
    <Link
      {...props}
      className={classNames(styles.internalLink, styles[color], {
        [styles.underlined]: underlined,
      })}
    >
      <button
        type="button"
        onClick={onClick}
        className={classNames(
          styles.button,
          styles[color],
          styles.hasIcon,
          className
        )}
      >
        <span>
          {icon}
          {children}
        </span>
      </button>
    </Link>
  );
};

export default Button;
