import gql from 'graphql-tag';

export const WINTER_STORAGE_PLACE_DETAILS_QUERY = gql`
  query WINTER_STORAGE_PLACE_DETAILS($placeId: ID!) {
    winterStoragePlace(id: $placeId) {
      id
      isActive
      number
      width
      length
      leases {
        edges {
          node {
            id
            customer {
              id
              firstName
              lastName
            }
            status
            startDate
            endDate
            isActive
          }
        }
      }
      winterStorageSection {
        id
        properties {
          identifier
        }
      }
    }
  }
`;
