import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../button/Button';
import Text from '../text/Text';
import Select from '../select/Select';
import styles from './listActions.module.scss';

type ListActionItem<T> = {
  id: string;
  label: string;
  buttonText?: string;
  onClick?(selectedRows: T[]): void;
  renderComponent?(selectedRows: T[], resetSelectedRows: () => void): React.ReactNode;
};

interface ListActionsProps<T> {
  selectedRows: T[];
  listActions: ListActionItem<T>[];
  resetSelectedRows(): void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ListActions = <T extends any>({ selectedRows, resetSelectedRows, listActions }: ListActionsProps<T>) => {
  const { t } = useTranslation();
  const [selectedAction, setSelectedAction] = useState<ListActionItem<T>>();
  const hasSelectedRows = !!selectedRows.length;

  const options = [
    { label: t('buttonWithSelectedRows.actions'), value: '' },
    ...listActions.map((action) => {
      return { label: action.label, value: action.id };
    }),
  ];

  return (
    <div className={styles.container}>
      <Select
        onChange={(e) => setSelectedAction(listActions.find((action) => action.id === e.target.value))}
        value={selectedAction ? selectedAction.id : ''}
        options={options}
        className={styles.select}
      />
      {selectedAction &&
        selectedAction.renderComponent &&
        selectedAction.renderComponent(selectedRows, resetSelectedRows)}
      {selectedAction && selectedAction.onClick && (
        <div className={styles.buttonContainer}>
          <Button
            onClick={() => selectedAction.onClick?.(selectedRows)}
            variant="secondary"
            disabled={!hasSelectedRows}
          >
            {!hasSelectedRows ? t('buttonWithSelectedRows.noSelection') : selectedAction.buttonText}
          </Button>
          {hasSelectedRows && (
            <>
              <Text color="gray">{t('buttonWithSelectedRows.selectedRows', { count: selectedRows.length })}</Text>
              <button onClick={resetSelectedRows}>
                <Text color="brand">{t('buttonWithSelectedRows.clearSelectedRows')}</Text>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ListActions;
