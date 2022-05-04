/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PriceTier, BerthMooringType, LeaseStatus } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL query operation: INDIVIDUAL_HARBOR
// ====================================================

export interface INDIVIDUAL_HARBOR_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
  numberOfPlaces: number;
  numberOfFreePlaces: number;
  streetAddress: string | null;
  zipCode: string;
  municipality: string | null;
  wwwUrl: string;
  imageFile: string | null;
  servicemapId: string | null;
  maxWidth: number | null;
}

export interface INDIVIDUAL_HARBOR_harbor {
  __typename: "HarborNode";
  id: string;
  properties: INDIVIDUAL_HARBOR_harbor_properties | null;
}

export interface INDIVIDUAL_HARBOR_piers_edges_node_properties_suitableBoatTypes {
  __typename: "BoatTypeType";
  name: string | null;
}

export interface INDIVIDUAL_HARBOR_piers_edges_node_properties {
  __typename: "PierProperties";
  identifier: string;
  priceTier: PriceTier | null;
  electricity: boolean;
  wasteCollection: boolean;
  water: boolean;
  lighting: boolean;
  gate: boolean;
  suitableBoatTypes: INDIVIDUAL_HARBOR_piers_edges_node_properties_suitableBoatTypes[];
}

export interface INDIVIDUAL_HARBOR_piers_edges_node {
  __typename: "PierNode";
  id: string;
  properties: INDIVIDUAL_HARBOR_piers_edges_node_properties | null;
}

export interface INDIVIDUAL_HARBOR_piers_edges {
  __typename: "PierNodeEdge";
  node: INDIVIDUAL_HARBOR_piers_edges_node | null;
}

export interface INDIVIDUAL_HARBOR_piers {
  __typename: "PierNodeConnection";
  edges: (INDIVIDUAL_HARBOR_piers_edges | null)[];
}

export interface INDIVIDUAL_HARBOR_berths_edges_node_leases_edges_node_customer {
  __typename: "ProfileNode";
  id: string;
}

export interface INDIVIDUAL_HARBOR_berths_edges_node_leases_edges_node {
  __typename: "BerthLeaseNode";
  customer: INDIVIDUAL_HARBOR_berths_edges_node_leases_edges_node_customer;
  status: LeaseStatus;
  startDate: any;
  endDate: any;
  isActive: boolean;
}

export interface INDIVIDUAL_HARBOR_berths_edges_node_leases_edges {
  __typename: "BerthLeaseNodeEdge";
  node: INDIVIDUAL_HARBOR_berths_edges_node_leases_edges_node | null;
}

export interface INDIVIDUAL_HARBOR_berths_edges_node_leases {
  __typename: "BerthLeaseNodeConnection";
  edges: (INDIVIDUAL_HARBOR_berths_edges_node_leases_edges | null)[];
}

export interface INDIVIDUAL_HARBOR_berths_edges_node_prevSeasonLease_customer {
  __typename: "ProfileNode";
  id: string;
}

export interface INDIVIDUAL_HARBOR_berths_edges_node_prevSeasonLease {
  __typename: "BerthLeaseNode";
  customer: INDIVIDUAL_HARBOR_berths_edges_node_prevSeasonLease_customer;
  status: LeaseStatus;
  startDate: any;
  endDate: any;
  isActive: boolean;
}

export interface INDIVIDUAL_HARBOR_berths_edges_node_pendingSwitchOffer_customer {
  __typename: "ProfileNode";
  id: string;
}

export interface INDIVIDUAL_HARBOR_berths_edges_node_pendingSwitchOffer {
  __typename: "BerthSwitchOfferNode";
  customer: INDIVIDUAL_HARBOR_berths_edges_node_pendingSwitchOffer_customer;
}

export interface INDIVIDUAL_HARBOR_berths_edges_node_pier_properties {
  __typename: "PierProperties";
  identifier: string;
}

export interface INDIVIDUAL_HARBOR_berths_edges_node_pier {
  __typename: "PierNode";
  id: string;
  properties: INDIVIDUAL_HARBOR_berths_edges_node_pier_properties | null;
}

export interface INDIVIDUAL_HARBOR_berths_edges_node {
  __typename: "BerthNode";
  id: string;
  isActive: boolean;
  number: string;
  width: number;
  length: number;
  depth: number | null;
  mooringType: BerthMooringType;
  comment: string;
  leases: INDIVIDUAL_HARBOR_berths_edges_node_leases | null;
  prevSeasonLease: INDIVIDUAL_HARBOR_berths_edges_node_prevSeasonLease | null;
  pendingSwitchOffer: INDIVIDUAL_HARBOR_berths_edges_node_pendingSwitchOffer | null;
  pier: INDIVIDUAL_HARBOR_berths_edges_node_pier;
}

export interface INDIVIDUAL_HARBOR_berths_edges {
  __typename: "BerthNodeEdge";
  node: INDIVIDUAL_HARBOR_berths_edges_node | null;
}

export interface INDIVIDUAL_HARBOR_berths {
  __typename: "BerthNodeConnection";
  count: number;
  edges: (INDIVIDUAL_HARBOR_berths_edges | null)[];
}

export interface INDIVIDUAL_HARBOR {
  harbor: INDIVIDUAL_HARBOR_harbor | null;
  piers: INDIVIDUAL_HARBOR_piers | null;
  berths: INDIVIDUAL_HARBOR_berths | null;
}

export interface INDIVIDUAL_HARBORVariables {
  harborId: string;
  isBerthActive?: boolean | null;
}
