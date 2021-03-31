/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CREATE_LEASE_HARBORS
// ====================================================

export interface CREATE_LEASE_HARBORS_profile_boats_edges_node {
  __typename: "BoatNode";
  id: string;
  name: string;
}

export interface CREATE_LEASE_HARBORS_profile_boats_edges {
  __typename: "BoatNodeEdge";
  node: CREATE_LEASE_HARBORS_profile_boats_edges_node | null;
}

export interface CREATE_LEASE_HARBORS_profile_boats {
  __typename: "BoatNodeConnection";
  edges: (CREATE_LEASE_HARBORS_profile_boats_edges | null)[];
}

export interface CREATE_LEASE_HARBORS_profile {
  __typename: "ProfileNode";
  boats: CREATE_LEASE_HARBORS_profile_boats | null;
}

export interface CREATE_LEASE_HARBORS_harbors_edges_node_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface CREATE_LEASE_HARBORS_harbors_edges_node {
  __typename: "HarborNode";
  id: string;
  properties: CREATE_LEASE_HARBORS_harbors_edges_node_properties | null;
}

export interface CREATE_LEASE_HARBORS_harbors_edges {
  __typename: "HarborNodeEdge";
  node: CREATE_LEASE_HARBORS_harbors_edges_node | null;
}

export interface CREATE_LEASE_HARBORS_harbors {
  __typename: "HarborNodeConnection";
  edges: (CREATE_LEASE_HARBORS_harbors_edges | null)[];
}

export interface CREATE_LEASE_HARBORS {
  profile: CREATE_LEASE_HARBORS_profile | null;
  harbors: CREATE_LEASE_HARBORS_harbors | null;
}

export interface CREATE_LEASE_HARBORSVariables {
  customerId: string;
}
