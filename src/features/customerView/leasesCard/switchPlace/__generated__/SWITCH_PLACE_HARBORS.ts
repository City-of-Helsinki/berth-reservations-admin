/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SWITCH_PLACE_HARBORS
// ====================================================

export interface SWITCH_PLACE_HARBORS_harbors_edges_node_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface SWITCH_PLACE_HARBORS_harbors_edges_node {
  __typename: "HarborNode";
  id: string;
  properties: SWITCH_PLACE_HARBORS_harbors_edges_node_properties | null;
}

export interface SWITCH_PLACE_HARBORS_harbors_edges {
  __typename: "HarborNodeEdge";
  node: SWITCH_PLACE_HARBORS_harbors_edges_node | null;
}

export interface SWITCH_PLACE_HARBORS_harbors {
  __typename: "HarborNodeConnection";
  edges: (SWITCH_PLACE_HARBORS_harbors_edges | null)[];
}

export interface SWITCH_PLACE_HARBORS {
  harbors: SWITCH_PLACE_HARBORS_harbors | null;
}
