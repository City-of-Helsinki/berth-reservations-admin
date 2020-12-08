import i18next from 'i18next';

import { RECURRING_INVOICES } from './__generated__/RECURRING_INVOICES';
import { FailedInvoices } from './RecurringInvoices';
import { SEND_EXISTING_BERTH_INVOICES } from './__generated__/SEND_EXISTING_BERTH_INVOICES';

export const getFailedInvoicesData = (data: RECURRING_INVOICES | undefined) => {
  if (!data?.berthLeases) return [];
  return data.berthLeases.edges.reduce<FailedInvoices[]>((acc, edge) => {
    if (!edge?.node) return acc;

    const failedInvoice = {
      id: edge.node.id,
      customerId: edge.node.customer.id,
      customerName: `${edge.node.customer.firstName} ${edge.node.customer.lastName}`,
      harbor: edge.node.berth.pier.properties?.harbor.properties?.name ?? '',
      failureReason: edge.node.comment,
    };

    return [...acc, failedInvoice];
  }, []);
};

export const getSummaryData = (
  recurringInvoicesData: RECURRING_INVOICES | undefined,
  sentInvoicesData: SEND_EXISTING_BERTH_INVOICES | undefined,
  loading: boolean
) => {
  const totalCustomersCount = recurringInvoicesData?.sendBerthInvoicePreview?.expectedLeases;
  const sentSuccessfullyCount = sentInvoicesData?.sendExistingBerthInvoices?.result?.successfulOrders?.length;
  const failedInvoicingCount = recurringInvoicesData?.berthLeases?.count;

  return [
    {
      label: i18next.t('recurringInvoices.summary.invoicesLeft'),
      value: !loading ? totalCustomersCount : undefined,
    },
    {
      label: i18next.t('recurringInvoices.summary.sentSuccessfully'),
      value: !loading ? sentSuccessfullyCount : undefined,
    },
    {
      label: i18next.t('recurringInvoices.summary.failedInvoicing'),
      value: !loading ? failedInvoicingCount : undefined,
    },
  ];
};
