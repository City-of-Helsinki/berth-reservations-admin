import React, { useEffect } from 'react';
import { IconAngleDown } from 'hds-react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';

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
  usePersistedSearch();
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

const PERSISTED_SEARCH_SESSION_STORAGE_KEY = 'berth-reservations-admin/persistedCustomerListTableFilters';

function usePersistedSearch() {
  const { search, pathname } = useLocation();
  const history = useHistory();
  const persistedSearch = sessionStorage.getItem(PERSISTED_SEARCH_SESSION_STORAGE_KEY);

  useEffect(() => {
    // Whenever search changes, persist it for the duration of the session
    sessionStorage.setItem(PERSISTED_SEARCH_SESSION_STORAGE_KEY, search);
  }, [search]);

  useEffect(() => {
    // If search is empty and we have a persisted search, apply the persisted
    // search
    if (!search && persistedSearch) {
      history.replace(`${pathname}${persistedSearch}`);
    }
  }, [history, pathname, persistedSearch, search]);
}

export default CustomerListTableFilters;
