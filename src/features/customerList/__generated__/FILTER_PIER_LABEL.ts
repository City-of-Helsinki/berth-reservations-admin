/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FILTER_PIER_LABEL
// ====================================================

export interface FILTER_PIER_LABEL_pier_properties {
  __typename: "PierProperties";
  identifier: string;
}

export interface FILTER_PIER_LABEL_pier {
  __typename: "PierNode";
  id: string;
  properties: FILTER_PIER_LABEL_pier_properties | null;
}

export interface FILTER_PIER_LABEL {
  pier: FILTER_PIER_LABEL_pier | null;
}

export interface FILTER_PIER_LABELVariables {
  pierId: string;
}
