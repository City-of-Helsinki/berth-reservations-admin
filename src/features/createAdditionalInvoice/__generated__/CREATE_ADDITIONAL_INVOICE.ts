/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateAdditionalProductOrderMutationInput } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CREATE_ADDITIONAL_INVOICE
// ====================================================

export interface CREATE_ADDITIONAL_INVOICE_createAdditionalProductOrder_order {
  __typename: "OrderNode";
  id: string;
  price: any;
  totalPrice: any;
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
