import gql from 'graphql-tag';

export const MARK_AS_PAID_MUTATION = gql`
  mutation MARK_AS_PAID($orderId: ID!) {
    updateOrder(input: { id: $orderId, status: PAID_MANUALLY }) {
      order {
        id
        status
      }
    }
  }
`;
