/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BerthMooringType, LeaseStatus } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL query operation: BERTH_DETAILS
// ====================================================

export interface BERTH_DETAILS_berth_leases_edges_node_customer {
  __typename: "ProfileNode";
  id: string;
  firstName: string;
  lastName: string;
}

export interface BERTH_DETAILS_berth_leases_edges_node {
  __typename: "BerthLeaseNode";
  id: string;
  customer: BERTH_DETAILS_berth_leases_edges_node_customer;
  status: LeaseStatus;
  startDate: any;
  endDate: any;
  isActive: boolean;
}

export interface BERTH_DETAILS_berth_leases_edges {
  __typename: "BerthLeaseNodeEdge";
  node: BERTH_DETAILS_berth_leases_edges_node | null;
}

export interface BERTH_DETAILS_berth_leases {
  __typename: "BerthLeaseNodeConnection";
  edges: (BERTH_DETAILS_berth_leases_edges | null)[];
}

export interface BERTH_DETAILS_berth_pier_properties {
  __typename: "PierProperties";
  identifier: string;
}

export interface BERTH_DETAILS_berth_pier {
  __typename: "PierNode";
  properties: BERTH_DETAILS_berth_pier_properties | null;
}

export interface BERTH_DETAILS_berth {
  __typename: "BerthNode";
  id: string;
  isActive: boolean;
  number: string;
  width: number;
  length: number;
  depth: number | null;
  mooringType: BerthMooringType;
  comment: string;
  leases: BERTH_DETAILS_berth_leases | null;
  pier: BERTH_DETAILS_berth_pier;
}

export interface BERTH_DETAILS {
  berth: BERTH_DETAILS_berth | null;
}

export interface BERTH_DETAILSVariables {
  berthId: string;
}
