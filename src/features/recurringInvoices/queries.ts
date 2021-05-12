import gql from 'graphql-tag';

export const RECURRING_BERTH_INVOICES_QUERY = gql`
  query RECURRING_BERTH_INVOICES($seasonYear: Int!) {
    sent: berthLeases(startYear: $seasonYear, statuses: [OFFERED, PAID, REFUSED, EXPIRED]) {
      count
    }
    failed: berthLeases(startYear: $seasonYear, statuses: [ERROR]) {
      count
    }
    paid: berthLeases(startYear: $seasonYear, statuses: [PAID]) {
      count
    }
    pending: berthLeases(startYear: $seasonYear, statuses: [OFFERED]) {
      count
    }
    berthLeases(statuses: [ERROR]) {
      edges {
        node {
          id
          comment
          customer {
            id
            firstName
            lastName
          }
          berth {
            id
            pier {
              id
              properties {
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
`;

export const RECURRING_WINTER_STORAGE_INVOICES_QUERY = gql`
  query RECURRING_WINTER_STORAGE_INVOICES($seasonYear: Int!) {
    sent: winterStorageLeases(startYear: $seasonYear, statuses: [OFFERED, PAID, REFUSED, EXPIRED]) {
      count
    }
    failed: winterStorageLeases(startYear: $seasonYear, statuses: [ERROR]) {
      count
    }
    paid: winterStorageLeases(startYear: $seasonYear, statuses: [PAID]) {
      count
    }
    pending: winterStorageLeases(startYear: $seasonYear, statuses: [OFFERED]) {
      count
    }
    winterStorageLeases(statuses: [ERROR]) {
      edges {
        node {
          id
          comment
          customer {
            id
            firstName
            lastName
          }
          place {
            id
            winterStorageSection {
              id
              properties {
                area {
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
`;
