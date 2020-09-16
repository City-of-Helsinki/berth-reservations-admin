import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/react-hooks';

import CustomerForm from './CustomerForm';
import { Customer, FormProps } from './types';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import { CUSTOMER_FORM_QUERY } from './queries';
import { CUSTOMER_FORM } from './__generated__/CUSTOMER_FORM';
import { getCustomer } from './utils';

export interface CustomerEditFormProps extends Omit<FormProps<Customer>, 'initialValues' | 'onCreate' | 'onDelete'> {
  customerId: string;
}

const CustomerEditForm = ({ customerId, onCancel, onSubmit, refetchQueries }: CustomerEditFormProps) => {
  const { loading, error, data } = useQuery<CUSTOMER_FORM>(CUSTOMER_FORM_QUERY, {
    variables: { id: customerId },
  });

  // TODO
  const [updateCustomer, { loading: isSubmitting }] = [
    (options: any) => {
      console.log(options);
      console.log({
        refetchQueries: [...(refetchQueries ?? []), { query: CUSTOMER_FORM_QUERY, variables: { id: customerId } }],
      });
      return Promise.resolve();
    },
    { loading: false },
  ];

  const { t } = useTranslation();

  if (loading) return <LoadingSpinner isLoading={loading} />;
  if (error || !data?.profile) return <div>{t('forms.common.error')}</div>;

  const initialValues = getCustomer(data);

  return (
    <CustomerForm
      initialValues={initialValues}
      onCancel={onCancel}
      onSubmit={(values) => {
        updateCustomer({
          variables: {
            input: {
              id: customerId,
            },
          },
        }).then(() => onSubmit?.(values));
      }}
      isSubmitting={isSubmitting}
    />
  );
};

export default CustomerEditForm;
