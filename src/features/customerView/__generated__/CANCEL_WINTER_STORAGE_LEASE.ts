/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TerminateWinterStorageLeaseMutationInput } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CANCEL_WINTER_STORAGE_LEASE
// ====================================================

export interface CANCEL_WINTER_STORAGE_LEASE_terminateWinterStorageLease {
  __typename: "TerminateWinterStorageLeaseMutationPayload";
  clientMutationId: string | null;
}

export interface CANCEL_WINTER_STORAGE_LEASE {
  terminateWinterStorageLease: CANCEL_WINTER_STORAGE_LEASE_terminateWinterStorageLease | null;
}

export interface CANCEL_WINTER_STORAGE_LEASEVariables {
  input: TerminateWinterStorageLeaseMutationInput;
}
