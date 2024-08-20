import React from 'react';
import { IconAngleDown } from 'hds-react';
import { useTranslation } from 'react-i18next';
import useListTableFilters from './useListTableFilters';
import CustomerListTableFiltersFormContainer from './CustomerListTableFiltersFormContainer';
import CustomerListTableFiltersList from './CustomerListTableFiltersList';
import styles from './customerListTableFilters.module.scss';

enum Content {
  FILTERS,
  FILTER_LIST,
  EMPTY,
}

const CustomerListTableFilters = () => {
  const { t } = useTranslation();
  const [areFiltersExpanded, setFiltersExpanded] = React.useState<boolean>(false);
  const [listTableFilters] = useListTableFilters();

  const someFilterIsActive = Object.keys(listTableFilters).length > 0;
  const variant = getVariant(areFiltersExpanded, someFilterIsActive);

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
      {variant === Content.FILTERS && (
        <CustomerListTableFiltersFormContainer onFormClose={() => setFiltersExpanded(false)} />
      )}
      {variant === Content.FILTER_LIST && <CustomerListTableFiltersList filters={listTableFilters} />}
    </div>
  );
};

function getVariant(areFiltersExpanded: boolean, someFilterIsActive: boolean) {
  if (areFiltersExpanded) {
    return Content.FILTERS;
  }

  if (!areFiltersExpanded && someFilterIsActive) {
    return Content.FILTER_LIST;
  }

  return Content.EMPTY;
}

export default CustomerListTableFilters;
