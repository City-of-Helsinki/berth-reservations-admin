/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeleteOrderMutationInput } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DELETE_ADDITIONAL_INVOICE_MUTATION
// ====================================================

export interface DELETE_ADDITIONAL_INVOICE_MUTATION_deleteOrder {
  __typename: "DeleteOrderMutationPayload";
  clientMutationId: string | null;
}

export interface DELETE_ADDITIONAL_INVOICE_MUTATION {
  deleteOrder: DELETE_ADDITIONAL_INVOICE_MUTATION_deleteOrder | null;
}

export interface DELETE_ADDITIONAL_INVOICE_MUTATIONVariables {
  input: DeleteOrderMutationInput;
}
