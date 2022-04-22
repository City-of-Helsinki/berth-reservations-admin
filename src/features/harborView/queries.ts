import gql from 'graphql-tag';

export const INDIVIDUAL_HARBOR_QUERY = gql`
  query INDIVIDUAL_HARBOR($harborId: ID!, $isBerthActive: Boolean) {
    harbor(id: $harborId) {
      id
      properties {
        name
        numberOfPlaces
        numberOfFreePlaces
        streetAddress
        zipCode
        municipality
        wwwUrl
        imageFile
        servicemapId
        maxWidth
      }
    }
    piers(harbor: $harborId) {
      edges {
        node {
          id
          properties {
            identifier
            priceTier
            electricity
            wasteCollection
            water
            lighting
            gate
            suitableBoatTypes {
              name
            }
          }
        }
      }
    }
    berths(harbor: $harborId, isActive: $isBerthActive) {
      count
      edges {
        node {
          id
          isActive
          number
          width
          length
          depth
          mooringType
          comment
          leases {
            edges {
              node {
                customer {
                  id
                }
                status
                startDate
                endDate
                isActive
              }
            }
          }
          prevSeasonLease {
            customer {
              id
            }
            status
            startDate
            endDate
            isActive
          }
          pier {
            id
            properties {
              identifier
            }
          }
        }
      }
    }
  }
`;
