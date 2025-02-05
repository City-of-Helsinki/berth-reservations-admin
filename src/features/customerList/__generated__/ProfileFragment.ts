/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CustomerGroup, ServiceType, ContactMethod, LeaseStatus } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL fragment: ProfileFragment
// ====================================================

export interface ProfileFragment_organization {
  __typename: "OrganizationNode";
  id: string;
  name: string;
  address: string;
  postalCode: string;
  city: string;
  businessId: string;
}

export interface ProfileFragment_primaryAddress {
  __typename: "AddressNode";
  /**
   * The ID of the object
   */
  id: string;
  address: string;
  city: string;
  postalCode: string;
}

export interface ProfileFragment_primaryPhone {
  __typename: "PhoneNode";
  /**
   * The ID of the object
   */
  id: string;
  phone: string;
}

export interface ProfileFragment_primaryEmail {
  __typename: "EmailNode";
  /**
   * The ID of the object
   */
  id: string;
  email: string;
}

export interface ProfileFragment_serviceConnections_edges_node_service {
  __typename: "ServiceNode";
  /**
   * The ID of the object
   */
  id: string;
  type: ServiceType | null;
}

export interface ProfileFragment_serviceConnections_edges_node {
  __typename: "ServiceConnectionType";
  /**
   * The ID of the object
   */
  id: string;
  service: ProfileFragment_serviceConnections_edges_node_service;
}

export interface ProfileFragment_serviceConnections_edges {
  __typename: "ServiceConnectionTypeEdge";
  /**
   * The item at the end of the edge
   */
  node: ProfileFragment_serviceConnections_edges_node | null;
}

export interface ProfileFragment_serviceConnections {
  __typename: "ServiceConnectionTypeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (ProfileFragment_serviceConnections_edges | null)[];
}

export interface ProfileFragment_boats_edges_node {
  __typename: "BoatNode";
  id: string;
  name: string;
}

export interface ProfileFragment_boats_edges {
  __typename: "BoatNodeEdge";
  node: ProfileFragment_boats_edges_node | null;
}

export interface ProfileFragment_boats {
  __typename: "BoatNodeConnection";
  edges: (ProfileFragment_boats_edges | null)[];
}

export interface ProfileFragment_berthApplications_edges_node {
  __typename: "BerthApplicationNode";
  id: string;
  createdAt: any;
}

export interface ProfileFragment_berthApplications_edges {
  __typename: "BerthApplicationNodeEdge";
  node: ProfileFragment_berthApplications_edges_node | null;
}

export interface ProfileFragment_berthApplications {
  __typename: "BerthApplicationNodeConnection";
  edges: (ProfileFragment_berthApplications_edges | null)[];
}

export interface ProfileFragment_berthLeases_edges_node_berth_pier_properties_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface ProfileFragment_berthLeases_edges_node_berth_pier_properties_harbor {
  __typename: "HarborNode";
  properties: ProfileFragment_berthLeases_edges_node_berth_pier_properties_harbor_properties | null;
}

export interface ProfileFragment_berthLeases_edges_node_berth_pier_properties {
  __typename: "PierProperties";
  identifier: string;
  harbor: ProfileFragment_berthLeases_edges_node_berth_pier_properties_harbor;
}

export interface ProfileFragment_berthLeases_edges_node_berth_pier {
  __typename: "PierNode";
  properties: ProfileFragment_berthLeases_edges_node_berth_pier_properties | null;
}

export interface ProfileFragment_berthLeases_edges_node_berth {
  __typename: "BerthNode";
  number: string;
  pier: ProfileFragment_berthLeases_edges_node_berth_pier;
}

export interface ProfileFragment_berthLeases_edges_node {
  __typename: "BerthLeaseNode";
  id: string;
  isActive: boolean;
  status: LeaseStatus;
  berth: ProfileFragment_berthLeases_edges_node_berth;
}

export interface ProfileFragment_berthLeases_edges {
  __typename: "BerthLeaseNodeEdge";
  node: ProfileFragment_berthLeases_edges_node | null;
}

export interface ProfileFragment_berthLeases {
  __typename: "BerthLeaseNodeConnection";
  edges: (ProfileFragment_berthLeases_edges | null)[];
}

export interface ProfileFragment {
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
  organization: ProfileFragment_organization | null;
  /**
   * Convenience field for the address which is marked as primary.
   */
  primaryAddress: ProfileFragment_primaryAddress | null;
  /**
   * Convenience field for the phone which is marked as primary.
   */
  primaryPhone: ProfileFragment_primaryPhone | null;
  /**
   * Convenience field for the email which is marked as primary.
   */
  primaryEmail: ProfileFragment_primaryEmail | null;
  /**
   * List of the profile's connected services.
   */
  serviceConnections: ProfileFragment_serviceConnections | null;
  contactMethod: ContactMethod | null;
  boats: ProfileFragment_boats | null;
  berthApplications: ProfileFragment_berthApplications | null;
  berthLeases: ProfileFragment_berthLeases | null;
}
