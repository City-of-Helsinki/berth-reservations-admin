import React, { FunctionComponent } from 'react';

import styles from './editModal.module.scss';

export interface FormTypeFieldProps {
  label: string;
  value: string;
}

const FormTypeTitle: FunctionComponent<FormTypeFieldProps> = ({
  label,
  value,
}) => (
  <div className={styles.row}>
    <div className={styles.formTitle}>
      <div className={styles.formTitleLabel}>{label}</div>
      <div className={styles.formTitleValue}>{value}</div>
    </div>
  </div>
);

export default FormTypeTitle;