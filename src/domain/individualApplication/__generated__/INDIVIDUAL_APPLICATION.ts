/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrganizationType, ApplicationStatus, BerthMooringType } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL query operation: INDIVIDUAL_APPLICATION
// ====================================================

export interface INDIVIDUAL_APPLICATION_berthApplication_customer_organization {
  __typename: "OrganizationNode";
  businessId: string;
  organizationType: OrganizationType;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_customer {
  __typename: "ProfileNode";
  id: string;
  organization: INDIVIDUAL_APPLICATION_berthApplication_customer_organization | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_berthSwitch_reason {
  __typename: "BerthSwitchReasonType";
  title: string | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_berthSwitch {
  __typename: "BerthSwitchType";
  berthNumber: string;
  harbor: string;
  harborName: string;
  id: string;
  pier: string;
  reason: INDIVIDUAL_APPLICATION_berthApplication_berthSwitch_reason | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_lease_berth_berthType {
  __typename: "BerthTypeNode";
  depth: number | null;
  length: number;
  mooringType: BerthMooringType;
  width: number;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_lease_berth_pier_properties_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_lease_berth_pier_properties_harbor {
  __typename: "HarborNode";
  id: string;
  properties: INDIVIDUAL_APPLICATION_berthApplication_lease_berth_pier_properties_harbor_properties | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_lease_berth_pier_properties {
  __typename: "PierProperties";
  identifier: string;
  electricity: boolean;
  gate: boolean;
  lighting: boolean;
  mooring: boolean;
  wasteCollection: boolean;
  water: boolean;
  harbor: INDIVIDUAL_APPLICATION_berthApplication_lease_berth_pier_properties_harbor;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_lease_berth_pier {
  __typename: "PierNode";
  properties: INDIVIDUAL_APPLICATION_berthApplication_lease_berth_pier_properties | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_lease_berth {
  __typename: "BerthNode";
  berthType: INDIVIDUAL_APPLICATION_berthApplication_lease_berth_berthType;
  comment: string;
  isAccessible: boolean | null;
  number: number;
  pier: INDIVIDUAL_APPLICATION_berthApplication_lease_berth_pier;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_lease {
  __typename: "BerthLeaseNode";
  id: string;
  berth: INDIVIDUAL_APPLICATION_berthApplication_lease_berth;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_harborChoices {
  __typename: "HarborChoiceType";
  harbor: string;
  priority: number;
  harborName: string;
}

export interface INDIVIDUAL_APPLICATION_berthApplication {
  __typename: "BerthApplicationNode";
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  municipality: string;
  zipCode: string;
  phoneNumber: string;
  email: string;
  customer: INDIVIDUAL_APPLICATION_berthApplication_customer | null;
  berthSwitch: INDIVIDUAL_APPLICATION_berthApplication_berthSwitch | null;
  createdAt: any;
  boatType: string | null;
  boatRegistrationNumber: string;
  boatWidth: number;
  boatLength: number;
  boatDraught: number | null;
  boatWeight: number | null;
  boatName: string;
  boatModel: string;
  accessibilityRequired: boolean;
  status: ApplicationStatus;
  lease: INDIVIDUAL_APPLICATION_berthApplication_lease | null;
  harborChoices: (INDIVIDUAL_APPLICATION_berthApplication_harborChoices | null)[] | null;
}

export interface INDIVIDUAL_APPLICATION_boatTypes {
  __typename: "BoatTypeType";
  id: string;
  name: string | null;
}

export interface INDIVIDUAL_APPLICATION {
  berthApplication: INDIVIDUAL_APPLICATION_berthApplication | null;
  boatTypes: INDIVIDUAL_APPLICATION_boatTypes[] | null;
}

export interface INDIVIDUAL_APPLICATIONVariables {
  id: string;
}
