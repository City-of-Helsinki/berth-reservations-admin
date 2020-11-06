import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { SortingRule } from 'react-table';

import WinterStorageApplicationList from './WinterStorageApplicationList';
import { getWinterStorageApplicationData } from './utils';
import { usePagination } from '../../common/utils/usePagination';
import { useRecoilBackendSorting } from '../../common/utils/useBackendSorting';
import {
  WINTER_STORAGE_APPLICATIONS,
  WINTER_STORAGE_APPLICATIONSVariables as WINTER_STORAGE_APPLICATIONS_VARS,
} from './__generated__/WINTER_STORAGE_APPLICATIONS';
import { WINTER_STORAGE_APPLICATIONS_QUERY } from './queries';
import { ApplicationData } from '../applicationList/utils';
import { orderByGetter } from '../../common/utils/recoil';
import { ApplicationStatus } from '../../@types/__generated__/globalTypes';

const sortByAtom = atom<SortingRule<ApplicationData>[]>({
  key: 'WinterStorageApplicationListContainer_sortByAtom',
  default: [{ id: 'createdAt', desc: false }],
});

const orderBySelector = selector<string | undefined>({
  key: 'WinterStorageApplicationListContainer_orderBySelector',
  get: orderByGetter(sortByAtom),
});

const statusFilterAtom = atom<ApplicationStatus | undefined>({
  key: 'WinterStorageApplicationListContainer_statusAtom',
  default: undefined,
});

const nameFilterAtom = atom<string | undefined>({
  key: 'WinterStorageApplicationListContainer_nameFilterAtom',
  default: undefined,
});

const WinterStorageApplicationListContainer = () => {
  const { cursor, pageSize, pageIndex, getPageCount, goToPage } = usePagination();
  const { sortBy, handleSortedColsChange } = useRecoilBackendSorting(sortByAtom, () => goToPage(0));
  const orderBy = useRecoilValue(orderBySelector);

  const [statusFilter, setStatusFilter] = useRecoilState(statusFilterAtom);
  const [nameFilter, setNameFilter] = useRecoilState(nameFilterAtom);

  const { loading, data } = useQuery<WINTER_STORAGE_APPLICATIONS, WINTER_STORAGE_APPLICATIONS_VARS>(
    WINTER_STORAGE_APPLICATIONS_QUERY,
    {
      fetchPolicy: 'no-cache',
      variables: {
        first: pageSize,
        after: cursor,
        orderBy,
        statuses: statusFilter ? [statusFilter] : undefined,
        nameFilter,
      },
    }
  );
  const applications = getWinterStorageApplicationData(data);
  const pageCount = getPageCount(data?.winterStorageApplications?.count);

  return (
    <WinterStorageApplicationList
      applications={applications}
      loading={loading}
      pageCount={pageCount}
      pageIndex={pageIndex}
      goToPage={goToPage}
      onSortedColsChange={handleSortedColsChange}
      sortBy={sortBy}
      count={data?.winterStorageApplications?.count}
      statusFilter={statusFilter}
      onStatusFilterChange={(statusFilter) => {
        setStatusFilter(statusFilter);
        goToPage(0);
      }}
      nameFilter={nameFilter}
      onNameFilterChange={(nameFilter) => {
        setNameFilter(nameFilter);
        goToPage(0);
      }}
    />
  );
};

export default WinterStorageApplicationListContainer;
