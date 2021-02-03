import React from 'react';
import classNames from 'classnames';

import styles from './loadingCell.module.scss';

export interface LoadingCellProps {
  className?: string;
}

const LoadingCell = ({ className }: LoadingCellProps) => {
  return <div className={classNames(styles.loadingCell, className)} />;
};

export default LoadingCell;
