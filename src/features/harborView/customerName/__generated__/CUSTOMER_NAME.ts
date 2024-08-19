/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CUSTOMER_NAME
// ====================================================

export interface CUSTOMER_NAME_profile {
  __typename: "ProfileNode";
  /**
   * The ID of the object
   */
  id: string;
  firstName: string;
  lastName: string;
}

export interface CUSTOMER_NAME {
  /**
   * Get profile by profile ID.
   * 
   * Requires `staff` credentials for the requester's service.The profile must have an active connection to the requester's service, otherwise it will not be returned.
   */
  profile: CUSTOMER_NAME_profile | null;
}

export interface CUSTOMER_NAMEVariables {
  customerId: string;
}
