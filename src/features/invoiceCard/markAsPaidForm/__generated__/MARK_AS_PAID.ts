/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrderStatus } from "./../../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: MARK_AS_PAID
// ====================================================

export interface MARK_AS_PAID_updateOrder_order {
  __typename: "OrderNode";
  id: string;
  status: OrderStatus;
}

export interface MARK_AS_PAID_updateOrder {
  __typename: "UpdateOrderMutationPayload";
  order: MARK_AS_PAID_updateOrder_order | null;
}

export interface MARK_AS_PAID {
  updateOrder: MARK_AS_PAID_updateOrder | null;
}

export interface MARK_AS_PAIDVariables {
  orderId: string;
}
