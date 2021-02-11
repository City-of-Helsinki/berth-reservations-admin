/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ResendOrderMutationInput } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: RESEND_ORDER
// ====================================================

export interface RESEND_ORDER_resendOrder {
  __typename: "ResendOrderMutationPayload";
  clientMutationId: string | null;
}

export interface RESEND_ORDER {
  resendOrder: RESEND_ORDER_resendOrder | null;
}

export interface RESEND_ORDERVariables {
  input: ResendOrderMutationInput;
}
