/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductServiceType, PriceUnits, PeriodType, AdditionalProductType, AdditionalProductTaxEnum } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ADDITIONAL_SERVICES
// ====================================================

export interface ADDITIONAL_SERVICES_optionalProducts_edges_node {
  __typename: "AdditionalProductNode";
  id: string;
  service: ProductServiceType;
  priceValue: any;
  priceUnit: PriceUnits;
  period: PeriodType;
  productType: AdditionalProductType;
  taxPercentage: AdditionalProductTaxEnum;
}

export interface ADDITIONAL_SERVICES_optionalProducts_edges {
  __typename: "AdditionalProductNodeEdge";
  node: ADDITIONAL_SERVICES_optionalProducts_edges_node | null;
}

export interface ADDITIONAL_SERVICES_optionalProducts {
  __typename: "AdditionalProductNodeConnection";
  edges: (ADDITIONAL_SERVICES_optionalProducts_edges | null)[];
}

export interface ADDITIONAL_SERVICES {
  optionalProducts: ADDITIONAL_SERVICES_optionalProducts | null;
}
