import React from 'react';
import classNames from 'classnames';

import styles from './box.module.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Box = ({ children, className }: Props) => (
  <div className={classNames(styles.box, className)}>{children}</div>
);

export default Box;
