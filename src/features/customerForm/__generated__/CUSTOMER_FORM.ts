/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CustomerGroup, InvoicingType, Language } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL query operation: CUSTOMER_FORM
// ====================================================

export interface CUSTOMER_FORM_profile_organization {
  __typename: "OrganizationNode";
  id: string;
  address: string;
  businessId: string;
  city: string;
  name: string;
  postalCode: string;
}

export interface CUSTOMER_FORM_profile_primaryAddress {
  __typename: "AddressNode";
  /**
   * The ID of the object
   */
  id: string;
  address: string;
  postalCode: string;
  city: string;
}

export interface CUSTOMER_FORM_profile_primaryEmail {
  __typename: "EmailNode";
  /**
   * The ID of the object
   */
  id: string;
  email: string;
}

export interface CUSTOMER_FORM_profile_primaryPhone {
  __typename: "PhoneNode";
  /**
   * The ID of the object
   */
  id: string;
  phone: string;
}

export interface CUSTOMER_FORM_profile {
  __typename: "ProfileNode";
  /**
   * The ID of the object
   */
  id: string;
  comment: string | null;
  firstName: string;
  lastName: string;
  customerGroup: CustomerGroup | null;
  invoicingType: InvoicingType | null;
  organization: CUSTOMER_FORM_profile_organization | null;
  /**
   * Convenience field for the address which is marked as primary.
   */
  primaryAddress: CUSTOMER_FORM_profile_primaryAddress | null;
  /**
   * Convenience field for the email which is marked as primary.
   */
  primaryEmail: CUSTOMER_FORM_profile_primaryEmail | null;
  /**
   * Convenience field for the phone which is marked as primary.
   */
  primaryPhone: CUSTOMER_FORM_profile_primaryPhone | null;
  language: Language | null;
}

export interface CUSTOMER_FORM {
  /**
   * Get profile by profile ID.
   * 
   * Requires `staff` credentials for the requester's service.The profile must have an active connection to the requester's service, otherwise it will not be returned.
   */
  profile: CUSTOMER_FORM_profile | null;
}

export interface CUSTOMER_FORMVariables {
  id: string;
}
