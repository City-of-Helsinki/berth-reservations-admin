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
import { WINTER_STORAGE_APPLICATIONS_IDS_QUERY, WINTER_STORAGE_APPLICATIONS_QUERY } from './queries';
import { ApplicationData } from '../applicationList/utils';
import { orderByGetter } from '../../common/utils/recoil';
import { ApplicationStatus } from '../../@types/__generated__/globalTypes';
import {
  WINTER_STORAGE_APPLICATIONS_IDS,
  WINTER_STORAGE_APPLICATIONS_IDSVariables as WINTER_STORAGE_APPLICATIONS_IDS_VARS,
} from './__generated__/WINTER_STORAGE_APPLICATIONS_IDS';
import { useTableExport } from '../../common/utils/useTableExport';

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

  const winterStorageVars = {
    first: pageSize,
    after: cursor,
    orderBy,
    statuses: statusFilter ? [statusFilter] : undefined,
    nameFilter,
  };

  const { loading, data } = useQuery<WINTER_STORAGE_APPLICATIONS, WINTER_STORAGE_APPLICATIONS_VARS>(
    WINTER_STORAGE_APPLICATIONS_QUERY,
    {
      fetchPolicy: 'no-cache',
      variables: winterStorageVars,
    }
  );
  const { exportTable, isExporting } = useTableExport({
    exportType: 'winter-storage-applications',
    fileType: 'xlsx',
    fetchCallback: async (apolloClient, paginationParams) => {
      const { data } = await apolloClient.query<WINTER_STORAGE_APPLICATIONS_IDS, WINTER_STORAGE_APPLICATIONS_IDS_VARS>({
        query: WINTER_STORAGE_APPLICATIONS_IDS_QUERY,
        variables: { ...winterStorageVars, ...paginationParams },
        fetchPolicy: 'cache-first',
      });
      return data.winterStorageApplications;
    },
  });

  const applications = getWinterStorageApplicationData(data);
  const pageCount = getPageCount(data?.winterStorageApplications?.count);

  const handleApplicationsExport = async () => {
    await exportTable();
  };

  return (
    <WinterStorageApplicationList
      applications={applications}
      loading={loading}
      pageCount={pageCount}
      pageIndex={pageIndex}
      goToPage={goToPage}
      onSortedColsChange={handleSortedColsChange}
      handleApplicationsExport={handleApplicationsExport}
      isExporting={isExporting}
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
