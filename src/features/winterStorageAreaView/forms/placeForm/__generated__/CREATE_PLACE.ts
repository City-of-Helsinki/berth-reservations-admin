/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateWinterStoragePlaceMutationInput } from "./../../../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CREATE_PLACE
// ====================================================

export interface CREATE_PLACE_createWinterStoragePlace {
  __typename: "CreateWinterStoragePlaceMutationPayload";
  clientMutationId: string | null;
}

export interface CREATE_PLACE {
  createWinterStoragePlace: CREATE_PLACE_createWinterStoragePlace | null;
}

export interface CREATE_PLACEVariables {
  input: CreateWinterStoragePlaceMutationInput;
}
