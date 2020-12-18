/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SendExistingBerthInvoicesMutationInput } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: SEND_EXISTING_BERTH_INVOICES
// ====================================================

export interface SEND_EXISTING_BERTH_INVOICES_sendExistingBerthInvoices {
  __typename: "SendExistingBerthInvoicesMutationPayload";
  ok: boolean;
}

export interface SEND_EXISTING_BERTH_INVOICES {
  sendExistingBerthInvoices: SEND_EXISTING_BERTH_INVOICES_sendExistingBerthInvoices | null;
}

export interface SEND_EXISTING_BERTH_INVOICESVariables {
  input: SendExistingBerthInvoicesMutationInput;
}
