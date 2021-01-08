/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateAdditionalProductMutationInput, PriceUnits, ProductServiceType, PeriodType, AdditionalProductTaxEnum, AdditionalProductType } from "./../../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: ADD_ADDITIONAL_SERVICE_PRICE
// ====================================================

export interface ADD_ADDITIONAL_SERVICE_PRICE_createAdditionalProduct_additionalProduct {
  __typename: "AdditionalProductNode";
  id: string;
  priceValue: any;
  priceUnit: PriceUnits;
  service: ProductServiceType;
  period: PeriodType;
  taxPercentage: AdditionalProductTaxEnum;
  productType: AdditionalProductType;
}

export interface ADD_ADDITIONAL_SERVICE_PRICE_createAdditionalProduct {
  __typename: "CreateAdditionalProductMutationPayload";
  additionalProduct: ADD_ADDITIONAL_SERVICE_PRICE_createAdditionalProduct_additionalProduct | null;
}

export interface ADD_ADDITIONAL_SERVICE_PRICE {
  createAdditionalProduct: ADD_ADDITIONAL_SERVICE_PRICE_createAdditionalProduct | null;
}

export interface ADD_ADDITIONAL_SERVICE_PRICEVariables {
  input: CreateAdditionalProductMutationInput;
}
