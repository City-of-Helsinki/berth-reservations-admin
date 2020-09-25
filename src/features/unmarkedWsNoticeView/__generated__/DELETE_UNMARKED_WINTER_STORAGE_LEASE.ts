/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeleteWinterStorageLeaseMutationInput } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DELETE_UNMARKED_WINTER_STORAGE_LEASE
// ====================================================

export interface DELETE_UNMARKED_WINTER_STORAGE_LEASE_deleteWinterStorageLease {
  __typename: "DeleteWinterStorageLeaseMutationPayload";
  clientMutationId: string | null;
}

export interface DELETE_UNMARKED_WINTER_STORAGE_LEASE {
  deleteWinterStorageLease: DELETE_UNMARKED_WINTER_STORAGE_LEASE_deleteWinterStorageLease | null;
}

export interface DELETE_UNMARKED_WINTER_STORAGE_LEASEVariables {
  input: DeleteWinterStorageLeaseMutationInput;
}
