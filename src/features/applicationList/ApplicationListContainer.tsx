import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { getOperationName } from 'apollo-link';
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
import { APPROVE_ORDERS_MUTATION } from '../invoiceCard/sendInvoiceForm/mutations';
import {
  APPROVE_ORDERS,
  APPROVE_ORDERSVariables as APPROVE_ORDERS_VARS,
} from '../invoiceCard/sendInvoiceForm/__generated__/APPROVE_ORDERS';
import hdsToast from '../../common/toast/hdsToast';
import { useRecoilBackendSorting } from '../../common/utils/useBackendSorting';
import { orderByGetter } from '../../common/utils/recoil';
import { ApplicationStatus } from '../../@types/__generated__/globalTypes';
import {
  REJECT_BERTH_APPLICATION,
  REJECT_BERTH_APPLICATIONVariables as REJECT_BERTH_APPLICATION_VARS,
} from '../applicationView/__generated__/REJECT_BERTH_APPLICATION';
import { REJECT_BERTH_APPLICATION_MUTATION } from '../applicationView/mutations';

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

const statusFilterAtom = atom<ApplicationStatus | undefined>({
  key: 'ApplicationListContainer_statusAtom',
  default: undefined,
});

const nameFilterAtom = atom<string | undefined>({
  key: 'ApplicationListContainer_nameFilterAtom',
  default: undefined,
});

const ApplicationListContainer = () => {
  const { cursor, pageSize, pageIndex, getPageCount, goToPage } = usePagination();
  const [onlySwitchApps, setOnlySwitchApps] = useRecoilState(onlySwitchAppsAtom);
  const [nameFilter, setNameFilter] = useRecoilState(nameFilterAtom);
  const orderBy = useRecoilValue(orderBySelector);
  const { sortBy, handleSortedColsChange } = useRecoilBackendSorting(sortByAtom, () => goToPage(0));
  const [statusFilter, setStatusFilter] = useRecoilState(statusFilterAtom);

  const berthApplicationsVars: BERTH_APPLICATIONS_VARS = {
    first: pageSize,
    after: cursor,
    switchApplications: onlySwitchApps,
    orderBy,
    statuses: statusFilter ? [statusFilter] : undefined,
    nameFilter,
  };
  const { loading, data } = useQuery<BERTH_APPLICATIONS, BERTH_APPLICATIONS_VARS>(BERTH_APPLICATIONS_QUERY, {
    fetchPolicy: 'no-cache',
    variables: berthApplicationsVars,
  });
  const [deleteDraftedApplication, { loading: isDeleting }] = useDeleteBerthApplication();
  const [rejectApplication] = useMutation<REJECT_BERTH_APPLICATION, REJECT_BERTH_APPLICATION_VARS>(
    REJECT_BERTH_APPLICATION_MUTATION,
    {
      refetchQueries: [getOperationName(BERTH_APPLICATIONS_QUERY) || 'BERTH_APPLICATIONS_QUERY'],
    }
  );
  const [approveOrders, { loading: isSubmittingApproveOrders }] = useMutation<APPROVE_ORDERS, APPROVE_ORDERS_VARS>(
    APPROVE_ORDERS_MUTATION,
    {
      refetchQueries: [getOperationName(BERTH_APPLICATIONS_QUERY) || 'BERTH_APPLICATIONS_QUERY'],
    }
  );

  const handleDeleteLease = async (id: string) => {
    await deleteDraftedApplication({
      variables: {
        input: {
          id,
        },
      },
    });
  };
  const handleNoPlacesAvailable = async (id: string) =>
    rejectApplication({
      variables: {
        input: {
          id,
        },
      },
    });
  const handleApproveOrders = async (orders: Array<{ orderId: string; email: string }>) => {
    approveOrders({
      variables: {
        input: {
          orders,
        },
      },
    }).then(() => {
      hdsToast({
        type: 'success',
        labelText: 'applicationList.notifications.offersSent.label',
        text: 'applicationList.notifications.offersSent.description',
        translated: true,
      });
    });
  };

  const tableData = getBerthApplicationData(data);

  return (
    <ApplicationList
      count={data?.berthApplications?.count}
      data={data}
      getPageCount={getPageCount}
      goToPage={goToPage}
      handleApproveOrders={handleApproveOrders}
      handleDeleteLease={handleDeleteLease}
      handleNoPlacesAvailable={handleNoPlacesAvailable}
      isDeleting={isDeleting}
      isSubmittingApproveOrders={isSubmittingApproveOrders}
      loading={loading}
      onNameFilterChange={(nameFilter) => {
        setNameFilter(nameFilter);
        goToPage(0);
      }}
      onSortedColsChange={handleSortedColsChange}
      onStatusFilterChange={(statusFilter) => {
        setStatusFilter(statusFilter);
        goToPage(0);
      }}
      onlySwitchApps={onlySwitchApps}
      pageIndex={pageIndex}
      setOnlySwitchApps={setOnlySwitchApps}
      sortBy={sortBy}
      statusFilter={statusFilter}
      tableData={tableData}
      nameFilter={nameFilter}
    />
  );
};

export default ApplicationListContainer;
