/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LeaseStatus } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL query operation: WINTER_STORAGE_PLACE_DETAILS
// ====================================================

export interface WINTER_STORAGE_PLACE_DETAILS_winterStoragePlace_leases_edges_node_customer {
  __typename: "ProfileNode";
  /**
   * The ID of the object
   */
  id: string;
  firstName: string;
  lastName: string;
}

export interface WINTER_STORAGE_PLACE_DETAILS_winterStoragePlace_leases_edges_node {
  __typename: "WinterStorageLeaseNode";
  id: string;
  customer: WINTER_STORAGE_PLACE_DETAILS_winterStoragePlace_leases_edges_node_customer;
  status: LeaseStatus;
  startDate: any;
  endDate: any;
  isActive: boolean;
}

export interface WINTER_STORAGE_PLACE_DETAILS_winterStoragePlace_leases_edges {
  __typename: "WinterStorageLeaseNodeEdge";
  node: WINTER_STORAGE_PLACE_DETAILS_winterStoragePlace_leases_edges_node | null;
}

export interface WINTER_STORAGE_PLACE_DETAILS_winterStoragePlace_leases {
  __typename: "WinterStorageLeaseNodeConnection";
  edges: (WINTER_STORAGE_PLACE_DETAILS_winterStoragePlace_leases_edges | null)[];
}

export interface WINTER_STORAGE_PLACE_DETAILS_winterStoragePlace_winterStorageSection_properties {
  __typename: "WinterStorageSectionProperties";
  identifier: string;
}

export interface WINTER_STORAGE_PLACE_DETAILS_winterStoragePlace_winterStorageSection {
  __typename: "WinterStorageSectionNode";
  id: string;
  properties: WINTER_STORAGE_PLACE_DETAILS_winterStoragePlace_winterStorageSection_properties | null;
}

export interface WINTER_STORAGE_PLACE_DETAILS_winterStoragePlace {
  __typename: "WinterStoragePlaceNode";
  id: string;
  isActive: boolean;
  number: number;
  width: number;
  length: number;
  comment: string;
  leases: WINTER_STORAGE_PLACE_DETAILS_winterStoragePlace_leases | null;
  winterStorageSection: WINTER_STORAGE_PLACE_DETAILS_winterStoragePlace_winterStorageSection;
}

export interface WINTER_STORAGE_PLACE_DETAILS {
  winterStoragePlace: WINTER_STORAGE_PLACE_DETAILS_winterStoragePlace | null;
}

export interface WINTER_STORAGE_PLACE_DETAILSVariables {
  placeId: string;
}
