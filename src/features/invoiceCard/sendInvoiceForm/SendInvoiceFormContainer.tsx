import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { PureQueryOptions } from 'apollo-client';

import SendInvoiceForm from './SendInvoiceForm';
import hdsToast from '../../../common/toast/hdsToast';
import { APPROVE_ORDERS_MUTATION } from '../../../common/mutations/approveOrders';
import {
  APPROVE_ORDERS,
  APPROVE_ORDERSVariables as APPROVE_ORDERS_VARS,
} from '../../../common/mutations/__generated__/APPROVE_ORDERS';
import { getProfileToken } from '../../../common/utils/auth';
import {
  RESEND_ORDER,
  RESEND_ORDERVariables as RESEND_ORDER_VARS,
} from '../../../common/mutations/__generated__/RESEND_ORDER';
import { RESEND_ORDER_MUTATION } from '../../../common/mutations/resendOrder';

export type SendInvoiceFormContainerProps = {
  orders: Array<{ orderId: string; email: string | null }>;
  refetchQueries: PureQueryOptions[] | string[];
  isResend?: boolean;
  onCancel: () => void;
  onSubmit: () => void;
};

const SendInvoiceFormContainer = ({
  orders,
  refetchQueries,
  isResend,
  onSubmit,
  onCancel,
}: SendInvoiceFormContainerProps) => {
  const [approveOrders, { loading: isApproveOrderSubmitting }] = useMutation<APPROVE_ORDERS, APPROVE_ORDERS_VARS>(
    APPROVE_ORDERS_MUTATION,
    {
      refetchQueries,
    }
  );

  const [resendOrders, { loading: isResendOrderSubmitting }] = useMutation<RESEND_ORDER, RESEND_ORDER_VARS>(
    RESEND_ORDER_MUTATION,
    { refetchQueries }
  );

  const isSubmitting = isApproveOrderSubmitting || isResendOrderSubmitting;

  const handleSubmit = async (values: { dueDate: string }) => {
    interface ValidOrder {
      orderId: string;
      email: string;
    }
    const orderIsValid = (order: { orderId: string; email: string | null }): order is ValidOrder => !!order.email;
    const validOrders = orders.filter(orderIsValid);

    if (isResend) {
      await resendOrders({
        variables: {
          input: {
            dueDate: values.dueDate,
            profileToken: getProfileToken(),
            orders: orders.map((order) => order.orderId),
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
      onSubmit();
      return;
    }

    await approveOrders({
      variables: {
        input: {
          dueDate: values.dueDate,
          orders: validOrders,
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
    onSubmit();
  };

  return (
    <SendInvoiceForm onSubmit={handleSubmit} onCancel={onCancel} isSubmitting={isSubmitting} isResend={isResend} />
  );
};

export default SendInvoiceFormContainer;
