import gql from 'graphql-tag';

export const INDIVIDUAL_PLACE_QUERY = gql`
  query INDIVIDUAL_PLACE($id: ID!) {
    winterStoragePlace(id: $id) {
      id
      number
      isActive
      winterStorageSection {
        id
        properties {
          identifier
        }
      }
      width
      length
    }
  }
`;
