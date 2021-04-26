import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { PureQueryOptions } from 'apollo-client';

import RefundOrder from './RefundOrder';
import { REFUND_ORDER_MUTATION } from './mutations';
import { REFUND_ORDER, REFUND_ORDERVariables as REFUND_ORDER_VARS } from './__generated__/REFUND_ORDER';

export interface RefundOrderContainerProps {
  orderId: string;
  amount: number;
  refetchQueries?: PureQueryOptions[] | string[];
  onClose(): void;
}

const RefundOrderContainer = ({ amount, orderId, refetchQueries, onClose }: RefundOrderContainerProps) => {
  const [refundOrder, { loading: isSubmitting }] = useMutation<REFUND_ORDER, REFUND_ORDER_VARS>(REFUND_ORDER_MUTATION, {
    variables: {
      input: { orderId },
    },
    refetchQueries: refetchQueries ?? [],
  });

  const handleSubmit = async () => {
    await refundOrder();
    onClose();
  };

  return <RefundOrder amount={amount} onSubmit={handleSubmit} onClose={onClose} isSubmitting={isSubmitting} />;
};

export default RefundOrderContainer;
