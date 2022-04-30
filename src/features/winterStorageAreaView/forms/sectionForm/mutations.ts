import gql from 'graphql-tag';

export const CREATE_SECTION_MUTATION = gql`
  mutation CREATE_SECTION($input: CreateWinterStorageSectionMutationInput!) {
    createWinterStorageSection(input: $input) {
      clientMutationId
    }
  }
`;

export const UPDATE_SECTION_MUTATION = gql`
  mutation UPDATE_SECTION($input: UpdateWinterStorageSectionMutationInput!) {
    updateWinterStorageSection(input: $input) {
      clientMutationId
    }
  }
`;

export const DELETE_SECTION_MUTATION = gql`
  mutation DELETE_SECTION($input: DeleteWinterStorageSectionMutationInput!) {
    deleteWinterStorageSection(input: $input) {
      clientMutationId
    }
  }
`;
