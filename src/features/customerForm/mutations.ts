import gql from 'graphql-tag';

export const UPDATE_PROFILE_MUTATION = gql`
  mutation UPDATE_PROFILE($input: UpdateProfileMutationInput!) {
    updateProfile(input: $input) {
      clientMutationId
    }
  }
`;

export const UPDATE_BERTH_SERVICES_PROFILE_MUTATION = gql`
  mutation UPDATE_BERTH_SERVICES_PROFILE($input: UpdateBerthServicesProfileMutationInput!) {
    updateBerthServicesProfile(input: $input) {
      clientMutationId
    }
  }
`;
