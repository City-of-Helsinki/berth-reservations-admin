/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateWinterStoragePlaceMutationInput } from "./../../../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UPDATE_PLACE
// ====================================================

export interface UPDATE_PLACE_updateWinterStoragePlace {
  __typename: "UpdateWinterStoragePlaceMutationPayload";
  clientMutationId: string | null;
}

export interface UPDATE_PLACE {
  updateWinterStoragePlace: UPDATE_PLACE_updateWinterStoragePlace | null;
}

export interface UPDATE_PLACEVariables {
  input: UpdateWinterStoragePlaceMutationInput;
}
