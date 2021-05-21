/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateWinterStorageLeaseMutationInput, LeaseStatus } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CREATE_WINTER_STORAGE_LEASE
// ====================================================

export interface CREATE_WINTER_STORAGE_LEASE_createWinterStorageLease_winterStorageLease {
  __typename: "WinterStorageLeaseNode";
  id: string;
  status: LeaseStatus;
}

export interface CREATE_WINTER_STORAGE_LEASE_createWinterStorageLease {
  __typename: "CreateWinterStorageLeaseMutationPayload";
  winterStorageLease: CREATE_WINTER_STORAGE_LEASE_createWinterStorageLease_winterStorageLease | null;
}

export interface CREATE_WINTER_STORAGE_LEASE {
  createWinterStorageLease: CREATE_WINTER_STORAGE_LEASE_createWinterStorageLease | null;
}

export interface CREATE_WINTER_STORAGE_LEASEVariables {
  input: CreateWinterStorageLeaseMutationInput;
}
