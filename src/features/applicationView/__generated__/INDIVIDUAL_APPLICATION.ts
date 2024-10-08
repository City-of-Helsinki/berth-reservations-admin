/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BerthApplicationLanguage, InvoicingType, CustomerGroup, Language, BerthMooringType, OfferStatus, ApplicationStatus, LeaseStatus, OrderStatus, ProductServiceType, AdditionalProductType, PriceUnits, PeriodType } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL query operation: INDIVIDUAL_APPLICATION
// ====================================================

export interface INDIVIDUAL_APPLICATION_berthApplication_customer_organization {
  __typename: "OrganizationNode";
  id: string;
  address: string;
  businessId: string;
  city: string;
  name: string;
  postalCode: string;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_customer_primaryAddress {
  __typename: "AddressNode";
  /**
   * The ID of the object
   */
  id: string;
  address: string;
  postalCode: string;
  city: string;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_customer_primaryEmail {
  __typename: "EmailNode";
  /**
   * The ID of the object
   */
  id: string;
  email: string;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_customer_primaryPhone {
  __typename: "PhoneNode";
  /**
   * The ID of the object
   */
  id: string;
  phone: string;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_customer {
  __typename: "ProfileNode";
  comment: string | null;
  firstName: string;
  invoicingType: InvoicingType | null;
  lastName: string;
  /**
   * The ID of the object
   */
  id: string;
  customerGroup: CustomerGroup | null;
  organization: INDIVIDUAL_APPLICATION_berthApplication_customer_organization | null;
  /**
   * Convenience field for the address which is marked as primary.
   */
  primaryAddress: INDIVIDUAL_APPLICATION_berthApplication_customer_primaryAddress | null;
  /**
   * Convenience field for the email which is marked as primary.
   */
  primaryEmail: INDIVIDUAL_APPLICATION_berthApplication_customer_primaryEmail | null;
  /**
   * Convenience field for the phone which is marked as primary.
   */
  primaryPhone: INDIVIDUAL_APPLICATION_berthApplication_customer_primaryPhone | null;
  language: Language | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_berthSwitch_berth_pier_properties_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_berthSwitch_berth_pier_properties_harbor {
  __typename: "HarborNode";
  id: string;
  properties: INDIVIDUAL_APPLICATION_berthApplication_berthSwitch_berth_pier_properties_harbor_properties | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_berthSwitch_berth_pier_properties {
  __typename: "PierProperties";
  identifier: string;
  harbor: INDIVIDUAL_APPLICATION_berthApplication_berthSwitch_berth_pier_properties_harbor;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_berthSwitch_berth_pier {
  __typename: "PierNode";
  id: string;
  properties: INDIVIDUAL_APPLICATION_berthApplication_berthSwitch_berth_pier_properties | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_berthSwitch_berth {
  __typename: "BerthNode";
  id: string;
  number: string;
  pier: INDIVIDUAL_APPLICATION_berthApplication_berthSwitch_berth_pier;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_berthSwitch_reason {
  __typename: "BerthSwitchReasonType";
  title: string | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_berthSwitch {
  __typename: "BerthSwitchType";
  id: string;
  berth: INDIVIDUAL_APPLICATION_berthApplication_berthSwitch_berth;
  reason: INDIVIDUAL_APPLICATION_berthApplication_berthSwitch_reason | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_switchOffers_edges_node_lease {
  __typename: "BerthLeaseNode";
  id: string;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_switchOffers_edges_node_berth_pier_properties_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_switchOffers_edges_node_berth_pier_properties_harbor {
  __typename: "HarborNode";
  id: string;
  properties: INDIVIDUAL_APPLICATION_berthApplication_switchOffers_edges_node_berth_pier_properties_harbor_properties | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_switchOffers_edges_node_berth_pier_properties {
  __typename: "PierProperties";
  identifier: string;
  electricity: boolean;
  gate: boolean;
  lighting: boolean;
  mooring: boolean;
  wasteCollection: boolean;
  water: boolean;
  harbor: INDIVIDUAL_APPLICATION_berthApplication_switchOffers_edges_node_berth_pier_properties_harbor;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_switchOffers_edges_node_berth_pier {
  __typename: "PierNode";
  id: string;
  properties: INDIVIDUAL_APPLICATION_berthApplication_switchOffers_edges_node_berth_pier_properties | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_switchOffers_edges_node_berth {
  __typename: "BerthNode";
  id: string;
  depth: number | null;
  length: number;
  mooringType: BerthMooringType;
  width: number;
  comment: string;
  isAccessible: boolean | null;
  number: string;
  pier: INDIVIDUAL_APPLICATION_berthApplication_switchOffers_edges_node_berth_pier;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_switchOffers_edges_node {
  __typename: "BerthSwitchOfferNode";
  id: string;
  offerNumber: string;
  lease: INDIVIDUAL_APPLICATION_berthApplication_switchOffers_edges_node_lease;
  berth: INDIVIDUAL_APPLICATION_berthApplication_switchOffers_edges_node_berth;
  status: OfferStatus;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_switchOffers_edges {
  __typename: "BerthSwitchOfferNodeEdge";
  node: INDIVIDUAL_APPLICATION_berthApplication_switchOffers_edges_node | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_switchOffers {
  __typename: "BerthSwitchOfferNodeConnection";
  edges: (INDIVIDUAL_APPLICATION_berthApplication_switchOffers_edges | null)[];
}

export interface INDIVIDUAL_APPLICATION_berthApplication_harborChoices_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_harborChoices_harbor {
  __typename: "HarborNode";
  id: string;
  properties: INDIVIDUAL_APPLICATION_berthApplication_harborChoices_harbor_properties | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_harborChoices {
  __typename: "HarborChoiceType";
  harbor: INDIVIDUAL_APPLICATION_berthApplication_harborChoices_harbor;
  priority: number;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_lease_berth_pier_properties_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_lease_berth_pier_properties_harbor {
  __typename: "HarborNode";
  id: string;
  properties: INDIVIDUAL_APPLICATION_berthApplication_lease_berth_pier_properties_harbor_properties | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_lease_berth_pier_properties {
  __typename: "PierProperties";
  identifier: string;
  electricity: boolean;
  gate: boolean;
  lighting: boolean;
  mooring: boolean;
  wasteCollection: boolean;
  water: boolean;
  harbor: INDIVIDUAL_APPLICATION_berthApplication_lease_berth_pier_properties_harbor;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_lease_berth_pier {
  __typename: "PierNode";
  id: string;
  properties: INDIVIDUAL_APPLICATION_berthApplication_lease_berth_pier_properties | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_lease_berth {
  __typename: "BerthNode";
  id: string;
  depth: number | null;
  length: number;
  mooringType: BerthMooringType;
  width: number;
  comment: string;
  isAccessible: boolean | null;
  number: string;
  pier: INDIVIDUAL_APPLICATION_berthApplication_lease_berth_pier;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_lease_customer_primaryEmail {
  __typename: "EmailNode";
  /**
   * The ID of the object
   */
  id: string;
  email: string;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_lease_customer {
  __typename: "ProfileNode";
  /**
   * The ID of the object
   */
  id: string;
  /**
   * Convenience field for the email which is marked as primary.
   */
  primaryEmail: INDIVIDUAL_APPLICATION_berthApplication_lease_customer_primaryEmail | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_lease_order_orderLines_edges_node_product {
  __typename: "AdditionalProductNode";
  id: string;
  service: ProductServiceType;
  productType: AdditionalProductType;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_lease_order_orderLines_edges_node {
  __typename: "OrderLineNode";
  id: string;
  price: any;
  product: INDIVIDUAL_APPLICATION_berthApplication_lease_order_orderLines_edges_node_product | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_lease_order_orderLines_edges {
  __typename: "OrderLineNodeEdge";
  node: INDIVIDUAL_APPLICATION_berthApplication_lease_order_orderLines_edges_node | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_lease_order_orderLines {
  __typename: "OrderLineNodeConnection";
  edges: (INDIVIDUAL_APPLICATION_berthApplication_lease_order_orderLines_edges | null)[];
}

export interface INDIVIDUAL_APPLICATION_berthApplication_lease_order {
  __typename: "OrderNode";
  id: string;
  orderNumber: string;
  price: any;
  totalPrice: any;
  status: OrderStatus;
  orderLines: INDIVIDUAL_APPLICATION_berthApplication_lease_order_orderLines;
}

export interface INDIVIDUAL_APPLICATION_berthApplication_lease {
  __typename: "BerthLeaseNode";
  id: string;
  status: LeaseStatus;
  berth: INDIVIDUAL_APPLICATION_berthApplication_lease_berth;
  customer: INDIVIDUAL_APPLICATION_berthApplication_lease_customer;
  order: INDIVIDUAL_APPLICATION_berthApplication_lease_order | null;
}

export interface INDIVIDUAL_APPLICATION_berthApplication {
  __typename: "BerthApplicationNode";
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
  customer: INDIVIDUAL_APPLICATION_berthApplication_customer | null;
  berthSwitch: INDIVIDUAL_APPLICATION_berthApplication_berthSwitch | null;
  switchOffers: INDIVIDUAL_APPLICATION_berthApplication_switchOffers;
  createdAt: any;
  boatType: string | null;
  boatRegistrationNumber: string | null;
  boatWidth: any | null;
  boatLength: any | null;
  boatDraught: any | null;
  boatWeight: number | null;
  boatName: string | null;
  boatModel: string | null;
  accessibilityRequired: boolean;
  status: ApplicationStatus;
  harborChoices: (INDIVIDUAL_APPLICATION_berthApplication_harborChoices | null)[] | null;
  acceptBoatingNewsletter: boolean;
  acceptFitnessNews: boolean;
  acceptLibraryNews: boolean;
  acceptOtherCultureNews: boolean;
  applicationCode: string;
  lease: INDIVIDUAL_APPLICATION_berthApplication_lease | null;
}

export interface INDIVIDUAL_APPLICATION_boatTypes {
  __typename: "BoatTypeType";
  id: string;
  name: string | null;
}

export interface INDIVIDUAL_APPLICATION_additionalProducts_edges_node {
  __typename: "AdditionalProductNode";
  id: string;
  service: ProductServiceType;
  priceValue: any;
  priceUnit: PriceUnits;
  period: PeriodType;
  productType: AdditionalProductType;
}

export interface INDIVIDUAL_APPLICATION_additionalProducts_edges {
  __typename: "AdditionalProductNodeEdge";
  node: INDIVIDUAL_APPLICATION_additionalProducts_edges_node | null;
}

export interface INDIVIDUAL_APPLICATION_additionalProducts {
  __typename: "AdditionalProductNodeConnection";
  edges: (INDIVIDUAL_APPLICATION_additionalProducts_edges | null)[];
}

export interface INDIVIDUAL_APPLICATION {
  berthApplication: INDIVIDUAL_APPLICATION_berthApplication | null;
  boatTypes: INDIVIDUAL_APPLICATION_boatTypes[] | null;
  __typename: "Query";
  additionalProducts: INDIVIDUAL_APPLICATION_additionalProducts | null;
}

export interface INDIVIDUAL_APPLICATIONVariables {
  id: string;
}
