/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateBerthServicesProfileMutationInput, InvoicingType, OrganizationType } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CREATE_BERTH_SERVICE_PROFILE
// ====================================================

export interface CREATE_BERTH_SERVICE_PROFILE_createBerthServicesProfile_profile_organization {
  __typename: "OrganizationNode";
  id: string;
  organizationType: OrganizationType;
  businessId: string;
  name: string;
}

export interface CREATE_BERTH_SERVICE_PROFILE_createBerthServicesProfile_profile {
  __typename: "ProfileNode";
  /**
   * The ID of the object
   */
  id: string;
  invoicingType: InvoicingType | null;
  comment: string | null;
  organization: CREATE_BERTH_SERVICE_PROFILE_createBerthServicesProfile_profile_organization | null;
}

export interface CREATE_BERTH_SERVICE_PROFILE_createBerthServicesProfile {
  __typename: "CreateBerthServicesProfileMutationPayload";
  profile: CREATE_BERTH_SERVICE_PROFILE_createBerthServicesProfile_profile | null;
}

export interface CREATE_BERTH_SERVICE_PROFILE {
  createBerthServicesProfile: CREATE_BERTH_SERVICE_PROFILE_createBerthServicesProfile | null;
}

export interface CREATE_BERTH_SERVICE_PROFILEVariables {
  input: CreateBerthServicesProfileMutationInput;
}
