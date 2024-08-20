import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { RECURRING_WINTER_STORAGE_INVOICES_QUERY } from './queries';
import { RECURRING_WINTER_STORAGE_INVOICES } from './__generated__/RECURRING_WINTER_STORAGE_INVOICES';
import { SEND_EXISTING_WINTER_STORAGE_INVOICES_MUTATION } from './mutations';
import {
  SEND_EXISTING_WINTER_STORAGE_INVOICES,
  SEND_EXISTING_WINTER_STORAGE_INVOICESVariables as SEND_EXISTING_WINTER_STORAGE_INVOICES_VARS,
} from './__generated__/SEND_EXISTING_WINTER_STORAGE_INVOICES';
import hdsToast from '../../common/toast/hdsToast';
import RecurringInvoices from './RecurringInvoices';
import Modal from '../../common/modal/Modal';
import RecurringInvoicesForm from './recurringInvoicesForm/RecurringInvoicesForm';
import { getProfileToken } from '../../common/utils/auth';
import { getFailedWinterStorageInvoicesData, getSummaryData } from './utils';

const RecurringWinterStorageInvoicesContainer = () => {
  const [sendInvoiceModalOpen, setSendInvoiceModalOpen] = useState(false);

  const { loading, data } = useQuery<RECURRING_WINTER_STORAGE_INVOICES>(RECURRING_WINTER_STORAGE_INVOICES_QUERY, {
    variables: {
      seasonYear: new Date().getFullYear(),
    },
  });
  const [sendExistingBerthInvoices, { loading: isSubmitting }] = useMutation<
    SEND_EXISTING_WINTER_STORAGE_INVOICES,
    SEND_EXISTING_WINTER_STORAGE_INVOICES_VARS
  >(SEND_EXISTING_WINTER_STORAGE_INVOICES_MUTATION);

  const handleSubmit = async (values: { dueDate: string }) => {
    await sendExistingBerthInvoices({
      variables: {
        input: {
          dueDate: values.dueDate,
          profileToken: getProfileToken(),
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

  return (
    <>
      <RecurringInvoices
        dataSummary={getSummaryData(data, loading)}
        failedInvoicesData={getFailedWinterStorageInvoicesData(data)}
        handleSend={() => setSendInvoiceModalOpen(true)}
        loading={loading}
        placeAccessor="winterStorageArea"
        placeLabelKey={'common.terminology.winterStorageArea'}
        sendButtonLabelKey={'recurringInvoices.sendWinterStorageInvoices'}
        titleKey={'recurringInvoices.winterStorageInvoicesTitle'}
      />
      <Modal isOpen={sendInvoiceModalOpen} toggleModal={() => setSendInvoiceModalOpen(false)}>
        <RecurringInvoicesForm
          descriptionKey={'recurringInvoices.form.descriptionWinterStorage'}
          onSubmit={handleSubmit}
          onCancel={() => setSendInvoiceModalOpen(false)}
          isSubmitting={isSubmitting}
        />
      </Modal>
    </>
  );
};

export default RecurringWinterStorageInvoicesContainer;
