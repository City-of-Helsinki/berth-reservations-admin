import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './labelValuePair.module.scss';

interface Props {
  label: string;
  value?: string | null;
}

const LabelValuePair = ({ label, value = '-' }: Props) => (
  <div>
    <FormattedMessage id={label}>
      {(lbl: string) => <span className={styles.label}>{lbl}</span>}
    </FormattedMessage>
    <span className={styles.label}>:</span>
    <span className={styles.labelValue}>{value}</span>
  </div>
);

export default LabelValuePair;
