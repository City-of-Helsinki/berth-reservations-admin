/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateProfileMutationInput } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UPDATE_PROFILE
// ====================================================

export interface UPDATE_PROFILE_updateProfile {
  __typename: "UpdateProfileMutationPayload";
  clientMutationId: string | null;
}

export interface UPDATE_PROFILE {
  updateProfile: UPDATE_PROFILE_updateProfile | null;
}

export interface UPDATE_PROFILEVariables {
  input: UpdateProfileMutationInput;
}
