/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ApplicationStatus, LeaseStatus } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL query operation: WINTER_STORAGE_OFFER
// ====================================================

export interface WINTER_STORAGE_OFFER_winterStorageApplication_customer {
  __typename: "ProfileNode";
  id: string;
}

export interface WINTER_STORAGE_OFFER_winterStorageApplication {
  __typename: "WinterStorageApplicationNode";
  id: string;
  createdAt: any;
  status: ApplicationStatus;
  customer: WINTER_STORAGE_OFFER_winterStorageApplication_customer | null;
  boatType: string | null;
  boatRegistrationNumber: string;
  boatName: string;
  boatModel: string;
  boatWidth: any;
  boatLength: any;
}

export interface WINTER_STORAGE_OFFER_boatTypes {
  __typename: "BoatTypeType";
  id: string;
  name: string | null;
}

export interface WINTER_STORAGE_OFFER_winterStorageArea_properties_sections_edges_node_properties_places_edges_node_leases_edges_node_customer {
  __typename: "ProfileNode";
  id: string;
}

export interface WINTER_STORAGE_OFFER_winterStorageArea_properties_sections_edges_node_properties_places_edges_node_leases_edges_node {
  __typename: "WinterStorageLeaseNode";
  id: string;
  status: LeaseStatus;
  startDate: any;
  endDate: any;
  isActive: boolean;
  customer: WINTER_STORAGE_OFFER_winterStorageArea_properties_sections_edges_node_properties_places_edges_node_leases_edges_node_customer;
}

export interface WINTER_STORAGE_OFFER_winterStorageArea_properties_sections_edges_node_properties_places_edges_node_leases_edges {
  __typename: "WinterStorageLeaseNodeEdge";
  node: WINTER_STORAGE_OFFER_winterStorageArea_properties_sections_edges_node_properties_places_edges_node_leases_edges_node | null;
}

export interface WINTER_STORAGE_OFFER_winterStorageArea_properties_sections_edges_node_properties_places_edges_node_leases {
  __typename: "WinterStorageLeaseNodeConnection";
  edges: (WINTER_STORAGE_OFFER_winterStorageArea_properties_sections_edges_node_properties_places_edges_node_leases_edges | null)[];
}

export interface WINTER_STORAGE_OFFER_winterStorageArea_properties_sections_edges_node_properties_places_edges_node {
  __typename: "WinterStoragePlaceNode";
  id: string;
  isActive: boolean;
  isAvailable: boolean;
  leases: WINTER_STORAGE_OFFER_winterStorageArea_properties_sections_edges_node_properties_places_edges_node_leases | null;
  length: number;
  number: number;
  width: number;
}

export interface WINTER_STORAGE_OFFER_winterStorageArea_properties_sections_edges_node_properties_places_edges {
  __typename: "WinterStoragePlaceNodeEdge";
  node: WINTER_STORAGE_OFFER_winterStorageArea_properties_sections_edges_node_properties_places_edges_node | null;
}

export interface WINTER_STORAGE_OFFER_winterStorageArea_properties_sections_edges_node_properties_places {
  __typename: "WinterStoragePlaceNodeConnection";
  edges: (WINTER_STORAGE_OFFER_winterStorageArea_properties_sections_edges_node_properties_places_edges | null)[];
}

export interface WINTER_STORAGE_OFFER_winterStorageArea_properties_sections_edges_node_properties {
  __typename: "WinterStorageSectionProperties";
  identifier: string;
  electricity: boolean;
  gate: boolean;
  water: boolean;
  summerStorageForBoats: boolean;
  summerStorageForDockingEquipment: boolean;
  summerStorageForTrailers: boolean;
  places: WINTER_STORAGE_OFFER_winterStorageArea_properties_sections_edges_node_properties_places;
}

export interface WINTER_STORAGE_OFFER_winterStorageArea_properties_sections_edges_node {
  __typename: "WinterStorageSectionNode";
  id: string;
  properties: WINTER_STORAGE_OFFER_winterStorageArea_properties_sections_edges_node_properties | null;
}

export interface WINTER_STORAGE_OFFER_winterStorageArea_properties_sections_edges {
  __typename: "WinterStorageSectionNodeEdge";
  node: WINTER_STORAGE_OFFER_winterStorageArea_properties_sections_edges_node | null;
}

export interface WINTER_STORAGE_OFFER_winterStorageArea_properties_sections {
  __typename: "WinterStorageSectionNodeConnection";
  edges: (WINTER_STORAGE_OFFER_winterStorageArea_properties_sections_edges | null)[];
}

export interface WINTER_STORAGE_OFFER_winterStorageArea_properties {
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
  sections: WINTER_STORAGE_OFFER_winterStorageArea_properties_sections;
}

export interface WINTER_STORAGE_OFFER_winterStorageArea {
  __typename: "WinterStorageAreaNode";
  id: string;
  properties: WINTER_STORAGE_OFFER_winterStorageArea_properties | null;
}

export interface WINTER_STORAGE_OFFER {
  winterStorageApplication: WINTER_STORAGE_OFFER_winterStorageApplication | null;
  boatTypes: WINTER_STORAGE_OFFER_boatTypes[] | null;
  winterStorageArea: WINTER_STORAGE_OFFER_winterStorageArea | null;
}

export interface WINTER_STORAGE_OFFERVariables {
  applicationId: string;
  areaId: string;
}
