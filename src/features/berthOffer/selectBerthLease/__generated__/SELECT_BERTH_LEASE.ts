/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SELECT_BERTH_LEASE
// ====================================================

export interface SELECT_BERTH_LEASE_profile_berthLeases_edges_node_berth_pier_properties_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface SELECT_BERTH_LEASE_profile_berthLeases_edges_node_berth_pier_properties_harbor {
  __typename: "HarborNode";
  id: string;
  properties: SELECT_BERTH_LEASE_profile_berthLeases_edges_node_berth_pier_properties_harbor_properties | null;
}

export interface SELECT_BERTH_LEASE_profile_berthLeases_edges_node_berth_pier_properties {
  __typename: "PierProperties";
  identifier: string;
  harbor: SELECT_BERTH_LEASE_profile_berthLeases_edges_node_berth_pier_properties_harbor;
}

export interface SELECT_BERTH_LEASE_profile_berthLeases_edges_node_berth_pier {
  __typename: "PierNode";
  id: string;
  properties: SELECT_BERTH_LEASE_profile_berthLeases_edges_node_berth_pier_properties | null;
}

export interface SELECT_BERTH_LEASE_profile_berthLeases_edges_node_berth {
  __typename: "BerthNode";
  number: string;
  pier: SELECT_BERTH_LEASE_profile_berthLeases_edges_node_berth_pier;
}

export interface SELECT_BERTH_LEASE_profile_berthLeases_edges_node {
  __typename: "BerthLeaseNode";
  id: string;
  isActive: boolean;
  berth: SELECT_BERTH_LEASE_profile_berthLeases_edges_node_berth;
}

export interface SELECT_BERTH_LEASE_profile_berthLeases_edges {
  __typename: "BerthLeaseNodeEdge";
  node: SELECT_BERTH_LEASE_profile_berthLeases_edges_node | null;
}

export interface SELECT_BERTH_LEASE_profile_berthLeases {
  __typename: "BerthLeaseNodeConnection";
  edges: (SELECT_BERTH_LEASE_profile_berthLeases_edges | null)[];
}

export interface SELECT_BERTH_LEASE_profile {
  __typename: "ProfileNode";
  berthLeases: SELECT_BERTH_LEASE_profile_berthLeases | null;
}

export interface SELECT_BERTH_LEASE {
  profile: SELECT_BERTH_LEASE_profile | null;
}

export interface SELECT_BERTH_LEASEVariables {
  customerId: string;
}
