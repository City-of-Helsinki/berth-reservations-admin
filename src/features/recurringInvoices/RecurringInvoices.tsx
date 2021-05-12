import React from 'react';
import { useTranslation } from 'react-i18next';
import { Cell, Row } from 'react-table';

import PageContent from '../../common/pageContent/PageContent';
import PageTitle from '../../common/pageTitle/PageTitle';
import DataSummary, { DataSummaryProps } from '../../common/dataSummary/DataSummary';
import Button from '../../common/button/Button';
import Table, { Column, COLUMN_WIDTH } from '../../common/table/Table';
import Text from '../../common/text/Text';
import InternalLink from '../../common/internalLink/InternalLink';
import Section from '../../common/section/Section';
import Pagination from '../../common/pagination/Pagination';
import styles from './recurringInvoices.module.scss';
import { FailedInvoices } from './types';

export interface RecurringInvoicesProps<T extends FailedInvoices> {
  dataSummary: DataSummaryProps['labelValuePairs'];
  failedInvoicesData: T[];
  loading: boolean;
  placeAccessor: keyof T;
  placeLabelKey: string;
  sendButtonLabelKey: string;
  titleKey: string;
  handleSend(dueDate: string | null): void;
}

const RecurringInvoices = <T extends FailedInvoices>({
  dataSummary,
  failedInvoicesData,
  handleSend,
  loading,
  placeAccessor,
  placeLabelKey,
  sendButtonLabelKey,
  titleKey,
}: RecurringInvoicesProps<T>) => {
  const { t } = useTranslation();

  const failedInvoicesCols: Column<T>[] = [
    {
      Header: <Text className={styles.marginLeft}>{t('recurringInvoices.failedInvoicesTable.name')}</Text>,
      accessor: 'customerName',
      width: COLUMN_WIDTH.L,
      minWidth: COLUMN_WIDTH.M,
      Cell: ({ row, cell }: { row: Row<T>; cell: Cell<T, T['customerName']> }) => (
        <InternalLink className={styles.marginLeft} to={`/customers/${row.original.customerId}`}>
          {cell.value.localeCompare(' ') !== 0 ? cell.value : t('common.emptyName')}
        </InternalLink>
      ),
    },
    {
      Header: t(placeLabelKey) ?? '',
      accessor: placeAccessor,
    },
    {
      Header: t('recurringInvoices.failedInvoicesTable.failureReason') ?? '',
      accessor: 'failureReason',
      Cell: ({ cell }: { cell: Cell<T, T['customerName']> }) => <Text color="critical">{cell.value}</Text>,
    },
  ];

  return (
    <PageContent>
      <PageTitle title={t(titleKey)} />
      <Section>
        <Button onClick={() => handleSend(null)}>{t(sendButtonLabelKey)}</Button>
      </Section>
      <Section>
        <DataSummary labelValuePairs={dataSummary} />
      </Section>
      <p className={styles.failureInstructions}>{t('recurringInvoices.failureInstructions')}</p>
      <Table
        columns={failedInvoicesCols}
        data={failedInvoicesData}
        initialState={{ sortBy: [{ id: 'customerName', desc: false }] }}
        renderMainHeader={() => t('recurringInvoices.failedInvoicesTable.header')}
        renderEmptyStateRow={() => t('recurringInvoices.failedInvoicesTable.emptyState')}
        renderPaginator={({ pageIndex, pageCount, goToPage }) => (
          <Pagination
            pageIndex={pageIndex}
            pageCount={pageCount || 1}
            onPageChange={({ selected }) => goToPage(selected)}
          />
        )}
        loading={loading}
      />
    </PageContent>
  );
};

export default RecurringInvoices;
