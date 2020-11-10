/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SetStickersPostedMutationInput } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: SET_STICKERS_POSTED
// ====================================================

export interface SET_STICKERS_POSTED_setStickersPosted {
  __typename: "SetStickersPostedMutationPayload";
  clientMutationId: string | null;
}

export interface SET_STICKERS_POSTED {
  setStickersPosted: SET_STICKERS_POSTED_setStickersPosted | null;
}

export interface SET_STICKERS_POSTEDVariables {
  input: SetStickersPostedMutationInput;
}
