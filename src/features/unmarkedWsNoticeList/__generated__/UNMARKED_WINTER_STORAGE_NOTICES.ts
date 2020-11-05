/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ApplicationStatus, WinterStorageApplicationAreaType, LeaseStatus } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL query operation: UNMARKED_WINTER_STORAGE_NOTICES
// ====================================================

export interface UNMARKED_WINTER_STORAGE_NOTICES_winterStorageNotices_edges_node_winterStorageAreaChoices {
  __typename: "WinterStorageAreaChoiceType";
  priority: number;
  winterStorageArea: string | null;
  winterStorageAreaName: string;
  winterStorageSectionIds: (string | null)[] | null;
}

export interface UNMARKED_WINTER_STORAGE_NOTICES_winterStorageNotices_edges_node_lease_order {
  __typename: "OrderNode";
  id: string;
}

export interface UNMARKED_WINTER_STORAGE_NOTICES_winterStorageNotices_edges_node_lease {
  __typename: "WinterStorageLeaseNode";
  id: string;
  status: LeaseStatus;
  order: UNMARKED_WINTER_STORAGE_NOTICES_winterStorageNotices_edges_node_lease_order | null;
}

export interface UNMARKED_WINTER_STORAGE_NOTICES_winterStorageNotices_edges_node {
  __typename: "WinterStorageApplicationNode";
  areaType: WinterStorageApplicationAreaType | null;
  boatLength: number;
  boatModel: string;
  boatName: string;
  boatRegistrationNumber: string;
  boatType: string | null;
  boatWidth: number;
  createdAt: any;
  firstName: string;
  id: string;
  lastName: string;
  email: string;
  status: ApplicationStatus;
  winterStorageAreaChoices: (UNMARKED_WINTER_STORAGE_NOTICES_winterStorageNotices_edges_node_winterStorageAreaChoices | null)[] | null;
  lease: UNMARKED_WINTER_STORAGE_NOTICES_winterStorageNotices_edges_node_lease | null;
}

export interface UNMARKED_WINTER_STORAGE_NOTICES_winterStorageNotices_edges {
  __typename: "WinterStorageApplicationNodeEdge";
  node: UNMARKED_WINTER_STORAGE_NOTICES_winterStorageNotices_edges_node | null;
}

export interface UNMARKED_WINTER_STORAGE_NOTICES_winterStorageNotices {
  __typename: "WinterStorageApplicationNodeConnection";
  count: number;
  edges: (UNMARKED_WINTER_STORAGE_NOTICES_winterStorageNotices_edges | null)[];
}

export interface UNMARKED_WINTER_STORAGE_NOTICES_boatTypes {
  __typename: "BoatTypeType";
  id: string;
  name: string | null;
}

export interface UNMARKED_WINTER_STORAGE_NOTICES {
  winterStorageNotices: UNMARKED_WINTER_STORAGE_NOTICES_winterStorageNotices | null;
  boatTypes: UNMARKED_WINTER_STORAGE_NOTICES_boatTypes[] | null;
}

export interface UNMARKED_WINTER_STORAGE_NOTICESVariables {
  first: number;
  after?: string | null;
  orderBy?: string | null;
  statuses?: (ApplicationStatus | null)[] | null;
}
