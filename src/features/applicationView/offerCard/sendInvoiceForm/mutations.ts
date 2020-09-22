import gql from 'graphql-tag';

export const APPROVE_ORDERS_MUTATION = gql`
  mutation APPROVE_ORDERS($input: ApproveOrderMutationInput!) {
    approveOrders(input: $input) {
      clientMutationId
    }
  }
`;
