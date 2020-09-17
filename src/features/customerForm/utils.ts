import { CUSTOMER_FORM } from './__generated__/CUSTOMER_FORM';
import { Customer } from './types';
import { CustomerGroup } from '../../@types/__generated__/globalTypes';

export const getCustomer = (customerData: CUSTOMER_FORM): Customer | undefined => {
  if (!customerData?.profile) return undefined;
  const {
    id,
    comment,
    firstName,
    lastName,
    customerGroup,
    organization,
    primaryAddress,
    primaryEmail,
    primaryPhone,
  } = customerData.profile;

  const common = {
    comment,
    customerGroup,
    email: primaryEmail?.email,
    firstName,
    id,
    lastName,
    phone: primaryPhone?.phone,
    ssn: '', // TODO
  };

  if (customerGroup === CustomerGroup.PRIVATE) {
    return {
      ...common,
      address: primaryAddress?.address || '',
      city: primaryAddress?.city || '',
      postalCode: primaryAddress?.postalCode || '',
    };
  }

  return {
    ...common,
    address: organization?.address || '',
    city: organization?.city || '',
    postalCode: organization?.postalCode || '',
    organizationName: organization?.name,
    businessId: organization?.businessId,
  };
};
