import React from 'react';
import { useTranslation } from 'react-i18next';
import { SortingRule } from 'react-table';
import { atom } from 'recoil';
import PageTitle from '../../common/pageTitle/PageTitle';
import PageContent from '../../common/pageContent/PageContent';
import ApplicationDetails from '../../common/applicationDetails/ApplicationDetails';
import TableFilters from '../../common/tableFilters/TableFilters';
import Pagination from '../../common/pagination/Pagination';
import Table, { Column, COLUMN_WIDTH } from '../../common/table/Table';
import { ApplicationData, getDraftedOffers, getSentOffers } from './utils';
import { BERTH_APPLICATIONS } from './__generated__/BERTH_APPLICATIONS';
import InternalLink from '../../common/internalLink/InternalLink';
import { formatDate } from '../../common/utils/format';
import StatusLabel from '../../common/statusLabel/StatusLabel';
import { APPLICATION_STATUS } from '../../common/utils/constants';
import { ApplicationStatus } from '../../@types/__generated__/globalTypes';
import { queueFeatureFlag } from '../../common/utils/featureFlags';
import SendOffersListTool from '../applicationListTools/SendOffersListTool';
import ApplicationTableTools from '../../common/tableTools/applicationTableTools/ApplicationTableTools';
import ListActions from '../../common/listActions/ListActions';
import { usePreserveSelect } from '../../common/utils/usePreserveSelect';
import { ApplicationTypeEnum } from '../../common/applicationDetails/types';
import Button from '../../common/button/Button';

interface Order {
  orderId: string;
  email: string;
}

export interface ApplicationListProps {
  count?: number;
  data: BERTH_APPLICATIONS | undefined;
  getPageCount: (connectionsCount: number | null | undefined) => number;
  goToPage: (pageIndex: number) => void;
  handleDeleteLease: (id: string) => Promise<void>;
  handleNoPlacesAvailable: (id: string) => void;
  handleApplicationsExport: () => Promise<void>;
  isExporting: boolean;
  isDeleting: boolean;
  isSubmittingApproveOrders: boolean;
  loading: boolean;
  nameFilter?: string;
  onSortedColsChange: (sortedCol: SortingRule<ApplicationData>[]) => void;
  onlySwitchApps?: boolean;
  pageIndex: number;
  setOnlySwitchApps: (onlySwitchApps?: boolean) => void;
  sortBy: SortingRule<ApplicationData>[];
  statusFilter?: ApplicationStatus;
  tableData: ApplicationData[];
  onlyAppsWithCode?: boolean;
  setOnlyAppsWithCode(onlyAppsWithCode?: boolean): void;
  handleSendOffers(draftedOffers: Order[], sentOffers: Order[], dueDate: string): Promise<void>;
  onNameFilterChange(nameFilter: string | undefined): void;
  onStatusFilterChange(statusFilter?: ApplicationStatus): void;
}

type ColumnType = Column<ApplicationData>;

const selectedApplicationsAtom = atom<{ [x: string]: ApplicationData }>({
  key: 'ApplicationList_selectedApplicationsAtom',
  default: {},
});

