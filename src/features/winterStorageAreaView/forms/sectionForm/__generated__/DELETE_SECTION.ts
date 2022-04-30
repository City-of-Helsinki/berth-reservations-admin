/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeleteWinterStorageSectionMutationInput } from "./../../../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DELETE_SECTION
// ====================================================

export interface DELETE_SECTION_deleteWinterStorageSection {
  __typename: "DeleteWinterStorageSectionMutationPayload";
  clientMutationId: string | null;
}

export interface DELETE_SECTION {
  deleteWinterStorageSection: DELETE_SECTION_deleteWinterStorageSection | null;
}

export interface DELETE_SECTIONVariables {
  input: DeleteWinterStorageSectionMutationInput;
}
