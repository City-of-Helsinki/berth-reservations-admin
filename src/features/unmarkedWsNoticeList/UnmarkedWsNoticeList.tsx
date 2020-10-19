import React from 'react';
import { useTranslation } from 'react-i18next';

import PageTitle from '../../common/pageTitle/PageTitle';
import PageContent from '../../common/pageContent/PageContent';
import InternalLink from '../../common/internalLink/InternalLink';
import Table, { Column, COLUMN_WIDTH } from '../../common/table/Table';
import { formatDate } from '../../common/utils/format';
import StatusLabel from '../../common/statusLabel/StatusLabel';
import { APPLICATION_STATUS } from '../../common/utils/constants';
import { ApplicationStatus } from '../../@types/__generated__/globalTypes';
import { UnmarkedWinterStorageNotice } from './utils';
import { SortedCol } from '../../common/utils/useBackendSorting';
import UnmarkedWsNoticeDetails from '../../common/unmarkedWsNoticeDetails/UnmarkedWsNoticeDetails';
import Pagination from '../../common/pagination/Pagination';
import Grid from '../../common/grid/Grid';

export interface UnmarkedWsNoticeListProps {
  notices: UnmarkedWinterStorageNotice[];
  loading: boolean;
  pageCount: number;
  pageIndex: number;
  goToPage(page: number): void;
  onSortedColChange(sortedCol: SortedCol | undefined): void;
}

type ColumnType = Column<UnmarkedWinterStorageNotice>;

const UnmarkedWsNoticeList = ({
  notices,
  loading,
  pageCount,
  pageIndex,
  goToPage,
  onSortedColChange,
}: UnmarkedWsNoticeListProps) => {
  const { t, i18n } = useTranslation();
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
    },
    {
      Cell: ({ cell }) => formatDate(cell.value, i18n.language),
      Header: t('applicationList.tableHeaders.pvm') as string,
      accessor: 'createdAt',
      width: COLUMN_WIDTH.S,
    },
    {
      Header: t('common.terminology.winterStorageArea') as string,
      accessor: ({ choice }) => choice.winterStorageAreaName,
      id: 'choice',
      disableSortBy: true,
      width: COLUMN_WIDTH.S,
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
    },
  ];

  return (
    <PageContent>
      <PageTitle title={t('unmarkedWsNotices.list.title')} />
      <Table
        columns={columns}
        data={notices}
        loading={loading}
        initialState={{ sortBy: [{ id: 'createdAt', desc: false }] }}
        renderSubComponent={(row) => (
          <Grid colsCount={3}>
            <UnmarkedWsNoticeDetails {...row.original} />
          </Grid>
        )}
        renderMainHeader={() => t('unmarkedWsNotices.list.title')}
        renderTableToolsBottom={() => (
          <Pagination forcePage={pageIndex} pageCount={pageCount} onPageChange={({ selected }) => goToPage(selected)} />
        )}
        renderEmptyStateRow={() => t('common.notification.noData.description')}
        onSortedColChange={onSortedColChange}
        canSelectRows
      />
    </PageContent>
  );
};

export default UnmarkedWsNoticeList;
