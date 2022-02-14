import React from 'react';
import { Tag, IconCrossCircle } from 'hds-react';
import { useTranslation } from 'react-i18next';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { ApolloQueryResult } from 'apollo-client';
import { DocumentNode } from 'graphql';
import parse from 'date-fns/parse';
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
  FILTER_HARBOR_LABEL,
  FILTER_HARBOR_LABELVariables as FILTER_HARBOR_LABEL_VAR,
} from '../__generated__/FILTER_HARBOR_LABEL';
import {
  FILTER_WINTER_STORAGE_AREA_LABEL,
  FILTER_WINTER_STORAGE_AREA_LABELVariables as FILTER_WINTER_STORAGE_AREA_LABEL_VAR,
} from '../__generated__/FILTER_WINTER_STORAGE_AREA_LABEL';
import {
  FILTER_WINTER_STORAGE_PLACE_LABEL,
  FILTER_WINTER_STORAGE_PLACE_LABELVariables as FILTER_WINTER_STORAGE_PLACE_LABEL_VAR,
} from '../__generated__/FILTER_WINTER_STORAGE_PLACE_LABEL';
import {
  FILTER_BOAT_TYPE_LABELS_QUERY,
  FILTER_PIER_LABEL_QUERY,
  FILTER_BERTH_LABEL_QUERY,
  FILTER_HARBOR_LABEL_QUERY,
  FILTER_WINTER_STORAGE_AREA_LABEL_QUERY,
  FILTER_WINTER_STORAGE_PLACE_LABEL_QUERY,
} from '../queries';
import { CustomerListTableFilters, FilterEntry, FilterEntryValue, ValueOf } from './types';
import { createInterval } from './utils';
import useListTableFilters, { getFiltersAsEntries, getEntriesAsFilters } from './useListTableFilters';
import styles from './customerListTableFiltersList.module.scss';

const NOT_FOUND_STRING = '-';

export interface Props {
  filters: CustomerListTableFilters;
}

