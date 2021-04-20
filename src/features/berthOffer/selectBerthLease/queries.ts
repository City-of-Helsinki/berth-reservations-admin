import gql from 'graphql-tag';

export const SELECT_BERTH_LEASE_QUERY = gql`
  query SELECT_BERTH_LEASE($customerId: ID!) {
    profile(id: $customerId, serviceType: BERTH) {
      id
      berthLeases {
        edges {
          node {
            id
            isActive
            berth {
              id
              number
              pier {
                id
                properties {
                  identifier
                  harbor {
                    id
                    properties {
                      name
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
