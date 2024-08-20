/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CREATE_WINTER_STORAGE_LEASE_MODAL
// ====================================================

export interface CREATE_WINTER_STORAGE_LEASE_MODAL_profile_boats_edges_node {
  __typename: "BoatNode";
  id: string;
  name: string;
}

export interface CREATE_WINTER_STORAGE_LEASE_MODAL_profile_boats_edges {
  __typename: "BoatNodeEdge";
  node: CREATE_WINTER_STORAGE_LEASE_MODAL_profile_boats_edges_node | null;
}

export interface CREATE_WINTER_STORAGE_LEASE_MODAL_profile_boats {
  __typename: "BoatNodeConnection";
  edges: (CREATE_WINTER_STORAGE_LEASE_MODAL_profile_boats_edges | null)[];
}

export interface CREATE_WINTER_STORAGE_LEASE_MODAL_profile {
  __typename: "ProfileNode";
  /**
   * The ID of the object
   */
  id: string;
  boats: CREATE_WINTER_STORAGE_LEASE_MODAL_profile_boats | null;
}

export interface CREATE_WINTER_STORAGE_LEASE_MODAL_winterStorageAreas_edges_node_properties {
  __typename: "WinterStorageAreaProperties";
  name: string | null;
}

export interface CREATE_WINTER_STORAGE_LEASE_MODAL_winterStorageAreas_edges_node {
  __typename: "WinterStorageAreaNode";
  id: string;
  properties: CREATE_WINTER_STORAGE_LEASE_MODAL_winterStorageAreas_edges_node_properties | null;
}

export interface CREATE_WINTER_STORAGE_LEASE_MODAL_winterStorageAreas_edges {
  __typename: "WinterStorageAreaNodeEdge";
  node: CREATE_WINTER_STORAGE_LEASE_MODAL_winterStorageAreas_edges_node | null;
}

export interface CREATE_WINTER_STORAGE_LEASE_MODAL_winterStorageAreas {
  __typename: "WinterStorageAreaNodeConnection";
  edges: (CREATE_WINTER_STORAGE_LEASE_MODAL_winterStorageAreas_edges | null)[];
}

export interface CREATE_WINTER_STORAGE_LEASE_MODAL {
  /**
   * Get profile by profile ID.
   * 
   * Requires `staff` credentials for the requester's service.The profile must have an active connection to the requester's service, otherwise it will not be returned.
   */
  profile: CREATE_WINTER_STORAGE_LEASE_MODAL_profile | null;
  winterStorageAreas: CREATE_WINTER_STORAGE_LEASE_MODAL_winterStorageAreas | null;
}

export interface CREATE_WINTER_STORAGE_LEASE_MODALVariables {
  customerId: string;
}
