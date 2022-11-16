/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CustomerGroup, ServiceType, ContactMethod, LeaseStatus } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL query operation: CUSTOMER_GROUPS
// ====================================================

export interface CUSTOMER_GROUPS_berthProfiles_pageInfo {
  __typename: "PageInfo";
  hasNextPage: boolean;
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
  id: string;
  address: string;
  city: string;
  postalCode: string;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_primaryPhone {
  __typename: "PhoneNode";
  id: string;
  phone: string;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_primaryEmail {
  __typename: "EmailNode";
  id: string;
  email: string;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_serviceConnections_edges_node_service {
  __typename: "ServiceNode";
  id: string;
  type: ServiceType | null;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_serviceConnections_edges_node {
  __typename: "ServiceConnectionType";
  id: string;
  service: CUSTOMER_GROUPS_berthProfiles_edges_node_serviceConnections_edges_node_service;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_serviceConnections_edges {
  __typename: "ServiceConnectionTypeEdge";
  node: CUSTOMER_GROUPS_berthProfiles_edges_node_serviceConnections_edges_node | null;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges_node_serviceConnections {
  __typename: "ServiceConnectionTypeConnection";
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
  id: string;
  firstName: string;
  lastName: string;
  nickname: string;
  comment: string | null;
  customerGroup: CustomerGroup | null;
  organization: CUSTOMER_GROUPS_berthProfiles_edges_node_organization | null;
  primaryAddress: CUSTOMER_GROUPS_berthProfiles_edges_node_primaryAddress | null;
  primaryPhone: CUSTOMER_GROUPS_berthProfiles_edges_node_primaryPhone | null;
  primaryEmail: CUSTOMER_GROUPS_berthProfiles_edges_node_primaryEmail | null;
  serviceConnections: CUSTOMER_GROUPS_berthProfiles_edges_node_serviceConnections | null;
  contactMethod: ContactMethod | null;
  image: string | null;
  boats: CUSTOMER_GROUPS_berthProfiles_edges_node_boats | null;
  berthApplications: CUSTOMER_GROUPS_berthProfiles_edges_node_berthApplications | null;
  berthLeases: CUSTOMER_GROUPS_berthProfiles_edges_node_berthLeases | null;
}

export interface CUSTOMER_GROUPS_berthProfiles_edges {
  __typename: "ProfileNodeEdge";
  node: CUSTOMER_GROUPS_berthProfiles_edges_node | null;
}

export interface CUSTOMER_GROUPS_berthProfiles {
  __typename: "ProfileNodeConnection";
  count: number;
  pageInfo: CUSTOMER_GROUPS_berthProfiles_pageInfo;
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
}
