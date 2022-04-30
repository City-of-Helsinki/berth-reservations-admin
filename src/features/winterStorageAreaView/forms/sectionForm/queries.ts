import gql from 'graphql-tag';

export const SECTION_QUERY = gql`
  query SECTION($id: ID!) {
    winterStorageSection(id: $id) {
      properties {
        identifier
        electricity
        gate
        water
        summerStorageForBoats
        summerStorageForDockingEquipment
        summerStorageForTrailers
      }
    }
  }
`;
