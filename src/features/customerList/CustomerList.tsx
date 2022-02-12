import React from 'react';
import { useTranslation } from 'react-i18next';
import { Cell, SortingRule } from 'react-table';

import PageTitle from '../../common/pageTitle/PageTitle';
import Table, { Column, COLUMN_WIDTH } from '../../common/table/Table';
import { CustomerData } from './types';
import Pagination, { PaginationProps } from '../../common/pagination/Pagination';
import CustomerListTableTools, { CustomerListTableToolsProps } from './tableTools/CustomerListTableTools';
import InternalLink from '../../common/internalLink/InternalLink';
import { formatDate } from '../../common/utils/format';
import CustomerDetails from './customerDetails/CustomerDetails';
import { getSelectedRowIds } from '../../common/utils/getSelectedRowIds';
import PageContent from '../../common/pageContent/PageContent';
import { getCustomerGroupKey } from '../../common/utils/translations';
import WrappingTableCell from '../../common/wrappingTableCell/WrappingTableCell';
import CustomerListTableFilters from './customerListTableFilters/CustomerListTableFilters';

export enum SearchBy {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  EMAIL = 'email',
  ADDRESS = 'address',
}

type ColumnType = Column<CustomerData>;

export interface CustomerListProps {
  loading: boolean;
  data: CustomerData[];
  pagination: PaginationProps;
  sortBy: SortingRule<CustomerData>[];
  tableTools: Omit<CustomerListTableToolsProps<SearchBy>, 'selectedCustomerIds' | 'clearSelectedRows'>;
  onSortedColsChange: (sortedCol: SortingRule<CustomerData>[]) => void;
}

const CustomerList = ({ loading, data, pagination, tableTools, onSortedColsChange, sortBy }: CustomerListProps) => {
  const { t, i18n } = useTranslation();
  const columns: ColumnType[] = [
    {
      Cell: ({ cell }) => (
        <InternalLink to={`/customers/${cell.row.original.id}`}>
          {cell.value.localeCompare(' ') !== 0 ? cell.value : t('common.emptyName')}
        </InternalLink>
      ),
      Header: t('customerList.tableHeaders.name') || '',
      accessor: 'name',
      sortType: 'toString',
      width: COLUMN_WIDTH.M,
      minWidth: COLUMN_WIDTH.M,
    },
    {
      Cell: ({ cell }) => {
        const { value } = cell;
        const key = getCustomerGroupKey(value);
        return t(key);
      },
      Header: t('customerList.tableHeaders.group') || '',
      accessor: 'customerGroup',
      disableSortBy: true,
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
    },
    {
      Header: t('customerList.tableHeaders.municipality') || '',
      accessor: 'city',
      disableSortBy: true,
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
    },
    {
      Cell: ({ cell }: { cell: Cell<CustomerData, string> }) => <WrappingTableCell>{cell.value}</WrappingTableCell>,
      Header: t('customerList.tableHeaders.berths') || '',
      id: 'berths',
      accessor: ({ berthLeases }): string =>
        berthLeases
          .filter((berthLease) => berthLease.isActive)
          .map((berthLease) => berthLease.title)
          .join(', '),
      disableSortBy: true,
      width: COLUMN_WIDTH.L,
      minWidth: COLUMN_WIDTH.L,
    },
    {
      Cell: ({ cell }: { cell: Cell<CustomerData, string> }) => <WrappingTableCell>{cell.value}</WrappingTableCell>,
      Header: t('customerList.tableHeaders.applications') || '',
      id: 'applications',
      accessor: ({ applications }) =>
        applications.map((application) => formatDate(application.createdAt, i18n.language)).join(' + '),
      disableSortBy: true,
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
    },
    {
      Header: t('customerList.tableHeaders.invoice') || '',
      accessor: 'invoicesColumnData',
      disableSortBy: true,
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
    },
    {
      Header: t('customerList.tableHeaders.boats') || '',
      id: 'boats',
      accessor: ({ boats }) => boats.length,
      disableSortBy: true,
      width: COLUMN_WIDTH.XS,
      minWidth: COLUMN_WIDTH.XS,
    },
  ];

  // Without memoization the CustomerListTableFilters component re-mounts
  // unnecessarily which is visible to the user as flickering when data updates.
  const renderTableFilters = React.useMemo(() => () => <CustomerListTableFilters />, []);

  return (
    <PageContent>
      <PageTitle title={t('customerList.title')} />
      <Table
        data={data}
        loading={loading}
        columns={columns}
        initialState={{ sortBy }}
        renderSubComponent={(row) => {
          return (
            <CustomerDetails
              name={row.original.organization ? row.original.organization.name : row.original.name}
              address={row.original.organization ? row.original.organization.address : row.original.address}
              postalCode={row.original.organization ? row.original.organization.postalCode : row.original.postalCode}
              city={row.original.organization ? row.original.organization.city : row.original.city}
              phone={row.original.phone}
              email={row.original.email}
              berths={row.original.berthLeases}
              winterStoragePlaces={[]}
              boats={row.original.boats}
              applications={row.original.applications}
              invoices={[]}
              comment={row.original.comment}
              customerGroup={row.original.customerGroup}
            />
          );
        }}
        renderMainHeader={() => t('customerList.tableHeaders.mainHeader')}
        renderTableToolsTop={({ selectedRowIds }, { resetSelectedRows }) => (
          <CustomerListTableTools
            {...tableTools}
            selectedCustomerIds={getSelectedRowIds(selectedRowIds)}
            clearSelectedRows={resetSelectedRows}
          />
        )}
        renderTableFilters={renderTableFilters}
        renderEmptyStateRow={() => t('common.notification.noData.description')}
        renderTableToolsBottom={() => <Pagination {...pagination} />}
        onSortedColsChange={onSortedColsChange}
        manualSortBy={true}
        canSelectRows
      />
    </PageContent>
  );
};

export default CustomerList;
