import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classNames from 'classnames';

import styles from './internalLink.module.scss';

type Props = {
  color?: 'standard' | 'critical' | 'brand';
  underlined?: boolean;
  icon?: JSX.Element;
} & LinkProps;

const InternalLink: React.SFC<Props> = ({
  color = 'brand',
  icon,
  children,
  underlined,
  ...props
}) => {
  return (
    <Link
      {...props}
      className={classNames(styles.internalLink, styles[color], {
        [styles.underlined]: underlined,
      })}
    >
      {children}
    </Link>
  );
};

export default InternalLink;
