/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeleteAdditionalProductMutationInput } from "./../../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DELETE_ADDITIONAL_SERVICE_PRICE
// ====================================================

export interface DELETE_ADDITIONAL_SERVICE_PRICE_deleteAdditionalProduct {
  __typename: "DeleteAdditionalProductMutationPayload";
  clientMutationId: string | null;
}

export interface DELETE_ADDITIONAL_SERVICE_PRICE {
  deleteAdditionalProduct: DELETE_ADDITIONAL_SERVICE_PRICE_deleteAdditionalProduct | null;
}

export interface DELETE_ADDITIONAL_SERVICE_PRICEVariables {
  input: DeleteAdditionalProductMutationInput;
}
