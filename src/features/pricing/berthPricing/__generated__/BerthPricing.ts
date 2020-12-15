/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PriceUnits, PlaceProductTaxEnum } from "./../../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL fragment: BerthPricing
// ====================================================

export interface BerthPricing_edges_node {
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

export interface BerthPricing_edges {
  __typename: "BerthProductNodeEdge";
  node: BerthPricing_edges_node | null;
}

export interface BerthPricing {
  __typename: "BerthProductNodeConnection";
  edges: (BerthPricing_edges | null)[];
}
