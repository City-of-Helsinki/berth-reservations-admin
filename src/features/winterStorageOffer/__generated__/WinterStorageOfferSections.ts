/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LeaseStatus } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL fragment: WinterStorageOfferSections
// ====================================================

export interface WinterStorageOfferSections_edges_node_properties_places_edges_node_leases_edges_node_customer {
  __typename: "ProfileNode";
  id: string;
}

export interface WinterStorageOfferSections_edges_node_properties_places_edges_node_leases_edges_node {
  __typename: "WinterStorageLeaseNode";
  status: LeaseStatus;
  startDate: any;
  endDate: any;
  isActive: boolean;
  customer: WinterStorageOfferSections_edges_node_properties_places_edges_node_leases_edges_node_customer;
}

export interface WinterStorageOfferSections_edges_node_properties_places_edges_node_leases_edges {
  __typename: "WinterStorageLeaseNodeEdge";
  node: WinterStorageOfferSections_edges_node_properties_places_edges_node_leases_edges_node | null;
}

export interface WinterStorageOfferSections_edges_node_properties_places_edges_node_leases {
  __typename: "WinterStorageLeaseNodeConnection";
  edges: (WinterStorageOfferSections_edges_node_properties_places_edges_node_leases_edges | null)[];
}

export interface WinterStorageOfferSections_edges_node_properties_places_edges_node {
  __typename: "WinterStoragePlaceNode";
  id: string;
  isActive: boolean;
  isAvailable: boolean;
  leases: WinterStorageOfferSections_edges_node_properties_places_edges_node_leases | null;
  length: number;
  number: number;
  width: number;
}

export interface WinterStorageOfferSections_edges_node_properties_places_edges {
  __typename: "WinterStoragePlaceNodeEdge";
  node: WinterStorageOfferSections_edges_node_properties_places_edges_node | null;
}

export interface WinterStorageOfferSections_edges_node_properties_places {
  __typename: "WinterStoragePlaceNodeConnection";
  edges: (WinterStorageOfferSections_edges_node_properties_places_edges | null)[];
}

export interface WinterStorageOfferSections_edges_node_properties {
  __typename: "WinterStorageSectionProperties";
  identifier: string;
  electricity: boolean;
  gate: boolean;
  water: boolean;
  summerStorageForBoats: boolean;
  summerStorageForDockingEquipment: boolean;
  summerStorageForTrailers: boolean;
  places: WinterStorageOfferSections_edges_node_properties_places;
}

export interface WinterStorageOfferSections_edges_node {
  __typename: "WinterStorageSectionNode";
  id: string;
  properties: WinterStorageOfferSections_edges_node_properties | null;
}

export interface WinterStorageOfferSections_edges {
  __typename: "WinterStorageSectionNodeEdge";
  node: WinterStorageOfferSections_edges_node | null;
}

export interface WinterStorageOfferSections {
  __typename: "WinterStorageSectionNodeConnection";
  edges: (WinterStorageOfferSections_edges | null)[];
}
