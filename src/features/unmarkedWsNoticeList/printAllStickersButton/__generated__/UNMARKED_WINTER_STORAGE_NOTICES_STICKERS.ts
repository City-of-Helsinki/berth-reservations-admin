/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LeaseStatus } from "./../../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL query operation: UNMARKED_WINTER_STORAGE_NOTICES_STICKERS
// ====================================================

export interface UNMARKED_WINTER_STORAGE_NOTICES_STICKERS_winterStorageNotices_edges_node_lease {
  __typename: "WinterStorageLeaseNode";
  id: string;
  status: LeaseStatus;
  stickerNumber: number | null;
  stickerSeason: string | null;
}

export interface UNMARKED_WINTER_STORAGE_NOTICES_STICKERS_winterStorageNotices_edges_node {
  __typename: "WinterStorageApplicationNode";
  firstName: string;
  lastName: string;
  municipality: string;
  zipCode: string;
  address: string;
  lease: UNMARKED_WINTER_STORAGE_NOTICES_STICKERS_winterStorageNotices_edges_node_lease | null;
}

export interface UNMARKED_WINTER_STORAGE_NOTICES_STICKERS_winterStorageNotices_edges {
  __typename: "WinterStorageApplicationNodeEdge";
  node: UNMARKED_WINTER_STORAGE_NOTICES_STICKERS_winterStorageNotices_edges_node | null;
}

export interface UNMARKED_WINTER_STORAGE_NOTICES_STICKERS_winterStorageNotices {
  __typename: "WinterStorageApplicationNodeConnection";
  count: number;
  edges: (UNMARKED_WINTER_STORAGE_NOTICES_STICKERS_winterStorageNotices_edges | null)[];
}

export interface UNMARKED_WINTER_STORAGE_NOTICES_STICKERS {
  winterStorageNotices: UNMARKED_WINTER_STORAGE_NOTICES_STICKERS_winterStorageNotices | null;
}
