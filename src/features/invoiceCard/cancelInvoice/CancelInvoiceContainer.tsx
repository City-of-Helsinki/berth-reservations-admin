import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { PureQueryOptions } from 'apollo-client';

import CancelInvoice from './CancelInvoice';
import { CANCEL_INVOICE_MUTATION } from './mutations';
import { CANCEL_INVOICE, CANCEL_INVOICEVariables as CANCEL_INVOICE_VARS } from './__generated__/CANCEL_INVOICE';

export interface CancelInvoiceContainerProps {
  orderId: string;
  refetchQueries?: PureQueryOptions[] | string[];
  onClose(): void;
}

const CancelInvoiceContainer = ({ orderId, refetchQueries, onClose }: CancelInvoiceContainerProps) => {
  const [cancelInvoice, { loading: isSubmitting }] = useMutation<CANCEL_INVOICE, CANCEL_INVOICE_VARS>(
    CANCEL_INVOICE_MUTATION,
    {
      variables: {
        orderId,
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
