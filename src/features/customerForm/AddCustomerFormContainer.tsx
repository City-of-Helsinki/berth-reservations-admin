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
    const {
      address,
      businessId,
      city,
      customerGroup,
      email,
      firstName,
      lastName,
      organizationName,
      phone,
      postalCode,
    } = values;

    const customerInfo = {
      address: address,
      businessId: businessId,
      companyName: organizationName,
      email: email,
      firstName: firstName,
      lastName: lastName,
      municipality: city,
      organizationType: mapCustomerGroupAsOrganizationType(customerGroup),
      phoneNumber: phone,
      zipCode: postalCode,
    };

    createNewCustomer(customerInfo);
    onSubmit?.(values);
  };

  return <CustomerForm onCancel={onCancel} onSubmit={handleSubmit} />;
};

export default AddCustomerFormContainer;
