/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CREATE_LEASE_HARBORS
// ====================================================

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
  harbors: CREATE_LEASE_HARBORS_harbors | null;
}
