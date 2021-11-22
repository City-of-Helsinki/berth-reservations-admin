/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CREATE_BERTH_LEASE_MODAL
// ====================================================

export interface CREATE_BERTH_LEASE_MODAL_profile_boats_edges_node {
  __typename: "BoatNode";
  id: string;
  name: string;
}

export interface CREATE_BERTH_LEASE_MODAL_profile_boats_edges {
  __typename: "BoatNodeEdge";
  node: CREATE_BERTH_LEASE_MODAL_profile_boats_edges_node | null;
}

export interface CREATE_BERTH_LEASE_MODAL_profile_boats {
  __typename: "BoatNodeConnection";
  edges: (CREATE_BERTH_LEASE_MODAL_profile_boats_edges | null)[];
}

export interface CREATE_BERTH_LEASE_MODAL_profile {
  __typename: "ProfileNode";
  boats: CREATE_BERTH_LEASE_MODAL_profile_boats | null;
}

export interface CREATE_BERTH_LEASE_MODAL_harbors_edges_node_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface CREATE_BERTH_LEASE_MODAL_harbors_edges_node {
  __typename: "HarborNode";
  id: string;
  properties: CREATE_BERTH_LEASE_MODAL_harbors_edges_node_properties | null;
}

export interface CREATE_BERTH_LEASE_MODAL_harbors_edges {
  __typename: "HarborNodeEdge";
  node: CREATE_BERTH_LEASE_MODAL_harbors_edges_node | null;
}

export interface CREATE_BERTH_LEASE_MODAL_harbors {
  __typename: "HarborNodeConnection";
  edges: (CREATE_BERTH_LEASE_MODAL_harbors_edges | null)[];
}

export interface CREATE_BERTH_LEASE_MODAL {
  profile: CREATE_BERTH_LEASE_MODAL_profile | null;
  harbors: CREATE_BERTH_LEASE_MODAL_harbors | null;
}

export interface CREATE_BERTH_LEASE_MODALVariables {
  customerId: string;
}
