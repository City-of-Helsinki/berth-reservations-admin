/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { WinterStorageApplicationLanguage, CustomerGroup, InvoicingType, OrganizationType, Language, ApplicationStatus, LeaseStatus, OrderStatus, ProductServiceType, AdditionalProductType } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL query operation: UNMARKED_WINTER_STORAGE_NOTICE
// ====================================================

export interface UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_customer_organization {
  __typename: "OrganizationNode";
  id: string;
  address: string;
  businessId: string;
  city: string;
  name: string;
  organizationType: OrganizationType;
  postalCode: string;
}

export interface UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_customer_primaryAddress {
  __typename: "AddressNode";
  /**
   * The ID of the object
   */
  id: string;
  address: string;
  postalCode: string;
  city: string;
}

export interface UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_customer_primaryEmail {
  __typename: "EmailNode";
  /**
   * The ID of the object
   */
  id: string;
  email: string;
}

export interface UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_customer_primaryPhone {
  __typename: "PhoneNode";
  /**
   * The ID of the object
   */
  id: string;
  phone: string;
}

export interface UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_customer {
  __typename: "ProfileNode";
  customerGroup: CustomerGroup | null;
  comment: string | null;
  firstName: string;
  invoicingType: InvoicingType | null;
  lastName: string;
  /**
   * The ID of the object
   */
  id: string;
  organization: UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_customer_organization | null;
  /**
   * Convenience field for the address which is marked as primary.
   */
  primaryAddress: UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_customer_primaryAddress | null;
  /**
   * Convenience field for the email which is marked as primary.
   */
  primaryEmail: UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_customer_primaryEmail | null;
  /**
   * Convenience field for the phone which is marked as primary.
   */
  primaryPhone: UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_customer_primaryPhone | null;
  language: Language | null;
}

export interface UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_winterStorageAreaChoices_winterStorageArea_properties {
  __typename: "WinterStorageAreaProperties";
  name: string | null;
}

export interface UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_winterStorageAreaChoices_winterStorageArea {
  __typename: "WinterStorageAreaNode";
  id: string;
  properties: UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_winterStorageAreaChoices_winterStorageArea_properties | null;
}

export interface UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_winterStorageAreaChoices {
  __typename: "WinterStorageAreaChoiceType";
  priority: number;
  winterStorageArea: UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_winterStorageAreaChoices_winterStorageArea;
  winterStorageSectionIds: (string | null)[] | null;
}

export interface UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_lease_customer_primaryEmail {
  __typename: "EmailNode";
  /**
   * The ID of the object
   */
  id: string;
  email: string;
}

export interface UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_lease_customer {
  __typename: "ProfileNode";
  /**
   * The ID of the object
   */
  id: string;
  /**
   * Convenience field for the email which is marked as primary.
   */
  primaryEmail: UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_lease_customer_primaryEmail | null;
}

export interface UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_lease_order_orderLines_edges_node_product {
  __typename: "AdditionalProductNode";
  id: string;
  service: ProductServiceType;
  productType: AdditionalProductType;
}

export interface UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_lease_order_orderLines_edges_node {
  __typename: "OrderLineNode";
  id: string;
  price: any;
  product: UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_lease_order_orderLines_edges_node_product | null;
}

export interface UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_lease_order_orderLines_edges {
  __typename: "OrderLineNodeEdge";
  node: UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_lease_order_orderLines_edges_node | null;
}

export interface UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_lease_order_orderLines {
  __typename: "OrderLineNodeConnection";
  edges: (UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_lease_order_orderLines_edges | null)[];
}

export interface UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_lease_order {
  __typename: "OrderNode";
  id: string;
  orderNumber: string;
  price: any;
  totalPrice: any;
  status: OrderStatus;
  orderLines: UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_lease_order_orderLines;
}

export interface UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_lease {
  __typename: "WinterStorageLeaseNode";
  id: string;
  status: LeaseStatus;
  customer: UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_lease_customer;
  order: UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_lease_order | null;
}

export interface UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice {
  __typename: "WinterStorageApplicationNode";
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  municipality: string;
  zipCode: string;
  phoneNumber: string;
  email: string;
  businessId: string;
  companyName: string;
  language: WinterStorageApplicationLanguage;
  customer: UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_customer | null;
  createdAt: any;
  applicationCode: string;
  boatType: string | null;
  boatRegistrationNumber: string | null;
  boatWidth: any | null;
  boatLength: any | null;
  boatName: string | null;
  boatModel: string | null;
  acceptBoatingNewsletter: boolean;
  acceptFitnessNews: boolean;
  acceptLibraryNews: boolean;
  acceptOtherCultureNews: boolean;
  status: ApplicationStatus;
  winterStorageAreaChoices: (UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_winterStorageAreaChoices | null)[] | null;
  lease: UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_lease | null;
}

export interface UNMARKED_WINTER_STORAGE_NOTICE_boatTypes {
  __typename: "BoatTypeType";
  id: string;
  name: string | null;
}

export interface UNMARKED_WINTER_STORAGE_NOTICE {
  winterStorageNotice: UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice | null;
  boatTypes: UNMARKED_WINTER_STORAGE_NOTICE_boatTypes[] | null;
}

export interface UNMARKED_WINTER_STORAGE_NOTICEVariables {
  id: string;
}
