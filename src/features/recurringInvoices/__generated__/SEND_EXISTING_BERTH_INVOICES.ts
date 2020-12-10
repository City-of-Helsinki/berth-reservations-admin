/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SendExistingBerthInvoicesMutationInput } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: SEND_EXISTING_BERTH_INVOICES
// ====================================================

export interface SEND_EXISTING_BERTH_INVOICES_sendExistingBerthInvoices_result_failedOrders {
  __typename: "FailedInstanceType";
  id: string;
}

export interface SEND_EXISTING_BERTH_INVOICES_sendExistingBerthInvoices_result_failedLeases {
  __typename: "FailedInstanceType";
  id: string;
}

export interface SEND_EXISTING_BERTH_INVOICES_sendExistingBerthInvoices_result {
  __typename: "SendExistingInvoicesType";
  successfulOrders: (string | null)[] | null;
  failedOrders: (SEND_EXISTING_BERTH_INVOICES_sendExistingBerthInvoices_result_failedOrders | null)[] | null;
  failedLeases: (SEND_EXISTING_BERTH_INVOICES_sendExistingBerthInvoices_result_failedLeases | null)[] | null;
}

export interface SEND_EXISTING_BERTH_INVOICES_sendExistingBerthInvoices {
  __typename: "SendExistingBerthInvoicesMutationPayload";
  result: SEND_EXISTING_BERTH_INVOICES_sendExistingBerthInvoices_result | null;
}

export interface SEND_EXISTING_BERTH_INVOICES {
  sendExistingBerthInvoices: SEND_EXISTING_BERTH_INVOICES_sendExistingBerthInvoices | null;
}

export interface SEND_EXISTING_BERTH_INVOICESVariables {
  input: SendExistingBerthInvoicesMutationInput;
}
