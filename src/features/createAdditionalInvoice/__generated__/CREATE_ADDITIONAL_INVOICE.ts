/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateAdditionalProductOrderMutationInput, ProductServiceType } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CREATE_ADDITIONAL_INVOICE
// ====================================================

export interface CREATE_ADDITIONAL_INVOICE_createAdditionalProductOrder_order_orderLines_edges_node_product {
  __typename: "AdditionalProductNode";
  id: string;
  service: ProductServiceType;
}

export interface CREATE_ADDITIONAL_INVOICE_createAdditionalProductOrder_order_orderLines_edges_node {
  __typename: "OrderLineNode";
  product: CREATE_ADDITIONAL_INVOICE_createAdditionalProductOrder_order_orderLines_edges_node_product | null;
}

export interface CREATE_ADDITIONAL_INVOICE_createAdditionalProductOrder_order_orderLines_edges {
  __typename: "OrderLineNodeEdge";
  node: CREATE_ADDITIONAL_INVOICE_createAdditionalProductOrder_order_orderLines_edges_node | null;
}

export interface CREATE_ADDITIONAL_INVOICE_createAdditionalProductOrder_order_orderLines {
  __typename: "OrderLineNodeConnection";
  edges: (CREATE_ADDITIONAL_INVOICE_createAdditionalProductOrder_order_orderLines_edges | null)[];
}

export interface CREATE_ADDITIONAL_INVOICE_createAdditionalProductOrder_order {
  __typename: "OrderNode";
  id: string;
  price: any;
  totalPrice: any;
  orderLines: CREATE_ADDITIONAL_INVOICE_createAdditionalProductOrder_order_orderLines;
}

export interface CREATE_ADDITIONAL_INVOICE_createAdditionalProductOrder {
  __typename: "CreateAdditionalProductOrderMutationPayload";
  clientMutationId: string | null;
  order: CREATE_ADDITIONAL_INVOICE_createAdditionalProductOrder_order | null;
}

export interface CREATE_ADDITIONAL_INVOICE {
  createAdditionalProductOrder: CREATE_ADDITIONAL_INVOICE_createAdditionalProductOrder | null;
}

export interface CREATE_ADDITIONAL_INVOICEVariables {
  input: CreateAdditionalProductOrderMutationInput;
}
