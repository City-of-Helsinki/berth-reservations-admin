import React from 'react';
import { Column } from 'react-table';
import { TFunction } from 'i18next';

import Table from '../../../../common/table/Table';
import InternalLink from '../../../../common/internalLink/InternalLink';

export interface TableData {
  id: string;
  goToDetails?: string;
  group?: string;
  invoice?: string;
  name: string;
  queue?: string;
  startDate?: string;
  thing?: string;
}

type ColumnType = Column<TableData> & { accessor: keyof TableData };
export interface CustomerListComponentProps {
  data: TableData[];
  t: TFunction;
}

const CustomerListComponent = ({ data, t }: CustomerListComponentProps) => {
  const columns: ColumnType[] = [
    {
      Header: t('customers.tableHeaders.queue'),
      accessor: 'queue',
    },
    {
      Cell: ({ cell }) => {
        return (
          <InternalLink to={`/customers/${cell.row.original.id}}`}>
            {cell.value}
          </InternalLink>
        );
      },
      Header: t('customers.tableHeaders.name'),
      accessor: 'name',
    },
    {
      Header: t('customers.tableHeaders.startDate'),
      accessor: 'startDate',
    },
    {
      Header: t('customers.tableHeaders.group'),
      accessor: 'group',
    },
    {
      Header: t('customers.tableHeaders.thing'),
      accessor: 'thing',
    },
    {
      Header: t('customers.tableHeaders.invoice'),
      accessor: 'invoice',
    },
    {
      Header: t('customers.tableHeaders.goToDetails'),
      accessor: 'goToDetails',
    },
  ];

  return (
    <Table
      data={data}
      columns={columns}
      renderSubComponent={() => <div>placeholder</div>}
      renderMainHeader={() => t('customers.tableHeaders.mainHeader')}
      canSelectRows
    />
  );
};

export default CustomerListComponent;
