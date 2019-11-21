import React from 'react';

import Table from '../../common/table/Table';
import CustomerDetails from './CustomerDetailsComponent';

export interface CustomerData {
  comment?: string;
  contactMethod?: string;
  email?: string;
  firstName?: string;
  id: string;
  image?: string;
  invoicingType?: string;
  language?: string;
  lastName?: string;
  nickname?: string;
  phone?: string;
}

interface Props {
  data: CustomerData | any;
}

const HarborsListComponent = ({ data }: Props) => {
  const columns = [
    {
      Header: 'Jono',
      accessor: 'queue',
    },
    {
      Header: 'Asiakas',
      accessor: 'name',
    },
    {
      Header: 'Liittynyt',
      accessor: 'startDate',
    },
    {
      Header: 'Asiakasryhmä',
      accessor: 'group',
    },
    {
      Header: 'Asia',
      accessor: 'thing',
    },
    {
      Header: 'Laskuja',
      accessor: 'invoice',
    },
    {
      Header: 'Avaa',
      accessor: 'goToDetails',
    },
  ];

  const createTableData = ({ data }: any) => {
    const edges = data && data.profiles && data.profiles.edges;
    const customers: Array<CustomerData> = edges.map((edge: any) => edge.node);

    const tableData = customers.map(customer => ({
      goToDetails: 'Avaa',
      group: 'yksityinen',
      invoice: 'laskuja',
      name: `${customer.lastName} ${customer.firstName}`,
      queue: 'foo',
      startDate: '1.1.2019',
      thing: 'Sisältö',
    }));
    return tableData;
  };

  const tableData = createTableData(data);

  return (
    <Table
      data={tableData}
      columns={columns}
      renderSubComponent={row => {
        return <CustomerDetails data={row.values} />;
      }}
      renderMainHeader={() => 'Asiakkaat'}
      canSelectRows
    />
  );
};

export default HarborsListComponent;
