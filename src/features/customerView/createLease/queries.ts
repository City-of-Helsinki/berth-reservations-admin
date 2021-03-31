import gql from 'graphql-tag';

export const CREATE_LEASE_HARBORS_QUERY = gql`
  query CREATE_LEASE_HARBORS($customerId: ID!) {
    profile(id: $customerId, serviceType: BERTH) {
      boats {
        edges {
          node {
            id
            name
          }
        }
      }
    }
    harbors {
      edges {
        node {
          id
          properties {
            name
          }
        }
      }
    }
  }
`;
