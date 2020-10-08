/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ApproveOrderMutationInput } from "./../../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: APPROVE_ORDERS
// ====================================================

export interface APPROVE_ORDERS_approveOrders {
  __typename: "ApproveOrderMutationPayload";
  clientMutationId: string | null;
}

export interface APPROVE_ORDERS {
  approveOrders: APPROVE_ORDERS_approveOrders | null;
}

export interface APPROVE_ORDERSVariables {
  input: ApproveOrderMutationInput;
}
