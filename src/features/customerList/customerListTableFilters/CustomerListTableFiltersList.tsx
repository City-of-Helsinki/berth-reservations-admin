import React from 'react';
import { Tag, IconCrossCircle } from 'hds-react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/react-hooks';
import format from 'date-fns/format';

import { FILTER_BOAT_TYPE_LABELS } from '../__generated__/FILTER_BOAT_TYPE_LABELS';
import {
  FILTER_PIER_LABEL,
  FILTER_PIER_LABELVariables as FILTER_PIER_LABEL_VAR,
} from '../__generated__/FILTER_PIER_LABEL';
import {
  FILTER_BERTH_LABEL,
  FILTER_BERTH_LABELVariables as FILTER_BERTH_LABEL_VAR,
} from '../__generated__/FILTER_BERTH_LABEL';
import {
  FILTER_WINTER_STORAGE_PLACE_LABEL,
  FILTER_WINTER_STORAGE_PLACE_LABELVariables as FILTER_WINTER_STORAGE_PLACE_LABEL_VAR,
} from '../__generated__/FILTER_WINTER_STORAGE_PLACE_LABEL';
import {
  FILTER_BOAT_TYPE_LABELS_QUERY,
  FILTER_PIER_LABEL_QUERY,
  FILTER_BERTH_LABEL_QUERY,
  FILTER_WINTER_STORAGE_PLACE_LABEL_QUERY,
} from '../queries';
import { CustomerListTableFilters, FilterEntry, FilterEntryValue, ValueOf } from './types';
import { createInterval, createDate } from './utils';
import useListTableFilters, { getFiltersAsEntries, getEntriesAsFilters } from './useListTableFilters';
import CustomerListTableFiltersListHarborLabel from './labels/CustomerListTableFiltersListHarborLabel';
import CustomerListTableFiltersListWinterStorageAreaLabel from './labels/CustomerListTableFiltersListWinterStorageAreaLabel';
import styles from './customerListTableFiltersList.module.scss';
import { NOT_FOUND_STRING } from './constants';

export interface Props {
  filters: CustomerListTableFilters;
}

