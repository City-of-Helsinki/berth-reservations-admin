/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateWinterStorageSectionMutationInput } from "./../../../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CREATE_SECTION
// ====================================================

export interface CREATE_SECTION_createWinterStorageSection {
  __typename: "CreateWinterStorageSectionMutationPayload";
  clientMutationId: string | null;
}

export interface CREATE_SECTION {
  createWinterStorageSection: CREATE_SECTION_createWinterStorageSection | null;
}

export interface CREATE_SECTIONVariables {
  input: CreateWinterStorageSectionMutationInput;
}
