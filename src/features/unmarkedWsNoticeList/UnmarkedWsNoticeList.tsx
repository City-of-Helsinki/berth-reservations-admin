import React from 'react';
import { useTranslation } from 'react-i18next';
import { SortingRule } from 'react-table';
import { atom } from 'recoil';

import PageTitle from '../../common/pageTitle/PageTitle';
import PageContent from '../../common/pageContent/PageContent';
import InternalLink from '../../common/internalLink/InternalLink';
import Table, { Column, COLUMN_WIDTH } from '../../common/table/Table';
import { formatDate } from '../../common/utils/format';
import StatusLabel from '../../common/statusLabel/StatusLabel';
import { APPLICATION_STATUS } from '../../common/utils/constants';
import { ApplicationStatus } from '../../@types/__generated__/globalTypes';
import { getDraftedOffers, getSentOffers, UnmarkedWinterStorageNotice } from './utils';
import UnmarkedWsNoticeDetails from '../unmarkedWsNoticeDetails/UnmarkedWsNoticeDetails';
import Pagination from '../../common/pagination/Pagination';
import Grid from '../../common/grid/Grid';
import SendOffersListTool from '../applicationListTools/SendOffersListTool';
import ApplicationTableTools from '../../common/tableTools/applicationTableTools/ApplicationTableTools';
import ListActions from '../../common/listActions/ListActions';
import PrintAllStickersButton from './printAllStickersButton/PrintAllStickersButton';
import { usePreserveSelect } from '../../common/utils/usePreserveSelect';
import Button from '../../common/button/Button';

export type CustomerInfo = {
  firstName: string;
  lastName: string;
  address: string;
  municipality: string;
  zipCode: string;
  leaseId?: string;
  stickerNumber?: number | null;
  stickerSeason?: string | null;
};

interface Order {
  orderId: string;
  email: string;
}
export interface UnmarkedWsNoticeListProps {
  count?: number;
  isSubmittingApproveOrders: boolean;
  loading: boolean;
  notices: UnmarkedWinterStorageNotice[];
  pageCount: number;
  pageIndex: number;
  sortBy: SortingRule<UnmarkedWinterStorageNotice>[];
  statusFilter?: ApplicationStatus;
  nameFilter?: string;
  isExporting: boolean;
  handleApplicationsExport(): Promise<void>;
  goToPage(page: number): void;
  handleSendOffers(draftedOffers: Order[], sentOffers: Order[], dueDate: string): Promise<void>;
  onSortedColsChange(sortedCol: SortingRule<UnmarkedWinterStorageNotice>[]): void;
  onStatusFilterChange(statusFilter?: ApplicationStatus): void;
  onNameFilterChange(nameFilter: string | undefined): void;
  onSavePdf(customers: CustomerInfo[]): void;
  onStickerChange(): void;
}

type ColumnType = Column<UnmarkedWinterStorageNotice>;

const selectedNoticesAtom = atom<{ [x: string]: UnmarkedWinterStorageNotice }>({
  key: 'UnmarkedWsNoticeList_selectedNoticesAtom',
  default: {},
});

