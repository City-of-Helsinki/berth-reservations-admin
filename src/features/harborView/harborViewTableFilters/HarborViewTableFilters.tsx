import React from 'react';
import { IconAngleDown } from 'hds-react';
import { useTranslation } from 'react-i18next';

import styles from './harborViewTableFilters.module.scss';
import HarborViewTableFiltersForm from './HarborViewTableFiltersForm';
import { HarborViewTableFiltersType } from './types';

interface Props {
  filterByActiveBerths: boolean | null;
  setFilterByActiveBerths(isActive: boolean | null): void;
}

const controlledFiltersEmptyValues: HarborViewTableFiltersType = {};

const createInitialState = ({ ...delegated }: HarborViewTableFiltersType): HarborViewTableFiltersType => {
  return {
    ...controlledFiltersEmptyValues,
    ...delegated,
  };
};

const HarborViewTableFilters = ({ filterByActiveBerths, setFilterByActiveBerths }: Props) => {
  const { t } = useTranslation();
  const [filters, setFilters] = React.useState(() => createInitialState({ showInactiveBerths: !filterByActiveBerths }));
  const [areFiltersExpanded, setFiltersExpanded] = React.useState(!filterByActiveBerths);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: nextValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // When the inactive berths are wanted to be shown,
    // the active berths filter should not be used.
    // The default is that only the active berths are shown,
    // so the show inactive berth cehckbo should be unchecked.
    setFilterByActiveBerths(filters.showInactiveBerths === true ? null : true);
  };

  const handleReset = () => {
    setFilters(controlledFiltersEmptyValues);
  };

  return (
    <div className={styles.tableFilters}>
      <div className={styles.titleRow}>
        <button
          className={styles.expandButton}
          onClick={() => {
            setFiltersExpanded((prev) => !prev);
          }}
        >
          {t('harborView.message.filter')} <IconAngleDown aria-hidden="true" />
        </button>
      </div>
      {areFiltersExpanded && (
        <HarborViewTableFiltersForm
          filters={filters}
          onFieldChange={handleChange}
          onSubmit={handleSubmit}
          onResetAll={handleReset}
        />
      )}
    </div>
  );
};

export default HarborViewTableFilters;
