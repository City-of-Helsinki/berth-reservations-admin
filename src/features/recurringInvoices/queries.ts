import gql from 'graphql-tag';

export const RECURRING_INVOICES_QUERY = gql`
  query RECURRING_INVOICES {
    sendBerthInvoicePreview {
      expectedLeases
    }
    berthLeases(statuses: [ERROR]) {
      count
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
