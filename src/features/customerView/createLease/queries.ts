import gql from 'graphql-tag';

export const CREATE_BERTH_LEASE_MODAL_QUERY = gql`
  query CREATE_BERTH_LEASE_MODAL($customerId: ID!) {
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

export const CREATE_WINTER_STORAGE_LEASE_MODAL_QUERY = gql`
  query CREATE_WINTER_STORAGE_LEASE_MODAL($customerId: ID!) {
    profile(id: $customerId, serviceType: BERTH) {
      id
      boats {
        edges {
          node {
            id
            name
          }
        }
      }
    }
    winterStorageAreas {
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
