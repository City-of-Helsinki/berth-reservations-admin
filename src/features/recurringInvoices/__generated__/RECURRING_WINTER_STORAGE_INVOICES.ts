/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RECURRING_WINTER_STORAGE_INVOICES
// ====================================================

export interface RECURRING_WINTER_STORAGE_INVOICES_sent {
  __typename: "WinterStorageLeaseNodeConnection";
  count: number;
}

export interface RECURRING_WINTER_STORAGE_INVOICES_failed {
  __typename: "WinterStorageLeaseNodeConnection";
  count: number;
}

export interface RECURRING_WINTER_STORAGE_INVOICES_paid {
  __typename: "WinterStorageLeaseNodeConnection";
  count: number;
}

export interface RECURRING_WINTER_STORAGE_INVOICES_pending {
  __typename: "WinterStorageLeaseNodeConnection";
  count: number;
}

export interface RECURRING_WINTER_STORAGE_INVOICES_winterStorageLeases_edges_node_customer {
  __typename: "ProfileNode";
  /**
   * The ID of the object
   */
  id: string;
  firstName: string;
  lastName: string;
}

export interface RECURRING_WINTER_STORAGE_INVOICES_winterStorageLeases_edges_node_place_winterStorageSection_properties_area_properties {
  __typename: "WinterStorageAreaProperties";
  name: string | null;
}

export interface RECURRING_WINTER_STORAGE_INVOICES_winterStorageLeases_edges_node_place_winterStorageSection_properties_area {
  __typename: "WinterStorageAreaNode";
  id: string;
  properties: RECURRING_WINTER_STORAGE_INVOICES_winterStorageLeases_edges_node_place_winterStorageSection_properties_area_properties | null;
}

export interface RECURRING_WINTER_STORAGE_INVOICES_winterStorageLeases_edges_node_place_winterStorageSection_properties {
  __typename: "WinterStorageSectionProperties";
  area: RECURRING_WINTER_STORAGE_INVOICES_winterStorageLeases_edges_node_place_winterStorageSection_properties_area;
}

export interface RECURRING_WINTER_STORAGE_INVOICES_winterStorageLeases_edges_node_place_winterStorageSection {
  __typename: "WinterStorageSectionNode";
  id: string;
  properties: RECURRING_WINTER_STORAGE_INVOICES_winterStorageLeases_edges_node_place_winterStorageSection_properties | null;
}

export interface RECURRING_WINTER_STORAGE_INVOICES_winterStorageLeases_edges_node_place {
  __typename: "WinterStoragePlaceNode";
  id: string;
  winterStorageSection: RECURRING_WINTER_STORAGE_INVOICES_winterStorageLeases_edges_node_place_winterStorageSection;
}

export interface RECURRING_WINTER_STORAGE_INVOICES_winterStorageLeases_edges_node {
  __typename: "WinterStorageLeaseNode";
  id: string;
  comment: string;
  customer: RECURRING_WINTER_STORAGE_INVOICES_winterStorageLeases_edges_node_customer;
  place: RECURRING_WINTER_STORAGE_INVOICES_winterStorageLeases_edges_node_place | null;
}

export interface RECURRING_WINTER_STORAGE_INVOICES_winterStorageLeases_edges {
  __typename: "WinterStorageLeaseNodeEdge";
  node: RECURRING_WINTER_STORAGE_INVOICES_winterStorageLeases_edges_node | null;
}

export interface RECURRING_WINTER_STORAGE_INVOICES_winterStorageLeases {
  __typename: "WinterStorageLeaseNodeConnection";
  edges: (RECURRING_WINTER_STORAGE_INVOICES_winterStorageLeases_edges | null)[];
}

export interface RECURRING_WINTER_STORAGE_INVOICES {
  sent: RECURRING_WINTER_STORAGE_INVOICES_sent | null;
  failed: RECURRING_WINTER_STORAGE_INVOICES_failed | null;
  paid: RECURRING_WINTER_STORAGE_INVOICES_paid | null;
  pending: RECURRING_WINTER_STORAGE_INVOICES_pending | null;
  winterStorageLeases: RECURRING_WINTER_STORAGE_INVOICES_winterStorageLeases | null;
}

export interface RECURRING_WINTER_STORAGE_INVOICESVariables {
  seasonYear: number;
}
