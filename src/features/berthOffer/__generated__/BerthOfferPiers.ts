/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LeaseStatus, BerthMooringType } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL fragment: BerthOfferPiers
// ====================================================

export interface BerthOfferPiers_edges_node_properties_berths_edges_node_leases_edges_node_customer {
  __typename: "ProfileNode";
  id: string;
}

export interface BerthOfferPiers_edges_node_properties_berths_edges_node_leases_edges_node {
  __typename: "BerthLeaseNode";
  status: LeaseStatus;
  startDate: any;
  endDate: any;
  isActive: boolean;
  customer: BerthOfferPiers_edges_node_properties_berths_edges_node_leases_edges_node_customer;
}

export interface BerthOfferPiers_edges_node_properties_berths_edges_node_leases_edges {
  __typename: "BerthLeaseNodeEdge";
  node: BerthOfferPiers_edges_node_properties_berths_edges_node_leases_edges_node | null;
}

export interface BerthOfferPiers_edges_node_properties_berths_edges_node_leases {
  __typename: "BerthLeaseNodeConnection";
  edges: (BerthOfferPiers_edges_node_properties_berths_edges_node_leases_edges | null)[];
}

export interface BerthOfferPiers_edges_node_properties_berths_edges_node {
  __typename: "BerthNode";
  comment: string;
  depth: number | null;
  id: string;
  isAccessible: boolean | null;
  isActive: boolean;
  leases: BerthOfferPiers_edges_node_properties_berths_edges_node_leases | null;
  length: number;
  mooringType: BerthMooringType;
  number: string;
  width: number;
}

export interface BerthOfferPiers_edges_node_properties_berths_edges {
  __typename: "BerthNodeEdge";
  node: BerthOfferPiers_edges_node_properties_berths_edges_node | null;
}

export interface BerthOfferPiers_edges_node_properties_berths {
  __typename: "BerthNodeConnection";
  edges: (BerthOfferPiers_edges_node_properties_berths_edges | null)[];
}

export interface BerthOfferPiers_edges_node_properties {
  __typename: "PierProperties";
  identifier: string;
  electricity: boolean;
  gate: boolean;
  water: boolean;
  lighting: boolean;
  wasteCollection: boolean;
  berths: BerthOfferPiers_edges_node_properties_berths;
}

export interface BerthOfferPiers_edges_node {
  __typename: "PierNode";
  id: string;
  properties: BerthOfferPiers_edges_node_properties | null;
}

export interface BerthOfferPiers_edges {
  __typename: "PierNodeEdge";
  node: BerthOfferPiers_edges_node | null;
}

export interface BerthOfferPiers {
  __typename: "PierNodeConnection";
  edges: (BerthOfferPiers_edges | null)[];
}
