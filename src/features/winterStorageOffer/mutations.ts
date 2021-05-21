import gql from 'graphql-tag';

export const CREATE_WINTER_STORAGE_LEASE_MUTATION = gql`
  mutation CREATE_WINTER_STORAGE_LEASE($input: CreateWinterStorageLeaseMutationInput!) {
    createWinterStorageLease(input: $input) {
      winterStorageLease {
        id
        status
      }
    }
  }
`;
