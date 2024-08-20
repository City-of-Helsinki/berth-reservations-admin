/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ApplicationStatus } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL query operation: WINTER_STORAGE_APPLICATIONS_IDS
// ====================================================

export interface WINTER_STORAGE_APPLICATIONS_IDS_winterStorageApplications_pageInfo {
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

export interface WINTER_STORAGE_APPLICATIONS_IDS_winterStorageApplications_edges_node {
  __typename: "WinterStorageApplicationNode";
  id: string;
}

export interface WINTER_STORAGE_APPLICATIONS_IDS_winterStorageApplications_edges {
  __typename: "WinterStorageApplicationNodeEdge";
  node: WINTER_STORAGE_APPLICATIONS_IDS_winterStorageApplications_edges_node | null;
}

export interface WINTER_STORAGE_APPLICATIONS_IDS_winterStorageApplications {
  __typename: "WinterStorageApplicationNodeConnection";
  count: number;
  pageInfo: WINTER_STORAGE_APPLICATIONS_IDS_winterStorageApplications_pageInfo;
  edges: (WINTER_STORAGE_APPLICATIONS_IDS_winterStorageApplications_edges | null)[];
}

export interface WINTER_STORAGE_APPLICATIONS_IDS {
  winterStorageApplications: WINTER_STORAGE_APPLICATIONS_IDS_winterStorageApplications | null;
}

export interface WINTER_STORAGE_APPLICATIONS_IDSVariables {
  first: number;
  after?: string | null;
  orderBy?: string | null;
  statuses?: (ApplicationStatus | null)[] | null;
  nameFilter?: string | null;
}
