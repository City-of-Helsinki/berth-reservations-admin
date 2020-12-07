import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';

import RecurringInvoices, { FailedInvoices } from './RecurringInvoices';
import Modal from '../../common/modal/Modal';
import RecurringInvoicesForm from './recurringInvoicesForm/RecurringInvoicesForm';
import { RECURRING_INVOICES } from './__generated__/RECURRING_INVOICES';
import { RECURRING_INVOICES_QUERY } from './queries';
import {
  SEND_EXISTING_BERTH_INVOICES,
  SEND_EXISTING_BERTH_INVOICESVariables as SEND_EXISTING_BERTH_INVOICES_VARS,
} from './__generated__/SEND_EXISTING_BERTH_INVOICES';
import { SEND_EXISTING_BERTH_INVOICES_MUTATION } from './mutations';
import authService from '../auth/authService';
import hdsToast from '../../common/toast/hdsToast';
import { DataSummaryProps } from '../../common/dataSummary/DataSummary';

const RecurringInvoicesContainer = () => {
  const { t } = useTranslation();
  const [sendInvoiceModalOpen, setSendInvoiceModalOpen] = useState(false);

  const { loading, data } = useQuery<RECURRING_INVOICES>(RECURRING_INVOICES_QUERY);
  const [sendExistingBerthInvoices, { data: sendInvoicesData, loading: isSubmitting }] = useMutation<
    SEND_EXISTING_BERTH_INVOICES,
    SEND_EXISTING_BERTH_INVOICES_VARS
  >(SEND_EXISTING_BERTH_INVOICES_MUTATION);

  const profileScope = process.env.REACT_APP_TUNNISTAMO_SCOPE_PROFILE;
  const profileToken = JSON.parse(authService.getTokens() as string)[profileScope as string];

  const handleSubmit = async (values: { dueDate: string }) => {
    await sendExistingBerthInvoices({
      variables: {
        input: {
          dueDate: values.dueDate,
          profileToken,
        },
      },
    }).then((res) => {
      if (!res.errors) {
        hdsToast({
          type: 'success',
          labelText: 'toast.invoiceSent.label',
          text: 'toast.invoiceSent.description',
          translated: true,
        });
      }
    });
    setSendInvoiceModalOpen(false);
  };

  const getFailedInvoicesData = (data: RECURRING_INVOICES | undefined) => {
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

  const getSummaryData = (data: RECURRING_INVOICES | undefined): DataSummaryProps['labelValuePairs'] => {
    return [
      { label: t('recurringInvoices.summary.customers'), value: data?.profiles?.count },
      {
        label: t('recurringInvoices.summary.sentSuccessfully'),
        value: sendInvoicesData?.sendExistingBerthInvoices?.result?.successfulOrders?.length,
      },
      {
        label: t('recurringInvoices.summary.failedInvoicing'),
        value: data?.berthLeases?.count,
      },
    ];
  };

  return (
    <>
      <RecurringInvoices
        loading={loading}
        dataSummary={getSummaryData(data)}
        failedInvoicesTotalCount={data?.berthLeases?.count}
        failedInvoicesData={getFailedInvoicesData(data)}
        handleSend={() => setSendInvoiceModalOpen(true)}
      />
      <Modal isOpen={sendInvoiceModalOpen} toggleModal={() => setSendInvoiceModalOpen(false)}>
        <RecurringInvoicesForm
          onSubmit={handleSubmit}
          onCancel={() => setSendInvoiceModalOpen(false)}
          isSubmitting={isSubmitting}
        />
      </Modal>
    </>
  );
};

export default RecurringInvoicesContainer;
