import gql from 'graphql-tag';

export const DELETE_WINTER_STORAGE_APPLICATION_MUTATION = gql`
  mutation DELETE_WINTER_STORAGE_APPLICATION($input: DeleteWinterStorageApplicationMutationInput!) {
    deleteWinterStorageApplication(input: $input) {
      clientMutationId
    }
  }
`;

export const UPDATE_WINTER_STORAGE_APPLICATION_MUTATION = gql`
  mutation UPDATE_WINTER_STORAGE_APPLICATION($input: UpdateWinterStorageApplicationInput!) {
    updateWinterStorageApplication(input: $input) {
      winterStorageApplication {
        id
        customer {
          id
        }
      }
    }
  }
`;
