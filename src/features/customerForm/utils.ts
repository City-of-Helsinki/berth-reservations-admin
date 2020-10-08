import {
  CUSTOMER_FORM_profile as PROFILE,
  CUSTOMER_FORM_profile_organization as ORGANIZATION,
} from './__generated__/CUSTOMER_FORM';
import { CustomerFormIdentifiers, CustomerFormValues } from './types';
import {
  AddressType,
  CreateEmailInput,
  CreatePhoneInput,
  CustomerGroup,
  EmailType,
  OrganizationType,
  PhoneType,
  ServiceType,
  UpdateBerthServicesProfileMutationInput,
  UpdateEmailInput,
  UpdatePhoneInput,
  UpdateProfileInput,
  UpdateProfileMutationInput,
} from '../../@types/__generated__/globalTypes';

export const getCustomerFormValues = (profile: PROFILE): CustomerFormValues => {
  const {
    comment,
    firstName,
    lastName,
    customerGroup,
    organization,
    primaryAddress,
    primaryEmail,
    primaryPhone,
  } = profile;

  const common = {
    comment: comment || '',
    email: primaryEmail?.email || '',
    firstName,
    lastName,
    phone: primaryPhone?.phone || '',
  };

  if (customerGroup === null || customerGroup === CustomerGroup.PRIVATE) {
    return {
      ...common,
      customerGroup: CustomerGroup.PRIVATE,
      address: primaryAddress?.address || '',
      city: primaryAddress?.city || '',
      postalCode: primaryAddress?.postalCode || '',
      organizationName: '',
      businessId: '',
    };
  }

  return {
    ...common,
    customerGroup: customerGroup as CustomerGroup,
    address: (organization as ORGANIZATION).address,
    city: (organization as ORGANIZATION).city,
    postalCode: (organization as ORGANIZATION).postalCode,
    organizationName: (organization as ORGANIZATION).name,
    businessId: (organization as ORGANIZATION).businessId,
  };
};

export const getIdentifiers = (profile: PROFILE): CustomerFormIdentifiers => {
  const { id, customerGroup, primaryAddress, primaryEmail, primaryPhone } = profile;

  return {
    id,
    primaryAddressId: primaryAddress?.id,
    primaryEmailId: primaryEmail?.id,
    primaryPhoneId: primaryPhone?.id,
    initialCustomerGroup: customerGroup,
  };
};

export const mapCustomerGroupAsOrganizationType = (customerGroup: CustomerGroup): OrganizationType | undefined => {
  switch (customerGroup) {
    case CustomerGroup.COMPANY:
      return OrganizationType.COMPANY;
    case CustomerGroup.INTERNAL:
      return OrganizationType.INTERNAL;
    case CustomerGroup.NON_BILLABLE:
      return OrganizationType.NON_BILLABLE;
    case CustomerGroup.OTHER:
      return OrganizationType.OTHER;
    default:
      return undefined;
  }
};

export const createEmailProperties = (
  email: string,
  primaryEmailId?: string
): {
  addEmails?: UpdateProfileInput['addEmails'];
  removeEmails?: UpdateProfileInput['removeEmails'];
  updateEmails?: UpdateProfileInput['updateEmails'];
} => {
  if (email && primaryEmailId) {
    return {
      updateEmails: [
        {
          email,
          id: primaryEmailId,
          primary: true,
        },
      ] as UpdateEmailInput[],
    };
  }
  if (email && !primaryEmailId) {
    return {
      addEmails: [
        {
          email,
          emailType: EmailType.NONE,
          primary: true,
        },
      ] as CreateEmailInput[],
    };
  }
  if (!email && primaryEmailId) {
    return {
      removeEmails: [primaryEmailId],
    };
  }
  return {};
};

