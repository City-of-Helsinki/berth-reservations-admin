import gql from 'graphql-tag';

export const ADD_ADDITIONAL_SERVICE_PRICE_MUTATION = gql`
  mutation ADD_ADDITIONAL_SERVICE_PRICE($input: CreateAdditionalProductMutationInput!) {
    createAdditionalProduct(input: $input) {
      additionalProduct {
        id
        priceValue
        priceUnit
        service
        period
        taxPercentage
        productType
      }
    }
  }
`;

export const UPDATE_ADDITIONAL_SERVICE_PRICE_MUTATION = gql`
  mutation UPDATE_ADDITIONAL_SERVICE_PRICE($input: UpdateAdditionalProductMutationInput!) {
    updateAdditionalProduct(input: $input) {
      additionalProduct {
        id
        priceValue
        priceUnit
        service
        period
        taxPercentage
        productType
      }
    }
  }
`;

export const DELETE_ADDITIONAL_SERVICE_PRICE_MUTATION = gql`
  mutation DELETE_ADDITIONAL_SERVICE_PRICE($input: DeleteAdditionalProductMutationInput!) {
    deleteAdditionalProduct(input: $input) {
      clientMutationId
    }
  }
`;
