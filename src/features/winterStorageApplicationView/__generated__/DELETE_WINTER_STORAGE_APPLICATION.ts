/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeleteWinterStorageApplicationMutationInput } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DELETE_WINTER_STORAGE_APPLICATION
// ====================================================

export interface DELETE_WINTER_STORAGE_APPLICATION_deleteWinterStorageApplication {
  __typename: "DeleteWinterStorageApplicationMutationPayload";
  clientMutationId: string | null;
}

export interface DELETE_WINTER_STORAGE_APPLICATION {
  deleteWinterStorageApplication: DELETE_WINTER_STORAGE_APPLICATION_deleteWinterStorageApplication | null;
}

export interface DELETE_WINTER_STORAGE_APPLICATIONVariables {
  input: DeleteWinterStorageApplicationMutationInput;
}
