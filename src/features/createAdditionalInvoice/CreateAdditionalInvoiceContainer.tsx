import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';

import CreateAdditionalInvoiceForm, { AdditionalInvoiceFormValues } from './CreateAdditionalInvoiceForm';
import { BerthLease } from '../customerView/types';
import { ADDITIONAL_SERVICES_QUERY } from './queries';
import { ADDITIONAL_SERVICES } from './__generated__/ADDITIONAL_SERVICES';
import { getBillableAdditionalProducts } from './utils';
import { AdditionalService } from '../pricing/additionalServicePricing/AdditionalServicePricing';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import { CREATE_ADDITIONAL_INVOICE_MUTATION, DELETE_ADDITIONAL_INVOICE_MUTATION } from './mutations';
import {
  CREATE_ADDITIONAL_INVOICE,
  CREATE_ADDITIONAL_INVOICEVariables as CREATE_ADDITIONAL_INVOICE_VARS,
} from './__generated__/CREATE_ADDITIONAL_INVOICE';
import SendAdditionalInvoiceForm from './SendAdditionalInvoiceForm';
import {
  DELETE_ADDITIONAL_INVOICE,
  DELETE_ADDITIONAL_INVOICEVariables as DELETE_ADDITIONAL_INVOICE_VARS,
} from './__generated__/DELETE_ADDITIONAL_INVOICE';
import {
  APPROVE_ORDERS,
  APPROVE_ORDERSVariables as APPROVE_ORDERS_VARS,
} from '../../common/mutations/__generated__/APPROVE_ORDERS';
import { APPROVE_ORDERS_MUTATION } from '../../common/mutations/approveOrders';
import hdsToast from '../../common/toast/hdsToast';

interface CreateAdditionalInvoiceContainerProps {
  customerId: string;
  email?: string | null | undefined;
  closeModal: () => void;
  berthLeases: BerthLease[];
}

const CreateAdditionalInvoiceContainer = ({
  customerId,
  email,
  closeModal,
  berthLeases,
}: CreateAdditionalInvoiceContainerProps) => {
  const { loading: loadingAdditionalProducts, data } = useQuery<ADDITIONAL_SERVICES>(ADDITIONAL_SERVICES_QUERY);

  const additionalProducts: AdditionalService[] = getBillableAdditionalProducts(data);

  const [createAdditionalInvoice, { loading: isCreatingInvoice, data: createdOrder }] = useMutation<
    CREATE_ADDITIONAL_INVOICE,
    CREATE_ADDITIONAL_INVOICE_VARS
  >(CREATE_ADDITIONAL_INVOICE_MUTATION);

  const [deleteAdditionalInvoice, { loading: isDeletingInvoice }] = useMutation<
    DELETE_ADDITIONAL_INVOICE,
    DELETE_ADDITIONAL_INVOICE_VARS
  >(DELETE_ADDITIONAL_INVOICE_MUTATION);

  const [approveOrder, { loading: isSendingInvoice }] = useMutation<APPROVE_ORDERS, APPROVE_ORDERS_VARS>(
    APPROVE_ORDERS_MUTATION
  );

  const orderId = createdOrder ? (createdOrder?.createAdditionalProductOrder?.order?.id as string) : null;

  if (loadingAdditionalProducts || isCreatingInvoice || isDeletingInvoice || isSendingInvoice) {
    return <LoadingSpinner isLoading={true} />;
  }

  const handleCreateInvoice = (values: AdditionalInvoiceFormValues) => {
    createAdditionalInvoice({
      variables: {
        input: {
          leaseId: values.leaseId as string,
          additionalProductId: values.additionalProductId as string,
          customerId,
        },
      },
    });
  };
  const handleCancelSendInvoice = () => {
    deleteAdditionalInvoice({
      variables: {
        input: {
          id: orderId as string,
        },
      },
    }).then(closeModal);
  };
  const handleSendInvoice = async (values: { dueDate: string }) => {
    await approveOrder({
      variables: {
        input: {
          dueDate: values.dueDate,
          orders: [
            {
              email: email as string,
              orderId: orderId as string,
            },
          ],
        },
      },
    }).then((res) => {
      if (!res.errors) {
        hdsToast({
          type: 'success',
          labelText: 'toast.additionalInvoiceSent.label',
          text: 'toast.additionalInvoiceSent.description',
          translated: true,
        });
      }
      closeModal();
    });
  };

  return (
    <>
      {createdOrder ? (
        <SendAdditionalInvoiceForm
          onCancel={handleCancelSendInvoice}
          onSubmit={handleSendInvoice}
          order={createdOrder?.createAdditionalProductOrder?.order}
          email={email}
        />
      ) : (
        <CreateAdditionalInvoiceForm
          berthLeases={berthLeases}
          additionalProducts={additionalProducts}
          onSubmit={handleCreateInvoice}
          onCancel={closeModal}
          email={email}
        />
      )}
    </>
  );
};

export default CreateAdditionalInvoiceContainer;
