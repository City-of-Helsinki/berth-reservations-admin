import gql from 'graphql-tag';

export const UPDATE_PLACE_MUTATION = gql`
  mutation UPDATE_PLACE($input: UpdateWinterStoragePlaceMutationInput!) {
    updateWinterStoragePlace(input: $input) {
      clientMutationId
    }
  }
`;

export const DELETE_PLACE_MUTATION = gql`
  mutation DELETE_PLACE($input: DeleteWinterStoragePlaceMutationInput!) {
    deleteWinterStoragePlace(input: $input) {
      clientMutationId
    }
  }
`;

export const CREATE_PLACE_MUTATION = gql`
  mutation CREATE_PLACE($input: CreateWinterStoragePlaceMutationInput!) {
    createWinterStoragePlace(input: $input) {
      clientMutationId
    }
  }
`;
