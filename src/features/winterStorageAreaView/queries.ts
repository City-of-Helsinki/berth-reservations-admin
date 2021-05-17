import gql from 'graphql-tag';

export const INDIVIDUAL_WINTER_STORAGE_AREA_QUERY = gql`
  query INDIVIDUAL_WINTER_STORAGE_AREA($id: ID!) {
    winterStorageArea(id: $id) {
      properties {
        name
        zipCode
        municipality
        streetAddress
        wwwUrl
        imageFile
        sections {
          edges {
            node {
              id
              properties {
                identifier
                electricity
                water
                gate
                summerStorageForBoats
                summerStorageForTrailers
                summerStorageForDockingEquipment
                leases {
                  edges {
                    node {
                      id
                      startDate
                      endDate
                      status
                      isActive
                      customer {
                        id
                      }
                      application {
                        id
                        createdAt
                      }
                    }
                  }
                }
                places {
                  edges {
                    node {
                      id
                      number
                      width
                      length
                      isActive
                      leases {
                        edges {
                          node {
                            id
                            startDate
                            endDate
                            status
                            isActive
                            customer {
                              id
                            }
                            application {
                              id
                              createdAt
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
      }
    }
  }
`;
