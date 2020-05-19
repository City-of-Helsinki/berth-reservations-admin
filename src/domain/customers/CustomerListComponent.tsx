import React from 'react';
import { useTranslation } from 'react-i18next';

import Table, { COLUMN_WIDTH, Column } from '../../common/table/Table';
import InternalLink from '../../common/internalLink/InternalLink';
import CustomerDetails from './customerDetails/CustomerDetails';
import { OrganizationType } from '../../@types/__generated__/globalTypes';
import Pagination, { PaginationProps } from '../../common/pagination/Pagination';

export interface TableData {
  address?: string;
  berths?: string;
  boats?: string;
  city?: string;
  email?: string;
  id: string;
  invoice?: string;
  name: string;
  organizationType?: OrganizationType;
  phone?: string;
  postalCode?: string;
  startDate?: string;
}

type ColumnType = Column<TableData>;

export enum ORDER_BY {
  LAST_NAME_ASC = 'lastName',
  LAST_NAME_DESC = '-lastName',
}
export interface CustomerListComponentProps {
  loading: boolean;
  data: TableData[];
  pagination: PaginationProps;
  onSortingChange(sortBy: Array<{ id: string; desc?: boolean }>): void;
}

const CustomerListComponent = ({ loading, data, pagination, onSortingChange }: CustomerListComponentProps) => {
  const { t } = useTranslation();
  const columns: ColumnType[] = [
    {
      Cell: ({ cell }) => <InternalLink to={`/customers/${cell.row.original.id}`}>{cell.value}</InternalLink>,
      Header: t('customers.tableHeaders.name') || '',
      accessor: 'name',
      sortType: 'toString',
      width: COLUMN_WIDTH.M,
    },
    {
      Cell: ({ cell }) => {
        const { value } = cell;
        return value ? t([`common.organizationTypes.${value as OrganizationType}`]) : t([`common.privateCustomer`]);
      },
      Header: t('customers.tableHeaders.group') || '',
      accessor: 'organizationType',
      disableSortBy: true,
      width: COLUMN_WIDTH.S,
    },
    {
      Header: t('customers.tableHeaders.municipality') || '',
      accessor: 'city',
      disableSortBy: true,
      width: COLUMN_WIDTH.S,
    },
    {
      Header: t('customers.tableHeaders.berths') || '',
      accessor: 'berths',
      disableSortBy: true,
      width: COLUMN_WIDTH.L,
    },
    {
      Header: t('customers.tableHeaders.invoice') || '',
      accessor: 'invoice',
      disableSortBy: true,
      width: COLUMN_WIDTH.S,
    },
    {
      Header: t('customers.tableHeaders.boats') || '',
      accessor: 'boats',
      disableSortBy: true,
      width: COLUMN_WIDTH.XS,
    },
  ];

  return (
    <Table
      data={data}
      loading={loading}
      columns={columns}
      renderSubComponent={(row) => {
        return (
          <CustomerDetails
            name={row.original.name}
            address={row.original.address}
            postalCode={row.original.postalCode}
            city={row.original.city}
            phone={row.original.phone}
            email={row.original.email}
            berths={[]}
            winterStoragePlaces={[]}
            boats={[]}
            applications={[]}
            bills={[]}
            comment=""
          />
        );
      }}
      renderMainHeader={() => t('customers.tableHeaders.mainHeader')}
      renderEmptyStateRow={() => t('common.notification.noData.description')}
      renderTableToolsBottom={() => <Pagination {...pagination} />}
      onSortingChange={onSortingChange}
      autoResetSortBy={false}
      canSelectRows
    />
  );
};

export default CustomerListComponent;