const CustomerListTableFiltersList = ({ filters }: Props) => {
  const { t } = useTranslation();
  const [, setFilters] = useListTableFilters();

  const filtersAsEntries = React.useMemo(() => getFiltersAsEntries(filters), [filters]);

  const boatTypesQuery = useQuery<FILTER_BOAT_TYPE_LABELS>(FILTER_BOAT_TYPE_LABELS_QUERY, {
    fetchPolicy: 'cache-first',
    skip: arrayFilterIsEmpty(filters.boatTypeIds),
  });
  const pierQuery = useQuery<FILTER_PIER_LABEL, FILTER_PIER_LABEL_VAR>(FILTER_PIER_LABEL_QUERY, {
    fetchPolicy: 'cache-first',
    skip: !filters.pierId,
    variables: {
      pierId: filters.pierId ?? '',
    },
  });
  const berthQuery = useQuery<FILTER_BERTH_LABEL, FILTER_BERTH_LABEL_VAR>(FILTER_BERTH_LABEL_QUERY, {
    fetchPolicy: 'cache-first',
    skip: !filters.berthId,
    variables: {
      berthId: filters.berthId ?? '',
    },
  });
  const winterStoragePlaceQuery = useQuery<FILTER_WINTER_STORAGE_PLACE_LABEL, FILTER_WINTER_STORAGE_PLACE_LABEL_VAR>(
    FILTER_WINTER_STORAGE_PLACE_LABEL_QUERY,
    {
      fetchPolicy: 'cache-first',
      skip: !filters.winterStoragePlaceId,
      variables: {
        winterStoragePlaceId: filters.winterStoragePlaceId ?? '',
      },
    }
  );

  const resolveWinterStorageAreaId = (value: FilterEntryValue) => (
    <CustomerListTableFiltersListWinterStorageAreaLabel id={value as string} />
  );
  const renderValueMap: Record<
    keyof CustomerListTableFilters,
    (value: FilterEntryValue) => string | undefined | null | JSX.Element
  > = {
    customerGroups: (value: FilterEntryValue) => t(`common.customerGroups.${value}`),
    boatTypeIds: (value: FilterEntryValue) =>
      boatTypesQuery.data?.boatTypes?.find((boatType) => boatType.id === (value as string))?.name,
    leaseStatuses: (value: FilterEntryValue) => t(`common.leaseStatus.${value.toString().toLocaleLowerCase()}`),
    harborIds: (value: FilterEntryValue) => <CustomerListTableFiltersListHarborLabel id={value as string} />,
    pierId: (_: FilterEntryValue) => pierQuery.data?.pier?.properties?.identifier,
    berthId: (_: FilterEntryValue) => berthQuery.data?.berth?.number,
    winterStorageGridAreaIds: resolveWinterStorageAreaId,
    winterStoragePlaceId: (_: FilterEntryValue) => winterStoragePlaceQuery.data?.winterStoragePlace?.number?.toString(),
    winterStorageAreaIds: resolveWinterStorageAreaId,
    dateInterval: (value: FilterEntryValue) => {
      try {
        const { start, end } = createInterval(value as string);
        const startDate = start ? createDate(start) : null;
        const endDate = end ? createDate(end) : null;

        if (startDate && !endDate) {
          return `${format(startDate, 'yyyy')}-`;
        }

        if (!startDate && endDate) {
          return `-${format(endDate, 'yyyy')}`;
        }

        if (startDate && endDate) {
          return `${format(startDate, 'yyyy')} - ${format(endDate, 'yyyy')}`;
        }

        return;
      } catch (e) {
        return;
      }
    },
    nonHelsinkiCitizen: (_: FilterEntryValue) => '',
    moreThanOneBerthOrWinterStorage: (_: FilterEntryValue) => '',
  };

  const removeFilter = ([removeKey, removeValue]: FilterEntry) => {
    // Some filters depend on each other. If they are reset, their dependent
    // filters should be reset as well.
    const resetMap: ResetConfig<CustomerListTableFilters> = {
      harborIds: ['pierId', 'berthId'],
      winterStorageGridAreaIds: ['winterStoragePlaceId'],
      pierId: ['berthId'],
    };
    const otherFieldsToReset = resetMap[removeKey] ?? [];
    const nextEntries = filtersAsEntries.filter(([key, value]) => {
      if (otherFieldsToReset.includes(key)) {
        return false;
      }

      return !(removeKey === key && removeValue === value);
    });

    setFilters(getEntriesAsFilters(nextEntries));
  };

  const clearFilters = (_: React.MouseEvent<HTMLButtonElement>) => {
    setFilters({});
  };

  return (
    <div className={styles.container}>
      <ul className={styles.filterList}>
        {filtersAsEntries.map(([key, value]: FilterEntry) => {
          const entryName = renderValueMap[key](value);
          const entryLabel =
            typeof entryName === 'object' ? (
              <>
                {t(`customerList.filters.${key}`)}: {entryName}
              </>
            ) : (
              <>
                {t(`customerList.filters.${key}`)}
                {entryName?.length === 0 ? '' : `: ${entryName ?? NOT_FOUND_STRING}`}
              </>
            );

          return (
            <li key={`${key}-${value}`}>
              <Tag
                onDelete={() => {
                  removeFilter([key, value]);
                }}
                // This label is incomplete, but because all values are not
                // primitives, we can't provide a string representation for all
                // values. Because this is an admin UI where a11y requirements
                // are more relaxed, we can use a labeling that isn't as
                // descriptive as it would ideally be.
                deleteButtonAriaLabel={t('customerList.message.deleteButtonAriaLabel')}
              >
                {entryLabel}
              </Tag>
            </li>
          );
        })}
      </ul>
      <button type="button" className={styles.resetFiltersButton} onClick={clearFilters}>
        <IconCrossCircle aria-label={t('customerList.resetAllFiltersAriaLabel')} />
      </button>
    </div>
  );
};

const arrayFilterIsEmpty = (filterValue: ValueOf<CustomerListTableFilters>) =>
  !(Array.isArray(filterValue) && filterValue.length > 0);

type ResetConfig<T> = {
  [K in keyof T]?: (keyof T)[];
};

export default CustomerListTableFiltersList;
