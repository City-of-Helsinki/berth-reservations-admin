import gql from 'graphql-tag';

export const MARK_AS_PAID_MUTATION = gql`
  mutation MARK_AS_PAID($orders: [UpdateOrderInput]!) {
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
