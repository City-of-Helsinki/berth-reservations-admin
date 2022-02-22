/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CustomerGroup, LeaseStatus } from "./../../../@types/__generated__/globalTypes";

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
  stickerNumber?: string | null;
  boatRegistrationNumber?: string | null;
  orderBy?: string | null;
  customerGroups?: (CustomerGroup | null)[] | null;
  boatTypeIds?: (string | null)[] | null;
  leaseStatuses?: (LeaseStatus | null)[] | null;
  harborIds?: (string | null)[] | null;
  pierId?: string | null;
  berthId?: string | null;
  winterStorageGridAreaIds?: (string | null)[] | null;
  winterStoragePlaceId?: string | null;
  winterStorageAreaIds?: (string | null)[] | null;
  nonHelsinkiCitizen?: boolean | null;
  moreThanOneBerthOrWinterStorage?: boolean | null;
  startDate?: any | null;
  endDate?: any | null;
  apiToken?: string | null;
}
