import gql from 'graphql-tag';

export const CREATE_ADDITIONAL_INVOICE_MUTATION = gql`
  mutation CREATE_ADDITIONAL_INVOICE($input: CreateAdditionalProductOrderMutationInput!) {
    createAdditionalProductOrder(input: $input) {
      clientMutationId
      order {
        id
        price
        totalPrice
        orderLines {
          edges {
            node {
              product {
                id
                service
              }
            }
          }
        }
      }
    }
  }
`;

export const DELETE_ADDITIONAL_INVOICE_MUTATION = gql`
  mutation DELETE_ADDITIONAL_INVOICE($input: DeleteOrderMutationInput!) {
    deleteOrder(input: $input) {
      clientMutationId
      __typename
    }
  }
`;
