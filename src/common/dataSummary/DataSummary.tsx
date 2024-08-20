import React from 'react';
import classNames from 'classnames';
import styles from './dataSummary.module.scss';

interface LabelValuePair {
  label: string;
  value: string | number | null | undefined;
}

export interface DataSummaryProps {
  className?: string;
  labelValuePairs: LabelValuePair[];
}

const DataSummary = ({ className, labelValuePairs }: DataSummaryProps) => {
  const cells = labelValuePairs.map(({ label, value }, i) => (
    <div key={i} className={styles.cell}>
      {label}: {value ?? '-'}
    </div>
  ));

  return <div className={classNames(styles.dataSummary, className)}>{cells}</div>;
};

export default DataSummary;
