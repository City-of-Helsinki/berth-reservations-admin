/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrderStatus } from "./../../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CANCEL_INVOICE
// ====================================================

export interface CANCEL_INVOICE_updateOrder_order {
  __typename: "OrderNode";
  id: string;
  status: OrderStatus;
}

export interface CANCEL_INVOICE_updateOrder {
  __typename: "UpdateOrderMutationPayload";
  order: CANCEL_INVOICE_updateOrder_order | null;
}

export interface CANCEL_INVOICE {
  updateOrder: CANCEL_INVOICE_updateOrder | null;
}

export interface CANCEL_INVOICEVariables {
  orderId: string;
}
