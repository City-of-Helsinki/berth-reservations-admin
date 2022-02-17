/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FILTER_HARBOR_LABEL
// ====================================================

export interface FILTER_HARBOR_LABEL_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface FILTER_HARBOR_LABEL_harbor {
  __typename: "HarborNode";
  id: string;
  properties: FILTER_HARBOR_LABEL_harbor_properties | null;
}

export interface FILTER_HARBOR_LABEL {
  harbor: FILTER_HARBOR_LABEL_harbor | null;
}

export interface FILTER_HARBOR_LABELVariables {
  harborId: string;
}
