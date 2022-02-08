import React from 'react';
import { useTranslation } from 'react-i18next';
import { SortingRule } from 'react-table';

import PageContent from '../../common/pageContent/PageContent';
import PageTitle from '../../common/pageTitle/PageTitle';
import InternalLink from '../../common/internalLink/InternalLink';
import Table, { Column, COLUMN_WIDTH } from '../../common/table/Table';
import { formatDate } from '../../common/utils/format';
import StatusLabel from '../../common/statusLabel/StatusLabel';
import { APPLICATION_STATUS } from '../../common/utils/constants';
import { ApplicationStatus } from '../../@types/__generated__/globalTypes';
import { WinterStorageApplication } from './utils';
import ApplicationDetails from '../../common/applicationDetails/ApplicationDetails';
import TableFilters from '../../common/tableFilters/TableFilters';
import Pagination from '../../common/pagination/Pagination';
import { queueFeatureFlag } from '../../common/utils/featureFlags';
import ApplicationTableTools from '../../common/tableTools/applicationTableTools/ApplicationTableTools';

interface WinterStorageApplicationListProps {
  applications: WinterStorageApplication[];
  loading: boolean;
  pageCount: number;
  pageIndex: number;
  sortBy: SortingRule<WinterStorageApplication>[];
  count?: number;
  statusFilter?: ApplicationStatus;
  nameFilter?: string;
  goToPage(page: number): void;
  onSortedColsChange(sortedCol: SortingRule<WinterStorageApplication>[]): void;
  onStatusFilterChange(statusFilter?: ApplicationStatus): void;
  onNameFilterChange(nameFilter: string | undefined): void;
  handleApplicationsExport(): Promise<void>;
}

type ColumnType = Column<WinterStorageApplication>;

const WinterStorageApplicationList = ({
  applications,
  loading,
  pageCount,
  pageIndex,
  goToPage,
  count,
  statusFilter,
  sortBy,
  onSortedColsChange,
  onStatusFilterChange,
  nameFilter,
  onNameFilterChange,
  handleApplicationsExport,
}: WinterStorageApplicationListProps) => {
  const { t, i18n } = useTranslation();

  const rawColumns: (ColumnType | undefined)[] = [
    {
      Cell: ({
        cell: {
          row: {
            original: { id, firstName, lastName },
          },
        },
      }) => (
        <InternalLink to={`/winter-storage-applications/${id}`}>
          {firstName} {lastName}
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
      Cell: ({ cell }) => formatDate(cell.value, i18n.language),
      Header: t('applicationList.tableHeaders.pvm') || '',
      accessor: 'createdAt',
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
    },
    queueFeatureFlag()
      ? {
          Header: t('applicationList.tableHeaders.queue') || '',
          accessor: 'queue',
          disableSortBy: true,
          width: COLUMN_WIDTH.XS,
          minWidth: COLUMN_WIDTH.XS,
        }
      : undefined,
    {
      Header: t('applicationList.tableHeaders.municipality') || '',
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
      Header: t('applicationList.tableHeaders.status') || '',
      accessor: 'status',
      disableSortBy: true,
      width: COLUMN_WIDTH.M,
      minWidth: COLUMN_WIDTH.M,
    },
  ];
  const columns: ColumnType[] = rawColumns.filter((column): column is ColumnType => column !== undefined);

  return (
    <PageContent>
      <PageTitle title={t('applicationList.winterStorageTitle')} />
      <Table
        columns={columns}
        data={applications}
        loading={loading}
        initialState={{ sortBy }}
        renderSubComponent={(row) => <ApplicationDetails {...row.original} />}
        renderMainHeader={() => <TableFilters filters={[]} handleSetFilter={() => undefined} />}
        renderTableToolsBottom={() => (
          <Pagination pageIndex={pageIndex} pageCount={pageCount} onPageChange={({ selected }) => goToPage(selected)} />
        )}
        renderTableToolsTop={() => (
          <ApplicationTableTools
            count={count}
            statusFilter={statusFilter}
            onStatusFilterChange={onStatusFilterChange}
            nameFilter={nameFilter}
            onNameFilterChange={onNameFilterChange}
            handleApplicationsExport={handleApplicationsExport}
          />
        )}
        renderEmptyStateRow={() => t('common.notification.noData.description')}
        onSortedColsChange={onSortedColsChange}
        manualSortBy
        canSelectRows
      />
    </PageContent>
  );
};

export default WinterStorageApplicationList;
