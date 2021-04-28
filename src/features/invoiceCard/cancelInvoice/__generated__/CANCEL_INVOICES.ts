/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateOrderInput, OrderStatus } from "./../../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CANCEL_INVOICES
// ====================================================

export interface CANCEL_INVOICES_updateOrders_successfulOrders {
  __typename: "OrderNode";
  id: string;
  status: OrderStatus;
}

export interface CANCEL_INVOICES_updateOrders_failedOrders {
  __typename: "FailedOrderType";
  id: string;
}

export interface CANCEL_INVOICES_updateOrders {
  __typename: "UpdateOrdersMutationPayload";
  successfulOrders: (CANCEL_INVOICES_updateOrders_successfulOrders | null)[] | null;
  failedOrders: (CANCEL_INVOICES_updateOrders_failedOrders | null)[] | null;
}

export interface CANCEL_INVOICES {
  updateOrders: CANCEL_INVOICES_updateOrders | null;
}

export interface CANCEL_INVOICESVariables {
  orders: (UpdateOrderInput | null)[];
}
