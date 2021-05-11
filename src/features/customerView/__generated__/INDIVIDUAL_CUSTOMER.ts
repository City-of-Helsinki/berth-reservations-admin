/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InvoicingType, CustomerGroup, Language, BoatCertificateType, LeaseStatus, BerthMooringType, OrderStatus, ProductServiceType, AdditionalProductType, OrderOrderType, PriceUnits, OfferStatus, ApplicationStatus } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL query operation: INDIVIDUAL_CUSTOMER
// ====================================================

export interface INDIVIDUAL_CUSTOMER_profile_organization {
  __typename: "OrganizationNode";
  id: string;
  address: string;
  businessId: string;
  city: string;
  name: string;
  postalCode: string;
}

export interface INDIVIDUAL_CUSTOMER_profile_primaryAddress {
  __typename: "AddressNode";
  id: string;
  address: string;
  postalCode: string;
  city: string;
}

export interface INDIVIDUAL_CUSTOMER_profile_primaryEmail {
  __typename: "EmailNode";
  id: string;
  email: string;
}

export interface INDIVIDUAL_CUSTOMER_profile_primaryPhone {
  __typename: "PhoneNode";
  id: string;
  phone: string | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_boats_edges_node_boatType {
  __typename: "BoatTypeType";
  id: string;
  name: string | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_boats_edges_node_certificates {
  __typename: "BoatCertificateNode";
  id: string;
  file: string | null;
  certificateType: BoatCertificateType;
  validUntil: any | null;
  checkedAt: any;
  checkedBy: string | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_boats_edges_node {
  __typename: "BoatNode";
  id: string;
  boatType: INDIVIDUAL_CUSTOMER_profile_boats_edges_node_boatType;
  width: any;
  length: any;
  draught: any | null;
  weight: number | null;
  name: string;
  model: string;
  registrationNumber: string;
  propulsion: string;
  hullMaterial: string;
  intendedUse: string;
  certificates: (INDIVIDUAL_CUSTOMER_profile_boats_edges_node_certificates | null)[];
}

export interface INDIVIDUAL_CUSTOMER_profile_boats_edges {
  __typename: "BoatNodeEdge";
  node: INDIVIDUAL_CUSTOMER_profile_boats_edges_node | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_boats {
  __typename: "BoatNodeConnection";
  edges: (INDIVIDUAL_CUSTOMER_profile_boats_edges | null)[];
}

export interface INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node_berth_pier_properties_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node_berth_pier_properties_harbor {
  __typename: "HarborNode";
  id: string;
  properties: INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node_berth_pier_properties_harbor_properties | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node_berth_pier_properties {
  __typename: "PierProperties";
  identifier: string;
  electricity: boolean;
  gate: boolean;
  lighting: boolean;
  mooring: boolean;
  wasteCollection: boolean;
  water: boolean;
  harbor: INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node_berth_pier_properties_harbor;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node_berth_pier {
  __typename: "PierNode";
  id: string;
  properties: INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node_berth_pier_properties | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node_berth {
  __typename: "BerthNode";
  id: string;
  depth: number | null;
  length: number;
  mooringType: BerthMooringType;
  width: number;
  comment: string;
  isAccessible: boolean | null;
  number: string;
  pier: INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node_berth_pier;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node_customer_primaryEmail {
  __typename: "EmailNode";
  id: string;
  email: string;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node_customer {
  __typename: "ProfileNode";
  id: string;
  primaryEmail: INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node_customer_primaryEmail | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node_order_orderLines_edges_node_product {
  __typename: "AdditionalProductNode";
  id: string;
  service: ProductServiceType;
  productType: AdditionalProductType;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node_order_orderLines_edges_node {
  __typename: "OrderLineNode";
  id: string;
  price: any;
  product: INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node_order_orderLines_edges_node_product | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node_order_orderLines_edges {
  __typename: "OrderLineNodeEdge";
  node: INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node_order_orderLines_edges_node | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node_order_orderLines {
  __typename: "OrderLineNodeConnection";
  edges: (INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node_order_orderLines_edges | null)[];
}

export interface INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node_order {
  __typename: "OrderNode";
  id: string;
  orderNumber: string;
  price: any;
  totalPrice: any;
  status: OrderStatus;
  orderLines: INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node_order_orderLines;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node {
  __typename: "BerthLeaseNode";
  startDate: any;
  endDate: any;
  isActive: boolean;
  id: string;
  status: LeaseStatus;
  berth: INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node_berth;
  customer: INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node_customer;
  order: INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node_order | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthLeases_edges {
  __typename: "BerthLeaseNodeEdge";
  node: INDIVIDUAL_CUSTOMER_profile_berthLeases_edges_node | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthLeases {
  __typename: "BerthLeaseNodeConnection";
  edges: (INDIVIDUAL_CUSTOMER_profile_berthLeases_edges | null)[];
}

export interface INDIVIDUAL_CUSTOMER_profile_winterStorageLeases_edges_node_place_winterStorageSection_properties_area_properties {
  __typename: "WinterStorageAreaProperties";
  name: string | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_winterStorageLeases_edges_node_place_winterStorageSection_properties_area {
  __typename: "WinterStorageAreaNode";
  id: string;
  properties: INDIVIDUAL_CUSTOMER_profile_winterStorageLeases_edges_node_place_winterStorageSection_properties_area_properties | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_winterStorageLeases_edges_node_place_winterStorageSection_properties {
  __typename: "WinterStorageSectionProperties";
  identifier: string;
  area: INDIVIDUAL_CUSTOMER_profile_winterStorageLeases_edges_node_place_winterStorageSection_properties_area;
}

export interface INDIVIDUAL_CUSTOMER_profile_winterStorageLeases_edges_node_place_winterStorageSection {
  __typename: "WinterStorageSectionNode";
  id: string;
  properties: INDIVIDUAL_CUSTOMER_profile_winterStorageLeases_edges_node_place_winterStorageSection_properties | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_winterStorageLeases_edges_node_place {
  __typename: "WinterStoragePlaceNode";
  id: string;
  number: number;
  winterStorageSection: INDIVIDUAL_CUSTOMER_profile_winterStorageLeases_edges_node_place_winterStorageSection;
}

export interface INDIVIDUAL_CUSTOMER_profile_winterStorageLeases_edges_node_section_properties_area_properties {
  __typename: "WinterStorageAreaProperties";
  name: string | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_winterStorageLeases_edges_node_section_properties_area {
  __typename: "WinterStorageAreaNode";
  id: string;
  properties: INDIVIDUAL_CUSTOMER_profile_winterStorageLeases_edges_node_section_properties_area_properties | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_winterStorageLeases_edges_node_section_properties {
  __typename: "WinterStorageSectionProperties";
  area: INDIVIDUAL_CUSTOMER_profile_winterStorageLeases_edges_node_section_properties_area;
}

export interface INDIVIDUAL_CUSTOMER_profile_winterStorageLeases_edges_node_section {
  __typename: "WinterStorageSectionNode";
  id: string;
  properties: INDIVIDUAL_CUSTOMER_profile_winterStorageLeases_edges_node_section_properties | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_winterStorageLeases_edges_node {
  __typename: "WinterStorageLeaseNode";
  id: string;
  status: LeaseStatus;
  startDate: any;
  endDate: any;
  place: INDIVIDUAL_CUSTOMER_profile_winterStorageLeases_edges_node_place | null;
  section: INDIVIDUAL_CUSTOMER_profile_winterStorageLeases_edges_node_section | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_winterStorageLeases_edges {
  __typename: "WinterStorageLeaseNodeEdge";
  node: INDIVIDUAL_CUSTOMER_profile_winterStorageLeases_edges_node | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_winterStorageLeases {
  __typename: "WinterStorageLeaseNodeConnection";
  edges: (INDIVIDUAL_CUSTOMER_profile_winterStorageLeases_edges | null)[];
}

export interface INDIVIDUAL_CUSTOMER_profile_orders_edges_node_orderLines_edges_node_product {
  __typename: "AdditionalProductNode";
  id: string;
  service: ProductServiceType;
  priceUnit: PriceUnits;
  priceValue: any;
}

export interface INDIVIDUAL_CUSTOMER_profile_orders_edges_node_orderLines_edges_node {
  __typename: "OrderLineNode";
  id: string;
  product: INDIVIDUAL_CUSTOMER_profile_orders_edges_node_orderLines_edges_node_product | null;
  price: any;
}

export interface INDIVIDUAL_CUSTOMER_profile_orders_edges_node_orderLines_edges {
  __typename: "OrderLineNodeEdge";
  node: INDIVIDUAL_CUSTOMER_profile_orders_edges_node_orderLines_edges_node | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_orders_edges_node_orderLines {
  __typename: "OrderLineNodeConnection";
  edges: (INDIVIDUAL_CUSTOMER_profile_orders_edges_node_orderLines_edges | null)[];
}

export interface INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_BerthLeaseNode_berth_pier_properties_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_BerthLeaseNode_berth_pier_properties_harbor {
  __typename: "HarborNode";
  id: string;
  properties: INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_BerthLeaseNode_berth_pier_properties_harbor_properties | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_BerthLeaseNode_berth_pier_properties {
  __typename: "PierProperties";
  identifier: string;
  harbor: INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_BerthLeaseNode_berth_pier_properties_harbor;
}

export interface INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_BerthLeaseNode_berth_pier {
  __typename: "PierNode";
  id: string;
  properties: INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_BerthLeaseNode_berth_pier_properties | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_BerthLeaseNode_berth {
  __typename: "BerthNode";
  id: string;
  number: string;
  mooringType: BerthMooringType;
  width: number;
  length: number;
  depth: number | null;
  pier: INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_BerthLeaseNode_berth_pier;
}

export interface INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_BerthLeaseNode {
  __typename: "BerthLeaseNode";
  id: string;
  startDate: any;
  endDate: any;
  status: LeaseStatus;
  berth: INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_BerthLeaseNode_berth;
}

export interface INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_WinterStorageLeaseNode_place_winterStorageSection_properties_area_properties {
  __typename: "WinterStorageAreaProperties";
  name: string | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_WinterStorageLeaseNode_place_winterStorageSection_properties_area {
  __typename: "WinterStorageAreaNode";
  id: string;
  properties: INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_WinterStorageLeaseNode_place_winterStorageSection_properties_area_properties | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_WinterStorageLeaseNode_place_winterStorageSection_properties {
  __typename: "WinterStorageSectionProperties";
  area: INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_WinterStorageLeaseNode_place_winterStorageSection_properties_area;
}

export interface INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_WinterStorageLeaseNode_place_winterStorageSection {
  __typename: "WinterStorageSectionNode";
  id: string;
  properties: INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_WinterStorageLeaseNode_place_winterStorageSection_properties | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_WinterStorageLeaseNode_place {
  __typename: "WinterStoragePlaceNode";
  id: string;
  winterStorageSection: INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_WinterStorageLeaseNode_place_winterStorageSection;
}

export interface INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_WinterStorageLeaseNode_section_properties_area_properties {
  __typename: "WinterStorageAreaProperties";
  name: string | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_WinterStorageLeaseNode_section_properties_area {
  __typename: "WinterStorageAreaNode";
  id: string;
  properties: INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_WinterStorageLeaseNode_section_properties_area_properties | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_WinterStorageLeaseNode_section_properties {
  __typename: "WinterStorageSectionProperties";
  area: INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_WinterStorageLeaseNode_section_properties_area;
}

export interface INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_WinterStorageLeaseNode_section {
  __typename: "WinterStorageSectionNode";
  id: string;
  properties: INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_WinterStorageLeaseNode_section_properties | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_WinterStorageLeaseNode {
  __typename: "WinterStorageLeaseNode";
  id: string;
  startDate: any;
  endDate: any;
  status: LeaseStatus;
  place: INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_WinterStorageLeaseNode_place | null;
  section: INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_WinterStorageLeaseNode_section | null;
}

export type INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease = INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_BerthLeaseNode | INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease_WinterStorageLeaseNode;

export interface INDIVIDUAL_CUSTOMER_profile_orders_edges_node {
  __typename: "OrderNode";
  id: string;
  orderNumber: string;
  orderType: OrderOrderType;
  dueDate: any | null;
  paidAt: any | null;
  totalPrice: any;
  price: any;
  status: OrderStatus;
  orderLines: INDIVIDUAL_CUSTOMER_profile_orders_edges_node_orderLines;
  lease: INDIVIDUAL_CUSTOMER_profile_orders_edges_node_lease | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_orders_edges {
  __typename: "OrderNodeEdge";
  node: INDIVIDUAL_CUSTOMER_profile_orders_edges_node | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_orders {
  __typename: "OrderNodeConnection";
  edges: (INDIVIDUAL_CUSTOMER_profile_orders_edges | null)[];
}

export interface INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_berthSwitch_berth_pier_properties_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_berthSwitch_berth_pier_properties_harbor {
  __typename: "HarborNode";
  id: string;
  properties: INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_berthSwitch_berth_pier_properties_harbor_properties | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_berthSwitch_berth_pier_properties {
  __typename: "PierProperties";
  identifier: string;
  harbor: INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_berthSwitch_berth_pier_properties_harbor;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_berthSwitch_berth_pier {
  __typename: "PierNode";
  id: string;
  properties: INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_berthSwitch_berth_pier_properties | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_berthSwitch_berth {
  __typename: "BerthNode";
  id: string;
  number: string;
  pier: INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_berthSwitch_berth_pier;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_berthSwitch_reason {
  __typename: "BerthSwitchReasonType";
  id: string;
  title: string | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_berthSwitch {
  __typename: "BerthSwitchType";
  id: string;
  berth: INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_berthSwitch_berth;
  reason: INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_berthSwitch_reason | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_switchOffers_edges_node {
  __typename: "BerthSwitchOfferNode";
  id: string;
  status: OfferStatus;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_switchOffers_edges {
  __typename: "BerthSwitchOfferNodeEdge";
  node: INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_switchOffers_edges_node | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_switchOffers {
  __typename: "BerthSwitchOfferNodeConnection";
  edges: (INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_switchOffers_edges | null)[];
}

export interface INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_lease_berth_pier_properties_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_lease_berth_pier_properties_harbor {
  __typename: "HarborNode";
  id: string;
  properties: INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_lease_berth_pier_properties_harbor_properties | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_lease_berth_pier_properties {
  __typename: "PierProperties";
  identifier: string;
  harbor: INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_lease_berth_pier_properties_harbor;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_lease_berth_pier {
  __typename: "PierNode";
  id: string;
  properties: INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_lease_berth_pier_properties | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_lease_berth {
  __typename: "BerthNode";
  id: string;
  number: string;
  pier: INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_lease_berth_pier;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_lease {
  __typename: "BerthLeaseNode";
  id: string;
  status: LeaseStatus;
  berth: INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_lease_berth;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_harborChoices_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_harborChoices_harbor {
  __typename: "HarborNode";
  id: string;
  properties: INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_harborChoices_harbor_properties | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_harborChoices {
  __typename: "HarborChoiceType";
  harbor: INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_harborChoices_harbor;
  priority: number;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node {
  __typename: "BerthApplicationNode";
  id: string;
  applicationCode: string;
  berthSwitch: INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_berthSwitch | null;
  switchOffers: INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_switchOffers;
  createdAt: any;
  status: ApplicationStatus;
  lease: INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_lease | null;
  boatType: string | null;
  boatRegistrationNumber: string;
  boatWidth: any;
  boatLength: any;
  boatDraught: any | null;
  boatWeight: any | null;
  boatName: string;
  boatModel: string;
  harborChoices: (INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node_harborChoices | null)[] | null;
  accessibilityRequired: boolean;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthApplications_edges {
  __typename: "BerthApplicationNodeEdge";
  node: INDIVIDUAL_CUSTOMER_profile_berthApplications_edges_node | null;
}

export interface INDIVIDUAL_CUSTOMER_profile_berthApplications {
  __typename: "BerthApplicationNodeConnection";
  edges: (INDIVIDUAL_CUSTOMER_profile_berthApplications_edges | null)[];
}

export interface INDIVIDUAL_CUSTOMER_profile {
  __typename: "ProfileNode";
  id: string;
  comment: string | null;
  firstName: string;
  invoicingType: InvoicingType | null;
  lastName: string;
  customerGroup: CustomerGroup | null;
  organization: INDIVIDUAL_CUSTOMER_profile_organization | null;
  primaryAddress: INDIVIDUAL_CUSTOMER_profile_primaryAddress | null;
  primaryEmail: INDIVIDUAL_CUSTOMER_profile_primaryEmail | null;
  primaryPhone: INDIVIDUAL_CUSTOMER_profile_primaryPhone | null;
  language: Language | null;
  boats: INDIVIDUAL_CUSTOMER_profile_boats | null;
  berthLeases: INDIVIDUAL_CUSTOMER_profile_berthLeases | null;
  winterStorageLeases: INDIVIDUAL_CUSTOMER_profile_winterStorageLeases | null;
  orders: INDIVIDUAL_CUSTOMER_profile_orders | null;
  berthApplications: INDIVIDUAL_CUSTOMER_profile_berthApplications | null;
}

export interface INDIVIDUAL_CUSTOMER_boatTypes {
  __typename: "BoatTypeType";
  id: string;
  name: string | null;
}

export interface INDIVIDUAL_CUSTOMER {
  profile: INDIVIDUAL_CUSTOMER_profile | null;
  boatTypes: INDIVIDUAL_CUSTOMER_boatTypes[] | null;
}

export interface INDIVIDUAL_CUSTOMERVariables {
  id: string;
}
