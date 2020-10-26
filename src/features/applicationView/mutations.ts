import gql from 'graphql-tag';

export const DELETE_BERTH_APPLICATION_MUTATION = gql`
  mutation DELETE_BERTH_APPLICATION($input: DeleteBerthApplicationMutationInput!) {
    deleteBerthApplication(input: $input) {
      clientMutationId
    }
  }
`;
