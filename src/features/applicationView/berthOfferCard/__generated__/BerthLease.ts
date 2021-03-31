/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LeaseStatus, BerthMooringType, OrderStatus, ProductServiceType, AdditionalProductType } from "./../../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL fragment: BerthLease
// ====================================================

export interface BerthLease_berth_pier_properties_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface BerthLease_berth_pier_properties_harbor {
  __typename: "HarborNode";
  id: string;
  properties: BerthLease_berth_pier_properties_harbor_properties | null;
}

export interface BerthLease_berth_pier_properties {
  __typename: "PierProperties";
  identifier: string;
  electricity: boolean;
  gate: boolean;
  lighting: boolean;
  mooring: boolean;
  wasteCollection: boolean;
  water: boolean;
  harbor: BerthLease_berth_pier_properties_harbor;
}

export interface BerthLease_berth_pier {
  __typename: "PierNode";
  id: string;
  properties: BerthLease_berth_pier_properties | null;
}

export interface BerthLease_berth {
  __typename: "BerthNode";
  id: string;
  depth: number | null;
  length: number;
  mooringType: BerthMooringType;
  width: number;
  comment: string;
  isAccessible: boolean | null;
  number: string;
  pier: BerthLease_berth_pier;
}

export interface BerthLease_customer_primaryEmail {
  __typename: "EmailNode";
  id: string;
  email: string;
}

export interface BerthLease_customer {
  __typename: "ProfileNode";
  id: string;
  primaryEmail: BerthLease_customer_primaryEmail | null;
}

export interface BerthLease_order_orderLines_edges_node_product {
  __typename: "AdditionalProductNode";
  id: string;
  service: ProductServiceType;
  productType: AdditionalProductType;
}

export interface BerthLease_order_orderLines_edges_node {
  __typename: "OrderLineNode";
  id: string;
  price: any;
  product: BerthLease_order_orderLines_edges_node_product | null;
}

export interface BerthLease_order_orderLines_edges {
  __typename: "OrderLineNodeEdge";
  node: BerthLease_order_orderLines_edges_node | null;
}

export interface BerthLease_order_orderLines {
  __typename: "OrderLineNodeConnection";
  edges: (BerthLease_order_orderLines_edges | null)[];
}

export interface BerthLease_order {
  __typename: "OrderNode";
  id: string;
  orderNumber: string;
  price: any;
  totalPrice: any;
  status: OrderStatus;
  orderLines: BerthLease_order_orderLines;
}

export interface BerthLease {
  __typename: "BerthLeaseNode";
  id: string;
  status: LeaseStatus;
  berth: BerthLease_berth;
  customer: BerthLease_customer;
  order: BerthLease_order | null;
}
