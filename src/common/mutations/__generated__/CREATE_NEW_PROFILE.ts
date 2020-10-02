/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateAddressInput } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CREATE_NEW_PROFILE
// ====================================================

export interface CREATE_NEW_PROFILE_createProfile_profile_primaryAddress {
  __typename: "AddressNode";
  address: string;
  city: string;
}

export interface CREATE_NEW_PROFILE_createProfile_profile {
  __typename: "ProfileNode";
  id: string;
  lastName: string;
  firstName: string;
  primaryAddress: CREATE_NEW_PROFILE_createProfile_profile_primaryAddress | null;
}

export interface CREATE_NEW_PROFILE_createProfile {
  __typename: "CreateProfileMutationPayload";
  profile: CREATE_NEW_PROFILE_createProfile_profile | null;
}

export interface CREATE_NEW_PROFILE {
  createProfile: CREATE_NEW_PROFILE_createProfile | null;
}

export interface CREATE_NEW_PROFILEVariables {
  firstName: string;
  lastName: string;
  addresses: (CreateAddressInput | null)[];
  email: string;
  phone: string;
}
