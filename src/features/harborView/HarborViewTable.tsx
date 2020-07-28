import React from 'react';
import { Cell } from 'react-table';
import { useTranslation } from 'react-i18next';

import HarborViewTableTools from './harborViewTableTools/HarborViewTableTools';
import PierSelectHeader from './pierSelectHeader/PierSelectHeader';
import BerthDetails from '../../common/berthDetails/BerthDetails';
import Table, { Column } from '../../common/table/Table';
import Chip from '../../common/chip/Chip';
import InternalLink from '../../common/internalLink/InternalLink';
import { formatDimension } from '../../common/utils/format';
import Pagination from '../../common/pagination/Pagination';
import { BerthNode, PierProperties } from '../../generated/types.d';
import { edgesToArr } from '../../generated/utils';

interface Props {
  berths: BerthNode[];
  piers: PierProperties[];
  onAddBerth(): void;
  onAddPier(): void;
  onEditBerth(berth: BerthNode): void;
  onEditPier(pier: PierProperties): void;
}

const HarborViewTable = ({ berths, piers, onAddBerth, onAddPier, onEditBerth, onEditPier }: Props) => {
  const { t, i18n } = useTranslation();
  const columns: Column<BerthNode>[] = [
    {
      Header: t('harborView.tableHeaders.number') || '',
      accessor: 'number',
      filter: 'text',
    },
    {
      Header: t('harborView.tableHeaders.identifier') || '',
      id: 'identifier',
      accessor: ({ pier }) => pier.properties?.identifier,
      filter: 'exact',
    },
    {
      Cell: ({ cell }: { cell: Cell<BerthNode> }) => {
        const isBerthActive = cell.row.original.isActive;
        if (!isBerthActive) {
          return <Chip color="red" label={t('harborView.berthProperties.inactive')} />;
        }
        const activeLease = edgesToArr(cell.row.original.leases).find((lease) => lease.isActive);
        if (!activeLease) {
          return cell.value;
        }
        return <InternalLink to={`/customers/${activeLease.customer.id}}`}>{cell.value}</InternalLink>;
      },
      Header: t('harborView.tableHeaders.customer') || '',
      accessor: ({ leases }) => {
        const activeLease = edgesToArr(leases).find((lease) => lease.isActive);
        if (!activeLease) return '';
        return `${activeLease.customer.firstName} ${activeLease.customer.lastName}`;
      },
      id: 'leases',
      filter: 'text',
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
            onPierSelect={(pier) => {
              console.log(pier);
              props.setFilter('identifier', pier?.identifier);
            }}
          />
        );
      }}
      renderSubComponent={(row) => (
        <BerthDetails
          leases={edgesToArr(row.original.leases) ?? []}
          comment={row.original.comment}
          onEdit={() => onEditBerth(row.original)}
        />
      )}
      renderPaginator={({ pageIndex, pageCount, goToPage }) => (
        <Pagination
          forcePage={pageIndex}
          pageCount={pageCount || 1}
          onPageChange={({ selected }) => goToPage(selected)}
        />
      )}
    />
  );
};

export default HarborViewTable;
