import gql from 'graphql-tag';

export const REFUND_ORDER_MUTATION = gql`
  mutation REFUND_ORDER($input: RefundOrderMutationInput!) {
    refundOrder(input: $input) {
      orderRefund {
        order {
          status
        }
        status
        amount
      }
    }
  }
`;
