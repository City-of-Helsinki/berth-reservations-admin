/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateWinterStorageLeaseMutationInput } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CREATE_UNMARKED_WINTER_STORAGE_LEASE
// ====================================================

export interface CREATE_UNMARKED_WINTER_STORAGE_LEASE_createWinterStorageLease {
  __typename: "CreateWinterStorageLeaseMutationPayload";
  clientMutationId: string | null;
}

export interface CREATE_UNMARKED_WINTER_STORAGE_LEASE {
  createWinterStorageLease: CREATE_UNMARKED_WINTER_STORAGE_LEASE_createWinterStorageLease | null;
}

export interface CREATE_UNMARKED_WINTER_STORAGE_LEASEVariables {
  input: CreateWinterStorageLeaseMutationInput;
}
