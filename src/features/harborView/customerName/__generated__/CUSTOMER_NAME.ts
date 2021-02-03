/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CUSTOMER_NAME
// ====================================================

export interface CUSTOMER_NAME_profile {
  __typename: "ProfileNode";
  id: string;
  firstName: string;
  lastName: string;
}

export interface CUSTOMER_NAME {
  profile: CUSTOMER_NAME_profile | null;
}

export interface CUSTOMER_NAMEVariables {
  customerId: string;
}
