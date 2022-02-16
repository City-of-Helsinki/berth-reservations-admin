import { useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { CustomerGroup, LeaseStatus } from '../../../@types/__generated__/globalTypes';
import { CustomerListTableFilters, ValueOf, FilterEntryValue, FilterEntry } from './types';

export default function useListTableFilters(): [
  CustomerListTableFilters,
  (nextFilters: Partial<CustomerListTableFilters>) => void
] {
  const { search, pathname } = useLocation();
  const history = useHistory();

  const filters = useMemo(() => {
    const urlSearchParams = new URLSearchParams(search);
    const moreThanOneBerthOrWinterStorageSearchValue = urlSearchParams.get('moreThanOneBerthOrWinterStorage');

    return dropEmptyFields({
      customerGroups: urlSearchParams.getAll('customerGroups') as CustomerGroup[],
      boatTypeIds: urlSearchParams.getAll('boatTypeIds'),
      leaseStatuses: urlSearchParams.getAll('leaseStatuses') as LeaseStatus[],
      harborIds: urlSearchParams.getAll('harborIds'),
      pierId: urlSearchParams.get('pierId') ?? undefined,
      berthId: urlSearchParams.get('berthId') ?? undefined,
      winterStorageGridAreaIds: urlSearchParams.getAll('winterStorageGridAreaIds'),
      winterStoragePlaceId: urlSearchParams.get('winterStoragePlaceId') ?? undefined,
      winterStorageAreaIds: urlSearchParams.getAll('winterStorageAreaIds'),
      dateInterval: urlSearchParams.get('dateInterval') ?? undefined,
      moreThanOneBerthOrWinterStorage: moreThanOneBerthOrWinterStorageSearchValue
        ? JSON.parse(moreThanOneBerthOrWinterStorageSearchValue)
        : undefined,
    }) as CustomerListTableFilters;
  }, [search]);

  const setFilters = useCallback(
    (nextFilters: Partial<CustomerListTableFilters>) => {
      const nextFiltersAsEntryList = getFiltersAsEntries(nextFilters).map(([key, value]) => [key, value.toString()]);

      history.replace(`${pathname}?${new URLSearchParams(nextFiltersAsEntryList).toString()}`);
    },
    [history, pathname]
  );

  return [filters, setFilters];
}

// { key: [value1, value2], key2: value3 }
// -> [[key, value1], [key, value2], [key2, value3]]
export function getFiltersAsEntries(filters: Partial<CustomerListTableFilters>) {
  return Object.entries(filters).reduce((acc: FilterEntry[], entry): FilterEntry[] => {
    const [key, value] = entry as [keyof CustomerListTableFilters, ValueOf<CustomerListTableFilters>];

    if (!hasContent(value)) {
      return acc;
    }

    if (Array.isArray(value)) {
      const inlinedValues: FilterEntry[] = value.map((v) => [key, v]);

      return [...acc, ...inlinedValues];
    }

    return [...acc, [key, value]];
  }, []);
}

export function getEntriesAsFilters(entries: FilterEntry[]) {
  return entries.reduce((acc: Partial<CustomerListTableFilters>, [key, value]) => {
    // If there are multiple entries with same key value, retain all values
    if (key in acc) {
      const previousFieldValue = acc[key];

      // When it's an array, extend the array
      if (Array.isArray(previousFieldValue)) {
        return {
          ...acc,
          [key]: [...previousFieldValue, value],
        };
      } else {
        // If it's not an array yet, transform into an array of values
        return {
          ...acc,
          [key]: [previousFieldValue, value],
        };
      }
    }

    return {
      ...acc,
      [key]: value,
    };
  }, {});
}

function dropEmptyFields(filters: CustomerListTableFilters) {
  return (
    Object.entries(filters)
      .filter((entry): entry is FilterEntry => {
        const [, value] = entry;

        return hasContent(value);
      })
      // Return an object
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
  );
}

// Returns true when value is empty (null, undefined, "", [])
const hasContent = (value: ValueOf<CustomerListTableFilters>): value is FilterEntryValue => {
  if (value === undefined || value === null) {
    return false;
  }

  if (Array.isArray(value) || typeof value === 'string') {
    return value?.length > 0;
  }

  if (typeof value === 'boolean' && value === false) {
    return false;
  }

  return true;
};
