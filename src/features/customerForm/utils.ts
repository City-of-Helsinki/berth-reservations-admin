import { CUSTOMER_FORM } from './__generated__/CUSTOMER_FORM';
import { Customer } from './types';

export const getCustomer = (customerData: CUSTOMER_FORM): Customer | undefined => {
  if (!customerData?.profile) return undefined;
  const {
    id,
    comment,
    firstName,
    lastName,
    customerGroup,
    // organization, TODO
    primaryAddress,
    primaryEmail,
    primaryPhone,
  } = customerData.profile;
  return {
    address: primaryAddress?.address || '',
    city: primaryAddress?.city || '',
    comment,
    customerGroup,
    email: primaryEmail?.email,
    firstName,
    id,
    lastName,
    // organization, TODO
    phone: primaryPhone?.phone,
    postalCode: primaryAddress?.postalCode || '',
    ssn: '', // TODO
  };
};