export const createPhoneProperties = (
  phone: string,
  primaryPhoneId?: string
): {
  addPhones?: UpdateProfileInput['addPhones'];
  removePhones?: UpdateProfileInput['removePhones'];
  updatePhones?: UpdateProfileInput['updatePhones'];
} => {
  if (phone && primaryPhoneId) {
    return {
      updatePhones: [
        {
          phone,
          id: primaryPhoneId,
          primary: true,
        },
      ] as UpdatePhoneInput[],
    };
  }
  if (phone && !primaryPhoneId) {
    return {
      addPhones: [
        {
          phone,
          phoneType: PhoneType.NONE,
          primary: true,
        },
      ] as CreatePhoneInput[],
    };
  }
  if (!phone && primaryPhoneId) {
    return {
      removePhones: [primaryPhoneId],
    };
  }
  return {};
};

export const createAddressAndOrganizationProperties = (
  values: CustomerFormValues,
  identifiers: CustomerFormIdentifiers
): [
  {
    addAddresses?: UpdateProfileInput['addAddresses'];
    removeAddresses?: UpdateProfileInput['removeAddresses'];
    updateAddresses?: UpdateProfileInput['updateAddresses'];
  },
  {
    deleteOrganization?: UpdateBerthServicesProfileMutationInput['deleteOrganization'];
    organization?: UpdateBerthServicesProfileMutationInput['organization'];
  }
] => {
  const { address, postalCode, city, businessId, customerGroup, organizationName } = values;
  const { primaryAddressId, initialCustomerGroup } = identifiers;

  const commonProps = {
    address,
    postalCode,
    city,
  };

  // Switched from organization customer to private customer
  if (customerGroup === CustomerGroup.PRIVATE && initialCustomerGroup !== CustomerGroup.PRIVATE) {
    return [
      {
        addAddresses: [
          {
            ...commonProps,
            addressType: AddressType.NONE,
            primary: true,
          },
        ],
      },
      {
        deleteOrganization: true,
      },
    ];
  }

  // Switched from private customer to organization customer
  if (customerGroup !== CustomerGroup.PRIVATE && initialCustomerGroup === CustomerGroup.PRIVATE) {
    return [
      {
        removeAddresses: primaryAddressId ? [primaryAddressId] : [],
      },
      {
        organization: {
          ...commonProps,
          businessId,
          name: organizationName,
          organizationType: mapCustomerGroupAsOrganizationType(customerGroup) as OrganizationType,
        },
      },
    ];
  }

  // Updated private customer
  if (customerGroup === CustomerGroup.PRIVATE && initialCustomerGroup === CustomerGroup.PRIVATE) {
    return [
      primaryAddressId
        ? {
            updateAddresses: [
              {
                ...commonProps,
                id: primaryAddressId,
              },
            ],
          }
        : {
            addAddresses: [
              {
                ...commonProps,
                addressType: AddressType.NONE,
                primary: true,
              },
            ],
          },
      {},
    ];
  }

  // Updated organization customer
  return [
    {},
    {
      organization: {
        ...commonProps,
        businessId,
        name: organizationName,
        organizationType: mapCustomerGroupAsOrganizationType(customerGroup) as OrganizationType,
      },
    },
  ];
};

export const createUpdateInputs = (
  values: CustomerFormValues,
  identifiers: CustomerFormIdentifiers
): [UpdateProfileMutationInput, UpdateBerthServicesProfileMutationInput] => {
  const { comment, email, firstName, lastName, phone } = values;
  const { id, primaryEmailId, primaryPhoneId } = identifiers;

  const emailProperties = createEmailProperties(email, primaryEmailId);
  const phoneProperties = createPhoneProperties(phone, primaryPhoneId);
  const [addressProperties, organizationProperties] = createAddressAndOrganizationProperties(values, identifiers);

  return [
    {
      profile: {
        id,
        firstName,
        lastName,
        ...phoneProperties,
        ...emailProperties,
        ...addressProperties,
      },
      serviceType: ServiceType.BERTH,
    },
    {
      comment,
      id,
      ...organizationProperties,
    },
  ];
};
