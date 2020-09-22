import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { PureQueryOptions } from 'apollo-client';

import CustomerForm from './CustomerForm';
import { CustomerFormValues, FormProps } from './types';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import { CUSTOMER_FORM_QUERY } from './queries';
import { CUSTOMER_FORM } from './__generated__/CUSTOMER_FORM';
import { createUpdateInputs, getCustomerFormValues, getIdentifiers } from './utils';
import { UPDATE_BERTH_SERVICES_PROFILE_MUTATION, UPDATE_PROFILE_MUTATION } from './mutations';
import { UPDATE_PROFILE, UPDATE_PROFILEVariables as UPDATE_PROFILE_VARS } from './__generated__/UPDATE_PROFILE';
import {
  UPDATE_BERTH_SERVICES_PROFILE,
  UPDATE_BERTH_SERVICES_PROFILEVariables as UPDATE_BERTH_SERVICES_PROFILE_VARS,
} from './__generated__/UPDATE_BERTH_SERVICES_PROFILE';

export interface CustomerEditFormProps
  extends Omit<FormProps<CustomerFormValues>, 'initialValues' | 'onCreate' | 'onDelete' | 'refetchQueries'> {
  customerId: string;
  refetchQueries: PureQueryOptions[] | string[];
}

const CustomerEditFormContainer = ({ customerId, onCancel, onSubmit, refetchQueries }: CustomerEditFormProps) => {
  const { t } = useTranslation();

  const { loading, data } = useQuery<CUSTOMER_FORM>(CUSTOMER_FORM_QUERY, {
    variables: { id: customerId },
    errorPolicy: 'all',
  });

  const [updateProfile, { loading: updateProfileLoading }] = useMutation<UPDATE_PROFILE, UPDATE_PROFILE_VARS>(
    UPDATE_PROFILE_MUTATION
  );
  const [updateBerthServicesProfile, { loading: updateBerthServicesLoading }] = useMutation<
    UPDATE_BERTH_SERVICES_PROFILE,
    UPDATE_BERTH_SERVICES_PROFILE_VARS
  >(UPDATE_BERTH_SERVICES_PROFILE_MUTATION, {
    refetchQueries: refetchQueries ?? [],
  });

  if (loading) return <LoadingSpinner isLoading={loading} />;
  if (!data?.profile) return <div>{t('forms.common.error')}</div>;

  const initialValues = getCustomerFormValues(data.profile);
  const identifiers = getIdentifiers(data.profile);

  const handleSubmit = (values: CustomerFormValues) => {
    const [profileInput, berthServicesProfileInput] = createUpdateInputs(values, identifiers);

    updateProfile({
      variables: {
        input: profileInput,
      },
    })
      .then(() =>
        updateBerthServicesProfile({
          variables: {
            input: berthServicesProfileInput,
          },
        })
      )
      .then(() => onSubmit?.(values));
  };

  return (
    <CustomerForm
      initialValues={initialValues}
      onCancel={onCancel}
      onSubmit={handleSubmit}
      isSubmitting={updateProfileLoading || updateBerthServicesLoading}
    />
  );
};

export default CustomerEditFormContainer;
