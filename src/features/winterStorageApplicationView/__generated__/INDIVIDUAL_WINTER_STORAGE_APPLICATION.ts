/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BerthApplicationLanguage, CustomerGroup, InvoicingType, OrganizationType, Language, ApplicationStatus, LeaseStatus, OrderStatus, ProductServiceType, AdditionalProductType } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL query operation: INDIVIDUAL_WINTER_STORAGE_APPLICATION
// ====================================================

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_customer_organization {
  __typename: "OrganizationNode";
  id: string;
  address: string;
  businessId: string;
  city: string;
  name: string;
  organizationType: OrganizationType;
  postalCode: string;
}

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_customer_primaryAddress {
  __typename: "AddressNode";
  id: string;
  address: string;
  postalCode: string;
  city: string;
}

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_customer_primaryEmail {
  __typename: "EmailNode";
  id: string;
  email: string;
}

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_customer_primaryPhone {
  __typename: "PhoneNode";
  id: string;
  phone: string | null;
}

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_customer {
  __typename: "ProfileNode";
  customerGroup: CustomerGroup | null;
  comment: string | null;
  firstName: string;
  invoicingType: InvoicingType | null;
  lastName: string;
  id: string;
  organization: INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_customer_organization | null;
  primaryAddress: INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_customer_primaryAddress | null;
  primaryEmail: INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_customer_primaryEmail | null;
  primaryPhone: INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_customer_primaryPhone | null;
  language: Language | null;
}

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_winterStorageAreaChoices_winterStorageArea_properties {
  __typename: "WinterStorageAreaProperties";
  name: string | null;
}

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_winterStorageAreaChoices_winterStorageArea {
  __typename: "WinterStorageAreaNode";
  id: string;
  properties: INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_winterStorageAreaChoices_winterStorageArea_properties | null;
}

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_winterStorageAreaChoices {
  __typename: "WinterStorageAreaChoiceType";
  priority: number;
  winterStorageArea: INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_winterStorageAreaChoices_winterStorageArea;
}

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease_place_winterStorageSection_properties_area_properties {
  __typename: "WinterStorageAreaProperties";
  name: string | null;
}

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease_place_winterStorageSection_properties_area {
  __typename: "WinterStorageAreaNode";
  id: string;
  properties: INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease_place_winterStorageSection_properties_area_properties | null;
}

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease_place_winterStorageSection_properties {
  __typename: "WinterStorageSectionProperties";
  identifier: string;
  electricity: boolean;
  gate: boolean;
  water: boolean;
  summerStorageForBoats: boolean;
  summerStorageForDockingEquipment: boolean;
  summerStorageForTrailers: boolean;
  area: INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease_place_winterStorageSection_properties_area;
}

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease_place_winterStorageSection {
  __typename: "WinterStorageSectionNode";
  id: string;
  properties: INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease_place_winterStorageSection_properties | null;
}

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease_place {
  __typename: "WinterStoragePlaceNode";
  id: string;
  length: number;
  width: number;
  number: number;
  winterStorageSection: INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease_place_winterStorageSection;
}

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease_customer_primaryEmail {
  __typename: "EmailNode";
  id: string;
  email: string;
}

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease_customer {
  __typename: "ProfileNode";
  id: string;
  primaryEmail: INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease_customer_primaryEmail | null;
}

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease_order_orderLines_edges_node_product {
  __typename: "AdditionalProductNode";
  id: string;
  service: ProductServiceType;
  productType: AdditionalProductType;
}

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease_order_orderLines_edges_node {
  __typename: "OrderLineNode";
  id: string;
  price: any;
  product: INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease_order_orderLines_edges_node_product | null;
}

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease_order_orderLines_edges {
  __typename: "OrderLineNodeEdge";
  node: INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease_order_orderLines_edges_node | null;
}

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease_order_orderLines {
  __typename: "OrderLineNodeConnection";
  edges: (INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease_order_orderLines_edges | null)[];
}

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease_order {
  __typename: "OrderNode";
  id: string;
  orderNumber: string;
  price: any;
  totalPrice: any;
  status: OrderStatus;
  orderLines: INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease_order_orderLines;
}

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease {
  __typename: "WinterStorageLeaseNode";
  id: string;
  status: LeaseStatus;
  place: INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease_place | null;
  customer: INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease_customer;
  order: INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease_order | null;
}

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication {
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
  language: BerthApplicationLanguage;
  customer: INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_customer | null;
  createdAt: any;
  boatType: string | null;
  boatRegistrationNumber: string;
  boatWidth: any;
  boatLength: any;
  boatName: string;
  boatModel: string;
  acceptBoatingNewsletter: boolean;
  acceptFitnessNews: boolean;
  acceptLibraryNews: boolean;
  acceptOtherCultureNews: boolean;
  status: ApplicationStatus;
  winterStorageAreaChoices: (INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_winterStorageAreaChoices | null)[] | null;
  applicationCode: string;
  lease: INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication_lease | null;
}

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATION_boatTypes {
  __typename: "BoatTypeType";
  id: string;
  name: string | null;
}

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATION {
  winterStorageApplication: INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication | null;
  boatTypes: INDIVIDUAL_WINTER_STORAGE_APPLICATION_boatTypes[] | null;
}

export interface INDIVIDUAL_WINTER_STORAGE_APPLICATIONVariables {
  id: string;
}