const ApplicationList = ({
  count,
  data,
  getPageCount,
  goToPage,
  handleSendOffers,
  handleDeleteLease,
  handleNoPlacesAvailable,
  handleApplicationsExport,
  isExporting,
  isDeleting,
  isSubmittingApproveOrders,
  loading,
  nameFilter,
  onNameFilterChange,
  onSortedColsChange,
  onStatusFilterChange,
  onlySwitchApps,
  onlyAppsWithCode,
  pageIndex,
  setOnlySwitchApps,
  setOnlyAppsWithCode,
  sortBy,
  statusFilter,
  tableData,
}: ApplicationListProps) => {
  const { t, i18n } = useTranslation();
  const { selectedRows, selectedRowIdsDict, onSelectionChange } = usePreserveSelect<ApplicationData>(
    selectedApplicationsAtom
  );

  const rawColumns: (ColumnType | undefined)[] = [
    {
      Cell: ({
        cell: {
          row: {
            original: { id, firstName, lastName },
          },
        },
      }) => (
        <InternalLink to={`/applications/${id}`}>
          {firstName !== '' && lastName !== '' ? `${firstName} ${lastName}` : t('common.emptyName')}
        </InternalLink>
      ),
      Header: t('common.name') as string,
      accessor: 'id',
      filter: 'exact',
      disableSortBy: true,
      width: COLUMN_WIDTH.M,
      minWidth: COLUMN_WIDTH.M,
    },
    {
      Cell: ({ cell: { value }, row }) => {
        if (row.original.applicationCode) return t('applicationList.applicationDetails.applicationCode');

        return value
          ? t('applicationList.applicationType.switchApplication')
          : t('applicationList.applicationType.newApplication');
      },
      Header: t('applicationList.tableHeaders.applicationType') as string,
      accessor: 'isSwitch',
      filter: 'exact',
      disableSortBy: true,
      width: COLUMN_WIDTH.XS,
      minWidth: COLUMN_WIDTH.XS,
    },
    {
      Cell: ({ cell }) => formatDate(cell.value, i18n.language),
      Header: t('applicationList.tableHeaders.pvm') as string,
      accessor: 'createdAt',
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
    },
    queueFeatureFlag()
      ? {
          Header: t('applicationList.tableHeaders.queue') as string,
          accessor: 'queue',
          disableSortBy: true,
          width: COLUMN_WIDTH.XS,
          minWidth: COLUMN_WIDTH.XS,
        }
      : undefined,
    {
      Header: t('applicationList.tableHeaders.municipality') as string,
      accessor: 'municipality',
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
    {
      Cell: ({ cell }) =>
        cell.value && (
          <InternalLink to={`/harbors/${cell.value.harborId}`}>
            {[cell.value.harborName, cell.value.pierIdentifier, cell.value.berthNum].filter(Boolean).join(' ')}
          </InternalLink>
        ),
      Header: t('applicationList.tableHeaders.lease') as string,
      accessor: 'lease',
      disableSortBy: true,
      width: COLUMN_WIDTH.XL,
      minWidth: COLUMN_WIDTH.XL,
    },
  ];
  const columns: ColumnType[] = rawColumns.filter((column): column is ColumnType => column !== undefined);

  return (
    <PageContent>
      <PageTitle title={t('applicationList.title')} />
      <Table
        data={tableData}
        loading={loading || isDeleting}
        columns={columns}
        renderSubComponent={(row) => (
          <ApplicationDetails
            {...row.original}
            applicationType={row.original.berthSwitch ? ApplicationTypeEnum.BERTH_SWITCH : ApplicationTypeEnum.BERTH}
            handleDeleteLease={handleDeleteLease}
            handleNoPlacesAvailable={handleNoPlacesAvailable}
          />
        )}
        renderMainHeader={() => {
          enum Filters {
            SWITCH_APPLICATION = 'SWITCH_FILTER',
            NEW_APPLICATION = 'NEW_APPLICATION',
            HAS_APPLICATION_CODE = 'HAS_APPLICATION_CODE',
          }

          const filters = [
            {
              value: Filters.SWITCH_APPLICATION,
              label: t('applicationList.tableHeaders.switchFilter'),
            },
            {
              value: Filters.NEW_APPLICATION,
              label: t('applicationList.tableHeaders.newApplicationFilter'),
            },
            {
              value: Filters.HAS_APPLICATION_CODE,
              label: t('applicationList.tableHeaders.applicationHasCodeFilter'),
            },
          ];

          const handleSetFilter = (filter: Filters | undefined): void => {
            switch (filter) {
              case Filters.SWITCH_APPLICATION:
                setOnlySwitchApps(!onlySwitchApps ? true : undefined);
                break;
              case Filters.NEW_APPLICATION:
                setOnlySwitchApps(onlySwitchApps || onlySwitchApps === undefined ? false : undefined);
                break;
              case Filters.HAS_APPLICATION_CODE:
                setOnlyAppsWithCode(onlyAppsWithCode ? undefined : true);
                break;
              default:
                setOnlyAppsWithCode(undefined);
                setOnlySwitchApps(undefined);
                break;
            }
            goToPage(0);
          };

          const activeFilters = filters
            .map((filter) => filter.value)
            .filter((value) => {
              if (
                (value === Filters.SWITCH_APPLICATION && onlySwitchApps) ||
                (value === Filters.NEW_APPLICATION && onlySwitchApps === false) ||
                (value === Filters.HAS_APPLICATION_CODE && onlyAppsWithCode)
              )
                return true;

              return false;
            });

          return <TableFilters filters={filters} activeFilters={activeFilters} handleSetFilter={handleSetFilter} />;
        }}
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
                  id: 'ApplicationList_sendOffer',
                  label: t('applicationList.tools.sendOffer'),
                  renderComponent: () => (
                    <SendOffersListTool
                      clearSelectedRows={resetSelectedRows}
                      filterUnhandledApplications={(row) => !row.lease}
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
                <>
                  <Button
                    isLoading={isExporting}
                    loadingText={t('common.exporting')}
                    onClick={handleApplicationsExport}
                  >
                    {t('common.export')}
                  </Button>
                </>
              }
            />
          </>
        )}
        renderTableToolsBottom={() => (
          <Pagination
            pageIndex={pageIndex}
            pageCount={getPageCount(data?.berthApplications?.count)}
            onPageChange={({ selected }) => goToPage(selected)}
          />
        )}
        renderEmptyStateRow={() => t('common.notification.noData.description')}
        initialState={{
          sortBy,
          selectedRowIds: selectedRowIdsDict,
        }}
        onSortedColsChange={onSortedColsChange}
        onSelectionChange={(selectedRowIds) => onSelectionChange(selectedRowIds, tableData)}
        manualSortBy
        canSelectRows
      />
    </PageContent>
  );
};

export default ApplicationList;
