/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AssignNewStickerNumberMutationInput } from "./../../../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: ASSIGN_NEW_STICKER_NUMBER
// ====================================================

export interface ASSIGN_NEW_STICKER_NUMBER_assignNewStickerNumber {
  __typename: "AssignNewStickerNumberMutationPayload";
  clientMutationId: string | null;
}

export interface ASSIGN_NEW_STICKER_NUMBER {
  assignNewStickerNumber: ASSIGN_NEW_STICKER_NUMBER_assignNewStickerNumber | null;
}

export interface ASSIGN_NEW_STICKER_NUMBERVariables {
  input: AssignNewStickerNumberMutationInput;
}
