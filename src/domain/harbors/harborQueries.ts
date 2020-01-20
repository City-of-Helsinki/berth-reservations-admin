import { gql } from 'apollo-boost';

export const HARBORS_QUERY = gql`
  query HARBORS {
    harbors {
      edges {
        node {
          id
          properties {
            name
            numberOfPlaces
            streetAddress
            zipCode
            municipality
            wwwUrl
            imageFile
            servicemapId
            maximumWidth
            piers {
              edges {
                node {
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

export const INDIVIDUAL_HARBOR_QUERY = gql`
  query INDIVIDUAL_HARBOR($id: ID!) {
    __type(name: "BerthMooringType") {
      enumValues {
        name
        description
      }
    }
    harbor(id: $id) {
      id
      properties {
        name
        numberOfPlaces
        streetAddress
        zipCode
        municipality
        wwwUrl
        imageFile
        servicemapId
        maximumWidth
        piers {
          edges {
            node {
              properties {
                identifier
                electricity
                wasteCollection
                water
                lighting
                gate
                berths {
                  edges {
                    node {
                      number
                      berthType {
                        width
                        length
                        mooringType
                      }
                    }
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
