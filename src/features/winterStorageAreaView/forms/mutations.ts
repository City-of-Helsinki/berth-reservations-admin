import gql from 'graphql-tag';

export const UPDATE_WINTER_STORAGE_AREA_MUTATION = gql`
  mutation UPDATE_WINTER_STORAGE_AREA($input: UpdateWinterStorageAreaMutationInput!) {
    updateWinterStorageArea(input: $input) {
      clientMutationId
    }
  }
`;
