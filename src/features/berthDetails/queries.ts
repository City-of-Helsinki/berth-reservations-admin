import gql from 'graphql-tag';

export const BERTH_DETAILS_QUERY = gql`
  query BERTH_DETAILS($berthId: ID!) {
    berth(id: $berthId) {
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
      pier {
        properties {
          identifier
        }
      }
    }
  }
`;
