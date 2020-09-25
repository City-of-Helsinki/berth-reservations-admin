import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { PureQueryOptions } from 'apollo-client';

import SendInvoiceForm from './SendInvoiceForm';
import { APPROVE_ORDERS, APPROVE_ORDERSVariables as APPROVE_ORDERS_VARS } from './__generated__/APPROVE_ORDERS';
import { APPROVE_ORDERS_MUTATION } from './mutations';

export type SendInvoiceFormContainerProps = {
  orderId: string;
  email: string | null;
  refetchQueries: PureQueryOptions[] | string[];
  onCancel: () => void;
  onSubmit: () => void;
};

const SendInvoiceFormContainer = ({
  orderId,
  email,
  refetchQueries,
  onSubmit,
  onCancel,
}: SendInvoiceFormContainerProps) => {
  const [approveOrder, { loading: isSubmitting }] = useMutation<APPROVE_ORDERS, APPROVE_ORDERS_VARS>(
    APPROVE_ORDERS_MUTATION,
    {
      refetchQueries,
    }
  );

  const handleSubmit = async (values: { dueDate: string }) => {
    if (email === null) return false;
    await approveOrder({
      variables: {
        input: {
          dueDate: values.dueDate,
          orders: [
            {
              email,
              orderId,
            },
          ],
        },
      },
    });
    onSubmit();
  };

  return <SendInvoiceForm email={email} onSubmit={handleSubmit} onCancel={onCancel} isSubmitting={isSubmitting} />;
};

export default SendInvoiceFormContainer;
