/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: INDIVIDUAL_HARBOR
// ====================================================

export interface INDIVIDUAL_HARBOR_harbor_properties_piers_edges_node_properties {
  __typename: "PierProperties";
  electricity: boolean;
  wasteCollection: boolean;
  gate: boolean;
  water: boolean;
  lighting: boolean;
}

export interface INDIVIDUAL_HARBOR_harbor_properties_piers_edges_node {
  __typename: "PierNode";
  properties: INDIVIDUAL_HARBOR_harbor_properties_piers_edges_node_properties | null;
}

export interface INDIVIDUAL_HARBOR_harbor_properties_piers_edges {
  __typename: "PierNodeEdge";
  node: INDIVIDUAL_HARBOR_harbor_properties_piers_edges_node | null;
}

export interface INDIVIDUAL_HARBOR_harbor_properties_piers {
  __typename: "PierNodeConnection";
  edges: (INDIVIDUAL_HARBOR_harbor_properties_piers_edges | null)[];
}

export interface INDIVIDUAL_HARBOR_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
  numberOfPlaces: number | null;
  streetAddress: string | null;
  zipCode: string;
  municipality: string | null;
  wwwUrl: string;
  imageFile: string | null;
  servicemapId: string | null;
  piers: INDIVIDUAL_HARBOR_harbor_properties_piers;
}

export interface INDIVIDUAL_HARBOR_harbor {
  __typename: "HarborNode";
  id: string;
  properties: INDIVIDUAL_HARBOR_harbor_properties | null;
}

export interface INDIVIDUAL_HARBOR {
  harbor: INDIVIDUAL_HARBOR_harbor | null;
}

export interface INDIVIDUAL_HARBORVariables {
  id: string;
}
