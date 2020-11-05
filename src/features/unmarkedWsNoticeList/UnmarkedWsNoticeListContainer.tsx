import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { getOperationName } from 'apollo-link';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { SortingRule } from 'react-table';

import UnmarkedWsNoticeList from './UnmarkedWsNoticeList';
import { usePagination } from '../../common/utils/usePagination';
import { useRecoilBackendSorting } from '../../common/utils/useBackendSorting';
import {
  UNMARKED_WINTER_STORAGE_NOTICES,
  UNMARKED_WINTER_STORAGE_NOTICESVariables as UNMARKED_WINTER_STORAGE_NOTICES_VARS,
} from './__generated__/UNMARKED_WINTER_STORAGE_NOTICES';
import { UNMARKED_WINTER_STORAGE_NOTICES_QUERY } from './queries';
import { getUnmarkedWinterStorageNotices } from './utils';
import { APPROVE_ORDERS_MUTATION } from '../invoiceCard/sendInvoiceForm/mutations';
import {
  APPROVE_ORDERS,
  APPROVE_ORDERSVariables as APPROVE_ORDERS_VARS,
} from '../invoiceCard/sendInvoiceForm/__generated__/APPROVE_ORDERS';
import hdsToast from '../../common/toast/hdsToast';
import { ApplicationData } from '../applicationList/utils';
import { orderByGetter } from '../../common/utils/recoil';
import { ApplicationStatus } from '../../@types/__generated__/globalTypes';

const sortByAtom = atom<SortingRule<ApplicationData>[]>({
  key: 'UnmarkedWsNoticeListContainer_sortByAtom',
  default: [{ id: 'createdAt', desc: false }],
});

const orderBySelector = selector<string | undefined>({
  key: 'UnmarkedWsNoticeListContainer_orderBySelector',
  get: orderByGetter(sortByAtom),
});

const statusFilterAtom = atom<ApplicationStatus | undefined>({
  key: 'UnmarkedWsNoticeListContainer_statusAtom',
  default: undefined,
});

const UnmarkedWsNoticeListContainer = () => {
  const { cursor, pageSize, pageIndex, getPageCount, goToPage } = usePagination();
  const { sortBy, handleSortedColsChange } = useRecoilBackendSorting(sortByAtom, () => goToPage(0));
  const orderBy = useRecoilValue(orderBySelector);

  const [statusFilter, setStatusFilter] = useRecoilState(statusFilterAtom);

  const { loading, data } = useQuery<UNMARKED_WINTER_STORAGE_NOTICES, UNMARKED_WINTER_STORAGE_NOTICES_VARS>(
    UNMARKED_WINTER_STORAGE_NOTICES_QUERY,
    {
      fetchPolicy: 'no-cache',
      variables: {
        first: pageSize,
        after: cursor,
        orderBy,
        statuses: statusFilter ? [statusFilter] : undefined,
      },
    }
  );
  const [approveOrders, { loading: isSubmittingApproveOrders }] = useMutation<APPROVE_ORDERS, APPROVE_ORDERS_VARS>(
    APPROVE_ORDERS_MUTATION,
    {
      refetchQueries: [
        getOperationName(UNMARKED_WINTER_STORAGE_NOTICES_QUERY) || 'UNMARKED_WINTER_STORAGE_NOTICES_QUERY',
      ],
    }
  );
  const notices = getUnmarkedWinterStorageNotices(data);
  const pageCount = getPageCount(data?.winterStorageNotices?.count);

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

  return (
    <UnmarkedWsNoticeList
      notices={notices}
      loading={loading}
      pageCount={pageCount}
      pageIndex={pageIndex}
      isSubmittingApproveOrders={isSubmittingApproveOrders}
      goToPage={goToPage}
      sortBy={sortBy}
      count={data?.winterStorageNotices?.count}
      onSortedColsChange={handleSortedColsChange}
      statusFilter={statusFilter}
      onStatusFilterChange={(statusFilter) => {
        setStatusFilter(statusFilter);
        goToPage(0);
      }}
      handleApproveOrders={handleApproveOrders}
    />
  );
};

export default UnmarkedWsNoticeListContainer;
