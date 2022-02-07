/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ApplicationStatus, WinterStorageApplicationAreaType, LeaseStatus } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL query operation: WINTER_STORAGE_APPLICATIONS
// ====================================================

export interface WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node_customer {
  __typename: "ProfileNode";
  id: string;
}

export interface WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node_winterStorageAreaChoices_winterStorageArea_properties {
  __typename: "WinterStorageAreaProperties";
  name: string | null;
}

export interface WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node_winterStorageAreaChoices_winterStorageArea {
  __typename: "WinterStorageAreaNode";
  id: string;
  properties: WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node_winterStorageAreaChoices_winterStorageArea_properties | null;
}

export interface WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node_winterStorageAreaChoices {
  __typename: "WinterStorageAreaChoiceType";
  priority: number;
  winterStorageArea: WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node_winterStorageAreaChoices_winterStorageArea;
}

export interface WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node_lease_order {
  __typename: "OrderNode";
  id: string;
}

export interface WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node_lease_place_winterStorageSection_properties_area_properties {
  __typename: "WinterStorageAreaProperties";
  name: string | null;
}

export interface WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node_lease_place_winterStorageSection_properties_area {
  __typename: "WinterStorageAreaNode";
  id: string;
  properties: WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node_lease_place_winterStorageSection_properties_area_properties | null;
}

export interface WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node_lease_place_winterStorageSection_properties {
  __typename: "WinterStorageSectionProperties";
  identifier: string;
  area: WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node_lease_place_winterStorageSection_properties_area;
}

export interface WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node_lease_place_winterStorageSection {
  __typename: "WinterStorageSectionNode";
  id: string;
  properties: WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node_lease_place_winterStorageSection_properties | null;
}

export interface WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node_lease_place {
  __typename: "WinterStoragePlaceNode";
  id: string;
  number: number;
  winterStorageSection: WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node_lease_place_winterStorageSection;
}

export interface WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node_lease {
  __typename: "WinterStorageLeaseNode";
  id: string;
  status: LeaseStatus;
  order: WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node_lease_order | null;
  place: WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node_lease_place | null;
}

export interface WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node {
  __typename: "WinterStorageApplicationNode";
  areaType: WinterStorageApplicationAreaType | null;
  applicationCode: string;
  id: string;
  status: ApplicationStatus;
  createdAt: any;
  municipality: string;
  firstName: string;
  lastName: string;
  customer: WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node_customer | null;
  boatType: string | null;
  boatRegistrationNumber: string | null;
  boatWidth: any | null;
  boatLength: any | null;
  boatName: string | null;
  boatModel: string | null;
  winterStorageAreaChoices: (WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node_winterStorageAreaChoices | null)[] | null;
  lease: WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node_lease | null;
}

export interface WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges {
  __typename: "WinterStorageApplicationNodeEdge";
  node: WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node | null;
}

export interface WINTER_STORAGE_APPLICATIONS_winterStorageApplications {
  __typename: "WinterStorageApplicationNodeConnection";
  count: number;
  edges: (WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges | null)[];
}

export interface WINTER_STORAGE_APPLICATIONS_boatTypes {
  __typename: "BoatTypeType";
  id: string;
  name: string | null;
}

export interface WINTER_STORAGE_APPLICATIONS {
  winterStorageApplications: WINTER_STORAGE_APPLICATIONS_winterStorageApplications | null;
  boatTypes: WINTER_STORAGE_APPLICATIONS_boatTypes[] | null;
}

export interface WINTER_STORAGE_APPLICATIONSVariables {
  first: number;
  after?: string | null;
  orderBy?: string | null;
  statuses?: (ApplicationStatus | null)[] | null;
  nameFilter?: string | null;
}
