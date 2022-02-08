/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ApplicationStatus } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL query operation: UNMARKED_WINTER_STORAGE_NOTICES_IDS
// ====================================================

export interface UNMARKED_WINTER_STORAGE_NOTICES_IDS_winterStorageNoticesIds_pageInfo {
  __typename: "PageInfo";
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface UNMARKED_WINTER_STORAGE_NOTICES_IDS_winterStorageNoticesIds_edges_node {
  __typename: "WinterStorageApplicationNode";
  id: string;
}

export interface UNMARKED_WINTER_STORAGE_NOTICES_IDS_winterStorageNoticesIds_edges {
  __typename: "WinterStorageApplicationNodeEdge";
  node: UNMARKED_WINTER_STORAGE_NOTICES_IDS_winterStorageNoticesIds_edges_node | null;
}

export interface UNMARKED_WINTER_STORAGE_NOTICES_IDS_winterStorageNoticesIds {
  __typename: "WinterStorageApplicationNodeConnection";
  count: number;
  pageInfo: UNMARKED_WINTER_STORAGE_NOTICES_IDS_winterStorageNoticesIds_pageInfo;
  edges: (UNMARKED_WINTER_STORAGE_NOTICES_IDS_winterStorageNoticesIds_edges | null)[];
}

export interface UNMARKED_WINTER_STORAGE_NOTICES_IDS {
  winterStorageNoticesIds: UNMARKED_WINTER_STORAGE_NOTICES_IDS_winterStorageNoticesIds | null;
}

export interface UNMARKED_WINTER_STORAGE_NOTICES_IDSVariables {
  first: number;
  after?: string | null;
  orderBy?: string | null;
  statuses?: (ApplicationStatus | null)[] | null;
  nameFilter?: string | null;
}
