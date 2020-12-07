import gql from 'graphql-tag';

export const SEND_EXISTING_BERTH_INVOICES_MUTATION = gql`
  mutation SEND_EXISTING_BERTH_INVOICES($input: SendExistingBerthInvoicesMutationInput!) {
    sendExistingBerthInvoices(input: $input) {
      result {
        successfulOrders
        failedOrders {
          id
        }
        failedLeases {
          id
        }
      }
    }
  }
`;
