import React, { useState } from 'react';
import { Cell } from 'react-table';
import { useTranslation } from 'react-i18next';

import HarborViewTableTools from './harborViewTableTools/HarborViewTableTools';
import PierSelectHeader from './pierSelectHeader/PierSelectHeader';
import BerthDetails from '../berthDetails/BerthDetailsContainer';
import Table, { Column } from '../../common/table/Table';
import { Berth, Pier } from './types';
import StatusLabel from '../../common/statusLabel/StatusLabel';
import { formatDimension } from '../../common/utils/format';
import Pagination from '../../common/pagination/Pagination';
import CustomerName from './customerName/CustomerName';

interface Props {
  berths: Berth[];
  piers: Pier[];
  onAddBerth(): void;
  onAddPier(): void;
  onEditBerth(berth: Berth): void;
  onEditPier(pier: Pier): void;
}

const HarborViewTable = ({ berths, piers, onAddBerth, onAddPier, onEditBerth, onEditPier }: Props) => {
  const { t, i18n } = useTranslation();

  const [tablePageIndex, setTablePageIndex] = useState(0);

  const columns: Column<Berth>[] = [
    {
      Header: t('harborView.tableHeaders.number') || '',
      accessor: 'number',
      filter: 'text',
    },
    {
      Header: t('harborView.tableHeaders.identifier') || '',
      accessor: 'identifier',
      filter: 'exact',
    },
    {
      Cell: ({ cell }: { cell: Cell<Berth> }) => {
        const isBerthActive = cell.row.original.isActive;
        if (!isBerthActive) {
          return <StatusLabel type="error" label={t('harborView.berthProperties.inactive')} />;
        }
        const activeLease = cell.row.original.leases?.find((lease) => lease.isActive);
        if (!activeLease) {
          return cell.value;
        }
        return <CustomerName id={cell.value} />;
      },
      Header: t('harborView.tableHeaders.customer') || '',
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
      Header: t('harborView.tableHeaders.length') || '',
      accessor: ({ length }) => formatDimension(length, i18n.language),
      id: 'length',
      filter: 'text',
    },
    {
      Header: t('harborView.tableHeaders.width') || '',
      accessor: ({ width }) => formatDimension(width, i18n.language),
      id: 'width',
      filter: 'text',
    },
    {
      Header: t('harborView.tableHeaders.depth') || '',
      accessor: ({ depth }) => formatDimension(depth, i18n.language),
      id: 'depth',
      filter: 'text',
    },
    {
      Header: t('harborView.tableHeaders.mooring') || '',
      accessor: ({ mooringType }) => t([`common.mooringTypes.${mooringType}`, mooringType]),
      id: 'mooringType',
      filter: 'text',
    },
  ];

  return (
    <Table
      data={berths}
      columns={columns}
      initialState={{ pageIndex: tablePageIndex }}
      canSelectRows
      renderTableToolsTop={(_, setters) => (
        <HarborViewTableTools
          onAddBerth={onAddBerth}
          onAddPier={onAddPier}
          handleGlobalFilter={setters.setGlobalFilter}
          canAddBerth={piers.length > 0}
        />
      )}
      styleMainHeader={false}
      renderMainHeader={(props) => {
        const piersFilters = props.state.filters.filter((filter) => filter.id === 'identifier');
        const selectedPier = piers.find(({ identifier }) => piersFilters.find(({ value }) => value === identifier));

        if (piersFilters.length && selectedPier === undefined) props.setFilter('identifier', undefined);

        return (
          <PierSelectHeader
            piers={piers}
            onEdit={onEditPier}
            selectedPier={selectedPier}
            onPierSelect={(pier) => props.setFilter('identifier', pier?.identifier)}
          />
        );
      }}
      renderSubComponent={(row) => <BerthDetails id={row.original.id} onEdit={() => onEditBerth(row.original)} />}
      renderPaginator={({ pageCount, goToPage }) => (
        <Pagination
          pageIndex={tablePageIndex}
          pageCount={pageCount || 1}
          onPageChange={({ selected }) => {
            setTablePageIndex(selected);
            goToPage(selected);
          }}
        />
      )}
    />
  );
};

export default HarborViewTable;
