/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TerminateBerthLeaseMutationInput } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CANCEL_BERTH_LEASE
// ====================================================

export interface CANCEL_BERTH_LEASE_terminateBerthLease {
  __typename: "TerminateBerthLeaseMutationPayload";
  clientMutationId: string | null;
}

export interface CANCEL_BERTH_LEASE {
  terminateBerthLease: CANCEL_BERTH_LEASE_terminateBerthLease | null;
}

export interface CANCEL_BERTH_LEASEVariables {
  input: TerminateBerthLeaseMutationInput;
}
