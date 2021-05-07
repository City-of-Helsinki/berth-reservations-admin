import gql from 'graphql-tag';

export const WINTER_STORAGE_AREAS_QUERY = gql`
  query WINTER_STORAGE_AREAS {
    winterStorageAreas {
      edges {
        node {
          id
          properties {
            imageFile
            maxWidth
            municipality
            name
            numberOfFreePlaces
            numberOfPlaces
            numberOfInactivePlaces
            estimatedNumberOfUnmarkedSpaces
            sections {
              edges {
                node {
                  id
                  properties {
                    electricity
                    gate
                    summerStorageForDockingEquipment
                    summerStorageForTrailers
                    water
                  }
                }
              }
            }
            streetAddress
            wwwUrl
            zipCode
          }
        }
      }
    }
  }
`;
