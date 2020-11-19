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
  renderComponent?(): React.ReactNode;
};

interface ListActionsProps<T> {
  selectedRows: T[];
  listActions: ListActionItem<T>[];
  resetSelectedRows(): void;
}

const ListActions = <T extends object | string | number | boolean | bigint | symbol>({
  selectedRows,
  resetSelectedRows,
  listActions,
}: ListActionsProps<T>) => {
  const { t } = useTranslation();
  const [selectedActionId, setSelectedActionId] = useState<string>();
  const hasSelectedRows = !!selectedRows.length;

  const options = [
    { label: t('buttonWithSelectedRows.actions'), value: '' },
    ...listActions.map((action) => {
      return { label: action.label, value: action.id };
    }),
  ];

  const selectedAction = listActions.find((action) => action.id === selectedActionId);

  return (
    <div className={styles.container}>
      <Select
        onChange={(e) => setSelectedActionId(listActions.find((action) => action.id === e.target.value)?.id)}
        value={selectedActionId ?? ''}
        options={options}
        className={styles.select}
      />
      {selectedAction?.renderComponent?.()}
      {selectedAction?.onClick && (
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
