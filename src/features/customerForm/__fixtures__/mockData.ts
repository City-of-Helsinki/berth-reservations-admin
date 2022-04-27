import { CUSTOMER_FORM_profile as PROFILE } from '../__generated__/CUSTOMER_FORM';
import { CustomerGroup, InvoicingType, Language } from '../../../@types/__generated__/globalTypes';
import { CustomerFormIdentifiers, CustomerFormValues } from '../types';

export const mockPrivateCustomerProfile: PROFILE = {
  __typename: 'ProfileNode',
  comment: '',
  customerGroup: CustomerGroup.PRIVATE,
  firstName: 'Risto Heikki',
  id: 'MOCK-PROFILE',
  language: Language.FINNISH,
  lastName: 'Ryti',
  organization: null,
  invoicingType: InvoicingType.ONLINE_PAYMENT,
  primaryAddress: {
    __typename: 'AddressNode',
    address: 'Mariankatu 2',
    city: 'Helsinki',
    id: 'MOCK-ADDRESS',
    postalCode: '00170',
  },
  primaryEmail: {
    __typename: 'EmailNode',
    email: 'test@example.com',
    id: 'MOCK-EMAIL',
  },
  primaryPhone: {
    __typename: 'PhoneNode',
    id: 'MOCK-PHONE',
    phone: '+358 00 000 0000',
  },
};

export const mockOrganizationCustomerProfile: PROFILE = {
  __typename: 'ProfileNode',
  comment: '',
  customerGroup: CustomerGroup.COMPANY,
  firstName: 'Kyösti',
  id: 'MOCK-PROFILE',
  language: Language.FINNISH,
  lastName: 'Kallio',
  invoicingType: InvoicingType.ONLINE_PAYMENT,
  organization: {
    __typename: 'OrganizationNode',
    address: 'Mariankatu 2',
    businessId: '1234567-8',
    city: 'Helsinki',
    id: 'MOCK-ORGANIZATION',
    name: 'Suomi Oy',
    postalCode: '00170',
  },
  primaryAddress: null,
  primaryEmail: {
    __typename: 'EmailNode',
    email: 'test@example.com',
    id: 'MOCK-EMAIL',
  },
  primaryPhone: {
    __typename: 'PhoneNode',
    id: 'MOCK-PHONE',
    phone: '+358 00 000 0000',
  },
};

export const mockPrivateCustomerFormValues: CustomerFormValues = {
  address: 'Mariankatu 2',
  businessId: '',
  city: 'Helsinki',
  comment: '',
  customerGroup: CustomerGroup.PRIVATE,
  email: 'test@example.com',
  firstName: 'Pehr Evind',
  lastName: 'Svinhufvud',
  organizationName: '',
  phone: '+358 00 000 0000',
  postalCode: '00170',
};

export const mockPrivateCustomerFormIdentifiers: CustomerFormIdentifiers = {
  id: 'MOCK-PROFILE',
  initialCustomerGroup: CustomerGroup.PRIVATE,
  primaryAddressId: 'MOCK-ADDRESS',
  primaryEmailId: 'MOCK-EMAIL',
  primaryPhoneId: 'MOCK-PHONE',
};

export const mockOrganizationCustomerFormValues: CustomerFormValues = {
  address: 'Mariankatu 2',
  businessId: '1234567-8',
  city: 'Helsinki',
  comment: '',
  customerGroup: CustomerGroup.COMPANY,
  email: 'test@example.com',
  firstName: 'Lauri Kristian',
  lastName: 'Relander',
  organizationName: 'Suomi Oy',
  phone: '+358 00 000 0000',
  postalCode: '00170',
};

export const mockOrganizationCustomerFormIdentifiers: CustomerFormIdentifiers = {
  id: 'MOCK-PROFILE',
  initialCustomerGroup: CustomerGroup.COMPANY,
  primaryAddressId: 'MOCK-ADDRESS',
  primaryEmailId: 'MOCK-EMAIL',
  primaryPhoneId: 'MOCK-PHONE',
};
