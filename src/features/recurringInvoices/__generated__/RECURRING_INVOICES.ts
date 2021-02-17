/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RECURRING_INVOICES
// ====================================================

export interface RECURRING_INVOICES_sent {
  __typename: "BerthLeaseNodeConnection";
  count: number;
}

export interface RECURRING_INVOICES_failed {
  __typename: "BerthLeaseNodeConnection";
  count: number;
}

export interface RECURRING_INVOICES_paid {
  __typename: "BerthLeaseNodeConnection";
  count: number;
}

export interface RECURRING_INVOICES_pending {
  __typename: "BerthLeaseNodeConnection";
  count: number;
}

export interface RECURRING_INVOICES_berthLeases_edges_node_customer {
  __typename: "ProfileNode";
  id: string;
  firstName: string;
  lastName: string;
}

export interface RECURRING_INVOICES_berthLeases_edges_node_berth_pier_properties_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface RECURRING_INVOICES_berthLeases_edges_node_berth_pier_properties_harbor {
  __typename: "HarborNode";
  id: string;
  properties: RECURRING_INVOICES_berthLeases_edges_node_berth_pier_properties_harbor_properties | null;
}

export interface RECURRING_INVOICES_berthLeases_edges_node_berth_pier_properties {
  __typename: "PierProperties";
  harbor: RECURRING_INVOICES_berthLeases_edges_node_berth_pier_properties_harbor;
}

export interface RECURRING_INVOICES_berthLeases_edges_node_berth_pier {
  __typename: "PierNode";
  id: string;
  properties: RECURRING_INVOICES_berthLeases_edges_node_berth_pier_properties | null;
}

export interface RECURRING_INVOICES_berthLeases_edges_node_berth {
  __typename: "BerthNode";
  id: string;
  pier: RECURRING_INVOICES_berthLeases_edges_node_berth_pier;
}

export interface RECURRING_INVOICES_berthLeases_edges_node {
  __typename: "BerthLeaseNode";
  id: string;
  comment: string;
  customer: RECURRING_INVOICES_berthLeases_edges_node_customer;
  berth: RECURRING_INVOICES_berthLeases_edges_node_berth;
}

export interface RECURRING_INVOICES_berthLeases_edges {
  __typename: "BerthLeaseNodeEdge";
  node: RECURRING_INVOICES_berthLeases_edges_node | null;
}

export interface RECURRING_INVOICES_berthLeases {
  __typename: "BerthLeaseNodeConnection";
  edges: (RECURRING_INVOICES_berthLeases_edges | null)[];
}

export interface RECURRING_INVOICES {
  sent: RECURRING_INVOICES_sent | null;
  failed: RECURRING_INVOICES_failed | null;
  paid: RECURRING_INVOICES_paid | null;
  pending: RECURRING_INVOICES_pending | null;
  berthLeases: RECURRING_INVOICES_berthLeases | null;
}

export interface RECURRING_INVOICESVariables {
  seasonYear: number;
}
