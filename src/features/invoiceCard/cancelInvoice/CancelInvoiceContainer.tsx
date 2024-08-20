import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { PureQueryOptions } from 'apollo-client';
import CancelInvoice from './CancelInvoice';
import { CANCEL_INVOICES_MUTATION } from './mutations';
import { CANCEL_INVOICES, CANCEL_INVOICESVariables as CANCEL_INVOICES_VARS } from './__generated__/CANCEL_INVOICES';
import { OrderStatus } from '../../../@types/__generated__/globalTypes';

export interface CancelInvoiceContainerProps {
  orderIds: string[];
  refetchQueries?: PureQueryOptions[] | string[];
  onClose(): void;
}

const CancelInvoiceContainer = ({ orderIds, refetchQueries, onClose }: CancelInvoiceContainerProps) => {
  const [cancelInvoice, { loading: isSubmitting }] = useMutation<CANCEL_INVOICES, CANCEL_INVOICES_VARS>(
    CANCEL_INVOICES_MUTATION,
    {
      variables: {
        orders: orderIds.map((id) => ({ id, status: OrderStatus.CANCELLED })),
      },
      refetchQueries: refetchQueries ?? [],
    }
  );

  const handleSubmit = async () => {
    await cancelInvoice();
    onClose();
  };

  return <CancelInvoice onSubmit={handleSubmit} onClose={onClose} isSubmitting={isSubmitting} />;
};

export default CancelInvoiceContainer;
