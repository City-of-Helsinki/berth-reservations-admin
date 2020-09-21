import gql from 'graphql-tag';

export const DELETE_UNMARKED_WINTER_STORAGE_NOTICE_MUTATION = gql`
  mutation DELETE_UNMARKED_WINTER_STORAGE_NOTICE($input: DeleteWinterStorageApplicationMutationInput!) {
    deleteWinterStorageApplication(input: $input) {
      clientMutationId
    }
  }
`;

export const UPDATE_UNMARKED_WINTER_STORAGE_NOTICE_MUTATION = gql`
  mutation UPDATE_UNMARKED_WINTER_STORAGE_NOTICE($input: UpdateWinterStorageApplicationInput!) {
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
