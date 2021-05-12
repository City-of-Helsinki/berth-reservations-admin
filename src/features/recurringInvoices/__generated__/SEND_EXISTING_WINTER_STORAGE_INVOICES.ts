/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SendExistingWinterStorageInvoicesMutationInput } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: SEND_EXISTING_WINTER_STORAGE_INVOICES
// ====================================================

export interface SEND_EXISTING_WINTER_STORAGE_INVOICES_sendExistingWinterStorageInvoices {
  __typename: "SendExistingWinterStorageInvoicesMutationPayload";
  ok: boolean;
}

export interface SEND_EXISTING_WINTER_STORAGE_INVOICES {
  sendExistingWinterStorageInvoices: SEND_EXISTING_WINTER_STORAGE_INVOICES_sendExistingWinterStorageInvoices | null;
}

export interface SEND_EXISTING_WINTER_STORAGE_INVOICESVariables {
  input: SendExistingWinterStorageInvoicesMutationInput;
}
