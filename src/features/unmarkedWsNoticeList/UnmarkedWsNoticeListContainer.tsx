import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { getOperationName } from 'apollo-link';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { SortingRule } from 'react-table';

import UnmarkedWsNoticeList, { CustomerInfo } from './UnmarkedWsNoticeList';
import { usePagination } from '../../common/utils/usePagination';
import { useRecoilBackendSorting } from '../../common/utils/useBackendSorting';
import {
  UNMARKED_WINTER_STORAGE_NOTICES,
  UNMARKED_WINTER_STORAGE_NOTICESVariables as UNMARKED_WINTER_STORAGE_NOTICES_VARS,
} from './__generated__/UNMARKED_WINTER_STORAGE_NOTICES';
import { UNMARKED_WINTER_STORAGE_NOTICES_IDS_QUERY, UNMARKED_WINTER_STORAGE_NOTICES_QUERY } from './queries';
import { generateAndSaveStickerPDF, getUnmarkedWinterStorageNotices } from './utils';
import { ApplicationData } from '../applicationList/utils';
import { orderByGetter } from '../../common/utils/recoil';
import { ApplicationStatus } from '../../@types/__generated__/globalTypes';
import hdsToast from '../../common/toast/hdsToast';
import { SET_STICKERS_POSTED_MUTATION } from './mutations';
import {
  SET_STICKERS_POSTED,
  SET_STICKERS_POSTEDVariables as SET_STICKERS_POSTED_VARS,
} from './__generated__/SET_STICKERS_POSTED';
import {
  APPROVE_ORDERS,
  APPROVE_ORDERSVariables as APPROVE_ORDERS_VARS,
} from '../../common/mutations/__generated__/APPROVE_ORDERS';
import { APPROVE_ORDERS_MUTATION } from '../../common/mutations/approveOrders';
import { getProfileToken } from '../../common/utils/auth';
import {
  RESEND_ORDER,
  RESEND_ORDERVariables as RESEND_ORDER_VARS,
} from '../../common/mutations/__generated__/RESEND_ORDER';
import { RESEND_ORDER_MUTATION } from '../../common/mutations/resendOrder';
import { BERTH_APPLICATIONS_QUERY } from '../applicationList/queries';
import {
  UNMARKED_WINTER_STORAGE_NOTICES_IDS,
  UNMARKED_WINTER_STORAGE_NOTICES_IDSVariables as UNMARKED_WINTER_STORAGE_NOTICES_IDS_VARS,
} from './__generated__/UNMARKED_WINTER_STORAGE_NOTICES_IDS';
import { useTableExport } from '../../common/utils/useTableExport';

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

const nameFilterAtom = atom<string | undefined>({
  key: 'UnmarkedWsNoticeListContainer_nameFilterAtom',
  default: undefined,
});

