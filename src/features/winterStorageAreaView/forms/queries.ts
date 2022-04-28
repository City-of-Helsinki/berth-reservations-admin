import gql from 'graphql-tag';

export const WINTER_STORAGE_AREA_FORM_QUERY = gql`
  query WINTER_STORAGE_AREA_FORM($id: ID!) {
    winterStorageArea(id: $id) {
      id
      properties {
        name
        streetAddress
        zipCode
        municipality
        wwwUrl
        imageFile
      }
    }
  }
`;
