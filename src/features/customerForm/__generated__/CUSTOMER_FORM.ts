/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CustomerGroup, Language } from "./../../../@types/__generated__/globalTypes";

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
  id: string;
  address: string;
  postalCode: string;
  city: string;
}

export interface CUSTOMER_FORM_profile_primaryEmail {
  __typename: "EmailNode";
  id: string;
  email: string;
}

export interface CUSTOMER_FORM_profile_primaryPhone {
  __typename: "PhoneNode";
  id: string;
  phone: string;
}

export interface CUSTOMER_FORM_profile {
  __typename: "ProfileNode";
  id: string;
  comment: string | null;
  firstName: string;
  lastName: string;
  customerGroup: CustomerGroup | null;
  organization: CUSTOMER_FORM_profile_organization | null;
  primaryAddress: CUSTOMER_FORM_profile_primaryAddress | null;
  primaryEmail: CUSTOMER_FORM_profile_primaryEmail | null;
  primaryPhone: CUSTOMER_FORM_profile_primaryPhone | null;
  language: Language | null;
}

export interface CUSTOMER_FORM {
  profile: CUSTOMER_FORM_profile | null;
}

export interface CUSTOMER_FORMVariables {
  id: string;
}
