import gql from 'graphql-tag';

export const CANCEL_INVOICE_MUTATION = gql`
  mutation CANCEL_INVOICE($orderId: ID!) {
    updateOrder(input: { id: $orderId, status: CANCELLED }) {
      order {
        id
        status
      }
    }
  }
`;
