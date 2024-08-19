/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LeaseStatus } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL query operation: WINTER_STORAGE_WITHOUT_APPLICATION
// ====================================================

export interface WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea_properties_sections_edges_node_properties_places_edges_node_leases_edges_node_customer {
  __typename: "ProfileNode";
  /**
   * The ID of the object
   */
  id: string;
}

export interface WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea_properties_sections_edges_node_properties_places_edges_node_leases_edges_node {
  __typename: "WinterStorageLeaseNode";
  id: string;
  status: LeaseStatus;
  startDate: any;
  endDate: any;
  isActive: boolean;
  customer: WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea_properties_sections_edges_node_properties_places_edges_node_leases_edges_node_customer;
}

export interface WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea_properties_sections_edges_node_properties_places_edges_node_leases_edges {
  __typename: "WinterStorageLeaseNodeEdge";
  node: WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea_properties_sections_edges_node_properties_places_edges_node_leases_edges_node | null;
}

export interface WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea_properties_sections_edges_node_properties_places_edges_node_leases {
  __typename: "WinterStorageLeaseNodeConnection";
  edges: (WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea_properties_sections_edges_node_properties_places_edges_node_leases_edges | null)[];
}

export interface WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea_properties_sections_edges_node_properties_places_edges_node {
  __typename: "WinterStoragePlaceNode";
  id: string;
  isActive: boolean;
  isAvailable: boolean;
  leases: WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea_properties_sections_edges_node_properties_places_edges_node_leases | null;
  length: number;
  number: number;
  width: number;
}

export interface WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea_properties_sections_edges_node_properties_places_edges {
  __typename: "WinterStoragePlaceNodeEdge";
  node: WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea_properties_sections_edges_node_properties_places_edges_node | null;
}

export interface WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea_properties_sections_edges_node_properties_places {
  __typename: "WinterStoragePlaceNodeConnection";
  edges: (WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea_properties_sections_edges_node_properties_places_edges | null)[];
}

export interface WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea_properties_sections_edges_node_properties {
  __typename: "WinterStorageSectionProperties";
  identifier: string;
  electricity: boolean;
  gate: boolean;
  water: boolean;
  summerStorageForBoats: boolean;
  summerStorageForDockingEquipment: boolean;
  summerStorageForTrailers: boolean;
  places: WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea_properties_sections_edges_node_properties_places;
}

export interface WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea_properties_sections_edges_node {
  __typename: "WinterStorageSectionNode";
  id: string;
  properties: WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea_properties_sections_edges_node_properties | null;
}

export interface WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea_properties_sections_edges {
  __typename: "WinterStorageSectionNodeEdge";
  node: WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea_properties_sections_edges_node | null;
}

export interface WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea_properties_sections {
  __typename: "WinterStorageSectionNodeConnection";
  edges: (WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea_properties_sections_edges | null)[];
}

export interface WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea_properties {
  __typename: "WinterStorageAreaProperties";
  imageFile: string | null;
  maxWidth: number | null;
  municipality: string | null;
  name: string | null;
  numberOfFreePlaces: number;
  numberOfPlaces: number;
  servicemapId: string | null;
  streetAddress: string | null;
  wwwUrl: string;
  zipCode: string;
  sections: WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea_properties_sections;
}

export interface WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea {
  __typename: "WinterStorageAreaNode";
  id: string;
  properties: WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea_properties | null;
}

export interface WINTER_STORAGE_WITHOUT_APPLICATION_profile_boats_edges_node_boatType {
  __typename: "BoatTypeType";
  id: string;
  name: string | null;
}

export interface WINTER_STORAGE_WITHOUT_APPLICATION_profile_boats_edges_node {
  __typename: "BoatNode";
  id: string;
  boatType: WINTER_STORAGE_WITHOUT_APPLICATION_profile_boats_edges_node_boatType;
  length: any;
  width: any;
  draught: any | null;
  weight: number | null;
  name: string;
  model: string;
  registrationNumber: string;
}

export interface WINTER_STORAGE_WITHOUT_APPLICATION_profile_boats_edges {
  __typename: "BoatNodeEdge";
  node: WINTER_STORAGE_WITHOUT_APPLICATION_profile_boats_edges_node | null;
}

export interface WINTER_STORAGE_WITHOUT_APPLICATION_profile_boats {
  __typename: "BoatNodeConnection";
  edges: (WINTER_STORAGE_WITHOUT_APPLICATION_profile_boats_edges | null)[];
}

export interface WINTER_STORAGE_WITHOUT_APPLICATION_profile {
  __typename: "ProfileNode";
  /**
   * The ID of the object
   */
  id: string;
  boats: WINTER_STORAGE_WITHOUT_APPLICATION_profile_boats | null;
}

export interface WINTER_STORAGE_WITHOUT_APPLICATION {
  winterStorageArea: WINTER_STORAGE_WITHOUT_APPLICATION_winterStorageArea | null;
  /**
   * Get profile by profile ID.
   * 
   * Requires `staff` credentials for the requester's service.The profile must have an active connection to the requester's service, otherwise it will not be returned.
   */
  profile: WINTER_STORAGE_WITHOUT_APPLICATION_profile | null;
}

export interface WINTER_STORAGE_WITHOUT_APPLICATIONVariables {
  areaId: string;
  customerId: string;
}
