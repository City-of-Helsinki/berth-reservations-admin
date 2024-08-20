/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CustomerGroup, LeaseStatus, ServiceType, ContactMethod } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL query operation: CUSTOMER_GROUPS
// ====================================================

export interface CUSTOMER_GROUPS_berthProfiles_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_organization {
  __typename: "OrganizationNode";
  id: string;
  name: string;
  address: string;
  postalCode: string;
  city: string;
  businessId: string;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_primaryAddress {
  __typename: "AddressNode";
  /**
   * The ID of the object
   */
  id: string;
  address: string;
  city: string;
  postalCode: string;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_primaryPhone {
  __typename: "PhoneNode";
  /**
   * The ID of the object
   */
  id: string;
  phone: string;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_primaryEmail {
  __typename: "EmailNode";
  /**
   * The ID of the object
   */
  id: string;
  email: string;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_serviceConnections_edges_node_service {
  __typename: "ServiceNode";
  /**
   * The ID of the object
   */
  id: string;
  type: ServiceType | null;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_serviceConnections_edges_node {
  __typename: "ServiceConnectionType";
  /**
   * The ID of the object
   */
  id: string;
  service: CUSTOMER_GROUPS_berthProfiles_edges_node_serviceConnections_edges_node_service;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_serviceConnections_edges {
  __typename: "ServiceConnectionTypeEdge";
  /**
   * The item at the end of the edge
   */
  node: CUSTOMER_GROUPS_berthProfiles_edges_node_serviceConnections_edges_node | null;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_serviceConnections {
  __typename: "ServiceConnectionTypeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (CUSTOMER_GROUPS_berthProfiles_edges_node_serviceConnections_edges | null)[];
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_boats_edges_node {
  __typename: "BoatNode";
  id: string;
  name: string;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_boats_edges {
  __typename: "BoatNodeEdge";
  node: CUSTOMER_GROUPS_berthProfiles_edges_node_boats_edges_node | null;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_boats {
  __typename: "BoatNodeConnection";
  edges: (CUSTOMER_GROUPS_berthProfiles_edges_node_boats_edges | null)[];
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_berthApplications_edges_node {
  __typename: "BerthApplicationNode";
  id: string;
  createdAt: any;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_berthApplications_edges {
  __typename: "BerthApplicationNodeEdge";
  node: CUSTOMER_GROUPS_berthProfiles_edges_node_berthApplications_edges_node | null;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_berthApplications {
  __typename: "BerthApplicationNodeConnection";
  edges: (CUSTOMER_GROUPS_berthProfiles_edges_node_berthApplications_edges | null)[];
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_berthLeases_edges_node_berth_pier_properties_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_berthLeases_edges_node_berth_pier_properties_harbor {
  __typename: "HarborNode";
  properties: CUSTOMER_GROUPS_berthProfiles_edges_node_berthLeases_edges_node_berth_pier_properties_harbor_properties | null;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_berthLeases_edges_node_berth_pier_properties {
  __typename: "PierProperties";
  identifier: string;
  harbor: CUSTOMER_GROUPS_berthProfiles_edges_node_berthLeases_edges_node_berth_pier_properties_harbor;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_berthLeases_edges_node_berth_pier {
  __typename: "PierNode";
  properties: CUSTOMER_GROUPS_berthProfiles_edges_node_berthLeases_edges_node_berth_pier_properties | null;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_berthLeases_edges_node_berth {
  __typename: "BerthNode";
  number: string;
  pier: CUSTOMER_GROUPS_berthProfiles_edges_node_berthLeases_edges_node_berth_pier;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_berthLeases_edges_node {
  __typename: "BerthLeaseNode";
  id: string;
  isActive: boolean;
  status: LeaseStatus;
  berth: CUSTOMER_GROUPS_berthProfiles_edges_node_berthLeases_edges_node_berth;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_berthLeases_edges {
  __typename: "BerthLeaseNodeEdge";
  node: CUSTOMER_GROUPS_berthProfiles_edges_node_berthLeases_edges_node | null;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_berthLeases {
  __typename: "BerthLeaseNodeConnection";
  edges: (CUSTOMER_GROUPS_berthProfiles_edges_node_berthLeases_edges | null)[];
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node {
  __typename: "ProfileNode";
  /**
   * The ID of the object
   */
  id: string;
  firstName: string;
  lastName: string;
  nickname: string;
  comment: string | null;
  customerGroup: CustomerGroup | null;
  organization: CUSTOMER_GROUPS_berthProfiles_edges_node_organization | null;
  /**
   * Convenience field for the address which is marked as primary.
   */
  primaryAddress: CUSTOMER_GROUPS_berthProfiles_edges_node_primaryAddress | null;
  /**
   * Convenience field for the phone which is marked as primary.
   */
  primaryPhone: CUSTOMER_GROUPS_berthProfiles_edges_node_primaryPhone | null;
  /**
   * Convenience field for the email which is marked as primary.
   */
  primaryEmail: CUSTOMER_GROUPS_berthProfiles_edges_node_primaryEmail | null;
  /**
   * List of the profile's connected services.
   */
  serviceConnections: CUSTOMER_GROUPS_berthProfiles_edges_node_serviceConnections | null;
  contactMethod: ContactMethod | null;
  image: string | null;
  boats: CUSTOMER_GROUPS_berthProfiles_edges_node_boats | null;
  berthApplications: CUSTOMER_GROUPS_berthProfiles_edges_node_berthApplications | null;
  berthLeases: CUSTOMER_GROUPS_berthProfiles_edges_node_berthLeases | null;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges {
  __typename: "ProfileNodeEdge";
  /**
   * The item at the end of the edge
   */
  node: CUSTOMER_GROUPS_berthProfiles_edges_node | null;
}

export interface CUSTOMER_GROUPS_berthProfiles {
  __typename: "ProfileNodeConnection";
  count: number;
  /**
   * Pagination data for this connection.
   */
  pageInfo: CUSTOMER_GROUPS_berthProfiles_pageInfo;
  /**
   * Contains the nodes in this connection.
   */
  edges: (CUSTOMER_GROUPS_berthProfiles_edges | null)[];
}

export interface CUSTOMER_GROUPS {
  berthProfiles: CUSTOMER_GROUPS_berthProfiles | null;
}

export interface CUSTOMER_GROUPSVariables {
  first: number;
  after?: string | null;
  customerGroups?: (CustomerGroup | null)[] | null;
  apiToken?: string | null;
  boatTypeIds?: (string | null)[] | null;
  leaseStatuses?: (LeaseStatus | null)[] | null;
  harborIds?: (string | null)[] | null;
  pierId?: string | null;
  berthId?: string | null;
  winterStorageGridAreaIds?: (string | null)[] | null;
  winterStoragePlaceId?: string | null;
  winterStorageAreaIds?: (string | null)[] | null;
  moreThanOneBerthOrWinterStorage?: boolean | null;
  startDate?: any | null;
  endDate?: any | null;
}
