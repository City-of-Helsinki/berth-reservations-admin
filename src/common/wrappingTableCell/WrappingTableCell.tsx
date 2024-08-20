import React from 'react';
import styles from './wrappingTableCell.module.scss';

export interface WrappingTableCellProps {
  children: React.ReactNode;
}

const WrappingTableCell = ({ children }: WrappingTableCellProps) => (
  <p className={styles.wrappingTableCell}>{children}</p>
);

export default WrappingTableCell;
