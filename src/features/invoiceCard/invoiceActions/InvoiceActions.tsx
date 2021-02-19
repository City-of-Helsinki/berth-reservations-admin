import React from 'react';

import Select from '../../../common/select/Select';
import styles from './invoiceActions.module.scss';

interface Action {
  label: string;
  onClick(): void;
}

export interface InvoiceActionsProps {
  actions: Array<Action>;
  disabled?: boolean;
}

const InvoiceActions = ({ actions, disabled }: InvoiceActionsProps) => {
  const options = actions.map(({ label }, index) => ({ label, value: index }));

  return (
    <Select
      className={styles.invoiceActions}
      disabled={disabled}
      options={options}
      onChange={(args) => actions[args.target.value].onClick()}
    />
  );
};

export default InvoiceActions;
