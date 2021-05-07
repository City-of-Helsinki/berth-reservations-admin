import gql from 'graphql-tag';

export const HARBORS_QUERY = gql`
  query HARBORS {
    harbors {
      edges {
        node {
          id
          properties {
            name
            numberOfPlaces
            numberOfInactivePlaces
            numberOfFreePlaces
            streetAddress
            zipCode
            municipality
            wwwUrl
            imageFile
            servicemapId
            maxWidth
            piers {
              edges {
                node {
                  id
                  properties {
                    electricity
                    wasteCollection
                    gate
                    water
                    lighting
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
