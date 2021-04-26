/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RefundOrderMutationInput, OrderStatus, OrderRefundStatus } from "./../../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: REFUND_ORDER
// ====================================================

export interface REFUND_ORDER_refundOrder_orderRefund_order {
  __typename: "OrderNode";
  status: OrderStatus;
}

export interface REFUND_ORDER_refundOrder_orderRefund {
  __typename: "OrderRefundNode";
  order: REFUND_ORDER_refundOrder_orderRefund_order;
  status: OrderRefundStatus;
  amount: any;
}

export interface REFUND_ORDER_refundOrder {
  __typename: "RefundOrderMutationPayload";
  orderRefund: REFUND_ORDER_refundOrder_orderRefund;
}

export interface REFUND_ORDER {
  refundOrder: REFUND_ORDER_refundOrder | null;
}

export interface REFUND_ORDERVariables {
  input: RefundOrderMutationInput;
}
