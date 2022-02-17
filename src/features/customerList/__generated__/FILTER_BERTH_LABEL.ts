/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FILTER_BERTH_LABEL
// ====================================================

export interface FILTER_BERTH_LABEL_berth {
  __typename: "BerthNode";
  id: string;
  number: string;
}

export interface FILTER_BERTH_LABEL {
  berth: FILTER_BERTH_LABEL_berth | null;
}

export interface FILTER_BERTH_LABELVariables {
  berthId: string;
}
