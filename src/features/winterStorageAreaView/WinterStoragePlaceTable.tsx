import React from 'react';
import { useTranslation } from 'react-i18next';
import { Cell } from 'react-table';

import { WinterStoragePlace, WinterStorageSection } from './types';
import Table, { Column } from '../../common/table/Table';
import StatusLabel from '../../common/statusLabel/StatusLabel';
import SelectHeader from '../../common/selectHeader/SelectHeader';
import Pagination from '../../common/pagination/Pagination';
import GlobalSearchTableTools from '../../common/tableTools/globalSearchTableTools/GlobalSearchTableTools';
import { formatDimension } from '../../common/utils/format';
import CustomerName from '../harborView/customerName/CustomerName';

type ColumnType = Column<WinterStoragePlace>;

interface WinterStorageAreaViewTableProps {
  places: WinterStoragePlace[];
  sections: WinterStorageSection[];
  className?: string;
}

const WinterStoragePlaceTable = ({ places, sections, className }: WinterStorageAreaViewTableProps) => {
  const { t, i18n } = useTranslation();
  const columns: ColumnType[] = [
    {
      Header: t('winterStorageAreaView.tableHeaders.number') || '',
      accessor: 'number',
      filter: 'text',
    },
    {
      Header: t('winterStorageAreaView.tableHeaders.identifier') || '',
      accessor: 'identifier',
      filter: 'exact',
    },
    {
      Cell: ({ cell }: { cell: Cell<WinterStoragePlace> }) => {
        const isPlaceActive = cell.row.original.isActive;
        if (!isPlaceActive) return <StatusLabel type="error" label={t('winterStorageAreaView.place.inactive')} />;

        if (cell.value) return <CustomerName id={cell.value} />;

        return '';
      },
      Header: t('winterStorageAreaView.tableHeaders.customer') || '',
      accessor: ({ leases }) => {
        const activeLease = leases?.find((lease) => lease.isActive);
        if (!activeLease) return '';
        return activeLease.customer.id;
      },
      id: 'leases',
      disableFilters: true,
      disableSortBy: true,
    },
    {
      Header: t('winterStorageAreaView.tableHeaders.length') || '',
      accessor: ({ length }) => formatDimension(length, i18n.language),
      id: 'length',
      filter: 'text',
    },
    {
      Header: t('winterStorageAreaView.tableHeaders.width') || '',
      accessor: ({ width }) => formatDimension(width, i18n.language),
      id: 'width',
      filter: 'text',
    },
  ];

  return (
    <Table
      className={className}
      data={places}
      columns={columns}
      canSelectRows
      renderTableToolsTop={(_, setters) => <GlobalSearchTableTools handleGlobalFilter={setters.setGlobalFilter} />}
      renderMainHeader={(props) => {
        const sectionFilters = props.state.filters.filter((filter) => filter.id === 'identifier');
        const selectedSection = sections.find(({ identifier }) =>
          sectionFilters.find(({ value }) => value === identifier)
        );

        if (sectionFilters.length && selectedSection === undefined) props.setFilter('identifier', undefined);

        return (
          <SelectHeader
            title={t('winterStorageAreaView.markedPlaces').toUpperCase()}
            items={sections}
            selectedItem={selectedSection}
            allLabel={t('common.table.all')}
            editLabel={t('common.edit')}
            formatter={(section) => `${t('winterStorageAreaView.tableHeaders.identifier')} ${section.identifier}`}
            equals={(a, b) => a.identifier === b.identifier}
            onSelect={(section) => props.setFilter('identifier', section?.identifier)}
          />
        );
      }}
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
