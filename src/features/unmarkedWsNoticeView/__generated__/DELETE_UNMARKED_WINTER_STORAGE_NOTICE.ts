/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeleteWinterStorageApplicationMutationInput } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DELETE_UNMARKED_WINTER_STORAGE_NOTICE
// ====================================================

export interface DELETE_UNMARKED_WINTER_STORAGE_NOTICE_deleteWinterStorageApplication {
  __typename: "DeleteWinterStorageApplicationMutationPayload";
  clientMutationId: string | null;
}

export interface DELETE_UNMARKED_WINTER_STORAGE_NOTICE {
  deleteWinterStorageApplication: DELETE_UNMARKED_WINTER_STORAGE_NOTICE_deleteWinterStorageApplication | null;
}

export interface DELETE_UNMARKED_WINTER_STORAGE_NOTICEVariables {
  input: DeleteWinterStorageApplicationMutationInput;
}