const CustomerListTableFiltersList = ({ filters }: Props) => {
  const { t } = useTranslation();
  const [, setFilters] = useListTableFilters();

  const filtersAsEntries = React.useMemo(() => getFiltersAsEntries(filters), [filters]);

  const boatTypesQuery = useQuery<FILTER_BOAT_TYPE_LABELS>(FILTER_BOAT_TYPE_LABELS_QUERY, {
    skip: arrayFilterIsEmpty(filters.boatTypeIds),
  });
  const pierQuery = useQuery<FILTER_PIER_LABEL, FILTER_PIER_LABEL_VAR>(FILTER_PIER_LABEL_QUERY, {
    skip: !filters.pierId,
    variables: {
      pierId: filters.pierId ?? '',
    },
  });
  const berthQuery = useQuery<FILTER_BERTH_LABEL, FILTER_BERTH_LABEL_VAR>(FILTER_BERTH_LABEL_QUERY, {
    skip: !filters.berthId,
    variables: {
      berthId: filters.berthId ?? '',
    },
  });
  const [getHarbor] = useHarbors();
  const [getWinterStorageArea] = useWinterStorageAreas();
  const winterStoragePlaceQuery = useQuery<FILTER_WINTER_STORAGE_PLACE_LABEL, FILTER_WINTER_STORAGE_PLACE_LABEL_VAR>(
    FILTER_WINTER_STORAGE_PLACE_LABEL_QUERY,
    {
      skip: !filters.winterStoragePlaceId,
      variables: {
        winterStoragePlaceId: filters.winterStoragePlaceId ?? '',
      },
    }
  );

  const resolveWinterStoageAreaId = (_value: FilterEntryValue) => {
    const value = _value as string;
    const result = getWinterStorageArea({ winterStorageAreaId: value });

    return result?.data?.winterStorageArea?.properties?.name;
  };
  const renderValueMap: Record<
    keyof CustomerListTableFilters,
    (value: FilterEntryValue) => string | undefined | null
  > = {
    customerGroups: (value: FilterEntryValue) => t(`common.customerGroups.${value}`),
    boatTypeIds: (value: FilterEntryValue) =>
      boatTypesQuery.data?.boatTypes?.find((boatType) => boatType.id === (value as string))?.name,
    leaseStatuses: (value: FilterEntryValue) => t(`common.leaseStatus.${value.toString().toLocaleLowerCase()}`),
    harborIds: (_value: FilterEntryValue) => {
      const value = _value as string;
      const harborResult = getHarbor({ harborId: value });

      return harborResult?.data?.harbor?.properties?.name;
    },
    pierId: (_: FilterEntryValue) => pierQuery.data?.pier?.properties?.identifier,
    berthId: (_: FilterEntryValue) => berthQuery.data?.berth?.number,
    winterStorageGridAreaIds: resolveWinterStoageAreaId,
    winterStoragePlaceId: (_: FilterEntryValue) => winterStoragePlaceQuery.data?.winterStoragePlace?.number?.toString(),
    winterStorageAreaIds: resolveWinterStoageAreaId,
    dateInterval: (_value: FilterEntryValue) => {
      const value = _value as string;

      try {
        const { start, end } = createInterval(value);
        const startDate = start ? parse(start, 'd.L.yyyy', new Date()) : null;
        const endDate = end ? parse(end, 'd.L.yyyy', new Date()) : null;

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
    moreThanOneBerthOrWinterStorage: (_: FilterEntryValue) => '',
  };

  const removeFilter = (entry: FilterEntry) => {
    const nextFilters = getEntriesAsFilters(
      filtersAsEntries.filter(([key, value]) => !(key === entry[0] && value === entry[1]))
    );

    setFilters(nextFilters);
  };

  const clearFilters = () => {
    setFilters({});
  };

  return (
    <div className={styles.container}>
      <ul className={styles.filterList}>
        {filtersAsEntries.map(([key, value]: FilterEntry) => {
          const entryName = renderValueMap[key](value);
          const entryLabel = `${t(`customerList.filters.${key}`)}${
            entryName?.length === 0 ? '' : `: ${entryName ?? NOT_FOUND_STRING}`
          }`;

          return (
            <li key={`${key}-${value}`}>
              <Tag
                onDelete={() => {
                  removeFilter([key, value]);
                }}
                deleteButtonAriaLabel={t('customerList.deleteButtonAriaLabel', { label: entryLabel })}
              >
                {entryLabel}
              </Tag>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className={styles.resetFiltersButton}
        onClick={() => {
          clearFilters();
        }}
      >
        <IconCrossCircle aria-label={t('customerList.resetAllFiltersAriaLabel')} />
      </button>
    </div>
  );
};

function useHarbors() {
  return useLazyQueryWithPersistence<FILTER_HARBOR_LABEL, FILTER_HARBOR_LABEL_VAR>({
    query: FILTER_HARBOR_LABEL_QUERY,
  });
}

function useWinterStorageAreas() {
  return useLazyQueryWithPersistence<FILTER_WINTER_STORAGE_AREA_LABEL, FILTER_WINTER_STORAGE_AREA_LABEL_VAR>({
    query: FILTER_WINTER_STORAGE_AREA_LABEL_QUERY,
  });
}

type QueryResultMap<T> = Record<string, ApolloQueryResult<T>>;

type Config = {
  query: DocumentNode;
};

// Allows to complete query multiple times without overwriting previous result
// when parameters change.
//
// Don't really like this implementation. Attempted to use lazy queries from
// Apollo, but couldn't make them work with this usecase.
//
// Possible other approach is to ask all data from the graphql endpoint and use
// of it what is needed. I attempted to use an approach that doesn't cause
// unnecessary network traffic.
function useLazyQueryWithPersistence<T, V>({ query }: Config) {
  const apolloClient = useApolloClient();
  const [results, setResult] = React.useState<QueryResultMap<T>>({});

  const createKey = React.useCallback((variables: V) => btoa(JSON.stringify(variables)), []);

  const doQuery = React.useCallback(
    async (variables: V) => {
      const key = createKey(variables);
      const result = results?.[key];

      // If the there's an existing result, don't query.
      // This is not an optimal approach.
      if (result) {
        return;
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      setResult((prev) => ({
        ...prev,
        [key]: {
          loading: true,
        },
      }));

      const nextResult = await apolloClient.query<T, V>({
        query,
        variables,
      });

      setResult((prev) => ({
        ...prev,
        [key]: nextResult,
      }));
    },
    [apolloClient, createKey, query, results]
  );

  const getResult = React.useCallback(
    (variables: V) => {
      const key = createKey(variables);

      doQuery(variables);

      return results[key];
    },
    [createKey, doQuery, results]
  );

  return [getResult];
}

const arrayFilterIsEmpty = (filterValue: ValueOf<CustomerListTableFilters>) =>
  !(Array.isArray(filterValue) && filterValue.length > 0);

export default CustomerListTableFiltersList;
