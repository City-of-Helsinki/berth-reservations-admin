/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeleteWinterStoragePlaceMutationInput } from "./../../../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DELETE_PLACE
// ====================================================

export interface DELETE_PLACE_deleteWinterStoragePlace {
  __typename: "DeleteWinterStoragePlaceMutationPayload";
  clientMutationId: string | null;
}

export interface DELETE_PLACE {
  deleteWinterStoragePlace: DELETE_PLACE_deleteWinterStoragePlace | null;
}

export interface DELETE_PLACEVariables {
  input: DeleteWinterStoragePlaceMutationInput;
}
