import gql from 'graphql-tag';

export const CANCEL_INVOICES_MUTATION = gql`
  mutation CANCEL_INVOICES($orders: [UpdateOrderInput]!) {
    updateOrders(input: { orders: $orders }) {
      successfulOrders {
        id
        status
      }
      failedOrders {
        id
      }
    }
  }
`;
