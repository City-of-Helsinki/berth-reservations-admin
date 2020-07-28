import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconTrash } from 'hds-react';
import { Cell } from 'react-table';

import Table, { Column, COLUMN_WIDTH } from '../../common/table/Table';
import HarborDetails from './harborDetails/HarborDetails';
import InternalLink from '../../common/internalLink/InternalLink';
import IconWrapper from '../../common/iconWrapper/IconWrapper';
import GlobalSearchTableTools from '../../common/tableTools/globalSearchTableTools/GlobalSearchTableTools';
import Pagination from '../../common/pagination/Pagination';
import PageTitle from '../../common/pageTitle/PageTitle';
import { IconFence, IconPlug, IconStreetLight, IconWaterTap } from '../../common/icons';
import PageContent from '../../common/pageContent/PageContent';
import BerthSummary from './berthSummary/BerthSummary';
import { HarborNode } from '../../generated/types.d';
import { edgesToArr } from '../../generated/utils';

type ColumnType = Column<HarborNode>;

export interface HarborListProps {
  data: Array<HarborNode>;
  loading?: boolean;
}

const HarborList = ({ data, loading }: HarborListProps) => {
  const { t } = useTranslation();

  const columns: ColumnType[] = [
    {
      Cell: ({ cell }: { cell: Cell<HarborNode> }) => (
        <InternalLink to={`/harbors/${cell.row.original.id}`}>{cell.value}</InternalLink>
      ),
      Header: t('harborList.tableHeaders.harbor') || '',
      id: 'name',
      accessor: ({ properties }) => properties?.name,
      width: COLUMN_WIDTH.XL,
    },
    {
      Header: t('harborList.tableHeaders.places') || '',
      id: 'numberOfPlaces',
      accessor: ({ properties }) => properties?.numberOfPlaces,
      width: COLUMN_WIDTH.S,
    },
    {
      Header: t('harborList.tableHeaders.freePlaces') || '',
      id: 'numberOfFreePlaces',
      accessor: ({ properties }) => properties?.numberOfPlaces,
      width: COLUMN_WIDTH.S,
    },
    {
      Cell: ({ cell }: { cell: Cell<HarborNode> }) => (
        <IconWrapper outlined icon={IconPlug} color={!cell.value ? 'disabled' : 'standard'} />
      ),
      Header: () => <IconWrapper outlined icon={IconPlug} />,
      id: 'electricity',
      accessor: ({ properties }) => edgesToArr(properties?.piers).some((pier) => !!pier?.properties?.electricity),
      width: COLUMN_WIDTH.XS,
    },
    {
      Cell: ({ cell }: { cell: Cell<HarborNode> }) => (
        <IconWrapper outlined icon={IconFence} color={!cell.value ? 'disabled' : 'standard'} />
      ),
      Header: () => <IconWrapper outlined icon={IconFence} />,
      id: 'gate',
      accessor: ({ properties }) => edgesToArr(properties?.piers).some((pier) => !!pier?.properties?.gate),
      width: COLUMN_WIDTH.XS,
    },
    {
      Cell: ({ cell }: { cell: Cell<HarborNode> }) => (
        <IconWrapper outlined icon={IconStreetLight} color={!cell.value ? 'disabled' : 'standard'} />
      ),
      Header: () => <IconWrapper outlined icon={IconStreetLight} />,
      id: 'lighting',
      accessor: ({ properties }) => edgesToArr(properties?.piers).some((pier) => !!pier?.properties?.lighting),
      width: COLUMN_WIDTH.XS,
    },
    {
      Cell: ({ cell }: { cell: Cell<HarborNode> }) => (
        <IconWrapper outlined icon={IconWaterTap} color={!cell.value ? 'disabled' : 'standard'} />
      ),
      Header: () => <IconWrapper outlined icon={IconWaterTap} />,
      id: 'water',
      accessor: ({ properties }) => edgesToArr(properties?.piers).some((pier) => !!pier?.properties?.water),
      width: COLUMN_WIDTH.XS,
    },
    {
      Cell: ({ cell }: { cell: Cell<HarborNode> }) => (
        <IconWrapper outlined icon={IconTrash} color={!cell.value ? 'disabled' : 'standard'} />
      ),
      Header: () => <IconWrapper outlined icon={IconTrash} />,
      id: 'wasteCollection',
      accessor: ({ properties }) => edgesToArr(properties?.piers).some((pier) => !!pier?.properties?.wasteCollection),
      width: COLUMN_WIDTH.XS,
    },
  ];

  return (
    <PageContent>
      <PageTitle title={t('harborList.title')} />
      <BerthSummary berthCount={1} freeCount={1} reservedCount={1} otherCount={1} offeredCount={1} />
      <Table
        data={data}
        loading={loading}
        columns={columns}
        renderTableToolsTop={(_, setters) => <GlobalSearchTableTools handleGlobalFilter={setters.setGlobalFilter} />}
        renderSubComponent={(row) => (row.original.properties ? <HarborDetails {...row.original.properties} /> : null)}
        renderMainHeader={() => t('harborList.tableHeaders.mainHeader')}
        renderEmptyStateRow={() => t('common.notification.noData.description')}
        renderPaginator={({ pageIndex, pageCount, goToPage }) => (
          <Pagination
            forcePage={pageIndex}
            pageCount={pageCount || 1}
            onPageChange={({ selected }) => goToPage(selected)}
          />
        )}
        canSelectRows
      />
    </PageContent>
  );
};

export default HarborList;
