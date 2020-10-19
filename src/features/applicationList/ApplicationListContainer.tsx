import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { SortingRule } from 'react-table';

import ApplicationList from './ApplicationList';
import {
  BERTH_APPLICATIONS,
  BERTH_APPLICATIONSVariables as BERTH_APPLICATIONS_VARS,
} from './__generated__/BERTH_APPLICATIONS';
import { ApplicationData, getBerthApplicationData } from './utils';
import { BERTH_APPLICATIONS_QUERY } from './queries';
import { useDeleteBerthApplication } from '../../common/mutations/deleteBerthApplication';
import { usePagination } from '../../common/utils/usePagination';
import { useRecoilBackendSorting } from '../../common/utils/useBackendSorting';
import { orderByGetter } from '../../common/utils/recoil';

const onlySwitchAppsAtom = atom<boolean | undefined>({
  key: 'ApplicationListContainer_onlySwitchAppsAtom',
  default: undefined,
});

const sortByAtom = atom<SortingRule<ApplicationData>[]>({
  key: 'ApplicationListContainer_sortByAtom',
  default: [{ id: 'createdAt', desc: true }],
});

const orderBySelector = selector<string | undefined>({
  key: 'ApplicationListContainer_orderBySelector',
  get: orderByGetter(sortByAtom),
});

const ApplicationListContainer = () => {
  const [onlySwitchApps, setOnlySwitchApps] = useRecoilState<boolean | undefined>(onlySwitchAppsAtom);
  const orderBy = useRecoilValue(orderBySelector);

  const { cursor, pageSize, pageIndex, getPageCount, goToPage } = usePagination();
  const { sortBy, handleSortedColsChange } = useRecoilBackendSorting(sortByAtom, () => goToPage(0));

  const berthApplicationsVars: BERTH_APPLICATIONS_VARS = {
    first: pageSize,
    after: cursor,
    switchApplications: onlySwitchApps,
    orderBy,
  };

  const { loading, data } = useQuery<BERTH_APPLICATIONS, BERTH_APPLICATIONS_VARS>(BERTH_APPLICATIONS_QUERY, {
    variables: berthApplicationsVars,
  });

  const [deleteDraftedApplication, { loading: isDeleting }] = useDeleteBerthApplication();

  const handleDeleteLease = async (id: string) => {
    await deleteDraftedApplication({
      variables: {
        input: {
          id,
        },
      },
    });
  };

  const tableData = getBerthApplicationData(data);

  return (
    <ApplicationList
      data={data}
      getPageCount={getPageCount}
      goToPage={goToPage}
      handleDeleteLease={handleDeleteLease}
      sortBy={sortBy}
      onSortedColsChange={handleSortedColsChange}
      isDeleting={isDeleting}
      loading={loading}
      onlySwitchApps={onlySwitchApps}
      pageIndex={pageIndex}
      setOnlySwitchApps={setOnlySwitchApps}
      tableData={tableData}
    />
  );
};

export default ApplicationListContainer;
