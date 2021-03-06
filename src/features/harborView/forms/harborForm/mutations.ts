import gql from 'graphql-tag';

export const UPDATE_HARBOR_MUTATION = gql`
  mutation UPDATE_HARBOR($input: UpdateHarborMutationInput!) {
    updateHarbor(input: $input) {
      clientMutationId
    }
  }
`;
