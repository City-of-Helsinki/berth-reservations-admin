import React from 'react';
import classNames from 'classnames';

import Text from '../text/Text';
import styles from './link.module.scss';

export interface Props {
  linkColor?:
    | 'default'
    | 'error'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary';
  underline?: 'none' | 'hover' | 'always';
  component?: string;
  className?: string;
  variant?: string;
  href: string;
  onBlur?: Function;
  onFocus?: Function;
  children: React.ReactNode;
  [x: string]: React.Props;
}
const Link: React.SFC<Props> = ({
  linkColor = 'default',
  underline,
  as: Element = 'a',
  variant,
  className,
  onFocus,
  onBlur,
  href,
  children,
  ...otherProps
}) => {
  return (
    <Element
      linkColor={linkColor}
      underline={underline}
      variant={variant}
      onFocus={onFocus}
      onBlur={onBlur}
      href={href}
      className={classNames(styles.button, className)}
    >
      <Text {...otherProps}>{children}</Text>
    </Element>
  );
};

export default Link;
