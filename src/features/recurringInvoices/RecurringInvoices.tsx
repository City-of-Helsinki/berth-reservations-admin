import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

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

export interface FailedInvoices {
  id: string;
  customerId: string;
  customerName: string;
  harbor: string;
  failureReason: string;
}

export interface RecurringInvoicesProps {
  loading: boolean;
  dataSummary: DataSummaryProps['labelValuePairs'];
  failedInvoicesCount: number | undefined;
  failedInvoicesData: FailedInvoices[];
  handleSend(dueDate: string | null): void;
}

const RecurringInvoices = ({
  loading,
  dataSummary,
  failedInvoicesCount,
  failedInvoicesData,
  handleSend,
}: RecurringInvoicesProps) => {
  const { t } = useTranslation();

  const failedInvoicesCols: Column<FailedInvoices>[] = [
    {
      Header: <Text className={styles.marginLeft}>{t('recurringInvoices.failedInvoicesTable.name')}</Text>,
      accessor: 'customerName',
      width: COLUMN_WIDTH.L,
      minWidth: COLUMN_WIDTH.M,
      Cell: ({ row, cell }) => (
        <InternalLink className={styles.marginLeft} to={`/customers/${row.original.customerId}`}>
          {cell.value}
        </InternalLink>
      ),
    },
    {
      Header: t('recurringInvoices.failedInvoicesTable.harbor') ?? '',
      accessor: 'harbor',
    },
    {
      Header: t('recurringInvoices.failedInvoicesTable.failureReason') ?? '',
      accessor: 'failureReason',
      Cell: ({ cell }) => <Text color="critical">{cell.value}</Text>,
    },
  ];

  return (
    <PageContent>
      <PageTitle title={t('recurringInvoices.title')} />
      <Section>
        <Button onClick={() => handleSend(null)}>{t('recurringInvoices.sendInvoices')}</Button>
      </Section>
      <Section>
        <DataSummary labelValuePairs={dataSummary} />
      </Section>
      <p>
        <Trans
          i18nKey="recurringInvoices.failureInstructions"
          values={{ failedInvoicesCount: failedInvoicesCount ?? '-' }}
        >
          ... <Text as="strong">failedInvoicesCount</Text> ...
        </Trans>
      </p>
      <Table
        columns={failedInvoicesCols}
        data={failedInvoicesData}
        renderMainHeader={() => t('recurringInvoices.failedInvoicesTable.header')}
        renderEmptyStateRow={() => t('recurringInvoices.failedInvoicesTable.emptyState')}
        renderPaginator={({ pageIndex, pageCount, goToPage }) => (
          <Pagination
            forcePage={pageIndex}
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
