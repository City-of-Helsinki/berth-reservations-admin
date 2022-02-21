/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ApplicationStatus } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL query operation: BERTH_APPLICATIONS_IDS
// ====================================================

export interface BERTH_APPLICATIONS_IDS_berthApplications_pageInfo {
  __typename: "PageInfo";
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface BERTH_APPLICATIONS_IDS_berthApplications_edges_node {
  __typename: "BerthApplicationNode";
  id: string;
}

export interface BERTH_APPLICATIONS_IDS_berthApplications_edges {
  __typename: "BerthApplicationNodeEdge";
  node: BERTH_APPLICATIONS_IDS_berthApplications_edges_node | null;
}

export interface BERTH_APPLICATIONS_IDS_berthApplications {
  __typename: "BerthApplicationNodeConnection";
  count: number;
  pageInfo: BERTH_APPLICATIONS_IDS_berthApplications_pageInfo;
  edges: (BERTH_APPLICATIONS_IDS_berthApplications_edges | null)[];
}

export interface BERTH_APPLICATIONS_IDS {
  berthApplications: BERTH_APPLICATIONS_IDS_berthApplications | null;
}

export interface BERTH_APPLICATIONS_IDSVariables {
  first: number;
  after?: string | null;
  applicationCode?: boolean | null;
  switchApplications?: boolean | null;
  orderBy?: string | null;
  statuses?: (ApplicationStatus | null)[] | null;
  nameFilter?: string | null;
}
