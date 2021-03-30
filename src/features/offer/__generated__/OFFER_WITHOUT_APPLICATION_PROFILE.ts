/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: OFFER_WITHOUT_APPLICATION_PROFILE
// ====================================================

export interface OFFER_WITHOUT_APPLICATION_PROFILE_profile_boats_edges_node_boatType {
  __typename: "BoatTypeType";
  id: string;
  name: string | null;
}

export interface OFFER_WITHOUT_APPLICATION_PROFILE_profile_boats_edges_node {
  __typename: "BoatNode";
  id: string;
  boatType: OFFER_WITHOUT_APPLICATION_PROFILE_profile_boats_edges_node_boatType;
  length: any;
  width: any;
  draught: any | null;
  weight: number | null;
  name: string;
  model: string;
  registrationNumber: string;
}

export interface OFFER_WITHOUT_APPLICATION_PROFILE_profile_boats_edges {
  __typename: "BoatNodeEdge";
  node: OFFER_WITHOUT_APPLICATION_PROFILE_profile_boats_edges_node | null;
}

export interface OFFER_WITHOUT_APPLICATION_PROFILE_profile_boats {
  __typename: "BoatNodeConnection";
  edges: (OFFER_WITHOUT_APPLICATION_PROFILE_profile_boats_edges | null)[];
}

export interface OFFER_WITHOUT_APPLICATION_PROFILE_profile {
  __typename: "ProfileNode";
  id: string;
  boats: OFFER_WITHOUT_APPLICATION_PROFILE_profile_boats | null;
}

export interface OFFER_WITHOUT_APPLICATION_PROFILE {
  profile: OFFER_WITHOUT_APPLICATION_PROFILE_profile | null;
}

export interface OFFER_WITHOUT_APPLICATION_PROFILEVariables {
  customerId: string;
}
