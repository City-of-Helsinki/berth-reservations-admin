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
  /**
   * Updates the profile with id given as an argument based on the given data.
   * 
   * One or several of the following is possible to add, modify or remove:
   * 
   * * Email
   * * Address
   * * Phone
   * 
   * If sensitive data is given, associated data will also be created and linked to the profile **or** the existing data set will be updated if the profile is already linked to it.
   * 
   * Requires elevated privileges.
   * 
   * Possible error codes:
   * 
   * * `PROFILE_MUST_HAVE_PRIMARY_EMAIL`: If trying to get rid of the profile's primary email.
   * * `DATA_CONFLICT_ERROR`: Could not update with the provided data because it would cause a conflict.
   */
  updateProfile: UPDATE_PROFILE_updateProfile | null;
}

export interface UPDATE_PROFILEVariables {
  input: UpdateProfileMutationInput;
}
