import { CREATE_NEW_PROFILE_MUTATION } from '../../mutations/createProfile';
import { AddressType } from '../../../@types/__generated__/globalTypes';

export const customerInfoMock = {
  firstName: 'John',
  lastName: 'Doe',
  address: 'Address',
  email: 'john@doe.net',
  phoneNumber: '+358111111111',
  zipCode: '00100',
  municipality: 'Helsinki',
  businessId: '',
  companyName: '',
};

export const responseIdMock = '1234';

export const createProfileMutationMock = {
  request: {
    query: CREATE_NEW_PROFILE_MUTATION,
    variables: {
      firstName: customerInfoMock.firstName,
      lastName: customerInfoMock.lastName,
      addresses: [
        {
          address: customerInfoMock.address,
          postalCode: customerInfoMock.zipCode,
          city: customerInfoMock.municipality,
          primary: true,
          addressType: AddressType.NONE,
        },
      ],
      phone: customerInfoMock.phoneNumber,
      email: customerInfoMock.email,
    },
  },
  result: {
    data: {
      createProfile: {
        profile: {
          id: responseIdMock,
          lastName: customerInfoMock.lastName,
          firstName: customerInfoMock.firstName,
          primaryAddress: {
            address: customerInfoMock.address,
            city: customerInfoMock.municipality,
            __typename: 'AddressNode',
          },
          __typename: 'ProfileNode',
        },
        __typename: 'CreateProfileMutationPayload',
      },
    },
  },
};

export const organizationCustomerInfoMock = {
  firstName: 'John',
  lastName: 'Doe',
  address: 'Address',
  email: 'john@doe.net',
  phoneNumber: '+358111111111',
  zipCode: '00100',
  municipality: 'Helsinki',
  businessId: '111111',
  companyName: 'Test Oy',
};

export const createOrganizationProfileMutationMock = {
  request: {
    query: CREATE_NEW_PROFILE_MUTATION,
    variables: {
      addresses: [],
      firstName: organizationCustomerInfoMock.firstName,
      lastName: organizationCustomerInfoMock.lastName,
      phone: organizationCustomerInfoMock.phoneNumber,
      email: organizationCustomerInfoMock.email,
    },
  },
  result: {
    data: {
      createProfile: {
        profile: {
          id: responseIdMock,
          lastName: organizationCustomerInfoMock.lastName,
          firstName: organizationCustomerInfoMock.firstName,
          __typename: 'ProfileNode',
        },
        __typename: 'CreateProfileMutationPayload',
      },
    },
  },
};
