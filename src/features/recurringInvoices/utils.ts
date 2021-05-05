import i18next from 'i18next';

import { RECURRING_BERTH_INVOICES } from './__generated__/RECURRING_BERTH_INVOICES';
import { FailedBerthInvoices, FailedWinterStorageInvoices } from './types';
import { RECURRING_WINTER_STORAGE_INVOICES } from './__generated__/RECURRING_WINTER_STORAGE_INVOICES';

export const getFailedBerthInvoicesData = (data: RECURRING_BERTH_INVOICES | undefined): FailedBerthInvoices[] => {
  if (!data?.berthLeases) return [];
  return data.berthLeases.edges.reduce<FailedBerthInvoices[]>((acc, edge) => {
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

export const getFailedWinterStorageInvoicesData = (
  data: RECURRING_WINTER_STORAGE_INVOICES | undefined
): FailedWinterStorageInvoices[] => {
  if (!data?.winterStorageLeases) return [];
  return data.winterStorageLeases.edges.reduce<FailedWinterStorageInvoices[]>((acc, edge) => {
    if (!edge?.node?.place) return acc;

    const failedInvoice = {
      id: edge.node.id,
      customerId: edge.node.customer.id,
      customerName: `${edge.node.customer.firstName} ${edge.node.customer.lastName}`,
      winterStorageArea: edge.node.place.winterStorageSection.properties?.area.properties?.name ?? '',
      failureReason: edge.node.comment,
    };

    return [...acc, failedInvoice];
  }, []);
};

export const getSummaryData = (
  recurringInvoicesData: RECURRING_BERTH_INVOICES | RECURRING_WINTER_STORAGE_INVOICES | undefined,
  loading: boolean
) => {
  return [
    {
      label: i18next.t('recurringInvoices.summary.sent'),
      value: recurringInvoicesData?.sent?.count ?? undefined,
    },
    {
      label: i18next.t('recurringInvoices.summary.failed'),
      value: recurringInvoicesData?.failed?.count ?? undefined,
    },
    {
      label: i18next.t('recurringInvoices.summary.paid'),
      value: recurringInvoicesData?.paid?.count ?? undefined,
    },
    {
      label: i18next.t('recurringInvoices.summary.pending'),
      value: recurringInvoicesData?.pending?.count ?? undefined,
    },
  ];
};
