/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateOrderInput, OrderStatus } from "./../../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: MARK_AS_PAID
// ====================================================

export interface MARK_AS_PAID_updateOrders_successfulOrders {
  __typename: "OrderNode";
  id: string;
  status: OrderStatus;
}

export interface MARK_AS_PAID_updateOrders_failedOrders {
  __typename: "FailedOrderType";
  id: string;
}

export interface MARK_AS_PAID_updateOrders {
  __typename: "UpdateOrdersMutationPayload";
  successfulOrders: (MARK_AS_PAID_updateOrders_successfulOrders | null)[] | null;
  failedOrders: (MARK_AS_PAID_updateOrders_failedOrders | null)[] | null;
}

export interface MARK_AS_PAID {
  updateOrders: MARK_AS_PAID_updateOrders | null;
}

export interface MARK_AS_PAIDVariables {
  orders: (UpdateOrderInput | null)[];
}
