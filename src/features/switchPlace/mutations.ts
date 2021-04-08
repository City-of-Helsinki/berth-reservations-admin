import gql from 'graphql-tag';

export const SWITCH_LEASE_BERTH_MUTATION = gql`
  mutation SWITCH_LEASE_BERTH($input: SwitchBerthMutationInput!) {
    switchBerth(input: $input) {
      clientMutationId
    }
  }
`;
