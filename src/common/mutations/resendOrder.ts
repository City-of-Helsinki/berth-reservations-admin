import gql from 'graphql-tag';

export const RESEND_ORDER_MUTATION = gql`
  mutation RESEND_ORDER($input: ResendOrderMutationInput!) {
    resendOrder(input: $input) {
      clientMutationId
    }
  }
`;
