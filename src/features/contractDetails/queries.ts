import gql from 'graphql-tag';

export const WINTER_STORAGE_CONTRACT_QUERY = gql`
  query WINTER_STORAGE_CONTRACT($leaseId: ID!) {
    winterStorageLease(id: $leaseId) {
      contract {
        createdAt
        modifiedAt
        status
      }
      order {
        orderNumber
      }
    }
  }
`;

export const BERTH_CONTRACT_QUERY = gql`
  query BERTH_CONTRACT($leaseId: ID!) {
    berthLease(id: $leaseId) {
      contract {
        createdAt
        modifiedAt
        status
      }
      order {
        orderNumber
      }
    }
  }
`;
