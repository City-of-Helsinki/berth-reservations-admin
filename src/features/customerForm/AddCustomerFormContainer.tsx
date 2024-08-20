import React from 'react';
import { PureQueryOptions } from 'apollo-client';
import CustomerForm from './CustomerForm';
import { CustomerFormValues, FormProps } from './types';
import useCreateNewCustomer from '../../common/hooks/useCreateNewCustomer';
import { mapCustomerGroupAsOrganizationType } from './utils';

export interface AddCustomerFormProps
  extends Omit<FormProps<CustomerFormValues>, 'initialValues' | 'onCreate' | 'onDelete' | 'refetchQueries'> {
  refetchQueries?: PureQueryOptions[] | string[];
}

const AddCustomerFormContainer = ({ onCancel, onSubmit, refetchQueries }: AddCustomerFormProps) => {
  const createNewCustomer = useCreateNewCustomer(refetchQueries);

  const handleSubmit = (values: CustomerFormValues) => {
    createNewCustomer({
      ...values,
      companyName: values.organizationName,
      municipality: values.city,
      organizationType: mapCustomerGroupAsOrganizationType(values.customerGroup),
      phoneNumber: values.phone,
      zipCode: values.postalCode,
    });
    onSubmit?.(values);
  };

  return <CustomerForm onCancel={onCancel} onSubmit={handleSubmit} />;
};

export default AddCustomerFormContainer;
