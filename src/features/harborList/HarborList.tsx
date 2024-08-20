import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconTrash } from 'hds-react';
import { atom, useRecoilState } from 'recoil';
import { SortingRule } from 'react-table';
import Table, { Column, COLUMN_WIDTH } from '../../common/table/Table';
import HarborDetails from './harborDetails/HarborDetails';
import InternalLink from '../../common/internalLink/InternalLink';
import IconWrapper from '../../common/iconWrapper/IconWrapper';
import GlobalSearchTableTools from '../../common/tableTools/globalSearchTableTools/GlobalSearchTableTools';
import Pagination from '../../common/pagination/Pagination';
import PageTitle from '../../common/pageTitle/PageTitle';
import { HarborData } from './types';
import { IconFence, IconPlug, IconStreetLight, IconWaterTap } from '../../common/icons';
import PageContent from '../../common/pageContent/PageContent';
import { calculateBerthSummary } from './utils';
import DataSummary from '../../common/dataSummary/DataSummary';
import Section from '../../common/section/Section';

type ColumnType = Column<HarborData> & { accessor: keyof HarborData };

export interface HarborListProps {
  data: Array<HarborData>;
  loading?: boolean;
}

const sortByAtom = atom<SortingRule<HarborData>[]>({
  key: 'HarborList_sortByAtom',
  default: [{ id: 'name', desc: false }],
});

const globalFilterAtom = atom<string | undefined>({
  key: 'HarborList_globalFilterAtom',
  default: undefined,
});

const HarborList = ({ data, loading }: HarborListProps) => {
  const { t } = useTranslation();
  const [sortBy, setSortBy] = useRecoilState(sortByAtom);
  const [globalFilter, setGlobalFilter] = useRecoilState(globalFilterAtom);

  const columns: ColumnType[] = [
    {
      Cell: ({ cell }) => <InternalLink to={`/harbors/${cell.row.original.id}`}>{cell.value}</InternalLink>,
      Header: t('harborList.tableHeaders.harbor') || '',
      accessor: 'name',
      width: COLUMN_WIDTH.XL,
      minWidth: COLUMN_WIDTH.XL,
    },
    {
      Header: t('harborList.tableHeaders.places') || '',
      accessor: 'numberOfPlaces',
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
      sortDescFirst: true,
    },
    {
      Header: t('harborList.tableHeaders.freePlaces') || '',
      accessor: 'numberOfFreePlaces',
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
      sortDescFirst: true,
    },
    {
      Cell: ({ cell }) => <IconWrapper outlined icon={IconPlug} color={!cell.value ? 'disabled' : 'standard'} />,
      Header: () => <IconWrapper outlined icon={IconPlug} />,
      accessor: 'electricity',
      width: COLUMN_WIDTH.XS,
      minWidth: COLUMN_WIDTH.XS,
      sortDescFirst: true,
    },
    {
      Cell: ({ cell }) => <IconWrapper outlined icon={IconFence} color={!cell.value ? 'disabled' : 'standard'} />,
      Header: () => <IconWrapper outlined icon={IconFence} />,
      accessor: 'gate',
      width: COLUMN_WIDTH.XS,
      minWidth: COLUMN_WIDTH.XS,
      sortDescFirst: true,
    },
    {
      Cell: ({ cell }) => <IconWrapper outlined icon={IconStreetLight} color={!cell.value ? 'disabled' : 'standard'} />,
      Header: () => <IconWrapper outlined icon={IconStreetLight} />,
      accessor: 'lighting',
      width: COLUMN_WIDTH.XS,
      minWidth: COLUMN_WIDTH.XS,
      sortDescFirst: true,
    },
    {
      Cell: ({ cell }) => <IconWrapper outlined icon={IconWaterTap} color={!cell.value ? 'disabled' : 'standard'} />,
      Header: () => <IconWrapper outlined icon={IconWaterTap} />,
      accessor: 'water',
      width: COLUMN_WIDTH.XS,
      minWidth: COLUMN_WIDTH.XS,
      sortDescFirst: true,
    },
    {
      Cell: ({ cell }) => <IconWrapper outlined icon={IconTrash} color={!cell.value ? 'disabled' : 'standard'} />,
      Header: () => <IconWrapper outlined icon={IconTrash} />,
      accessor: 'wasteCollection',
      width: COLUMN_WIDTH.XS,
      minWidth: COLUMN_WIDTH.XS,
      sortDescFirst: true,
    },
  ];

  const { berthCount, freeCount, reservedCount, otherCount, offeredCount } = calculateBerthSummary(data);

  const dataSummaryPairs = [
    { label: t('harborList.berthSummary.berthCount'), value: berthCount },
    { label: t('harborList.berthSummary.freeCount'), value: freeCount },
    { label: t('harborList.berthSummary.reservedCount'), value: reservedCount },
    { label: t('harborList.berthSummary.otherCount'), value: otherCount },
    { label: t('harborList.berthSummary.offeredCount'), value: offeredCount },
  ];

  return (
    <PageContent>
      <PageTitle title={t('harborList.title')} />
      <Section>
        <DataSummary labelValuePairs={dataSummaryPairs} />
      </Section>
      <Table
        data={data}
        loading={loading}
        columns={columns}
        initialState={{ sortBy, globalFilter }}
        renderTableToolsTop={(_, setters) => (
          <GlobalSearchTableTools
            defaultValue={globalFilter}
            handleGlobalFilter={(filter) => {
              setGlobalFilter(filter);
              setters.setGlobalFilter(filter);
            }}
          />
        )}
        renderSubComponent={(row) => <HarborDetails {...row.original} />}
        renderMainHeader={() => t('harborList.tableHeaders.mainHeader')}
        renderEmptyStateRow={() => t('common.notification.noData.description')}
        renderPaginator={({ pageIndex, pageCount, goToPage }) => (
          <Pagination
            pageIndex={pageIndex}
            pageCount={pageCount || 1}
            onPageChange={({ selected }) => goToPage(selected)}
          />
        )}
        canSelectRows
        onSortedColsChange={(sortedCol) => setSortBy(sortedCol)}
      />
    </PageContent>
  );
};

export default HarborList;
