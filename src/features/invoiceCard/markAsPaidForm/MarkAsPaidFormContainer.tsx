import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { PureQueryOptions } from 'apollo-client';

import MarkAsPaidForm from './MarkAsPaidForm';
import { MARK_AS_PAID_MUTATION } from './mutations';
import { MARK_AS_PAID, MARK_AS_PAIDVariables as MARK_AS_PAID_VARS } from './__generated__/MARK_AS_PAID';
import { OrderStatus } from '../../../@types/__generated__/globalTypes';

export interface MarkAsPaidContainerProps {
  orderIds: string[];
  refetchQueries?: PureQueryOptions[] | string[];
  onClose(): void;
}

const MarkAsPaidFormContainer = ({ orderIds, onClose, refetchQueries }: MarkAsPaidContainerProps) => {
  const [markAsPaid, { loading: isSubmitting }] = useMutation<MARK_AS_PAID, MARK_AS_PAID_VARS>(MARK_AS_PAID_MUTATION, {
    variables: {
      orders: orderIds.map((id) => ({ id, status: OrderStatus.PAID_MANUALLY })),
    },
    refetchQueries: refetchQueries ?? [],
  });

  const handleSubmit = async () => {
    await markAsPaid();
    onClose();
  };

  return <MarkAsPaidForm onSubmit={handleSubmit} onClose={onClose} isSubmitting={isSubmitting} />;
};

export default MarkAsPaidFormContainer;
