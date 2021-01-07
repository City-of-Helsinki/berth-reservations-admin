import React from 'react';
import { useTranslation } from 'react-i18next';
import { Notification } from 'hds-react';

import Table, { Column } from '../../common/table/Table';
import styles from '../applicationView/applicationView.module.scss';
import CustomersTableTools, { CustomersTableToolsProps } from './tableTools/CustomersTableTools';
import Pagination, { PaginationProps } from '../../common/pagination/Pagination';
import { SearchBy } from '../applicationView/ApplicationView';
import { getCustomerGroupKey } from '../../common/utils/translations';
import { CustomerData } from './utils';

export interface LinkApplicationToCustomerProps {
  data: CustomerData[];
  customersTableTools: CustomersTableToolsProps<SearchBy>;
  loadingCustomers?: boolean;
  pagination: PaginationProps;
  onSortedColChange: (sortBy: { id: string; desc?: boolean } | undefined) => void;
  handleLinkCustomer: (customerId: string) => void;
}

type ColumnType = Column<CustomerData> & { accessor: keyof CustomerData };

const LinkApplicationToCustomer = ({
  customersTableTools,
  loadingCustomers,
  pagination,
  onSortedColChange,
  handleLinkCustomer,
  data,
}: LinkApplicationToCustomerProps) => {
  const { t } = useTranslation();

  const columns: ColumnType[] = [
    {
      Header: t('linkApplicationToCustomer.name') as string,
      sortType: 'toString',
      accessor: 'name',
    },
    {
      Cell: ({ cell }) => {
        const { value } = cell;
        const customerGroupKey = getCustomerGroupKey(value);
        return t(customerGroupKey);
      },
      Header: t('linkApplicationToCustomer.customerGroup') as string,
      disableSortBy: true,
      accessor: 'customerGroup',
    },
    {
      Header: t('linkApplicationToCustomer.municipality') as string,
      disableSortBy: true,
      accessor: 'city',
    },
    {
      Header: t('linkApplicationToCustomer.address') as string,
      disableSortBy: true,
      accessor: 'address',
    },
    {
      Cell: ({ cell }) => (
        <div title={cell.value !== null ? cell.value : undefined} className={styles.ellipsisCell}>
          {cell.value}
        </div>
      ),
      Header: t('linkApplicationToCustomer.berths') as string,
      disableSortBy: true,
      accessor: 'berths',
    },
    {
      Cell: ({ cell }) => (
        <div title={cell.value !== null ? cell.value : undefined} className={styles.ellipsisCell}>
          {cell.value}
        </div>
      ),
      Header: t('linkApplicationToCustomer.winterStoragePlaces') as string,
      disableSortBy: true,
      accessor: 'winterStoragePlaces',
    },
  ];

  return (
    <>
      <div className={styles.fullWidth}>
        <Notification label={t('linkApplicationToCustomer.noCustomerProfileNotification.label')} type="alert">
          {t('linkApplicationToCustomer.noCustomerProfileNotification.description')}
        </Notification>
      </div>
      <Table
        className={styles.fullWidth}
        data={data}
        loading={loadingCustomers}
        columns={columns}
        renderMainHeader={() => t('linkApplicationToCustomer.mainHeader')}
        renderTableToolsTop={({ selectedRowIds }) => {
          const selection = Object.keys(selectedRowIds);
          const onLinkCustomer = selection.length ? () => handleLinkCustomer(selection[0]) : undefined;

          return <CustomersTableTools {...customersTableTools} handleLinkCustomer={onLinkCustomer} />;
        }}
        renderTableToolsBottom={() => <Pagination {...pagination} className={styles.fullWidth} />}
        renderEmptyStateRow={() => <div>{t('linkApplicationToCustomer.emptyState')}</div>}
        onSortedColChange={onSortedColChange}
        canSelectOneRow
      />
    </>
  );
};

export default LinkApplicationToCustomer;
