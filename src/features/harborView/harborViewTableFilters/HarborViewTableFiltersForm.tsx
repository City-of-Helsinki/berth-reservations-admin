import { Button, Checkbox } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { HarborViewTableFiltersType } from './types';
import styles from './harborViewTableFilters.module.scss';

interface Props {
  filters: HarborViewTableFiltersType;
  onFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit(e: React.FormEvent<HTMLFormElement>): void;
  onResetAll(): void;
}

const HarborViewTableFiltersForm = ({ filters, onFieldChange, onSubmit, onResetAll }: Props) => {
  const { t } = useTranslation();

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Checkbox
        id="showInactiveBerths"
        name="showInactiveBerths"
        label={t('harborView.filters.showInactiveBerths')}
        checked={filters.showInactiveBerths === true}
        value={filters.showInactiveBerths?.toString()}
        onChange={(e) => {
          const event = { ...e };
          onFieldChange(event);
        }}
      />
      <div className={styles.actionRow}>
        <div className={styles.controlsContainer} />
        <div className={styles.buttonContainer}>
          <Button theme="coat" variant="secondary" onClick={onResetAll}>
            {t('customerList.message.resetFilters')}
          </Button>
          <Button theme="coat" type="submit">
            {t('customerList.message.useFilters')}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default HarborViewTableFiltersForm;
