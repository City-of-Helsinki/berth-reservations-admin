/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CustomerGroup, ServiceType, ContactMethod, LeaseStatus } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL query operation: PROFILE_CUSTOMERS
// ====================================================

export interface PROFILE_CUSTOMERS_profiles_edges_node_organization {
  __typename: "OrganizationNode";
  id: string;
  name: string;
  address: string;
  postalCode: string;
  city: string;
  businessId: string;
}

export interface PROFILE_CUSTOMERS_profiles_edges_node_primaryAddress {
  __typename: "AddressNode";
  id: string;
  address: string;
  city: string;
  postalCode: string;
}

export interface PROFILE_CUSTOMERS_profiles_edges_node_primaryPhone {
  __typename: "PhoneNode";
  id: string;
  phone: string;
}

export interface PROFILE_CUSTOMERS_profiles_edges_node_primaryEmail {
  __typename: "EmailNode";
  id: string;
  email: string;
}

export interface PROFILE_CUSTOMERS_profiles_edges_node_serviceConnections_edges_node_service {
  __typename: "ServiceNode";
  id: string;
  type: ServiceType | null;
}

export interface PROFILE_CUSTOMERS_profiles_edges_node_serviceConnections_edges_node {
  __typename: "ServiceConnectionType";
  id: string;
  service: PROFILE_CUSTOMERS_profiles_edges_node_serviceConnections_edges_node_service;
}

export interface PROFILE_CUSTOMERS_profiles_edges_node_serviceConnections_edges {
  __typename: "ServiceConnectionTypeEdge";
  node: PROFILE_CUSTOMERS_profiles_edges_node_serviceConnections_edges_node | null;
}

export interface PROFILE_CUSTOMERS_profiles_edges_node_serviceConnections {
  __typename: "ServiceConnectionTypeConnection";
  edges: (PROFILE_CUSTOMERS_profiles_edges_node_serviceConnections_edges | null)[];
}

export interface PROFILE_CUSTOMERS_profiles_edges_node_boats_edges_node {
  __typename: "BoatNode";
  id: string;
  name: string;
}

export interface PROFILE_CUSTOMERS_profiles_edges_node_boats_edges {
  __typename: "BoatNodeEdge";
  node: PROFILE_CUSTOMERS_profiles_edges_node_boats_edges_node | null;
}

export interface PROFILE_CUSTOMERS_profiles_edges_node_boats {
  __typename: "BoatNodeConnection";
  edges: (PROFILE_CUSTOMERS_profiles_edges_node_boats_edges | null)[];
}

export interface PROFILE_CUSTOMERS_profiles_edges_node_berthApplications_edges_node {
  __typename: "BerthApplicationNode";
  id: string;
  createdAt: any;
}

export interface PROFILE_CUSTOMERS_profiles_edges_node_berthApplications_edges {
  __typename: "BerthApplicationNodeEdge";
  node: PROFILE_CUSTOMERS_profiles_edges_node_berthApplications_edges_node | null;
}

export interface PROFILE_CUSTOMERS_profiles_edges_node_berthApplications {
  __typename: "BerthApplicationNodeConnection";
  edges: (PROFILE_CUSTOMERS_profiles_edges_node_berthApplications_edges | null)[];
}

export interface PROFILE_CUSTOMERS_profiles_edges_node_berthLeases_edges_node_berth_pier_properties_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface PROFILE_CUSTOMERS_profiles_edges_node_berthLeases_edges_node_berth_pier_properties_harbor {
  __typename: "HarborNode";
  properties: PROFILE_CUSTOMERS_profiles_edges_node_berthLeases_edges_node_berth_pier_properties_harbor_properties | null;
}

export interface PROFILE_CUSTOMERS_profiles_edges_node_berthLeases_edges_node_berth_pier_properties {
  __typename: "PierProperties";
  identifier: string;
  harbor: PROFILE_CUSTOMERS_profiles_edges_node_berthLeases_edges_node_berth_pier_properties_harbor;
}

export interface PROFILE_CUSTOMERS_profiles_edges_node_berthLeases_edges_node_berth_pier {
  __typename: "PierNode";
  properties: PROFILE_CUSTOMERS_profiles_edges_node_berthLeases_edges_node_berth_pier_properties | null;
}

export interface PROFILE_CUSTOMERS_profiles_edges_node_berthLeases_edges_node_berth {
  __typename: "BerthNode";
  number: string;
  pier: PROFILE_CUSTOMERS_profiles_edges_node_berthLeases_edges_node_berth_pier;
}

export interface PROFILE_CUSTOMERS_profiles_edges_node_berthLeases_edges_node {
  __typename: "BerthLeaseNode";
  id: string;
  isActive: boolean;
  status: LeaseStatus;
  berth: PROFILE_CUSTOMERS_profiles_edges_node_berthLeases_edges_node_berth;
}

export interface PROFILE_CUSTOMERS_profiles_edges_node_berthLeases_edges {
  __typename: "BerthLeaseNodeEdge";
  node: PROFILE_CUSTOMERS_profiles_edges_node_berthLeases_edges_node | null;
}

export interface PROFILE_CUSTOMERS_profiles_edges_node_berthLeases {
  __typename: "BerthLeaseNodeConnection";
  edges: (PROFILE_CUSTOMERS_profiles_edges_node_berthLeases_edges | null)[];
}

export interface PROFILE_CUSTOMERS_profiles_edges_node {
  __typename: "ProfileNode";
  id: string;
  firstName: string;
  lastName: string;
  nickname: string;
  comment: string | null;
  customerGroup: CustomerGroup | null;
  organization: PROFILE_CUSTOMERS_profiles_edges_node_organization | null;
  primaryAddress: PROFILE_CUSTOMERS_profiles_edges_node_primaryAddress | null;
  primaryPhone: PROFILE_CUSTOMERS_profiles_edges_node_primaryPhone | null;
  primaryEmail: PROFILE_CUSTOMERS_profiles_edges_node_primaryEmail | null;
  serviceConnections: PROFILE_CUSTOMERS_profiles_edges_node_serviceConnections | null;
  contactMethod: ContactMethod | null;
  image: string | null;
  boats: PROFILE_CUSTOMERS_profiles_edges_node_boats | null;
  berthApplications: PROFILE_CUSTOMERS_profiles_edges_node_berthApplications | null;
  berthLeases: PROFILE_CUSTOMERS_profiles_edges_node_berthLeases | null;
}

export interface PROFILE_CUSTOMERS_profiles_edges {
  __typename: "ProfileNodeEdge";
  node: PROFILE_CUSTOMERS_profiles_edges_node | null;
}

export interface PROFILE_CUSTOMERS_profiles {
  __typename: "ProfileNodeConnection";
  count: number;
  edges: (PROFILE_CUSTOMERS_profiles_edges | null)[];
}

export interface PROFILE_CUSTOMERS {
  profiles: PROFILE_CUSTOMERS_profiles | null;
}

export interface PROFILE_CUSTOMERSVariables {
  first: number;
  after?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  email?: string | null;
  address?: string | null;
  orderBy?: string | null;
}
