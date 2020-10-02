import gql from 'graphql-tag';

export const CREATE_NEW_PROFILE_MUTATION = gql`
  mutation CREATE_NEW_PROFILE(
    $firstName: String!
    $lastName: String!
    $addresses: [CreateAddressInput]!
    $email: String!
    $phone: String!
  ) {
    createProfile(
      input: {
        serviceType: BERTH
        profile: {
          firstName: $firstName
          lastName: $lastName
          addAddresses: $addresses
          addEmails: { email: $email, emailType: NONE, primary: true }
          addPhones: { phone: $phone, phoneType: NONE, primary: true }
        }
      }
    ) {
      profile {
        id
        lastName
        firstName
        primaryAddress {
          address
          city
        }
      }
    }
  }
`;

export const CREATE_BERTH_SERVICE_PROFILE_MUTATION = gql`
  mutation CREATE_BERTH_SERVICE_PROFILE($input: CreateBerthServicesProfileMutationInput!) {
    createBerthServicesProfile(input: $input) {
      profile {
        id
        invoicingType
        comment
        organization {
          id
          organizationType
          businessId
          name
        }
      }
    }
  }
`;
