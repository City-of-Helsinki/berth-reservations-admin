/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { WinterStorageApplicationAreaType, ApplicationStatus } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL query operation: UNMARKED_WINTER_STORAGE_NOTICES
// ====================================================

export interface UNMARKED_WINTER_STORAGE_NOTICES_winterStorageNotices_edges_node_winterStorageAreaChoices {
  __typename: "WinterStorageAreaChoiceType";
  priority: number;
  winterStorageAreaName: string;
  winterStorageArea: string | null;
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
  status: ApplicationStatus;
  winterStorageAreaChoices: (UNMARKED_WINTER_STORAGE_NOTICES_winterStorageNotices_edges_node_winterStorageAreaChoices | null)[] | null;
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
}
