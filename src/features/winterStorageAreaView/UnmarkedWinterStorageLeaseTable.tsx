import React from 'react';
import { useTranslation } from 'react-i18next';
import { Cell } from 'react-table';
import { Lease, UnmarkedWinterStorage } from './types';
import Table, { Column, COLUMN_WIDTH } from '../../common/table/Table';
import Pagination from '../../common/pagination/Pagination';
import GlobalSearchTableTools from '../../common/tableTools/globalSearchTableTools/GlobalSearchTableTools';
import { formatDate } from '../../common/utils/format';
import CardHeader from '../../common/cardHeader/CardHeader';
import StatusLabel from '../../common/statusLabel/StatusLabel';
import CustomerName from '../harborView/customerName/CustomerName';

type ColumnType = Column<Lease>;

type WinterStorageAreaViewTableProps = UnmarkedWinterStorage & {
  className?: string;
};

const WinterStoragePlaceTable = ({ leases, className }: WinterStorageAreaViewTableProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const columns: ColumnType[] = [
    {
      Cell: ({ cell }: { cell: Cell<Lease> }) => {
        const isPlaceActive = cell.row.original.isActive;
        if (!isPlaceActive) return <StatusLabel type="error" label={t('winterStorageAreaView.place.inactive')} />;

        if (cell.value)
          return <CustomerName linkTo={`/unmarked-ws-notices/${cell.row.original.applicationId}`} id={cell.value} />;

        return '';
      },
      Header: t('winterStorageAreaView.tableHeaders.customer') as string,
      accessor: ({ customer }) => customer.id,
      id: 'leases',
      disableFilters: true,
      disableSortBy: true,
    },
    {
      Header: t('winterStorageAreaView.tableHeaders.notified') as string,
      accessor: ({ applicationDate }) => {
        return applicationDate ? formatDate(applicationDate, language) : '-';
      },
      id: 'notified',
      filter: 'text',
      width: COLUMN_WIDTH.XS,
      minWidth: COLUMN_WIDTH.XS,
    },
  ];

  return (
    <Table
      className={className}
      data={leases}
      columns={columns}
      canSelectRows
      renderTableToolsTop={(_, setters) => <GlobalSearchTableTools handleGlobalFilter={setters.setGlobalFilter} />}
      renderMainHeader={() => <CardHeader title={t('winterStorageAreaView.unmarkedPlaces').toUpperCase()} />}
      styleMainHeader={false}
      renderPaginator={({ pageIndex, pageCount, goToPage }) => (
        <Pagination
          pageIndex={pageIndex}
          pageCount={pageCount || 1}
          onPageChange={({ selected }) => goToPage(selected)}
        />
      )}
    />
  );
};

export default WinterStoragePlaceTable;
