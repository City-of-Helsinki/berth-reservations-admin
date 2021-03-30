/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BerthMooringType, LeaseStatus } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL fragment: OfferPiers
// ====================================================

export interface OfferPiers_edges_node_properties_berths_edges_node_leases_edges_node_customer {
  __typename: "ProfileNode";
  id: string;
}

export interface OfferPiers_edges_node_properties_berths_edges_node_leases_edges_node {
  __typename: "BerthLeaseNode";
  status: LeaseStatus;
  startDate: any;
  endDate: any;
  isActive: boolean;
  customer: OfferPiers_edges_node_properties_berths_edges_node_leases_edges_node_customer;
}

export interface OfferPiers_edges_node_properties_berths_edges_node_leases_edges {
  __typename: "BerthLeaseNodeEdge";
  node: OfferPiers_edges_node_properties_berths_edges_node_leases_edges_node | null;
}

export interface OfferPiers_edges_node_properties_berths_edges_node_leases {
  __typename: "BerthLeaseNodeConnection";
  edges: (OfferPiers_edges_node_properties_berths_edges_node_leases_edges | null)[];
}

export interface OfferPiers_edges_node_properties_berths_edges_node {
  __typename: "BerthNode";
  id: string;
  number: string;
  width: number;
  length: number;
  depth: number | null;
  mooringType: BerthMooringType;
  comment: string;
  isAccessible: boolean | null;
  leases: OfferPiers_edges_node_properties_berths_edges_node_leases | null;
}

export interface OfferPiers_edges_node_properties_berths_edges {
  __typename: "BerthNodeEdge";
  node: OfferPiers_edges_node_properties_berths_edges_node | null;
}

export interface OfferPiers_edges_node_properties_berths {
  __typename: "BerthNodeConnection";
  edges: (OfferPiers_edges_node_properties_berths_edges | null)[];
}

export interface OfferPiers_edges_node_properties {
  __typename: "PierProperties";
  identifier: string;
  electricity: boolean;
  gate: boolean;
  water: boolean;
  lighting: boolean;
  wasteCollection: boolean;
  berths: OfferPiers_edges_node_properties_berths;
}

export interface OfferPiers_edges_node {
  __typename: "PierNode";
  id: string;
  properties: OfferPiers_edges_node_properties | null;
}

export interface OfferPiers_edges {
  __typename: "PierNodeEdge";
  node: OfferPiers_edges_node | null;
}

export interface OfferPiers {
  __typename: "PierNodeConnection";
  edges: (OfferPiers_edges | null)[];
}
