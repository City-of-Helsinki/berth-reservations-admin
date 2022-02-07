/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ApplicationStatus, LeaseStatus, BerthMooringType } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL query operation: BERTH_OFFER
// ====================================================

export interface BERTH_OFFER_berthApplication_berthSwitch {
  __typename: "BerthSwitchType";
  id: string;
}

export interface BERTH_OFFER_berthApplication_customer {
  __typename: "ProfileNode";
  id: string;
}

export interface BERTH_OFFER_berthApplication {
  __typename: "BerthApplicationNode";
  id: string;
  createdAt: any;
  status: ApplicationStatus;
  berthSwitch: BERTH_OFFER_berthApplication_berthSwitch | null;
  customer: BERTH_OFFER_berthApplication_customer | null;
  boatType: string | null;
  boatRegistrationNumber: string | null;
  boatName: string | null;
  boatModel: string | null;
  boatWidth: any | null;
  boatLength: any | null;
  boatDraught: any | null;
  boatWeight: number | null;
}

export interface BERTH_OFFER_boatTypes {
  __typename: "BoatTypeType";
  id: string;
  name: string | null;
}

export interface BERTH_OFFER_harbor_properties_piers_edges_node_properties_berths_edges_node_leases_edges_node_customer {
  __typename: "ProfileNode";
  id: string;
}

export interface BERTH_OFFER_harbor_properties_piers_edges_node_properties_berths_edges_node_leases_edges_node {
  __typename: "BerthLeaseNode";
  status: LeaseStatus;
  startDate: any;
  endDate: any;
  isActive: boolean;
  customer: BERTH_OFFER_harbor_properties_piers_edges_node_properties_berths_edges_node_leases_edges_node_customer;
}

export interface BERTH_OFFER_harbor_properties_piers_edges_node_properties_berths_edges_node_leases_edges {
  __typename: "BerthLeaseNodeEdge";
  node: BERTH_OFFER_harbor_properties_piers_edges_node_properties_berths_edges_node_leases_edges_node | null;
}

export interface BERTH_OFFER_harbor_properties_piers_edges_node_properties_berths_edges_node_leases {
  __typename: "BerthLeaseNodeConnection";
  edges: (BERTH_OFFER_harbor_properties_piers_edges_node_properties_berths_edges_node_leases_edges | null)[];
}

export interface BERTH_OFFER_harbor_properties_piers_edges_node_properties_berths_edges_node {
  __typename: "BerthNode";
  comment: string;
  depth: number | null;
  id: string;
  isAccessible: boolean | null;
  isActive: boolean;
  leases: BERTH_OFFER_harbor_properties_piers_edges_node_properties_berths_edges_node_leases | null;
  length: number;
  mooringType: BerthMooringType;
  number: string;
  width: number;
}

export interface BERTH_OFFER_harbor_properties_piers_edges_node_properties_berths_edges {
  __typename: "BerthNodeEdge";
  node: BERTH_OFFER_harbor_properties_piers_edges_node_properties_berths_edges_node | null;
}

export interface BERTH_OFFER_harbor_properties_piers_edges_node_properties_berths {
  __typename: "BerthNodeConnection";
  edges: (BERTH_OFFER_harbor_properties_piers_edges_node_properties_berths_edges | null)[];
}

export interface BERTH_OFFER_harbor_properties_piers_edges_node_properties {
  __typename: "PierProperties";
  identifier: string;
  electricity: boolean;
  gate: boolean;
  water: boolean;
  lighting: boolean;
  wasteCollection: boolean;
  berths: BERTH_OFFER_harbor_properties_piers_edges_node_properties_berths;
}

export interface BERTH_OFFER_harbor_properties_piers_edges_node {
  __typename: "PierNode";
  id: string;
  properties: BERTH_OFFER_harbor_properties_piers_edges_node_properties | null;
}

export interface BERTH_OFFER_harbor_properties_piers_edges {
  __typename: "PierNodeEdge";
  node: BERTH_OFFER_harbor_properties_piers_edges_node | null;
}

export interface BERTH_OFFER_harbor_properties_piers {
  __typename: "PierNodeConnection";
  edges: (BERTH_OFFER_harbor_properties_piers_edges | null)[];
}

export interface BERTH_OFFER_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
  servicemapId: string | null;
  imageFile: string | null;
  streetAddress: string | null;
  municipality: string | null;
  zipCode: string;
  maxWidth: number | null;
  numberOfPlaces: number;
  numberOfFreePlaces: number;
  piers: BERTH_OFFER_harbor_properties_piers | null;
}

export interface BERTH_OFFER_harbor {
  __typename: "HarborNode";
  id: string;
  properties: BERTH_OFFER_harbor_properties | null;
}

export interface BERTH_OFFER {
  berthApplication: BERTH_OFFER_berthApplication | null;
  boatTypes: BERTH_OFFER_boatTypes[] | null;
  harbor: BERTH_OFFER_harbor | null;
}

export interface BERTH_OFFERVariables {
  applicationId: string;
  harborId: string;
}