const UnmarkedWsNoticeList = ({
  notices,
  loading,
  pageCount,
  pageIndex,
  isSubmittingApproveOrders,
  goToPage,
  count,
  statusFilter,
  onStatusFilterChange,
  onSortedColsChange,
  sortBy,
  handleSendOffers,
  nameFilter,
  onNameFilterChange,
  onSavePdf,
  onStickerChange,
  handleApplicationsExport,
  isExporting,
}: UnmarkedWsNoticeListProps) => {
  const { t, i18n } = useTranslation();
  const { selectedRows, selectedRowIdsDict, onSelectionChange } = usePreserveSelect<UnmarkedWinterStorageNotice>(
    selectedNoticesAtom
  );

  const columns: ColumnType[] = [
    {
      Cell: ({ cell }) => {
        const {
          row: {
            original: { firstName, lastName },
          },
        } = cell;
        return (
          <InternalLink to={`/unmarked-ws-notices/${cell.value}`}>
            {firstName} {lastName}
          </InternalLink>
        );
      },
      Header: t('common.name') as string,
      accessor: 'id',
      filter: 'exact',
      disableSortBy: true,
      width: COLUMN_WIDTH.M,
      minWidth: COLUMN_WIDTH.M,
    },
    {
      Cell: ({ cell }) => formatDate(cell.value, i18n.language),
      Header: t('applicationList.tableHeaders.pvm') as string,
      accessor: 'createdAt',
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
    },
    {
      Header: t('common.terminology.winterStorageArea') as string,
      accessor: ({ choice }) => choice.winterStorageAreaName,
      id: 'choice',
      disableSortBy: true,
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
    },
    {
      Cell: ({ cell: { value } }) => (
        <StatusLabel
          type={APPLICATION_STATUS[value as ApplicationStatus].type}
          label={t(APPLICATION_STATUS[value as ApplicationStatus].label)}
        />
      ),
      Header: t('applicationList.tableHeaders.status') as string,
      accessor: 'status',
      disableSortBy: true,
      width: COLUMN_WIDTH.M,
      minWidth: COLUMN_WIDTH.M,
    },
  ];

  return (
    <PageContent>
      <PageTitle title={t('unmarkedWsNotices.list.title')} />
      <Table
        columns={columns}
        data={notices}
        loading={loading}
        initialState={{ sortBy, selectedRowIds: selectedRowIdsDict }}
        renderSubComponent={(row) => (
          <Grid colsCount={3}>
            <UnmarkedWsNoticeDetails {...row.original} onStickerChange={onStickerChange} />
          </Grid>
        )}
        renderMainHeader={() => t('unmarkedWsNotices.list.title')}
        renderTableToolsTop={(_, { resetSelectedRows }) => (
          <>
            <ApplicationTableTools
              count={count}
              statusFilter={statusFilter}
              onStatusFilterChange={onStatusFilterChange}
              nameFilter={nameFilter}
              onNameFilterChange={onNameFilterChange}
            />
            <ListActions
              selectedRows={selectedRows}
              resetSelectedRows={resetSelectedRows}
              listActions={[
                {
                  id: 'UnmarkedWsNoticeList_printStickers',
                  label: t('unmarkedWsNotices.list.stickerPrint.onClick'),
                  buttonText: t('unmarkedWsNotices.list.stickerPrint.onClick'),
                  onClick: onSavePdf,
                },
                {
                  id: 'UnmarkedWsNoticeList_printAllStickers',
                  label: t('unmarkedWsNotices.list.allStickerPrint.label'),
                  renderComponent: () => <PrintAllStickersButton />,
                },
                {
                  id: 'UnmarkedWsNoticeList_sendOffer',
                  label: t('applicationList.tools.sendOffer'),
                  renderComponent: () => (
                    <SendOffersListTool
                      clearSelectedRows={resetSelectedRows}
                      filterUnhandledApplications={(row) => !row.leaseId}
                      getDraftedOffers={getDraftedOffers}
                      getSentOffers={getSentOffers}
                      handleSendOffers={handleSendOffers}
                      isSubmitting={isSubmittingApproveOrders}
                      selectedRows={selectedRows}
                    />
                  ),
                },
              ]}
              otherActions={
                <Button isLoading={isExporting} loadingText={t('common.exporting')} onClick={handleApplicationsExport}>
                  {t('common.export')}
                </Button>
              }
            />
          </>
        )}
        renderTableToolsBottom={() => (
          <Pagination pageIndex={pageIndex} pageCount={pageCount} onPageChange={({ selected }) => goToPage(selected)} />
        )}
        renderEmptyStateRow={() => t('common.notification.noData.description')}
        onSortedColsChange={onSortedColsChange}
        onSelectionChange={(selectedRowIds) => onSelectionChange(selectedRowIds, notices)}
        manualSortBy
        canSelectRows
      />
    </PageContent>
  );
};

export default UnmarkedWsNoticeList;
