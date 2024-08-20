import React, { useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import Button from '../button/Button';
import Text from '../text/Text';
import Select from '../select/Select';
import styles from './listActions.module.scss';

type ListActionItem<T> = {
  id: string | number;
  label: string;
  buttonText?: string;
  buttonDisabled?: boolean;
  onClick?(selectedRows: T[]): void;
  renderComponent?(resetSelection: () => void): React.ReactNode;
};

interface ListActionsProps<T> {
  className?: string;
  selectClassName?: string;
  selectedRows: T[];
  listActions: ListActionItem<T>[];
  otherActions?: JSX.Element;
  resetSelectedRows(): void;
}

const ListActions = <T extends object | string | number | boolean | bigint | symbol>({
  className,
  selectClassName,
  selectedRows,
  otherActions,
  resetSelectedRows,
  listActions,
}: ListActionsProps<T>) => {
  const { t } = useTranslation();
  const [selectedActionId, setSelectedActionId] = useState<string | number>();
  const hasSelectedRows = !!selectedRows.length;

  const options = [
    { label: t('buttonWithSelectedRows.actions'), value: '' },
    ...listActions.map((action) => {
      return { label: action.label, value: action.id };
    }),
  ];

  const selectedAction = listActions.find((action) => action.id === selectedActionId);
  const resetSelection = () => setSelectedActionId(undefined);

  return (
    <div className={classNames(styles.container, className)}>
      <Select
        onChange={(e) => setSelectedActionId(listActions.find((action) => action.id === e.target.value)?.id)}
        value={selectedActionId ?? ''}
        options={options}
        className={classNames(styles.select, selectClassName)}
      />
      {selectedAction?.renderComponent?.(resetSelection)}
      {selectedAction?.onClick && (
        <div className={styles.buttonContainer}>
          <Button
            onClick={() => selectedAction.onClick?.(selectedRows)}
            variant="secondary"
            disabled={selectedAction.buttonDisabled || !hasSelectedRows}
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
      {otherActions}
    </div>
  );
};

export default ListActions;
