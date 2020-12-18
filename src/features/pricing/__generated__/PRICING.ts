/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PriceUnits, PlaceProductTaxEnum, PriceTier, ProductServiceType, PeriodType, AdditionalProductType, AdditionalProductTaxEnum } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL query operation: PRICING
// ====================================================

export interface PRICING_berthProducts_edges_node {
  __typename: "BerthProductNode";
  id: string;
  minWidth: any;
  maxWidth: any;
  tier1Price: any;
  tier2Price: any;
  tier3Price: any;
  priceUnit: PriceUnits;
  taxPercentage: PlaceProductTaxEnum;
}

export interface PRICING_berthProducts_edges {
  __typename: "BerthProductNodeEdge";
  node: PRICING_berthProducts_edges_node | null;
}

export interface PRICING_berthProducts {
  __typename: "BerthProductNodeConnection";
  edges: (PRICING_berthProducts_edges | null)[];
}

export interface PRICING_harbors_edges_node_properties_piers_edges_node_properties {
  __typename: "PierProperties";
  priceTier: PriceTier | null;
}

export interface PRICING_harbors_edges_node_properties_piers_edges_node {
  __typename: "PierNode";
  id: string;
  properties: PRICING_harbors_edges_node_properties_piers_edges_node_properties | null;
}

export interface PRICING_harbors_edges_node_properties_piers_edges {
  __typename: "PierNodeEdge";
  node: PRICING_harbors_edges_node_properties_piers_edges_node | null;
}

export interface PRICING_harbors_edges_node_properties_piers {
  __typename: "PierNodeConnection";
  edges: (PRICING_harbors_edges_node_properties_piers_edges | null)[];
}

export interface PRICING_harbors_edges_node_properties {
  __typename: "HarborProperties";
  name: string | null;
  piers: PRICING_harbors_edges_node_properties_piers | null;
}

export interface PRICING_harbors_edges_node {
  __typename: "HarborNode";
  id: string;
  properties: PRICING_harbors_edges_node_properties | null;
}

export interface PRICING_harbors_edges {
  __typename: "HarborNodeEdge";
  node: PRICING_harbors_edges_node | null;
}

export interface PRICING_harbors {
  __typename: "HarborNodeConnection";
  edges: (PRICING_harbors_edges | null)[];
}

export interface PRICING_winterStorageAreas_edges_node_properties_product {
  __typename: "WinterStorageProductNode";
  id: string;
  priceValue: any;
  priceUnit: PriceUnits;
}

export interface PRICING_winterStorageAreas_edges_node_properties {
  __typename: "WinterStorageAreaProperties";
  name: string | null;
  product: PRICING_winterStorageAreas_edges_node_properties_product | null;
}

export interface PRICING_winterStorageAreas_edges_node {
  __typename: "WinterStorageAreaNode";
  id: string;
  properties: PRICING_winterStorageAreas_edges_node_properties | null;
}

export interface PRICING_winterStorageAreas_edges {
  __typename: "WinterStorageAreaNodeEdge";
  node: PRICING_winterStorageAreas_edges_node | null;
}

export interface PRICING_winterStorageAreas {
  __typename: "WinterStorageAreaNodeConnection";
  edges: (PRICING_winterStorageAreas_edges | null)[];
}

export interface PRICING_additionalProducts_edges_node {
  __typename: "AdditionalProductNode";
  id: string;
  service: ProductServiceType;
  priceValue: any;
  priceUnit: PriceUnits;
  period: PeriodType;
  productType: AdditionalProductType;
  taxPercentage: AdditionalProductTaxEnum;
}

export interface PRICING_additionalProducts_edges {
  __typename: "AdditionalProductNodeEdge";
  node: PRICING_additionalProducts_edges_node | null;
}

export interface PRICING_additionalProducts {
  __typename: "AdditionalProductNodeConnection";
  edges: (PRICING_additionalProducts_edges | null)[];
}

export interface PRICING_optionalProducts_edges_node {
  __typename: "AdditionalProductNode";
  id: string;
  service: ProductServiceType;
  priceValue: any;
  priceUnit: PriceUnits;
  period: PeriodType;
  productType: AdditionalProductType;
  taxPercentage: AdditionalProductTaxEnum;
}

export interface PRICING_optionalProducts_edges {
  __typename: "AdditionalProductNodeEdge";
  node: PRICING_optionalProducts_edges_node | null;
}

export interface PRICING_optionalProducts {
  __typename: "AdditionalProductNodeConnection";
  edges: (PRICING_optionalProducts_edges | null)[];
}

export interface PRICING {
  berthProducts: PRICING_berthProducts | null;
  harbors: PRICING_harbors | null;
  winterStorageAreas: PRICING_winterStorageAreas | null;
  additionalProducts: PRICING_additionalProducts | null;
  optionalProducts: PRICING_optionalProducts | null;
}
