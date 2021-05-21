/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LeaseStatus, OrderStatus, ProductServiceType, AdditionalProductType } from "./../../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL fragment: WinterStorageLease
// ====================================================

export interface WinterStorageLease_place_winterStorageSection_properties_area_properties {
  __typename: "WinterStorageAreaProperties";
  name: string | null;
}

export interface WinterStorageLease_place_winterStorageSection_properties_area {
  __typename: "WinterStorageAreaNode";
  id: string;
  properties: WinterStorageLease_place_winterStorageSection_properties_area_properties | null;
}

export interface WinterStorageLease_place_winterStorageSection_properties {
  __typename: "WinterStorageSectionProperties";
  identifier: string;
  electricity: boolean;
  gate: boolean;
  water: boolean;
  summerStorageForBoats: boolean;
  summerStorageForDockingEquipment: boolean;
  summerStorageForTrailers: boolean;
  area: WinterStorageLease_place_winterStorageSection_properties_area;
}

export interface WinterStorageLease_place_winterStorageSection {
  __typename: "WinterStorageSectionNode";
  id: string;
  properties: WinterStorageLease_place_winterStorageSection_properties | null;
}

export interface WinterStorageLease_place {
  __typename: "WinterStoragePlaceNode";
  id: string;
  length: number;
  width: number;
  number: number;
  winterStorageSection: WinterStorageLease_place_winterStorageSection;
}

export interface WinterStorageLease_customer_primaryEmail {
  __typename: "EmailNode";
  id: string;
  email: string;
}

export interface WinterStorageLease_customer {
  __typename: "ProfileNode";
  id: string;
  primaryEmail: WinterStorageLease_customer_primaryEmail | null;
}

export interface WinterStorageLease_order_orderLines_edges_node_product {
  __typename: "AdditionalProductNode";
  id: string;
  service: ProductServiceType;
  productType: AdditionalProductType;
}

export interface WinterStorageLease_order_orderLines_edges_node {
  __typename: "OrderLineNode";
  id: string;
  price: any;
  product: WinterStorageLease_order_orderLines_edges_node_product | null;
}

export interface WinterStorageLease_order_orderLines_edges {
  __typename: "OrderLineNodeEdge";
  node: WinterStorageLease_order_orderLines_edges_node | null;
}

export interface WinterStorageLease_order_orderLines {
  __typename: "OrderLineNodeConnection";
  edges: (WinterStorageLease_order_orderLines_edges | null)[];
}

export interface WinterStorageLease_order {
  __typename: "OrderNode";
  id: string;
  orderNumber: string;
  price: any;
  totalPrice: any;
  status: OrderStatus;
  orderLines: WinterStorageLease_order_orderLines;
}

export interface WinterStorageLease {
  __typename: "WinterStorageLeaseNode";
  id: string;
  status: LeaseStatus;
  place: WinterStorageLease_place | null;
  customer: WinterStorageLease_customer;
  order: WinterStorageLease_order | null;
}
