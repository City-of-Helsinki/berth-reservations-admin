import gql from 'graphql-tag';

export const CANCEL_BERTH_LEASE_MUTATION = gql`
  mutation CANCEL_BERTH_LEASE($input: TerminateBerthLeaseMutationInput!) {
    terminateBerthLease(input: $input) {
      clientMutationId
    }
  }
`;

export const CANCEL_WINTER_STORAGE_LEASE_MUTATION = gql`
  mutation CANCEL_WINTER_STORAGE_LEASE($input: TerminateWinterStorageLeaseMutationInput!) {
    terminateWinterStorageLease(input: $input) {
      clientMutationId
    }
  }
`;
