import gql from 'graphql-tag';

export const RECURRING_INVOICES_QUERY = gql`
  query RECURRING_INVOICES($seasonYear: Int!) {
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
