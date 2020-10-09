/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BERTH_ASSIGNMENT_PLANS
// ====================================================

export interface BERTH_ASSIGNMENT_PLANS_berthAssignmentPlans_application_harborChoices {
  __typename: "HarborChoiceType";
  harbor: string;
  harborName: string;
  priority: number;
}

export interface BERTH_ASSIGNMENT_PLANS_berthAssignmentPlans_application {
  __typename: "BerthApplicationNode";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  harborChoices: (BERTH_ASSIGNMENT_PLANS_berthAssignmentPlans_application_harborChoices | null)[] | null;
}

export interface BERTH_ASSIGNMENT_PLANS_berthAssignmentPlans_berth_pier_properties_harbor_properties {
  __typename: "HarborProperties";
  servicemapId: string | null;
  name: string | null;
}

export interface BERTH_ASSIGNMENT_PLANS_berthAssignmentPlans_berth_pier_properties_harbor {
  __typename: "HarborNode";
  properties: BERTH_ASSIGNMENT_PLANS_berthAssignmentPlans_berth_pier_properties_harbor_properties | null;
}

export interface BERTH_ASSIGNMENT_PLANS_berthAssignmentPlans_berth_pier_properties {
  __typename: "PierProperties";
  identifier: string;
  harbor: BERTH_ASSIGNMENT_PLANS_berthAssignmentPlans_berth_pier_properties_harbor;
}

export interface BERTH_ASSIGNMENT_PLANS_berthAssignmentPlans_berth_pier {
  __typename: "PierNode";
  properties: BERTH_ASSIGNMENT_PLANS_berthAssignmentPlans_berth_pier_properties | null;
}

export interface BERTH_ASSIGNMENT_PLANS_berthAssignmentPlans_berth {
  __typename: "BerthNode";
  id: string;
  number: string;
  pier: BERTH_ASSIGNMENT_PLANS_berthAssignmentPlans_berth_pier;
}

export interface BERTH_ASSIGNMENT_PLANS_berthAssignmentPlans {
  __typename: "BerthAssignmentPlanNode";
  id: string;
  application: BERTH_ASSIGNMENT_PLANS_berthAssignmentPlans_application;
  berth: BERTH_ASSIGNMENT_PLANS_berthAssignmentPlans_berth;
}

export interface BERTH_ASSIGNMENT_PLANS {
  berthAssignmentPlans: (BERTH_ASSIGNMENT_PLANS_berthAssignmentPlans | null)[] | null;
}
