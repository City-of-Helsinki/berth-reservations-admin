import gql from 'graphql-tag';

export const CREATE_BERTH_LEASE_MUTATION = gql`
  mutation CREATE_BERTH_LEASE($input: CreateBerthLeaseMutationInput!) {
    createBerthLease(input: $input) {
      berthLease {
        id
        status
      }
    }
  }
`;

export const SWITCH_BERTH_MUTATION = gql`
  mutation SWITCH_BERTH($input: SwitchBerthMutationInput!) {
    switchBerth(input: $input) {
      clientMutationId
    }
  }
`;
