import React from 'react';
import { IconAngleDown } from 'hds-react';
import { useTranslation } from 'react-i18next';

import useListTableFilters from './useListTableFilters';
import CustomerListTableFiltersFormContainer from './CustomerListTableFiltersFormContainer';
import CustomerListTableFiltersList from './CustomerListTableFiltersList';
import styles from './customerListTableFilters.module.scss';

const CustomerListTableFilters = () => {
  const { t } = useTranslation();
  const [areFiltersExpanded, setFiltersExpanded] = React.useState<boolean>(false);
  const [listTableFilters] = useListTableFilters();

  const someFilterIsActive = Object.keys(listTableFilters).length > 0;

  return (
    <div className={styles.tableFilters}>
      <div className={styles.titleRow}>
        <button
          className={styles.expandButton}
          onClick={() => {
            setFiltersExpanded((prev) => !prev);
          }}
        >
          {t('customerList.message.filter')} <IconAngleDown aria-hidden="true" />
        </button>
      </div>
      {areFiltersExpanded && <CustomerListTableFiltersFormContainer onFormClose={() => setFiltersExpanded(false)} />}
      {!areFiltersExpanded && someFilterIsActive && <CustomerListTableFiltersList filters={listTableFilters} />}
    </div>
  );
};

export default CustomerListTableFilters;
