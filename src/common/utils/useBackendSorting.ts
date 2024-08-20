import { useEffect, useState, useCallback } from 'react';
import { RecoilState, useRecoilState } from 'recoil';
import { SortingRule } from 'react-table';
import equal from 'fast-deep-equal';
import { usePrevious } from './usePrevious';

export const useRecoilBackendSorting = <T>(atom: RecoilState<SortingRule<T>[]>, onSortByChange?: Function) => {
  const [sortBy, setSortBy] = useRecoilState<SortingRule<T>[]>(atom);

  const handleSortedColsChange = useCallback(
    (sortedColumns: SortingRule<T>[]) => {
      if (!equal(sortBy, sortedColumns)) {
        setSortBy(sortedColumns);
      }
    },
    [setSortBy, sortBy]
  );

  const prevSortBy = usePrevious(sortBy);

  useEffect(() => {
    if (prevSortBy && !equal(prevSortBy, sortBy)) {
      onSortByChange?.();
    }
  }, [prevSortBy, sortBy, onSortByChange]);

  return {
    sortBy,
    handleSortedColsChange,
  };
};

export interface SortedCol {
  id: string;
  desc?: boolean;
}

export const useBackendSorting = (onOrderByChange?: Function) => {
  const [orderBy, setOrderBy] = useState<string>();

  // colId: the id of the column to be sorted in the table
  // orderBy: the value sent to the backend for sorted results
  // colIdOrderByMap: a record for mapping column's Id to orderBy, e.g: { name: 'firstName', data: 'createdAt' }
  const handleSortedColChange = (colIdOrderByMap: Record<string, string>) => (sortedCol: SortedCol | undefined) => {
    const colId = sortedCol?.id && colIdOrderByMap[sortedCol.id];
    const orderBy = colId ? (sortedCol?.desc ? `-${colId}` : colId) : undefined;

    setOrderBy(orderBy);
  };

  const prevOrderBy = usePrevious(orderBy);

  useEffect(() => {
    if (prevOrderBy !== orderBy) {
      onOrderByChange?.();
    }
  }, [prevOrderBy, orderBy, onOrderByChange]);

  return {
    orderBy,
    handleSortedColChange,
  };
};
