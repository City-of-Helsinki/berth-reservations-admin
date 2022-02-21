/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ALL_CUSTOMERS
// ====================================================

export interface ALL_CUSTOMERS_berthProfiles_pageInfo {
  __typename: "PageInfo";
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface ALL_CUSTOMERS_berthProfiles_edges_node {
  __typename: "ProfileNode";
  id: string;
}

export interface ALL_CUSTOMERS_berthProfiles_edges {
  __typename: "ProfileNodeEdge";
  node: ALL_CUSTOMERS_berthProfiles_edges_node | null;
}

export interface ALL_CUSTOMERS_berthProfiles {
  __typename: "ProfileNodeConnection";
  count: number;
  pageInfo: ALL_CUSTOMERS_berthProfiles_pageInfo;
  edges: (ALL_CUSTOMERS_berthProfiles_edges | null)[];
}

export interface ALL_CUSTOMERS {
  berthProfiles: ALL_CUSTOMERS_berthProfiles | null;
}

export interface ALL_CUSTOMERSVariables {
  first: number;
  after?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  address?: string | null;
  orderBy?: string | null;
  apiToken?: string | null;
}