const UnmarkedWsNoticeListContainer = () => {
  const { exportTable } = useTableExport();
  const { cursor, pageSize, pageIndex, getPageCount, goToPage } = usePagination();
  const { sortBy, handleSortedColsChange } = useRecoilBackendSorting(sortByAtom, () => goToPage(0));
  const orderBy = useRecoilValue(orderBySelector);

  const [statusFilter, setStatusFilter] = useRecoilState(statusFilterAtom);
  const [nameFilter, setNameFilter] = useRecoilState(nameFilterAtom);

  const queryVariables = {
    first: pageSize,
    after: cursor,
    orderBy,
    statuses: statusFilter ? [statusFilter] : undefined,
    nameFilter,
  };

  const { loading, data, refetch } = useQuery<UNMARKED_WINTER_STORAGE_NOTICES, UNMARKED_WINTER_STORAGE_NOTICES_VARS>(
    UNMARKED_WINTER_STORAGE_NOTICES_QUERY,
    {
      fetchPolicy: 'no-cache',
      variables: queryVariables,
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

  const [resendOrders, { loading: isSubmittingResendOrders }] = useMutation<RESEND_ORDER, RESEND_ORDER_VARS>(
    RESEND_ORDER_MUTATION,
    {
      refetchQueries: [getOperationName(BERTH_APPLICATIONS_QUERY) || 'BERTH_APPLICATIONS_QUERY'],
    }
  );

  const [setStickersPosted] = useMutation<SET_STICKERS_POSTED, SET_STICKERS_POSTED_VARS>(SET_STICKERS_POSTED_MUTATION);

  const handleApplicationsExport = async () => {
    await exportTable({
      exportType: 'unmarked-winter-storage-applications',
      fileType: 'xlsx',
      fetchCallback: async (apolloClient, paginationParams) => {
        const { data } = await apolloClient.query<
          UNMARKED_WINTER_STORAGE_NOTICES_IDS,
          UNMARKED_WINTER_STORAGE_NOTICES_IDS_VARS
        >({
          query: UNMARKED_WINTER_STORAGE_NOTICES_IDS_QUERY,
          variables: { ...queryVariables, ...paginationParams },
          fetchPolicy: 'cache-first',
        });
        return data.winterStorageNoticesIds;
      },
    });
  };

  const onSavePdf = (customers: CustomerInfo[]) => {
    if (customers.some((customer) => !customer.stickerNumber || !customer.leaseId)) {
      hdsToast({
        autoDismiss: false,
        type: 'error',
        toastId: 'printWsStickerPDFError',
        labelText: 'unmarkedWsNotices.list.errors.printWsStickerPDFError.label',
        text: 'unmarkedWsNotices.list.errors.printWsStickerPDFError.description',
        translated: true,
      });
      return;
    }

    generateAndSaveStickerPDF(customers);
    setStickersPosted({
      variables: {
        input: {
          leaseIds: customers.map((customer) => customer.leaseId as string),
          date: new Date().toISOString().split('T')[0],
        },
      },
    });
  };

  const notices = getUnmarkedWinterStorageNotices(data);
  const pageCount = getPageCount(data?.winterStorageNotices?.count);

  const handleSendOffers = async (
    draftedOffers: Array<{ orderId: string; email: string }>,
    sentOffers: Array<{ orderId: string; email: string }>,
    dueDate: string
  ) => {
    const approveOffers = new Promise((resolve, reject) => {
      if (draftedOffers.length === 0) return resolve(null);

      return approveOrders({
        variables: {
          input: {
            orders: draftedOffers,
            profileToken: getProfileToken(),
            dueDate,
          },
        },
      })
        .then(resolve)
        .catch(reject);
    });

    const resendOffers = new Promise((resolve, reject) => {
      if (sentOffers.length === 0) return resolve(null);

      return resendOrders({
        variables: {
          input: {
            orders: sentOffers.map((sentOffer) => sentOffer.orderId),
            profileToken: getProfileToken(),
            dueDate,
          },
        },
      })
        .then(resolve)
        .catch(reject);
    });

    Promise.all([approveOffers, resendOffers]).then(() => {
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
      isSubmittingApproveOrders={isSubmittingApproveOrders || isSubmittingResendOrders}
      goToPage={goToPage}
      sortBy={sortBy}
      count={data?.winterStorageNotices?.count}
      onSortedColsChange={handleSortedColsChange}
      statusFilter={statusFilter}
      onStatusFilterChange={(statusFilter) => {
        setStatusFilter(statusFilter);
        goToPage(0);
      }}
      handleSendOffers={handleSendOffers}
      nameFilter={nameFilter}
      onNameFilterChange={(nameFilter) => {
        setNameFilter(nameFilter);
        goToPage(0);
      }}
      onSavePdf={onSavePdf}
      handleApplicationsExport={handleApplicationsExport}
      onStickerChange={() => refetch(queryVariables)}
    />
  );
};

export default UnmarkedWsNoticeListContainer;
