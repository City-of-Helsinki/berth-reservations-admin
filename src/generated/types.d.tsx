/* eslint-disable */
import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date;
  Decimal: any;
  Date: any;
  GenericScalar: any;
  UUID: any;
  JSONString: any;
  Geometry: any;
  Upload: any;
};

export type AddBoatCertificateInput = {
  file?: Maybe<Scalars['Upload']>;
  certificateType: BoatCertificateType;
  validUntil?: Maybe<Scalars['Date']>;
  checkedAt?: Maybe<Scalars['Date']>;
  checkedBy?: Maybe<Scalars['String']>;
};

export type AdditionalContactPersonNode = Node & {
  __typename?: 'AdditionalContactPersonNode';
  id: Scalars['ID'];
  youthProfile: YouthProfileType;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  email: Scalars['String'];
};

export type AdditionalContactPersonNodeConnection = {
  __typename?: 'AdditionalContactPersonNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<AdditionalContactPersonNodeEdge>>;
};

export type AdditionalContactPersonNodeEdge = {
  __typename?: 'AdditionalContactPersonNodeEdge';
  node?: Maybe<AdditionalContactPersonNode>;
  cursor: Scalars['String'];
};

export type AdditionalProductNode = Node & {
  __typename?: 'AdditionalProductNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  modifiedAt: Scalars['DateTime'];
  priceValue: Scalars['Decimal'];
  priceUnit: PriceUnits;
  service: ProductServiceType;
  period: PeriodType;
  taxPercentage: AdditionalProductTaxEnum;
  ordersLines: OrderLineNodeConnection;
  productType: AdditionalProductType;
};


export type AdditionalProductNodeOrdersLinesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type AdditionalProductNodeConnection = {
  __typename?: 'AdditionalProductNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<AdditionalProductNodeEdge>>;
  count: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type AdditionalProductNodeEdge = {
  __typename?: 'AdditionalProductNodeEdge';
  node?: Maybe<AdditionalProductNode>;
  cursor: Scalars['String'];
};

export type AdditionalProductServiceNode = Node & {
  __typename?: 'AdditionalProductServiceNode';
  id: Scalars['ID'];
  service: ProductServiceType;
  productType: AdditionalProductType;
};

export enum AdditionalProductTaxEnum {
  Tax_24_00 = 'TAX_24_00',
  Tax_10_00 = 'TAX_10_00'
}

export enum AdditionalProductType {
  FixedService = 'FIXED_SERVICE',
  OptionalService = 'OPTIONAL_SERVICE'
}

export type AddressNode = Node & {
  __typename?: 'AddressNode';
  primary: Scalars['Boolean'];
  id: Scalars['ID'];
  address: Scalars['String'];
  postalCode: Scalars['String'];
  city: Scalars['String'];
  countryCode: Scalars['String'];
  addressType?: Maybe<AddressType>;
};

export type AddressNodeConnection = {
  __typename?: 'AddressNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<AddressNodeEdge>>;
};

export type AddressNodeEdge = {
  __typename?: 'AddressNodeEdge';
  node?: Maybe<AddressNode>;
  cursor: Scalars['String'];
};

export enum AddressType {
  None = 'NONE',
  Work = 'WORK',
  Home = 'HOME',
  Other = 'OTHER'
}

export type AddServiceConnectionMutationInput = {
  serviceConnection: ServiceConnectionInput;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddServiceConnectionMutationPayload = {
  __typename?: 'AddServiceConnectionMutationPayload';
  serviceConnection?: Maybe<ServiceConnectionType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AllowedDataFieldNode = Node & {
  __typename?: 'AllowedDataFieldNode';
  id: Scalars['ID'];
  fieldName: Scalars['String'];
  order: Scalars['Int'];
  serviceSet: ServiceNodeConnection;
  label?: Maybe<Scalars['String']>;
};


export type AllowedDataFieldNodeServiceSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type AllowedDataFieldNodeConnection = {
  __typename?: 'AllowedDataFieldNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<AllowedDataFieldNodeEdge>>;
};

export type AllowedDataFieldNodeEdge = {
  __typename?: 'AllowedDataFieldNodeEdge';
  node?: Maybe<AllowedDataFieldNode>;
  cursor: Scalars['String'];
};

export enum ApplicationStatus {
  Pending = 'PENDING',
  OfferGenerated = 'OFFER_GENERATED',
  OfferSent = 'OFFER_SENT',
  NoSuitableBerths = 'NO_SUITABLE_BERTHS',
  NoSuitableBerthsNotified = 'NO_SUITABLE_BERTHS_NOTIFIED',
  Handled = 'HANDLED',
  Expired = 'EXPIRED'
}

export type ApproveYouthProfileMutationInput = {
  approvalToken: Scalars['String'];
  approvalData: YouthProfileFields;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ApproveYouthProfileMutationPayload = {
  __typename?: 'ApproveYouthProfileMutationPayload';
  youthProfile?: Maybe<YouthProfileType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AvailabilityLevelType = {
  __typename?: 'AvailabilityLevelType';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export enum BerthApplicationLanguage {
  Fi = 'FI',
  En = 'EN',
  Sv = 'SV'
}

export type BerthApplicationNode = Node & {
  __typename?: 'BerthApplicationNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  status: ApplicationStatus;
  language: BerthApplicationLanguage;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
  address: Scalars['String'];
  zipCode: Scalars['String'];
  municipality: Scalars['String'];
  companyName: Scalars['String'];
  businessId: Scalars['String'];
  boatType?: Maybe<Scalars['String']>;
  boatRegistrationNumber: Scalars['String'];
  boatName: Scalars['String'];
  boatModel: Scalars['String'];
  boatLength: Scalars['Float'];
  boatWidth: Scalars['Float'];
  acceptBoatingNewsletter: Scalars['Boolean'];
  acceptFitnessNews: Scalars['Boolean'];
  acceptLibraryNews: Scalars['Boolean'];
  acceptOtherCultureNews: Scalars['Boolean'];
  informationAccuracyConfirmed: Scalars['Boolean'];
  data?: Maybe<Scalars['JSONString']>;
  applicationCode: Scalars['String'];
  berthSwitch?: Maybe<BerthSwitchType>;
  boatDraught?: Maybe<Scalars['Float']>;
  boatWeight?: Maybe<Scalars['Float']>;
  accessibilityRequired: Scalars['Boolean'];
  boatPropulsion: Scalars['String'];
  boatHullMaterial: Scalars['String'];
  boatIntendedUse: Scalars['String'];
  rentingPeriod: Scalars['String'];
  rentFrom: Scalars['String'];
  rentTill: Scalars['String'];
  boatIsInspected: Scalars['Boolean'];
  boatIsInsured: Scalars['Boolean'];
  agreeToTerms: Scalars['Boolean'];
  customer?: Maybe<ProfileNode>;
  lease?: Maybe<BerthLeaseNode>;
  harborChoices?: Maybe<Array<Maybe<HarborChoiceType>>>;
};

export type BerthApplicationNodeConnection = {
  __typename?: 'BerthApplicationNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<BerthApplicationNodeEdge>>;
  count: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type BerthApplicationNodeEdge = {
  __typename?: 'BerthApplicationNodeEdge';
  node?: Maybe<BerthApplicationNode>;
  cursor: Scalars['String'];
};

export type BerthLeaseNode = Node & {
  __typename?: 'BerthLeaseNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  modifiedAt: Scalars['DateTime'];
  customer: ProfileNode;
  boat?: Maybe<BoatNode>;
  status: LeaseStatus;
  comment: Scalars['String'];
  berth: BerthNode;
  application?: Maybe<BerthApplicationNode>;
  startDate: Scalars['Date'];
  endDate: Scalars['Date'];
  renewAutomatically: Scalars['Boolean'];
  order?: Maybe<OrderNode>;
  isActive: Scalars['Boolean'];
};

export type BerthLeaseNodeConnection = {
  __typename?: 'BerthLeaseNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<BerthLeaseNodeEdge>>;
  count: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type BerthLeaseNodeEdge = {
  __typename?: 'BerthLeaseNodeEdge';
  node?: Maybe<BerthLeaseNode>;
  cursor: Scalars['String'];
};

export enum BerthMooringType {
  NoSternToMooring = 'NO_STERN_TO_MOORING',
  SingleSlipPlace = 'SINGLE_SLIP_PLACE',
  SideSlipPlace = 'SIDE_SLIP_PLACE',
  SternBuoyPlace = 'STERN_BUOY_PLACE',
  SternPoleMooring = 'STERN_POLE_MOORING',
  QuaysideMooring = 'QUAYSIDE_MOORING',
  DinghyPlace = 'DINGHY_PLACE',
  SeaBuoyMooring = 'SEA_BUOY_MOORING',
  TrawlerPlace = 'TRAWLER_PLACE'
}

export type BerthNode = Node & {
  __typename?: 'BerthNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  modifiedAt: Scalars['DateTime'];
  number: Scalars['Int'];
  isActive: Scalars['Boolean'];
  pier: PierNode;
  comment: Scalars['String'];
  leases?: Maybe<BerthLeaseNodeConnection>;
  isAccessible?: Maybe<Scalars['Boolean']>;
  isAvailable: Scalars['Boolean'];
  width: Scalars['Float'];
  length: Scalars['Float'];
  depth?: Maybe<Scalars['Float']>;
  mooringType: BerthMooringType;
};


export type BerthNodeLeasesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type BerthNodeConnection = {
  __typename?: 'BerthNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<BerthNodeEdge>>;
  count: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type BerthNodeEdge = {
  __typename?: 'BerthNodeEdge';
  node?: Maybe<BerthNode>;
  cursor: Scalars['String'];
};

export type BerthPriceGroupNode = Node & {
  __typename?: 'BerthPriceGroupNode';
  id: Scalars['ID'];
  name: Scalars['String'];
  products: BerthProductNodeConnection;
  defaultProduct?: Maybe<BerthProductNode>;
};


export type BerthPriceGroupNodeProductsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type BerthPriceGroupNodeConnection = {
  __typename?: 'BerthPriceGroupNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<BerthPriceGroupNodeEdge>>;
  count: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type BerthPriceGroupNodeEdge = {
  __typename?: 'BerthPriceGroupNodeEdge';
  node?: Maybe<BerthPriceGroupNode>;
  cursor: Scalars['String'];
};

export type BerthProductNode = Node & {
  __typename?: 'BerthProductNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  modifiedAt: Scalars['DateTime'];
  priceValue: Scalars['Decimal'];
  priceUnit: PriceUnits;
  taxPercentage: PlaceProductTaxEnum;
  priceGroup: BerthPriceGroupNode;
  harbor?: Maybe<HarborNode>;
};

export type BerthProductNodeConnection = {
  __typename?: 'BerthProductNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<BerthProductNodeEdge>>;
  count: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type BerthProductNodeEdge = {
  __typename?: 'BerthProductNodeEdge';
  node?: Maybe<BerthProductNode>;
  cursor: Scalars['String'];
};

export type BerthSwitchReasonType = {
  __typename?: 'BerthSwitchReasonType';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type BerthSwitchType = {
  __typename?: 'BerthSwitchType';
  id: Scalars['ID'];
  harbor: Scalars['String'];
  pier: Scalars['String'];
  berthNumber: Scalars['String'];
  reason?: Maybe<BerthSwitchReasonType>;
  harborName: Scalars['String'];
};

export type BoatCertificateNode = Node & {
  __typename?: 'BoatCertificateNode';
  id: Scalars['ID'];
  file?: Maybe<Scalars['String']>;
  certificateType: BoatCertificateType;
  validUntil?: Maybe<Scalars['Date']>;
  checkedAt: Scalars['Date'];
  checkedBy?: Maybe<Scalars['String']>;
};

export enum BoatCertificateType {
  Inspection = 'INSPECTION',
  Insurance = 'INSURANCE'
}

export type BoatNode = Node & {
  __typename?: 'BoatNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  modifiedAt: Scalars['DateTime'];
  owner: ProfileNode;
  boatType: BoatTypeType;
  registrationNumber: Scalars['String'];
  name: Scalars['String'];
  model: Scalars['String'];
  length: Scalars['Decimal'];
  width: Scalars['Decimal'];
  draught?: Maybe<Scalars['Decimal']>;
  weight?: Maybe<Scalars['Int']>;
  propulsion: Scalars['String'];
  hullMaterial: Scalars['String'];
  intendedUse: Scalars['String'];
  certificates: Array<Maybe<BoatCertificateNode>>;
  berthLeases: BerthLeaseNodeConnection;
  winterStorageLeases: WinterStorageLeaseNodeConnection;
};


export type BoatNodeBerthLeasesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type BoatNodeWinterStorageLeasesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type BoatNodeConnection = {
  __typename?: 'BoatNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<BoatNodeEdge>>;
  count: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type BoatNodeEdge = {
  __typename?: 'BoatNodeEdge';
  node?: Maybe<BoatNode>;
  cursor: Scalars['String'];
};

export type BoatTypeType = {
  __typename?: 'BoatTypeType';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type CancelMyYouthProfileMutationInput = {
  expiration?: Maybe<Scalars['Date']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CancelMyYouthProfileMutationPayload = {
  __typename?: 'CancelMyYouthProfileMutationPayload';
  youthProfile?: Maybe<YouthProfileType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CancelYouthProfileMutationInput = {
  serviceType: ServiceType;
  profileId: Scalars['ID'];
  expiration?: Maybe<Scalars['Date']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CancelYouthProfileMutationPayload = {
  __typename?: 'CancelYouthProfileMutationPayload';
  youthProfile?: Maybe<YouthProfileType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ClaimProfileMutationInput = {
  token: Scalars['UUID'];
  profile?: Maybe<ProfileInput>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ClaimProfileMutationPayload = {
  __typename?: 'ClaimProfileMutationPayload';
  profile?: Maybe<ProfileNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export enum ContactMethod {
  Email = 'EMAIL',
  Sms = 'SMS'
}

export type CreateAdditionalContactPersonInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  email: Scalars['String'];
};

export type CreateAdditionalProductMutationInput = {
  service: ProductServiceType;
  period: PeriodType;
  priceValue: Scalars['Decimal'];
  priceUnit?: Maybe<PriceUnits>;
  taxPercentage?: Maybe<AdditionalProductTaxEnum>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateAdditionalProductMutationPayload = {
  __typename?: 'CreateAdditionalProductMutationPayload';
  additionalProduct?: Maybe<AdditionalProductNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateAddressInput = {
  countryCode?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['Boolean']>;
  address: Scalars['String'];
  postalCode: Scalars['String'];
  city: Scalars['String'];
  addressType: AddressType;
};

export type CreateBerthLeaseMutationInput = {
  boatId?: Maybe<Scalars['ID']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  comment?: Maybe<Scalars['String']>;
  applicationId: Scalars['ID'];
  berthId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateBerthLeaseMutationPayload = {
  __typename?: 'CreateBerthLeaseMutationPayload';
  berthLease?: Maybe<BerthLeaseNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateBerthMutationInput = {
  number: Scalars['Int'];
  isActive?: Maybe<Scalars['Boolean']>;
  pierId: Scalars['ID'];
  comment?: Maybe<Scalars['String']>;
  isAccessible?: Maybe<Scalars['Boolean']>;
  width: Scalars['Float'];
  length: Scalars['Float'];
  depth?: Maybe<Scalars['Float']>;
  mooringType: BerthMooringType;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateBerthMutationPayload = {
  __typename?: 'CreateBerthMutationPayload';
  berth?: Maybe<BerthNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateBerthProductMutationInput = {
  priceValue: Scalars['Decimal'];
  priceGroupId: Scalars['ID'];
  harborId?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateBerthProductMutationPayload = {
  __typename?: 'CreateBerthProductMutationPayload';
  berthProduct?: Maybe<BerthProductNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateBerthServicesProfileMutationInput = {
  invoicingType?: Maybe<InvoicingType>;
  comment?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  organization?: Maybe<OrganizationInput>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateBerthServicesProfileMutationPayload = {
  __typename?: 'CreateBerthServicesProfileMutationPayload';
  profile?: Maybe<ProfileNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateBoatMutationInput = {
  boatTypeId: Scalars['ID'];
  registrationNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  length: Scalars['Decimal'];
  width: Scalars['Decimal'];
  draught?: Maybe<Scalars['Decimal']>;
  weight?: Maybe<Scalars['Int']>;
  propulsion?: Maybe<Scalars['String']>;
  hullMaterial?: Maybe<Scalars['String']>;
  intendedUse?: Maybe<Scalars['String']>;
  addBoatCertificates?: Maybe<Array<Maybe<AddBoatCertificateInput>>>;
  ownerId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateBoatMutationPayload = {
  __typename?: 'CreateBoatMutationPayload';
  boat?: Maybe<BoatNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateEmailInput = {
  primary?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  emailType: EmailType;
};

export type CreateHarborMutationInput = {
  servicemapId?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  wwwUrl?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['Geometry']>;
  imageLink?: Maybe<Scalars['String']>;
  municipalityId?: Maybe<Scalars['String']>;
  imageFile?: Maybe<Scalars['Upload']>;
  addMapFiles?: Maybe<Array<Maybe<Scalars['Upload']>>>;
  availabilityLevelId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateHarborMutationPayload = {
  __typename?: 'CreateHarborMutationPayload';
  harbor?: Maybe<HarborNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateMyProfileMutationInput = {
  profile: ProfileInput;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateMyProfileMutationPayload = {
  __typename?: 'CreateMyProfileMutationPayload';
  profile?: Maybe<ProfileNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateMyYouthProfileInput = {
  schoolName?: Maybe<Scalars['String']>;
  schoolClass?: Maybe<Scalars['String']>;
  languageAtHome?: Maybe<YouthLanguage>;
  approverFirstName?: Maybe<Scalars['String']>;
  approverLastName?: Maybe<Scalars['String']>;
  approverPhone?: Maybe<Scalars['String']>;
  approverEmail?: Maybe<Scalars['String']>;
  birthDate: Scalars['Date'];
  photoUsageApproved?: Maybe<Scalars['Boolean']>;
  addAdditionalContactPersons?: Maybe<Array<Maybe<CreateAdditionalContactPersonInput>>>;
  updateAdditionalContactPersons?: Maybe<Array<Maybe<UpdateAdditionalContactPersonInput>>>;
  removeAdditionalContactPersons?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type CreateMyYouthProfileMutationInput = {
  youthProfile: CreateMyYouthProfileInput;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateMyYouthProfileMutationPayload = {
  __typename?: 'CreateMyYouthProfileMutationPayload';
  youthProfile?: Maybe<YouthProfileType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateOrderLineMutationInput = {
  quantity?: Maybe<Scalars['Int']>;
  orderId: Scalars['ID'];
  productId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateOrderLineMutationPayload = {
  __typename?: 'CreateOrderLineMutationPayload';
  orderLine?: Maybe<OrderLineNode>;
  order?: Maybe<OrderNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateOrderMutationInput = {
  leaseId?: Maybe<Scalars['ID']>;
  status?: Maybe<OrderStatus>;
  comment?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['Date']>;
  customerId: Scalars['ID'];
  productId?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateOrderMutationPayload = {
  __typename?: 'CreateOrderMutationPayload';
  order?: Maybe<OrderNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreatePhoneInput = {
  primary?: Maybe<Scalars['Boolean']>;
  phone: Scalars['String'];
  phoneType: PhoneType;
};

export type CreatePierMutationInput = {
  identifier?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['Geometry']>;
  electricity?: Maybe<Scalars['Boolean']>;
  water?: Maybe<Scalars['Boolean']>;
  gate?: Maybe<Scalars['Boolean']>;
  harborId: Scalars['ID'];
  suitableBoatTypes?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mooring?: Maybe<Scalars['Boolean']>;
  wasteCollection?: Maybe<Scalars['Boolean']>;
  lighting?: Maybe<Scalars['Boolean']>;
  personalElectricity?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreatePierMutationPayload = {
  __typename?: 'CreatePierMutationPayload';
  pier?: Maybe<PierNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateProfileMutationInput = {
  serviceType: ServiceType;
  profile: ProfileInput;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateProfileMutationPayload = {
  __typename?: 'CreateProfileMutationPayload';
  profile?: Maybe<ProfileNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateWinterStorageLeaseMutationInput = {
  boatId?: Maybe<Scalars['ID']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  comment?: Maybe<Scalars['String']>;
  applicationId: Scalars['ID'];
  placeId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateWinterStorageLeaseMutationPayload = {
  __typename?: 'CreateWinterStorageLeaseMutationPayload';
  winterStorageLease?: Maybe<WinterStorageLeaseNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateWinterStorageProductMutationInput = {
  priceValue: Scalars['Decimal'];
  winterStorageAreaId?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateWinterStorageProductMutationPayload = {
  __typename?: 'CreateWinterStorageProductMutationPayload';
  winterStorageProduct?: Maybe<WinterStorageProductNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateYouthProfileMutationInput = {
  serviceType: ServiceType;
  profileId: Scalars['ID'];
  youthProfile: CreateMyYouthProfileInput;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateYouthProfileMutationPayload = {
  __typename?: 'CreateYouthProfileMutationPayload';
  youthProfile?: Maybe<YouthProfileType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export enum CustomerGroup {
  Private = 'PRIVATE',
  Company = 'COMPANY',
  Internal = 'INTERNAL',
  NonBillable = 'NON_BILLABLE',
  Other = 'OTHER'
}




export type DeleteAdditionalProductMutationInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteAdditionalProductMutationPayload = {
  __typename?: 'DeleteAdditionalProductMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteBerthApplicationMutationInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteBerthApplicationMutationPayload = {
  __typename?: 'DeleteBerthApplicationMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteBerthLeaseMutationInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteBerthLeaseMutationPayload = {
  __typename?: 'DeleteBerthLeaseMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteBerthMutationInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteBerthMutationPayload = {
  __typename?: 'DeleteBerthMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteBerthProductMutationInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteBerthProductMutationPayload = {
  __typename?: 'DeleteBerthProductMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteBerthServicesProfileMutationInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteBerthServicesProfileMutationPayload = {
  __typename?: 'DeleteBerthServicesProfileMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteBoatMutationInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteBoatMutationPayload = {
  __typename?: 'DeleteBoatMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteHarborMutationInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteHarborMutationPayload = {
  __typename?: 'DeleteHarborMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteMyProfileMutationInput = {
  authorizationCode: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteMyProfileMutationPayload = {
  __typename?: 'DeleteMyProfileMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteOrderLineMutationInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteOrderLineMutationPayload = {
  __typename?: 'DeleteOrderLineMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteOrderMutationInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteOrderMutationPayload = {
  __typename?: 'DeleteOrderMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeletePierMutationInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeletePierMutationPayload = {
  __typename?: 'DeletePierMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteWinterStorageApplicationMutationInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteWinterStorageApplicationMutationPayload = {
  __typename?: 'DeleteWinterStorageApplicationMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteWinterStorageLeaseMutationInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteWinterStorageLeaseMutationPayload = {
  __typename?: 'DeleteWinterStorageLeaseMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteWinterStorageProductMutationInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteWinterStorageProductMutationPayload = {
  __typename?: 'DeleteWinterStorageProductMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type EmailNode = Node & {
  __typename?: 'EmailNode';
  primary: Scalars['Boolean'];
  id: Scalars['ID'];
  email: Scalars['String'];
  emailType?: Maybe<EmailType>;
  verified: Scalars['Boolean'];
};

export type EmailNodeConnection = {
  __typename?: 'EmailNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<EmailNodeEdge>>;
};

export type EmailNodeEdge = {
  __typename?: 'EmailNodeEdge';
  node?: Maybe<EmailNode>;
  cursor: Scalars['String'];
};

export enum EmailType {
  None = 'NONE',
  Work = 'WORK',
  Personal = 'PERSONAL',
  Other = 'OTHER'
}



export type GeometryObjectType = {
  __typename?: 'GeometryObjectType';
  type?: Maybe<Scalars['String']>;
  coordinates?: Maybe<Scalars['GenericScalar']>;
};

export type HarborChoiceType = {
  __typename?: 'HarborChoiceType';
  harbor: Scalars['String'];
  priority: Scalars['Int'];
  harborName: Scalars['String'];
};

export type HarborMapType = {
  __typename?: 'HarborMapType';
  id: Scalars['UUID'];
  url: Scalars['String'];
};

export type HarborNode = Node & {
  __typename?: 'HarborNode';
  type?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  geometry?: Maybe<GeometryObjectType>;
  bbox?: Maybe<Scalars['GenericScalar']>;
  properties?: Maybe<HarborProperties>;
};

export type HarborNodeConnection = {
  __typename?: 'HarborNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<HarborNodeEdge>>;
  count: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type HarborNodeEdge = {
  __typename?: 'HarborNodeEdge';
  node?: Maybe<HarborNode>;
  cursor: Scalars['String'];
};

export type HarborProperties = {
  __typename?: 'HarborProperties';
  createdAt: Scalars['DateTime'];
  modifiedAt: Scalars['DateTime'];
  servicemapId?: Maybe<Scalars['String']>;
  zipCode: Scalars['String'];
  phone: Scalars['String'];
  email: Scalars['String'];
  wwwUrl: Scalars['String'];
  imageLink: Scalars['String'];
  municipality?: Maybe<Scalars['String']>;
  imageFile?: Maybe<Scalars['String']>;
  availabilityLevel?: Maybe<AvailabilityLevelType>;
  maps: Array<Maybe<HarborMapType>>;
  piers?: Maybe<PierNodeConnection>;
  products: BerthProductNodeConnection;
  name?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  maxWidth?: Maybe<Scalars['Float']>;
  maxLength?: Maybe<Scalars['Float']>;
  maxDepth?: Maybe<Scalars['Float']>;
  numberOfPlaces: Scalars['Int'];
  numberOfFreePlaces: Scalars['Int'];
  numberOfInactivePlaces: Scalars['Int'];
};


export type HarborPropertiesPiersArgs = {
  minBerthWidth?: Maybe<Scalars['Float']>;
  minBerthLength?: Maybe<Scalars['Float']>;
  forApplication?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  mooring?: Maybe<Scalars['Boolean']>;
  electricity?: Maybe<Scalars['Boolean']>;
  water?: Maybe<Scalars['Boolean']>;
  wasteCollection?: Maybe<Scalars['Boolean']>;
  gate?: Maybe<Scalars['Boolean']>;
  lighting?: Maybe<Scalars['Boolean']>;
  suitableBoatTypes?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type HarborPropertiesProductsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export enum InvoicingType {
  OnlinePayment = 'ONLINE_PAYMENT',
  DigitalInvoice = 'DIGITAL_INVOICE',
  PaperInvoice = 'PAPER_INVOICE'
}


export enum Language {
  Finnish = 'FINNISH',
  English = 'ENGLISH',
  Swedish = 'SWEDISH'
}

export enum LeaseStatus {
  Drafted = 'DRAFTED',
  Offered = 'OFFERED',
  Refused = 'REFUSED',
  Expired = 'EXPIRED',
  Paid = 'PAID'
}

export type LeaseUnion = BerthLeaseNode | WinterStorageLeaseNode;

export enum MembershipStatus {
  Active = 'ACTIVE',
  Pending = 'PENDING',
  Expired = 'EXPIRED',
  Renewing = 'RENEWING'
}

export type Mutation = {
  __typename?: 'Mutation';
  createYouthProfile?: Maybe<CreateYouthProfileMutationPayload>;
  createMyYouthProfile?: Maybe<CreateMyYouthProfileMutationPayload>;
  updateYouthProfile?: Maybe<UpdateYouthProfileMutationPayload>;
  updateMyYouthProfile?: Maybe<UpdateMyYouthProfileMutationPayload>;
  renewYouthProfile?: Maybe<RenewYouthProfileMutationPayload>;
  renewMyYouthProfile?: Maybe<RenewMyYouthProfileMutationPayload>;
  approveYouthProfile?: Maybe<ApproveYouthProfileMutationPayload>;
  cancelYouthProfile?: Maybe<CancelYouthProfileMutationPayload>;
  cancelMyYouthProfile?: Maybe<CancelMyYouthProfileMutationPayload>;
  updateMySubscription?: Maybe<UpdateMySubscriptionMutationPayload>;
  addServiceConnection?: Maybe<AddServiceConnectionMutationPayload>;
  createMyProfile?: Maybe<CreateMyProfileMutationPayload>;
  createProfile?: Maybe<CreateProfileMutationPayload>;
  updateMyProfile?: Maybe<UpdateMyProfileMutationPayload>;
  updateProfile?: Maybe<UpdateProfileMutationPayload>;
  deleteMyProfile?: Maybe<DeleteMyProfileMutationPayload>;
  claimProfile?: Maybe<ClaimProfileMutationPayload>;
  createBerthProduct?: Maybe<CreateBerthProductMutationPayload>;
  updateBerthProduct?: Maybe<UpdateBerthProductMutationPayload>;
  deleteBerthProduct?: Maybe<DeleteBerthProductMutationPayload>;
  createWinterStorageProduct?: Maybe<CreateWinterStorageProductMutationPayload>;
  updateWinterStorageProduct?: Maybe<UpdateWinterStorageProductMutationPayload>;
  deleteWinterStorageProduct?: Maybe<DeleteWinterStorageProductMutationPayload>;
  createAdditionalProduct?: Maybe<CreateAdditionalProductMutationPayload>;
  updateAdditionalProduct?: Maybe<UpdateAdditionalProductMutationPayload>;
  deleteAdditionalProduct?: Maybe<DeleteAdditionalProductMutationPayload>;
  createOrder?: Maybe<CreateOrderMutationPayload>;
  updateOrder?: Maybe<UpdateOrderMutationPayload>;
  deleteOrder?: Maybe<DeleteOrderMutationPayload>;
  createOrderLine?: Maybe<CreateOrderLineMutationPayload>;
  updateOrderLine?: Maybe<UpdateOrderLineMutationPayload>;
  deleteOrderLine?: Maybe<DeleteOrderLineMutationPayload>;
  createBerth?: Maybe<CreateBerthMutationPayload>;
  deleteBerth?: Maybe<DeleteBerthMutationPayload>;
  updateBerth?: Maybe<UpdateBerthMutationPayload>;
  createHarbor?: Maybe<CreateHarborMutationPayload>;
  deleteHarbor?: Maybe<DeleteHarborMutationPayload>;
  updateHarbor?: Maybe<UpdateHarborMutationPayload>;
  createPier?: Maybe<CreatePierMutationPayload>;
  deletePier?: Maybe<DeletePierMutationPayload>;
  updatePier?: Maybe<UpdatePierMutationPayload>;
  createBerthLease?: Maybe<CreateBerthLeaseMutationPayload>;
  updateBerthLease?: Maybe<UpdateBerthLeaseMutationPayload>;
  deleteBerthLease?: Maybe<DeleteBerthLeaseMutationPayload>;
  createWinterStorageLease?: Maybe<CreateWinterStorageLeaseMutationPayload>;
  updateWinterStorageLease?: Maybe<UpdateWinterStorageLeaseMutationPayload>;
  deleteWinterStorageLease?: Maybe<DeleteWinterStorageLeaseMutationPayload>;
  createBoat?: Maybe<CreateBoatMutationPayload>;
  updateBoat?: Maybe<UpdateBoatMutationPayload>;
  deleteBoat?: Maybe<DeleteBoatMutationPayload>;
  createBerthServicesProfile?: Maybe<CreateBerthServicesProfileMutationPayload>;
  updateBerthServicesProfile?: Maybe<UpdateBerthServicesProfileMutationPayload>;
  deleteBerthServicesProfile?: Maybe<DeleteBerthServicesProfileMutationPayload>;
  updateBerthApplication?: Maybe<UpdateBerthApplicationPayload>;
  deleteBerthApplication?: Maybe<DeleteBerthApplicationMutationPayload>;
  updateWinterStorageApplication?: Maybe<UpdateWinterStorageApplicationPayload>;
  deleteWinterStorageApplication?: Maybe<DeleteWinterStorageApplicationMutationPayload>;
};


export type MutationCreateYouthProfileArgs = {
  input: CreateYouthProfileMutationInput;
};


export type MutationCreateMyYouthProfileArgs = {
  input: CreateMyYouthProfileMutationInput;
};


export type MutationUpdateYouthProfileArgs = {
  input: UpdateYouthProfileMutationInput;
};


export type MutationUpdateMyYouthProfileArgs = {
  input: UpdateMyYouthProfileMutationInput;
};


export type MutationRenewYouthProfileArgs = {
  input: RenewYouthProfileMutationInput;
};


export type MutationRenewMyYouthProfileArgs = {
  input: RenewMyYouthProfileMutationInput;
};


export type MutationApproveYouthProfileArgs = {
  input: ApproveYouthProfileMutationInput;
};


export type MutationCancelYouthProfileArgs = {
  input: CancelYouthProfileMutationInput;
};


export type MutationCancelMyYouthProfileArgs = {
  input: CancelMyYouthProfileMutationInput;
};


export type MutationUpdateMySubscriptionArgs = {
  input: UpdateMySubscriptionMutationInput;
};


export type MutationAddServiceConnectionArgs = {
  input: AddServiceConnectionMutationInput;
};


export type MutationCreateMyProfileArgs = {
  input: CreateMyProfileMutationInput;
};


export type MutationCreateProfileArgs = {
  input: CreateProfileMutationInput;
};


export type MutationUpdateMyProfileArgs = {
  input: UpdateMyProfileMutationInput;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileMutationInput;
};


export type MutationDeleteMyProfileArgs = {
  input: DeleteMyProfileMutationInput;
};


export type MutationClaimProfileArgs = {
  input: ClaimProfileMutationInput;
};


export type MutationCreateBerthProductArgs = {
  input: CreateBerthProductMutationInput;
};


export type MutationUpdateBerthProductArgs = {
  input: UpdateBerthProductMutationInput;
};


export type MutationDeleteBerthProductArgs = {
  input: DeleteBerthProductMutationInput;
};


export type MutationCreateWinterStorageProductArgs = {
  input: CreateWinterStorageProductMutationInput;
};


export type MutationUpdateWinterStorageProductArgs = {
  input: UpdateWinterStorageProductMutationInput;
};


export type MutationDeleteWinterStorageProductArgs = {
  input: DeleteWinterStorageProductMutationInput;
};


export type MutationCreateAdditionalProductArgs = {
  input: CreateAdditionalProductMutationInput;
};


export type MutationUpdateAdditionalProductArgs = {
  input: UpdateAdditionalProductMutationInput;
};


export type MutationDeleteAdditionalProductArgs = {
  input: DeleteAdditionalProductMutationInput;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderMutationInput;
};


export type MutationUpdateOrderArgs = {
  input: UpdateOrderMutationInput;
};


export type MutationDeleteOrderArgs = {
  input: DeleteOrderMutationInput;
};


export type MutationCreateOrderLineArgs = {
  input: CreateOrderLineMutationInput;
};


export type MutationUpdateOrderLineArgs = {
  input: UpdateOrderLineMutationInput;
};


export type MutationDeleteOrderLineArgs = {
  input: DeleteOrderLineMutationInput;
};


export type MutationCreateBerthArgs = {
  input: CreateBerthMutationInput;
};


export type MutationDeleteBerthArgs = {
  input: DeleteBerthMutationInput;
};


export type MutationUpdateBerthArgs = {
  input: UpdateBerthMutationInput;
};


export type MutationCreateHarborArgs = {
  input: CreateHarborMutationInput;
};


export type MutationDeleteHarborArgs = {
  input: DeleteHarborMutationInput;
};


export type MutationUpdateHarborArgs = {
  input: UpdateHarborMutationInput;
};


export type MutationCreatePierArgs = {
  input: CreatePierMutationInput;
};


export type MutationDeletePierArgs = {
  input: DeletePierMutationInput;
};


export type MutationUpdatePierArgs = {
  input: UpdatePierMutationInput;
};


export type MutationCreateBerthLeaseArgs = {
  input: CreateBerthLeaseMutationInput;
};


export type MutationUpdateBerthLeaseArgs = {
  input: UpdateBerthLeaseMutationInput;
};


export type MutationDeleteBerthLeaseArgs = {
  input: DeleteBerthLeaseMutationInput;
};


export type MutationCreateWinterStorageLeaseArgs = {
  input: CreateWinterStorageLeaseMutationInput;
};


export type MutationUpdateWinterStorageLeaseArgs = {
  input: UpdateWinterStorageLeaseMutationInput;
};


export type MutationDeleteWinterStorageLeaseArgs = {
  input: DeleteWinterStorageLeaseMutationInput;
};


export type MutationCreateBoatArgs = {
  input: CreateBoatMutationInput;
};


export type MutationUpdateBoatArgs = {
  input: UpdateBoatMutationInput;
};


export type MutationDeleteBoatArgs = {
  input: DeleteBoatMutationInput;
};


export type MutationCreateBerthServicesProfileArgs = {
  input: CreateBerthServicesProfileMutationInput;
};


export type MutationUpdateBerthServicesProfileArgs = {
  input: UpdateBerthServicesProfileMutationInput;
};


export type MutationDeleteBerthServicesProfileArgs = {
  input: DeleteBerthServicesProfileMutationInput;
};


export type MutationUpdateBerthApplicationArgs = {
  input: UpdateBerthApplicationInput;
};


export type MutationDeleteBerthApplicationArgs = {
  input: DeleteBerthApplicationMutationInput;
};


export type MutationUpdateWinterStorageApplicationArgs = {
  input: UpdateWinterStorageApplicationInput;
};


export type MutationDeleteWinterStorageApplicationArgs = {
  input: DeleteWinterStorageApplicationMutationInput;
};

export type Node = {
  id: Scalars['ID'];
};

export enum NotificationTemplateLanguage {
  Fi = 'FI',
  En = 'EN',
  Sv = 'SV'
}

export type NotificationTemplateNode = Node & {
  __typename?: 'NotificationTemplateNode';
  id: Scalars['ID'];
  type: Scalars['String'];
  translations: Array<Maybe<NotificationTranslationType>>;
  preview?: Maybe<Scalars['String']>;
};

export type NotificationTemplateNodeConnection = {
  __typename?: 'NotificationTemplateNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<NotificationTemplateNodeEdge>>;
};

export type NotificationTemplateNodeEdge = {
  __typename?: 'NotificationTemplateNodeEdge';
  node?: Maybe<NotificationTemplateNode>;
  cursor: Scalars['String'];
};

export type NotificationTranslationType = {
  __typename?: 'NotificationTranslationType';
  languageCode: NotificationTemplateLanguage;
  subject?: Maybe<Scalars['String']>;
  bodyHtml?: Maybe<Scalars['String']>;
  bodyText?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
};

export type OrderLineNode = Node & {
  __typename?: 'OrderLineNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  modifiedAt: Scalars['DateTime'];
  product?: Maybe<AdditionalProductNode>;
  quantity: Scalars['Int'];
  price: Scalars['Decimal'];
  taxPercentage: Scalars['Decimal'];
  pretaxPrice: Scalars['Decimal'];
};

export type OrderLineNodeConnection = {
  __typename?: 'OrderLineNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<OrderLineNodeEdge>>;
  count: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type OrderLineNodeEdge = {
  __typename?: 'OrderLineNodeEdge';
  node?: Maybe<OrderLineNode>;
  cursor: Scalars['String'];
};

export type OrderLogEntryNode = Node & {
  __typename?: 'OrderLogEntryNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  modifiedAt: Scalars['DateTime'];
  status: OrderStatus;
  comment?: Maybe<Scalars['String']>;
};

export type OrderLogEntryNodeConnection = {
  __typename?: 'OrderLogEntryNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<OrderLogEntryNodeEdge>>;
  count: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type OrderLogEntryNodeEdge = {
  __typename?: 'OrderLogEntryNodeEdge';
  node?: Maybe<OrderLogEntryNode>;
  cursor: Scalars['String'];
};

export type OrderNode = Node & {
  __typename?: 'OrderNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  modifiedAt: Scalars['DateTime'];
  customer: ProfileNode;
  status: OrderStatus;
  comment?: Maybe<Scalars['String']>;
  price: Scalars['Decimal'];
  taxPercentage: Scalars['Decimal'];
  dueDate: Scalars['Date'];
  orderLines: OrderLineNodeConnection;
  logEntries: OrderLogEntryNodeConnection;
  product?: Maybe<ProductUnion>;
  lease?: Maybe<LeaseUnion>;
  pretaxPrice: Scalars['Decimal'];
  totalPrice: Scalars['Decimal'];
  totalPretaxPrice: Scalars['Decimal'];
  totalTaxPercentage: Scalars['Decimal'];
};


export type OrderNodeOrderLinesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type OrderNodeLogEntriesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type OrderNodeConnection = {
  __typename?: 'OrderNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<OrderNodeEdge>>;
  count: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type OrderNodeEdge = {
  __typename?: 'OrderNodeEdge';
  node?: Maybe<OrderNode>;
  cursor: Scalars['String'];
};

export enum OrderStatus {
  Waiting = 'WAITING',
  Rejected = 'REJECTED',
  Expired = 'EXPIRED',
  Paid = 'PAID'
}

export enum OrderTypeEnum {
  Berth = 'BERTH',
  WinterStorage = 'WINTER_STORAGE'
}

export type OrganizationInput = {
  organizationType: OrganizationType;
  businessId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
};

export type OrganizationNode = Node & {
  __typename?: 'OrganizationNode';
  businessId: Scalars['String'];
  name: Scalars['String'];
  address: Scalars['String'];
  postalCode: Scalars['String'];
  city: Scalars['String'];
  id: Scalars['ID'];
  customer: ProfileNode;
  organizationType: OrganizationType;
};

export enum OrganizationType {
  Company = 'COMPANY',
  Internal = 'INTERNAL',
  NonBillable = 'NON_BILLABLE',
  Other = 'OTHER'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
};

export enum PeriodType {
  Year = 'YEAR',
  Season = 'SEASON',
  Month = 'MONTH'
}

export type PhoneNode = Node & {
  __typename?: 'PhoneNode';
  primary: Scalars['Boolean'];
  id: Scalars['ID'];
  phone?: Maybe<Scalars['String']>;
  phoneType?: Maybe<PhoneType>;
};

export type PhoneNodeConnection = {
  __typename?: 'PhoneNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<PhoneNodeEdge>>;
};

export type PhoneNodeEdge = {
  __typename?: 'PhoneNodeEdge';
  node?: Maybe<PhoneNode>;
  cursor: Scalars['String'];
};

export enum PhoneType {
  None = 'NONE',
  Work = 'WORK',
  Home = 'HOME',
  Mobile = 'MOBILE',
  Other = 'OTHER'
}

export type PierNode = Node & {
  __typename?: 'PierNode';
  type?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  geometry?: Maybe<GeometryObjectType>;
  bbox?: Maybe<Scalars['GenericScalar']>;
  properties?: Maybe<PierProperties>;
};

export type PierNodeConnection = {
  __typename?: 'PierNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<PierNodeEdge>>;
  count: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type PierNodeEdge = {
  __typename?: 'PierNodeEdge';
  node?: Maybe<PierNode>;
  cursor: Scalars['String'];
};

export type PierProperties = {
  __typename?: 'PierProperties';
  createdAt: Scalars['DateTime'];
  modifiedAt: Scalars['DateTime'];
  identifier: Scalars['String'];
  electricity: Scalars['Boolean'];
  water: Scalars['Boolean'];
  gate: Scalars['Boolean'];
  harbor: HarborNode;
  suitableBoatTypes: Array<BoatTypeType>;
  mooring: Scalars['Boolean'];
  wasteCollection: Scalars['Boolean'];
  lighting: Scalars['Boolean'];
  personalElectricity: Scalars['Boolean'];
  berths: BerthNodeConnection;
  numberOfFreePlaces: Scalars['Int'];
  numberOfInactivePlaces: Scalars['Int'];
  numberOfPlaces: Scalars['Int'];
  maxWidth?: Maybe<Scalars['Float']>;
  maxLength?: Maybe<Scalars['Float']>;
  maxDepth?: Maybe<Scalars['Float']>;
};


export type PierPropertiesBerthsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  minWidth?: Maybe<Scalars['Float']>;
  minLength?: Maybe<Scalars['Float']>;
  isAvailable?: Maybe<Scalars['Boolean']>;
};

export enum PlaceProductTaxEnum {
  Tax_24_00 = 'TAX_24_00'
}

export enum PriceUnits {
  Amount = 'AMOUNT',
  Percentage = 'PERCENTAGE'
}

export enum ProductServiceType {
  Electricity = 'ELECTRICITY',
  Water = 'WATER',
  Gate = 'GATE',
  Mooring = 'MOORING',
  WasteCollection = 'WASTE_COLLECTION',
  Lighting = 'LIGHTING',
  SummerStorageForDockingEquipment = 'SUMMER_STORAGE_FOR_DOCKING_EQUIPMENT',
  SummerStorageForTrailers = 'SUMMER_STORAGE_FOR_TRAILERS',
  ParkingPermit = 'PARKING_PERMIT',
  DinghyPlace = 'DINGHY_PLACE'
}

export type ProductUnion = BerthProductNode | WinterStorageProductNode;

export type ProfileInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  contactMethod?: Maybe<ContactMethod>;
  addEmails?: Maybe<Array<Maybe<CreateEmailInput>>>;
  updateEmails?: Maybe<Array<Maybe<UpdateEmailInput>>>;
  removeEmails?: Maybe<Array<Maybe<Scalars['ID']>>>;
  addPhones?: Maybe<Array<Maybe<CreatePhoneInput>>>;
  updatePhones?: Maybe<Array<Maybe<UpdatePhoneInput>>>;
  removePhones?: Maybe<Array<Maybe<Scalars['ID']>>>;
  addAddresses?: Maybe<Array<Maybe<CreateAddressInput>>>;
  updateAddresses?: Maybe<Array<Maybe<UpdateAddressInput>>>;
  removeAddresses?: Maybe<Array<Maybe<Scalars['ID']>>>;
  subscriptions?: Maybe<Array<Maybe<SubscriptionInputType>>>;
  youthProfile?: Maybe<YouthProfileFields>;
  sensitivedata?: Maybe<SensitiveDataFields>;
};

export type ProfileNode = Node & {
  __typename?: 'ProfileNode';
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  nickname: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  id: Scalars['ID'];
  primaryEmail?: Maybe<EmailNode>;
  primaryPhone?: Maybe<PhoneNode>;
  primaryAddress?: Maybe<AddressNode>;
  emails?: Maybe<EmailNodeConnection>;
  phones?: Maybe<PhoneNodeConnection>;
  addresses?: Maybe<AddressNodeConnection>;
  sensitivedata?: Maybe<SensitiveDataNode>;
  contactMethod?: Maybe<ContactMethod>;
  serviceConnections?: Maybe<ServiceConnectionTypeConnection>;
  youthProfile?: Maybe<YouthProfileType>;
  subscriptions?: Maybe<SubscriptionNodeConnection>;
  invoicingType?: Maybe<InvoicingType>;
  comment?: Maybe<Scalars['String']>;
  organization?: Maybe<OrganizationNode>;
  boats?: Maybe<BoatNodeConnection>;
  berthApplications?: Maybe<BerthApplicationNodeConnection>;
  winterStorageApplications?: Maybe<WinterStorageApplicationNodeConnection>;
  berthLeases?: Maybe<BerthLeaseNodeConnection>;
  winterStorageLeases?: Maybe<WinterStorageLeaseNodeConnection>;
  orders?: Maybe<OrderNodeConnection>;
  customerGroup?: Maybe<CustomerGroup>;
};


export type ProfileNodeEmailsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ProfileNodePhonesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ProfileNodeAddressesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ProfileNodeServiceConnectionsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ProfileNodeSubscriptionsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ProfileNodeBoatsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ProfileNodeBerthApplicationsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type ProfileNodeWinterStorageApplicationsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  noCustomer?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type ProfileNodeBerthLeasesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ProfileNodeWinterStorageLeasesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ProfileNodeOrdersArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ProfileNodeConnection = {
  __typename?: 'ProfileNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<ProfileNodeEdge>>;
  count: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type ProfileNodeEdge = {
  __typename?: 'ProfileNodeEdge';
  node?: Maybe<ProfileNode>;
  cursor: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  subscriptionTypeCategories?: Maybe<SubscriptionTypeCategoryNodeConnection>;
  youthProfile?: Maybe<YouthProfileType>;
  youthProfileByApprovalToken?: Maybe<YouthProfileType>;
  profile?: Maybe<ProfileNode>;
  myProfile?: Maybe<ProfileNode>;
  downloadMyProfile?: Maybe<Scalars['JSONString']>;
  profiles?: Maybe<ProfileNodeConnection>;
  claimableProfile?: Maybe<ProfileNode>;
  notificationTemplates?: Maybe<NotificationTemplateNodeConnection>;
  berthPriceGroups?: Maybe<BerthPriceGroupNodeConnection>;
  berthPriceGroup?: Maybe<BerthPriceGroupNode>;
  berthProducts?: Maybe<BerthProductNodeConnection>;
  berthProduct?: Maybe<BerthProductNode>;
  winterStorageProducts?: Maybe<WinterStorageProductNodeConnection>;
  winterStorageProduct?: Maybe<WinterStorageProductNode>;
  additionalProducts?: Maybe<AdditionalProductNodeConnection>;
  additionalProduct?: Maybe<AdditionalProductNode>;
  additionalProductServices?: Maybe<Array<Maybe<AdditionalProductServiceNode>>>;
  order?: Maybe<OrderNode>;
  orders?: Maybe<OrderNodeConnection>;
  availabilityLevels?: Maybe<Array<AvailabilityLevelType>>;
  boatTypes?: Maybe<Array<BoatTypeType>>;
  berth?: Maybe<BerthNode>;
  berths?: Maybe<BerthNodeConnection>;
  pier?: Maybe<PierNode>;
  piers?: Maybe<PierNodeConnection>;
  harbor?: Maybe<HarborNode>;
  harborByServicemapId?: Maybe<HarborNode>;
  harbors?: Maybe<HarborNodeConnection>;
  winterStoragePlace?: Maybe<WinterStoragePlaceNode>;
  winterStoragePlaces?: Maybe<WinterStoragePlaceNodeConnection>;
  winterStorageSection?: Maybe<WinterStorageSectionNode>;
  winterStorageSections?: Maybe<WinterStorageSectionNodeConnection>;
  winterStorageArea?: Maybe<WinterStorageAreaNode>;
  winterStorageAreas?: Maybe<WinterStorageAreaNodeConnection>;
  berthLease?: Maybe<BerthLeaseNode>;
  berthLeases?: Maybe<BerthLeaseNodeConnection>;
  winterStorageLease?: Maybe<WinterStorageLeaseNode>;
  winterStorageLeases?: Maybe<WinterStorageLeaseNodeConnection>;
  berthProfile?: Maybe<ProfileNode>;
  berthProfiles?: Maybe<ProfileNodeConnection>;
  berthApplication?: Maybe<BerthApplicationNode>;
  berthApplications?: Maybe<BerthApplicationNodeConnection>;
  winterStorageApplication?: Maybe<WinterStorageApplicationNode>;
  winterStorageApplications?: Maybe<WinterStorageApplicationNodeConnection>;
};


export type QuerySubscriptionTypeCategoriesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryYouthProfileArgs = {
  profileId?: Maybe<Scalars['ID']>;
};


export type QueryYouthProfileByApprovalTokenArgs = {
  token?: Maybe<Scalars['String']>;
};


export type QueryProfileArgs = {
  id: Scalars['ID'];
  serviceType: ServiceType;
};


export type QueryDownloadMyProfileArgs = {
  authorizationCode: Scalars['String'];
};


export type QueryProfilesArgs = {
  serviceType: ServiceType;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  emails_Email?: Maybe<Scalars['String']>;
  emails_EmailType?: Maybe<Scalars['String']>;
  emails_Primary?: Maybe<Scalars['Boolean']>;
  emails_Verified?: Maybe<Scalars['Boolean']>;
  phones_Phone?: Maybe<Scalars['String']>;
  phones_PhoneType?: Maybe<Scalars['String']>;
  phones_Primary?: Maybe<Scalars['Boolean']>;
  addresses_Address?: Maybe<Scalars['String']>;
  addresses_PostalCode?: Maybe<Scalars['String']>;
  addresses_City?: Maybe<Scalars['String']>;
  addresses_CountryCode?: Maybe<Scalars['String']>;
  addresses_AddressType?: Maybe<Scalars['String']>;
  addresses_Primary?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  enabledSubscriptions?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryClaimableProfileArgs = {
  token: Scalars['UUID'];
};


export type QueryNotificationTemplatesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryBerthPriceGroupsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryBerthPriceGroupArgs = {
  id: Scalars['ID'];
};


export type QueryBerthProductsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryBerthProductArgs = {
  id: Scalars['ID'];
};


export type QueryWinterStorageProductsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryWinterStorageProductArgs = {
  id: Scalars['ID'];
};


export type QueryAdditionalProductsArgs = {
  productType?: Maybe<AdditionalProductType>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAdditionalProductArgs = {
  id: Scalars['ID'];
};


export type QueryAdditionalProductServicesArgs = {
  productType?: Maybe<AdditionalProductType>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrdersArgs = {
  orderType?: Maybe<OrderTypeEnum>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryBerthArgs = {
  id: Scalars['ID'];
};


export type QueryBerthsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  minWidth?: Maybe<Scalars['Float']>;
  minLength?: Maybe<Scalars['Float']>;
  isAvailable?: Maybe<Scalars['Boolean']>;
};


export type QueryPierArgs = {
  id: Scalars['ID'];
};


export type QueryPiersArgs = {
  minBerthWidth?: Maybe<Scalars['Float']>;
  minBerthLength?: Maybe<Scalars['Float']>;
  forApplication?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  mooring?: Maybe<Scalars['Boolean']>;
  electricity?: Maybe<Scalars['Boolean']>;
  water?: Maybe<Scalars['Boolean']>;
  wasteCollection?: Maybe<Scalars['Boolean']>;
  gate?: Maybe<Scalars['Boolean']>;
  lighting?: Maybe<Scalars['Boolean']>;
  suitableBoatTypes?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QueryHarborArgs = {
  id: Scalars['ID'];
};


export type QueryHarborByServicemapIdArgs = {
  servicemapId: Scalars['String'];
};


export type QueryHarborsArgs = {
  servicemapIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  piers_Mooring?: Maybe<Scalars['Boolean']>;
  piers_Electricity?: Maybe<Scalars['Boolean']>;
  piers_Water?: Maybe<Scalars['Boolean']>;
  piers_WasteCollection?: Maybe<Scalars['Boolean']>;
  piers_Gate?: Maybe<Scalars['Boolean']>;
  piers_Lighting?: Maybe<Scalars['Boolean']>;
  piers_SuitableBoatTypes?: Maybe<Array<Maybe<Scalars['ID']>>>;
  maxWidth?: Maybe<Scalars['Float']>;
  maxLength?: Maybe<Scalars['Float']>;
};


export type QueryWinterStoragePlaceArgs = {
  id: Scalars['ID'];
};


export type QueryWinterStoragePlacesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryWinterStorageSectionArgs = {
  id: Scalars['ID'];
};


export type QueryWinterStorageSectionsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  repairArea?: Maybe<Scalars['Boolean']>;
  electricity?: Maybe<Scalars['Boolean']>;
  water?: Maybe<Scalars['Boolean']>;
  summerStorageForDockingEquipment?: Maybe<Scalars['Boolean']>;
  summerStorageForTrailers?: Maybe<Scalars['Boolean']>;
  summerStorageForBoats?: Maybe<Scalars['Boolean']>;
};


export type QueryWinterStorageAreaArgs = {
  id: Scalars['ID'];
};


export type QueryWinterStorageAreasArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sections_RepairArea?: Maybe<Scalars['Boolean']>;
  sections_Electricity?: Maybe<Scalars['Boolean']>;
  sections_Water?: Maybe<Scalars['Boolean']>;
  sections_SummerStorageForDockingEquipment?: Maybe<Scalars['Boolean']>;
  sections_SummerStorageForTrailers?: Maybe<Scalars['Boolean']>;
  sections_SummerStorageForBoats?: Maybe<Scalars['Boolean']>;
  maxLengthOfSectionSpaces?: Maybe<Scalars['Float']>;
  maxWidth?: Maybe<Scalars['Float']>;
  maxLength?: Maybe<Scalars['Float']>;
};


export type QueryBerthLeaseArgs = {
  id: Scalars['ID'];
};


export type QueryBerthLeasesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryWinterStorageLeaseArgs = {
  id: Scalars['ID'];
};


export type QueryWinterStorageLeasesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryBerthProfileArgs = {
  id: Scalars['ID'];
};


export type QueryBerthProfilesArgs = {
  invoicingTypes?: Maybe<Array<Maybe<InvoicingType>>>;
  customerGroups?: Maybe<Array<Maybe<CustomerGroup>>>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
};


export type QueryBerthApplicationArgs = {
  id: Scalars['ID'];
};


export type QueryBerthApplicationsArgs = {
  statuses?: Maybe<Array<Maybe<ApplicationStatus>>>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  switchApplications?: Maybe<Scalars['Boolean']>;
  noCustomer?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryWinterStorageApplicationArgs = {
  id: Scalars['ID'];
};


export type QueryWinterStorageApplicationsArgs = {
  statuses?: Maybe<Array<Maybe<ApplicationStatus>>>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  noCustomer?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<Scalars['String']>;
};

export type RenewMyYouthProfileMutationInput = {
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RenewMyYouthProfileMutationPayload = {
  __typename?: 'RenewMyYouthProfileMutationPayload';
  youthProfile?: Maybe<YouthProfileType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RenewYouthProfileMutationInput = {
  serviceType: ServiceType;
  profileId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RenewYouthProfileMutationPayload = {
  __typename?: 'RenewYouthProfileMutationPayload';
  youthProfile?: Maybe<YouthProfileType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type SensitiveDataFields = {
  ssn?: Maybe<Scalars['String']>;
};

export type SensitiveDataNode = Node & {
  __typename?: 'SensitiveDataNode';
  id: Scalars['ID'];
  ssn: Scalars['String'];
};

export type ServiceConnectionInput = {
  service: ServiceInput;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type ServiceConnectionType = Node & {
  __typename?: 'ServiceConnectionType';
  service: ServiceNode;
  createdAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
};

export type ServiceConnectionTypeConnection = {
  __typename?: 'ServiceConnectionTypeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<ServiceConnectionTypeEdge>>;
};

export type ServiceConnectionTypeEdge = {
  __typename?: 'ServiceConnectionTypeEdge';
  node?: Maybe<ServiceConnectionType>;
  cursor: Scalars['String'];
};

export type ServiceInput = {
  type?: Maybe<ServiceType>;
};

export type ServiceNode = Node & {
  __typename?: 'ServiceNode';
  id: Scalars['ID'];
  serviceType: ServiceServiceType;
  allowedDataFields: AllowedDataFieldNodeConnection;
  createdAt: Scalars['DateTime'];
  gdprUrl: Scalars['String'];
  gdprQueryScope: Scalars['String'];
  gdprDeleteScope: Scalars['String'];
  serviceconnectionSet: ServiceConnectionTypeConnection;
  type?: Maybe<ServiceType>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};


export type ServiceNodeAllowedDataFieldsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ServiceNodeServiceconnectionSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ServiceNodeConnection = {
  __typename?: 'ServiceNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<ServiceNodeEdge>>;
};

export type ServiceNodeEdge = {
  __typename?: 'ServiceNodeEdge';
  node?: Maybe<ServiceNode>;
  cursor: Scalars['String'];
};

export enum ServiceServiceType {
  HelsinkiMyData = 'HELSINKI_MY_DATA',
  Berth = 'BERTH',
  YouthMembership = 'YOUTH_MEMBERSHIP',
  GodchildrenOfCulture = 'GODCHILDREN_OF_CULTURE'
}

export enum ServiceType {
  HkiMyData = 'HKI_MY_DATA',
  Berth = 'BERTH',
  YouthMembership = 'YOUTH_MEMBERSHIP',
  GodchildrenOfCulture = 'GODCHILDREN_OF_CULTURE'
}

export type SubscriptionInputType = {
  subscriptionTypeId: Scalars['ID'];
  enabled: Scalars['Boolean'];
};

export type SubscriptionNode = Node & {
  __typename?: 'SubscriptionNode';
  id: Scalars['ID'];
  profile: ProfileNode;
  subscriptionType: SubscriptionTypeNode;
  createdAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
};

export type SubscriptionNodeConnection = {
  __typename?: 'SubscriptionNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<SubscriptionNodeEdge>>;
};

export type SubscriptionNodeEdge = {
  __typename?: 'SubscriptionNodeEdge';
  node?: Maybe<SubscriptionNode>;
  cursor: Scalars['String'];
};

export type SubscriptionTypeCategoryNode = Node & {
  __typename?: 'SubscriptionTypeCategoryNode';
  id: Scalars['ID'];
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  order: Scalars['Int'];
  subscriptionTypes: SubscriptionTypeNodeConnection;
  label?: Maybe<Scalars['String']>;
};


export type SubscriptionTypeCategoryNodeSubscriptionTypesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type SubscriptionTypeCategoryNodeConnection = {
  __typename?: 'SubscriptionTypeCategoryNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<SubscriptionTypeCategoryNodeEdge>>;
};

export type SubscriptionTypeCategoryNodeEdge = {
  __typename?: 'SubscriptionTypeCategoryNodeEdge';
  node?: Maybe<SubscriptionTypeCategoryNode>;
  cursor: Scalars['String'];
};

export type SubscriptionTypeNode = Node & {
  __typename?: 'SubscriptionTypeNode';
  id: Scalars['ID'];
  subscriptionTypeCategory: SubscriptionTypeCategoryNode;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  order: Scalars['Int'];
  label?: Maybe<Scalars['String']>;
};

export type SubscriptionTypeNodeConnection = {
  __typename?: 'SubscriptionTypeNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<SubscriptionTypeNodeEdge>>;
};

export type SubscriptionTypeNodeEdge = {
  __typename?: 'SubscriptionTypeNodeEdge';
  node?: Maybe<SubscriptionTypeNode>;
  cursor: Scalars['String'];
};

export type UpdateAdditionalContactPersonInput = {
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type UpdateAdditionalProductMutationInput = {
  service?: Maybe<ProductServiceType>;
  period?: Maybe<PeriodType>;
  priceValue?: Maybe<Scalars['Decimal']>;
  priceUnit?: Maybe<PriceUnits>;
  taxPercentage?: Maybe<AdditionalProductTaxEnum>;
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateAdditionalProductMutationPayload = {
  __typename?: 'UpdateAdditionalProductMutationPayload';
  additionalProduct?: Maybe<AdditionalProductNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateAddressInput = {
  countryCode?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  address?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  addressType?: Maybe<AddressType>;
};

export type UpdateBerthApplicationInput = {
  customerId: Scalars['ID'];
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateBerthApplicationPayload = {
  __typename?: 'UpdateBerthApplicationPayload';
  berthApplication?: Maybe<BerthApplicationNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateBerthLeaseMutationInput = {
  boatId?: Maybe<Scalars['ID']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  comment?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  applicationId?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateBerthLeaseMutationPayload = {
  __typename?: 'UpdateBerthLeaseMutationPayload';
  berthLease?: Maybe<BerthLeaseNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateBerthMutationInput = {
  number?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  pierId?: Maybe<Scalars['ID']>;
  comment?: Maybe<Scalars['String']>;
  isAccessible?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  depth?: Maybe<Scalars['Float']>;
  mooringType?: Maybe<BerthMooringType>;
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateBerthMutationPayload = {
  __typename?: 'UpdateBerthMutationPayload';
  berth?: Maybe<BerthNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateBerthProductMutationInput = {
  id: Scalars['ID'];
  priceValue?: Maybe<Scalars['Decimal']>;
  priceGroupId?: Maybe<Scalars['ID']>;
  harborId?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateBerthProductMutationPayload = {
  __typename?: 'UpdateBerthProductMutationPayload';
  berthProduct?: Maybe<BerthProductNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateBerthServicesProfileMutationInput = {
  invoicingType?: Maybe<InvoicingType>;
  comment?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  organization?: Maybe<OrganizationInput>;
  deleteOrganization?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateBerthServicesProfileMutationPayload = {
  __typename?: 'UpdateBerthServicesProfileMutationPayload';
  profile?: Maybe<ProfileNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateBoatCertificateInput = {
  file?: Maybe<Scalars['Upload']>;
  certificateType?: Maybe<BoatCertificateType>;
  validUntil?: Maybe<Scalars['Date']>;
  checkedAt?: Maybe<Scalars['Date']>;
  checkedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type UpdateBoatMutationInput = {
  boatTypeId?: Maybe<Scalars['ID']>;
  registrationNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Decimal']>;
  width?: Maybe<Scalars['Decimal']>;
  draught?: Maybe<Scalars['Decimal']>;
  weight?: Maybe<Scalars['Int']>;
  propulsion?: Maybe<Scalars['String']>;
  hullMaterial?: Maybe<Scalars['String']>;
  intendedUse?: Maybe<Scalars['String']>;
  addBoatCertificates?: Maybe<Array<Maybe<AddBoatCertificateInput>>>;
  id: Scalars['ID'];
  updateBoatCertificates?: Maybe<Array<Maybe<UpdateBoatCertificateInput>>>;
  removeBoatCertificates?: Maybe<Array<Maybe<Scalars['ID']>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateBoatMutationPayload = {
  __typename?: 'UpdateBoatMutationPayload';
  boat?: Maybe<BoatNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEmailInput = {
  primary?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  emailType?: Maybe<EmailType>;
};

export type UpdateHarborMutationInput = {
  servicemapId?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  wwwUrl?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['Geometry']>;
  imageLink?: Maybe<Scalars['String']>;
  municipalityId?: Maybe<Scalars['String']>;
  imageFile?: Maybe<Scalars['Upload']>;
  addMapFiles?: Maybe<Array<Maybe<Scalars['Upload']>>>;
  availabilityLevelId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  removeMapFiles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateHarborMutationPayload = {
  __typename?: 'UpdateHarborMutationPayload';
  harbor?: Maybe<HarborNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateMyProfileMutationInput = {
  profile: ProfileInput;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateMyProfileMutationPayload = {
  __typename?: 'UpdateMyProfileMutationPayload';
  profile?: Maybe<ProfileNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateMySubscriptionMutationInput = {
  subscription: SubscriptionInputType;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateMySubscriptionMutationPayload = {
  __typename?: 'UpdateMySubscriptionMutationPayload';
  subscription?: Maybe<SubscriptionNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateMyYouthProfileMutationInput = {
  youthProfile: UpdateYouthProfileInput;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateMyYouthProfileMutationPayload = {
  __typename?: 'UpdateMyYouthProfileMutationPayload';
  youthProfile?: Maybe<YouthProfileType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateOrderLineMutationInput = {
  quantity?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateOrderLineMutationPayload = {
  __typename?: 'UpdateOrderLineMutationPayload';
  orderLine?: Maybe<OrderLineNode>;
  order?: Maybe<OrderNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateOrderMutationInput = {
  leaseId?: Maybe<Scalars['ID']>;
  status?: Maybe<OrderStatus>;
  comment?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateOrderMutationPayload = {
  __typename?: 'UpdateOrderMutationPayload';
  order?: Maybe<OrderNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdatePhoneInput = {
  primary?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  phone?: Maybe<Scalars['String']>;
  phoneType?: Maybe<PhoneType>;
};

export type UpdatePierMutationInput = {
  identifier?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['Geometry']>;
  electricity?: Maybe<Scalars['Boolean']>;
  water?: Maybe<Scalars['Boolean']>;
  gate?: Maybe<Scalars['Boolean']>;
  harborId?: Maybe<Scalars['ID']>;
  suitableBoatTypes?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mooring?: Maybe<Scalars['Boolean']>;
  wasteCollection?: Maybe<Scalars['Boolean']>;
  lighting?: Maybe<Scalars['Boolean']>;
  personalElectricity?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdatePierMutationPayload = {
  __typename?: 'UpdatePierMutationPayload';
  pier?: Maybe<PierNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateProfileInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  contactMethod?: Maybe<ContactMethod>;
  addEmails?: Maybe<Array<Maybe<CreateEmailInput>>>;
  updateEmails?: Maybe<Array<Maybe<UpdateEmailInput>>>;
  removeEmails?: Maybe<Array<Maybe<Scalars['ID']>>>;
  addPhones?: Maybe<Array<Maybe<CreatePhoneInput>>>;
  updatePhones?: Maybe<Array<Maybe<UpdatePhoneInput>>>;
  removePhones?: Maybe<Array<Maybe<Scalars['ID']>>>;
  addAddresses?: Maybe<Array<Maybe<CreateAddressInput>>>;
  updateAddresses?: Maybe<Array<Maybe<UpdateAddressInput>>>;
  removeAddresses?: Maybe<Array<Maybe<Scalars['ID']>>>;
  subscriptions?: Maybe<Array<Maybe<SubscriptionInputType>>>;
  youthProfile?: Maybe<YouthProfileFields>;
  sensitivedata?: Maybe<SensitiveDataFields>;
  id: Scalars['ID'];
};

export type UpdateProfileMutationInput = {
  serviceType: ServiceType;
  profile: UpdateProfileInput;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateProfileMutationPayload = {
  __typename?: 'UpdateProfileMutationPayload';
  profile?: Maybe<ProfileNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateWinterStorageApplicationInput = {
  customerId: Scalars['ID'];
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateWinterStorageApplicationPayload = {
  __typename?: 'UpdateWinterStorageApplicationPayload';
  winterStorageApplication?: Maybe<WinterStorageApplicationNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateWinterStorageLeaseMutationInput = {
  boatId?: Maybe<Scalars['ID']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  comment?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  applicationId?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateWinterStorageLeaseMutationPayload = {
  __typename?: 'UpdateWinterStorageLeaseMutationPayload';
  winterStorageLease?: Maybe<WinterStorageLeaseNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateWinterStorageProductMutationInput = {
  id: Scalars['ID'];
  priceValue?: Maybe<Scalars['Decimal']>;
  winterStorageAreaId?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateWinterStorageProductMutationPayload = {
  __typename?: 'UpdateWinterStorageProductMutationPayload';
  winterStorageProduct?: Maybe<WinterStorageProductNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateYouthProfileInput = {
  schoolName?: Maybe<Scalars['String']>;
  schoolClass?: Maybe<Scalars['String']>;
  languageAtHome?: Maybe<YouthLanguage>;
  approverFirstName?: Maybe<Scalars['String']>;
  approverLastName?: Maybe<Scalars['String']>;
  approverPhone?: Maybe<Scalars['String']>;
  approverEmail?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Date']>;
  photoUsageApproved?: Maybe<Scalars['Boolean']>;
  addAdditionalContactPersons?: Maybe<Array<Maybe<CreateAdditionalContactPersonInput>>>;
  updateAdditionalContactPersons?: Maybe<Array<Maybe<UpdateAdditionalContactPersonInput>>>;
  removeAdditionalContactPersons?: Maybe<Array<Maybe<Scalars['ID']>>>;
  resendRequestNotification?: Maybe<Scalars['Boolean']>;
};

export type UpdateYouthProfileMutationInput = {
  serviceType: ServiceType;
  profileId: Scalars['ID'];
  youthProfile: UpdateYouthProfileInput;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateYouthProfileMutationPayload = {
  __typename?: 'UpdateYouthProfileMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};



export type WinterStorageApplicationNode = Node & {
  __typename?: 'WinterStorageApplicationNode';
  createdAt: Scalars['DateTime'];
  status: ApplicationStatus;
  language: BerthApplicationLanguage;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
  address: Scalars['String'];
  zipCode: Scalars['String'];
  municipality: Scalars['String'];
  companyName: Scalars['String'];
  businessId: Scalars['String'];
  boatType?: Maybe<Scalars['String']>;
  boatRegistrationNumber: Scalars['String'];
  boatName: Scalars['String'];
  boatModel: Scalars['String'];
  boatLength: Scalars['Float'];
  boatWidth: Scalars['Float'];
  acceptBoatingNewsletter: Scalars['Boolean'];
  acceptFitnessNews: Scalars['Boolean'];
  acceptLibraryNews: Scalars['Boolean'];
  acceptOtherCultureNews: Scalars['Boolean'];
  informationAccuracyConfirmed: Scalars['Boolean'];
  data?: Maybe<Scalars['JSONString']>;
  applicationCode: Scalars['String'];
  id: Scalars['ID'];
  storageMethod: WinterStorageMethod;
  trailerRegistrationNumber: Scalars['String'];
  customer?: Maybe<ProfileNode>;
  lease?: Maybe<WinterStorageLeaseNode>;
  winterStorageAreaChoices?: Maybe<Array<Maybe<WinterStorageAreaChoiceType>>>;
};

export type WinterStorageApplicationNodeConnection = {
  __typename?: 'WinterStorageApplicationNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<WinterStorageApplicationNodeEdge>>;
  count: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type WinterStorageApplicationNodeEdge = {
  __typename?: 'WinterStorageApplicationNodeEdge';
  node?: Maybe<WinterStorageApplicationNode>;
  cursor: Scalars['String'];
};

export type WinterStorageAreaChoiceType = {
  __typename?: 'WinterStorageAreaChoiceType';
  winterStorageArea?: Maybe<Scalars['String']>;
  priority: Scalars['Int'];
  winterStorageAreaName: Scalars['String'];
};

export type WinterStorageAreaMapType = {
  __typename?: 'WinterStorageAreaMapType';
  id: Scalars['UUID'];
  url: Scalars['String'];
};

export type WinterStorageAreaNode = Node & {
  __typename?: 'WinterStorageAreaNode';
  type?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  geometry?: Maybe<GeometryObjectType>;
  bbox?: Maybe<Scalars['GenericScalar']>;
  properties?: Maybe<WinterStorageAreaProperties>;
};

export type WinterStorageAreaNodeConnection = {
  __typename?: 'WinterStorageAreaNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<WinterStorageAreaNodeEdge>>;
  count: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type WinterStorageAreaNodeEdge = {
  __typename?: 'WinterStorageAreaNodeEdge';
  node?: Maybe<WinterStorageAreaNode>;
  cursor: Scalars['String'];
};

export type WinterStorageAreaProperties = {
  __typename?: 'WinterStorageAreaProperties';
  createdAt: Scalars['DateTime'];
  modifiedAt: Scalars['DateTime'];
  servicemapId?: Maybe<Scalars['String']>;
  zipCode: Scalars['String'];
  phone: Scalars['String'];
  email: Scalars['String'];
  wwwUrl: Scalars['String'];
  imageLink: Scalars['String'];
  municipality?: Maybe<Scalars['String']>;
  imageFile?: Maybe<Scalars['String']>;
  availabilityLevel?: Maybe<AvailabilityLevelType>;
  estimatedNumberOfSectionSpaces?: Maybe<Scalars['Int']>;
  maxLengthOfSectionSpaces?: Maybe<Scalars['Float']>;
  estimatedNumberOfUnmarkedSpaces?: Maybe<Scalars['Int']>;
  maps: Array<Maybe<WinterStorageAreaMapType>>;
  sections: WinterStorageSectionNodeConnection;
  leases?: Maybe<WinterStorageLeaseNodeConnection>;
  product?: Maybe<WinterStorageProductNode>;
  name?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  maxWidth?: Maybe<Scalars['Float']>;
  maxLength?: Maybe<Scalars['Float']>;
  numberOfPlaces: Scalars['Int'];
  numberOfFreePlaces: Scalars['Int'];
  numberOfInactivePlaces: Scalars['Int'];
};


export type WinterStorageAreaPropertiesSectionsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  repairArea?: Maybe<Scalars['Boolean']>;
  electricity?: Maybe<Scalars['Boolean']>;
  water?: Maybe<Scalars['Boolean']>;
  summerStorageForDockingEquipment?: Maybe<Scalars['Boolean']>;
  summerStorageForTrailers?: Maybe<Scalars['Boolean']>;
  summerStorageForBoats?: Maybe<Scalars['Boolean']>;
};


export type WinterStorageAreaPropertiesLeasesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type WinterStorageLeaseNode = Node & {
  __typename?: 'WinterStorageLeaseNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  modifiedAt: Scalars['DateTime'];
  customer: ProfileNode;
  boat?: Maybe<BoatNode>;
  status: LeaseStatus;
  comment: Scalars['String'];
  place?: Maybe<WinterStoragePlaceNode>;
  area?: Maybe<WinterStorageAreaNode>;
  application?: Maybe<WinterStorageApplicationNode>;
  startDate: Scalars['Date'];
  endDate: Scalars['Date'];
  order?: Maybe<OrderNode>;
};

export type WinterStorageLeaseNodeConnection = {
  __typename?: 'WinterStorageLeaseNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<WinterStorageLeaseNodeEdge>>;
  count: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type WinterStorageLeaseNodeEdge = {
  __typename?: 'WinterStorageLeaseNodeEdge';
  node?: Maybe<WinterStorageLeaseNode>;
  cursor: Scalars['String'];
};

export enum WinterStorageMethod {
  OnTrestles = 'ON_TRESTLES',
  OnTrailer = 'ON_TRAILER',
  UnderTarp = 'UNDER_TARP'
}

export type WinterStoragePlaceNode = Node & {
  __typename?: 'WinterStoragePlaceNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  modifiedAt: Scalars['DateTime'];
  number: Scalars['Int'];
  isActive: Scalars['Boolean'];
  winterStorageSection: WinterStorageSectionNode;
  leases?: Maybe<WinterStorageLeaseNodeConnection>;
  width: Scalars['Float'];
  length: Scalars['Float'];
};


export type WinterStoragePlaceNodeLeasesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type WinterStoragePlaceNodeConnection = {
  __typename?: 'WinterStoragePlaceNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<WinterStoragePlaceNodeEdge>>;
  count: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type WinterStoragePlaceNodeEdge = {
  __typename?: 'WinterStoragePlaceNodeEdge';
  node?: Maybe<WinterStoragePlaceNode>;
  cursor: Scalars['String'];
};

export type WinterStorageProductNode = Node & {
  __typename?: 'WinterStorageProductNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  modifiedAt: Scalars['DateTime'];
  priceValue: Scalars['Decimal'];
  priceUnit: PriceUnits;
  taxPercentage: PlaceProductTaxEnum;
  winterStorageArea?: Maybe<WinterStorageAreaNode>;
};

export type WinterStorageProductNodeConnection = {
  __typename?: 'WinterStorageProductNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<WinterStorageProductNodeEdge>>;
  count: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type WinterStorageProductNodeEdge = {
  __typename?: 'WinterStorageProductNodeEdge';
  node?: Maybe<WinterStorageProductNode>;
  cursor: Scalars['String'];
};

export type WinterStorageSectionNode = Node & {
  __typename?: 'WinterStorageSectionNode';
  type?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  geometry?: Maybe<GeometryObjectType>;
  bbox?: Maybe<Scalars['GenericScalar']>;
  properties?: Maybe<WinterStorageSectionProperties>;
};

export type WinterStorageSectionNodeConnection = {
  __typename?: 'WinterStorageSectionNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<WinterStorageSectionNodeEdge>>;
  count: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type WinterStorageSectionNodeEdge = {
  __typename?: 'WinterStorageSectionNodeEdge';
  node?: Maybe<WinterStorageSectionNode>;
  cursor: Scalars['String'];
};

export type WinterStorageSectionProperties = {
  __typename?: 'WinterStorageSectionProperties';
  createdAt: Scalars['DateTime'];
  modifiedAt: Scalars['DateTime'];
  identifier: Scalars['String'];
  electricity: Scalars['Boolean'];
  water: Scalars['Boolean'];
  gate: Scalars['Boolean'];
  area: WinterStorageAreaNode;
  repairArea: Scalars['Boolean'];
  summerStorageForDockingEquipment: Scalars['Boolean'];
  summerStorageForTrailers: Scalars['Boolean'];
  summerStorageForBoats: Scalars['Boolean'];
  places: WinterStoragePlaceNodeConnection;
  maxWidth?: Maybe<Scalars['Float']>;
  maxLength?: Maybe<Scalars['Float']>;
  numberOfPlaces: Scalars['Int'];
  numberOfFreePlaces: Scalars['Int'];
  numberOfInactivePlaces: Scalars['Int'];
};


export type WinterStorageSectionPropertiesPlacesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export enum YouthLanguage {
  Finnish = 'FINNISH',
  English = 'ENGLISH',
  Swedish = 'SWEDISH',
  Somali = 'SOMALI',
  Arabic = 'ARABIC',
  Estonian = 'ESTONIAN',
  Russian = 'RUSSIAN'
}

export type YouthProfileFields = {
  schoolName?: Maybe<Scalars['String']>;
  schoolClass?: Maybe<Scalars['String']>;
  languageAtHome?: Maybe<YouthLanguage>;
  approverFirstName?: Maybe<Scalars['String']>;
  approverLastName?: Maybe<Scalars['String']>;
  approverPhone?: Maybe<Scalars['String']>;
  approverEmail?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Date']>;
  photoUsageApproved?: Maybe<Scalars['Boolean']>;
  addAdditionalContactPersons?: Maybe<Array<Maybe<CreateAdditionalContactPersonInput>>>;
  updateAdditionalContactPersons?: Maybe<Array<Maybe<UpdateAdditionalContactPersonInput>>>;
  removeAdditionalContactPersons?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type YouthProfileType = {
  __typename?: 'YouthProfileType';
  profile: ProfileNode;
  membershipNumber?: Maybe<Scalars['String']>;
  birthDate: Scalars['Date'];
  schoolName: Scalars['String'];
  schoolClass: Scalars['String'];
  expiration: Scalars['Date'];
  approverFirstName: Scalars['String'];
  approverLastName: Scalars['String'];
  approverPhone: Scalars['String'];
  approverEmail: Scalars['String'];
  approvalNotificationTimestamp?: Maybe<Scalars['DateTime']>;
  approvedTime?: Maybe<Scalars['DateTime']>;
  photoUsageApproved?: Maybe<Scalars['Boolean']>;
  additionalContactPersons: AdditionalContactPersonNodeConnection;
  languageAtHome?: Maybe<YouthLanguage>;
  membershipStatus?: Maybe<MembershipStatus>;
  renewable?: Maybe<Scalars['Boolean']>;
};


export type YouthProfileTypeAdditionalContactPersonsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Berth_ApplicationsQueryVariables = Exact<{
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  switchApplications?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<Scalars['String']>;
}>;


export type Berth_ApplicationsQuery = (
  { __typename?: 'Query' }
  & { berthApplications?: Maybe<(
    { __typename?: 'BerthApplicationNodeConnection' }
    & Pick<BerthApplicationNodeConnection, 'count'>
    & { edges: Array<Maybe<(
      { __typename?: 'BerthApplicationNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'BerthApplicationNode' }
        & Pick<BerthApplicationNode, 'id' | 'createdAt' | 'municipality' | 'boatType' | 'boatRegistrationNumber' | 'boatWidth' | 'boatLength' | 'boatDraught' | 'boatWeight' | 'boatName' | 'boatModel' | 'accessibilityRequired' | 'status'>
        & { customer?: Maybe<(
          { __typename?: 'ProfileNode' }
          & Pick<ProfileNode, 'id'>
        )>, berthSwitch?: Maybe<(
          { __typename?: 'BerthSwitchType' }
          & Pick<BerthSwitchType, 'berthNumber' | 'harbor' | 'harborName' | 'id' | 'pier'>
          & { reason?: Maybe<(
            { __typename?: 'BerthSwitchReasonType' }
            & Pick<BerthSwitchReasonType, 'title'>
          )> }
        )>, lease?: Maybe<(
          { __typename?: 'BerthLeaseNode' }
          & Pick<BerthLeaseNode, 'id'>
          & { berth: (
            { __typename?: 'BerthNode' }
            & Pick<BerthNode, 'number'>
            & { pier: (
              { __typename?: 'PierNode' }
              & { properties?: Maybe<(
                { __typename?: 'PierProperties' }
                & Pick<PierProperties, 'identifier'>
                & { harbor: (
                  { __typename?: 'HarborNode' }
                  & Pick<HarborNode, 'id'>
                  & { properties?: Maybe<(
                    { __typename?: 'HarborProperties' }
                    & Pick<HarborProperties, 'name'>
                  )> }
                ) }
              )> }
            ) }
          ) }
        )>, harborChoices?: Maybe<Array<Maybe<(
          { __typename?: 'HarborChoiceType' }
          & Pick<HarborChoiceType, 'harbor' | 'priority' | 'harborName'>
        )>>> }
      )> }
    )>> }
  )>, boatTypes?: Maybe<Array<(
    { __typename?: 'BoatTypeType' }
    & Pick<BoatTypeType, 'id' | 'name'>
  )>> }
);

export type Update_Berth_ApplicationMutationVariables = Exact<{
  input: UpdateBerthApplicationInput;
}>;


export type Update_Berth_ApplicationMutation = (
  { __typename?: 'Mutation' }
  & { updateBerthApplication?: Maybe<(
    { __typename?: 'UpdateBerthApplicationPayload' }
    & { berthApplication?: Maybe<(
      { __typename?: 'BerthApplicationNode' }
      & Pick<BerthApplicationNode, 'id'>
      & { customer?: Maybe<(
        { __typename?: 'ProfileNode' }
        & Pick<ProfileNode, 'id'>
      )> }
    )> }
  )> }
);

export type Create_New_ProfileMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  address: Scalars['String'];
  postalCode: Scalars['String'];
  city: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
}>;


export type Create_New_ProfileMutation = (
  { __typename?: 'Mutation' }
  & { createProfile?: Maybe<(
    { __typename?: 'CreateProfileMutationPayload' }
    & { profile?: Maybe<(
      { __typename?: 'ProfileNode' }
      & Pick<ProfileNode, 'id' | 'lastName' | 'firstName'>
      & { primaryAddress?: Maybe<(
        { __typename?: 'AddressNode' }
        & Pick<AddressNode, 'address' | 'city'>
      )> }
    )> }
  )> }
);

export type Order_Optional_ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type Order_Optional_ProductsQuery = (
  { __typename?: 'Query' }
  & { additionalProducts?: Maybe<(
    { __typename?: 'AdditionalProductNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'AdditionalProductNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'AdditionalProductNode' }
        & Pick<AdditionalProductNode, 'id' | 'service' | 'priceValue' | 'priceUnit' | 'period' | 'productType'>
      )> }
    )>> }
  )> }
);

export type BerthLeaseFragment = (
  { __typename?: 'BerthApplicationNode' }
  & { lease?: Maybe<(
    { __typename?: 'BerthLeaseNode' }
    & Pick<BerthLeaseNode, 'id'>
    & { berth: (
      { __typename?: 'BerthNode' }
      & Pick<BerthNode, 'depth' | 'length' | 'mooringType' | 'width' | 'comment' | 'isAccessible' | 'number'>
      & { pier: (
        { __typename?: 'PierNode' }
        & { properties?: Maybe<(
          { __typename?: 'PierProperties' }
          & Pick<PierProperties, 'identifier' | 'electricity' | 'gate' | 'lighting' | 'mooring' | 'wasteCollection' | 'water'>
          & { harbor: (
            { __typename?: 'HarborNode' }
            & Pick<HarborNode, 'id'>
            & { properties?: Maybe<(
              { __typename?: 'HarborProperties' }
              & Pick<HarborProperties, 'name'>
            )> }
          ) }
        )> }
      ) }
    ), order?: Maybe<(
      { __typename?: 'OrderNode' }
      & Pick<OrderNode, 'id' | 'price' | 'totalPrice'>
      & { orderLines: (
        { __typename?: 'OrderLineNodeConnection' }
        & { edges: Array<Maybe<(
          { __typename?: 'OrderLineNodeEdge' }
          & { node?: Maybe<(
            { __typename?: 'OrderLineNode' }
            & Pick<OrderLineNode, 'id' | 'price'>
            & { product?: Maybe<(
              { __typename?: 'AdditionalProductNode' }
              & Pick<AdditionalProductNode, 'id' | 'service' | 'productType'>
            )> }
          )> }
        )>> }
      ) }
    )> }
  )> }
);

export type AdditionalServicesFragment = (
  { __typename?: 'Query' }
  & { additionalProducts?: Maybe<(
    { __typename?: 'AdditionalProductNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'AdditionalProductNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'AdditionalProductNode' }
        & Pick<AdditionalProductNode, 'id' | 'service' | 'priceValue' | 'priceUnit' | 'period' | 'productType'>
      )> }
    )>> }
  )> }
);

export type Filtered_CustomersQueryVariables = Exact<{
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
}>;


export type Filtered_CustomersQuery = (
  { __typename?: 'Query' }
  & { profiles?: Maybe<(
    { __typename?: 'ProfileNodeConnection' }
    & Pick<ProfileNodeConnection, 'count'>
    & { edges: Array<Maybe<(
      { __typename?: 'ProfileNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'ProfileNode' }
        & Pick<ProfileNode, 'id' | 'firstName' | 'lastName'>
        & { primaryAddress?: Maybe<(
          { __typename?: 'AddressNode' }
          & Pick<AddressNode, 'address' | 'postalCode' | 'city'>
        )>, organization?: Maybe<(
          { __typename?: 'OrganizationNode' }
          & Pick<OrganizationNode, 'businessId' | 'organizationType'>
        )>, berthLeases?: Maybe<(
          { __typename?: 'BerthLeaseNodeConnection' }
          & { edges: Array<Maybe<(
            { __typename?: 'BerthLeaseNodeEdge' }
            & { node?: Maybe<(
              { __typename?: 'BerthLeaseNode' }
              & { berth: (
                { __typename?: 'BerthNode' }
                & Pick<BerthNode, 'number'>
                & { pier: (
                  { __typename?: 'PierNode' }
                  & { properties?: Maybe<(
                    { __typename?: 'PierProperties' }
                    & Pick<PierProperties, 'identifier'>
                    & { harbor: (
                      { __typename?: 'HarborNode' }
                      & Pick<HarborNode, 'id'>
                      & { properties?: Maybe<(
                        { __typename?: 'HarborProperties' }
                        & Pick<HarborProperties, 'name'>
                      )> }
                    ) }
                  )> }
                ) }
              ) }
            )> }
          )>> }
        )>, berthApplications?: Maybe<(
          { __typename?: 'BerthApplicationNodeConnection' }
          & { edges: Array<Maybe<(
            { __typename?: 'BerthApplicationNodeEdge' }
            & { node?: Maybe<(
              { __typename?: 'BerthApplicationNode' }
              & { berthSwitch?: Maybe<(
                { __typename?: 'BerthSwitchType' }
                & Pick<BerthSwitchType, 'harborName'>
              )> }
            )> }
          )>> }
        )> }
      )> }
    )>> }
  )> }
);

export type Individual_ApplicationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Individual_ApplicationQuery = (
  { __typename?: 'Query' }
  & { berthApplication?: Maybe<(
    { __typename?: 'BerthApplicationNode' }
    & Pick<BerthApplicationNode, 'id' | 'firstName' | 'lastName' | 'address' | 'municipality' | 'zipCode' | 'phoneNumber' | 'email' | 'businessId' | 'companyName' | 'language' | 'createdAt' | 'boatType' | 'boatRegistrationNumber' | 'boatWidth' | 'boatLength' | 'boatDraught' | 'boatWeight' | 'boatName' | 'boatModel' | 'accessibilityRequired' | 'status'>
    & { customer?: Maybe<(
      { __typename?: 'ProfileNode' }
      & Pick<ProfileNode, 'comment' | 'firstName' | 'invoicingType' | 'lastName' | 'id' | 'language'>
      & { organization?: Maybe<(
        { __typename?: 'OrganizationNode' }
        & Pick<OrganizationNode, 'address' | 'businessId' | 'city' | 'name' | 'organizationType' | 'postalCode'>
      )>, primaryAddress?: Maybe<(
        { __typename?: 'AddressNode' }
        & Pick<AddressNode, 'address' | 'postalCode' | 'city'>
      )>, primaryEmail?: Maybe<(
        { __typename?: 'EmailNode' }
        & Pick<EmailNode, 'email'>
      )>, primaryPhone?: Maybe<(
        { __typename?: 'PhoneNode' }
        & Pick<PhoneNode, 'phone'>
      )> }
    )>, berthSwitch?: Maybe<(
      { __typename?: 'BerthSwitchType' }
      & Pick<BerthSwitchType, 'berthNumber' | 'harbor' | 'harborName' | 'id' | 'pier'>
      & { reason?: Maybe<(
        { __typename?: 'BerthSwitchReasonType' }
        & Pick<BerthSwitchReasonType, 'title'>
      )> }
    )>, harborChoices?: Maybe<Array<Maybe<(
      { __typename?: 'HarborChoiceType' }
      & Pick<HarborChoiceType, 'harbor' | 'priority' | 'harborName'>
    )>>> }
    & BerthLeaseFragment
  )>, boatTypes?: Maybe<Array<(
    { __typename?: 'BoatTypeType' }
    & Pick<BoatTypeType, 'id' | 'name'>
  )>> }
  & AdditionalServicesFragment
);

export type CustomersQueryVariables = Exact<{
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
}>;


export type CustomersQuery = (
  { __typename?: 'Query' }
  & { profiles?: Maybe<(
    { __typename?: 'ProfileNodeConnection' }
    & Pick<ProfileNodeConnection, 'count'>
    & { edges: Array<Maybe<(
      { __typename?: 'ProfileNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'ProfileNode' }
        & Pick<ProfileNode, 'id' | 'firstName' | 'lastName' | 'nickname' | 'comment' | 'contactMethod' | 'image'>
        & { organization?: Maybe<(
          { __typename?: 'OrganizationNode' }
          & Pick<OrganizationNode, 'name' | 'address' | 'postalCode' | 'city' | 'businessId' | 'organizationType'>
        )>, primaryAddress?: Maybe<(
          { __typename?: 'AddressNode' }
          & Pick<AddressNode, 'address' | 'city' | 'postalCode'>
        )>, primaryPhone?: Maybe<(
          { __typename?: 'PhoneNode' }
          & Pick<PhoneNode, 'phone'>
        )>, primaryEmail?: Maybe<(
          { __typename?: 'EmailNode' }
          & Pick<EmailNode, 'email'>
        )>, serviceConnections?: Maybe<(
          { __typename?: 'ServiceConnectionTypeConnection' }
          & { edges: Array<Maybe<(
            { __typename?: 'ServiceConnectionTypeEdge' }
            & { node?: Maybe<(
              { __typename?: 'ServiceConnectionType' }
              & Pick<ServiceConnectionType, 'id'>
              & { service: (
                { __typename?: 'ServiceNode' }
                & Pick<ServiceNode, 'id' | 'type'>
              ) }
            )> }
          )>> }
        )>, boats?: Maybe<(
          { __typename?: 'BoatNodeConnection' }
          & { edges: Array<Maybe<(
            { __typename?: 'BoatNodeEdge' }
            & { node?: Maybe<(
              { __typename?: 'BoatNode' }
              & Pick<BoatNode, 'id' | 'name'>
            )> }
          )>> }
        )>, berthApplications?: Maybe<(
          { __typename?: 'BerthApplicationNodeConnection' }
          & { edges: Array<Maybe<(
            { __typename?: 'BerthApplicationNodeEdge' }
            & { node?: Maybe<(
              { __typename?: 'BerthApplicationNode' }
              & Pick<BerthApplicationNode, 'id' | 'createdAt'>
            )> }
          )>> }
        )>, berthLeases?: Maybe<(
          { __typename?: 'BerthLeaseNodeConnection' }
          & { edges: Array<Maybe<(
            { __typename?: 'BerthLeaseNodeEdge' }
            & { node?: Maybe<(
              { __typename?: 'BerthLeaseNode' }
              & Pick<BerthLeaseNode, 'id'>
              & { berth: (
                { __typename?: 'BerthNode' }
                & Pick<BerthNode, 'number'>
                & { pier: (
                  { __typename?: 'PierNode' }
                  & { properties?: Maybe<(
                    { __typename?: 'PierProperties' }
                    & Pick<PierProperties, 'identifier'>
                    & { harbor: (
                      { __typename?: 'HarborNode' }
                      & { properties?: Maybe<(
                        { __typename?: 'HarborProperties' }
                        & Pick<HarborProperties, 'name'>
                      )> }
                    ) }
                  )> }
                ) }
              ) }
            )> }
          )>> }
        )> }
      )> }
    )>> }
  )> }
);

export type Update_Customer_BoatMutationVariables = Exact<{
  input: UpdateBoatMutationInput;
}>;


export type Update_Customer_BoatMutation = (
  { __typename?: 'Mutation' }
  & { updateBoat?: Maybe<(
    { __typename?: 'UpdateBoatMutationPayload' }
    & Pick<UpdateBoatMutationPayload, 'clientMutationId'>
  )> }
);

export type Delete_Customer_BoatMutationVariables = Exact<{
  input: DeleteBoatMutationInput;
}>;


export type Delete_Customer_BoatMutation = (
  { __typename?: 'Mutation' }
  & { deleteBoat?: Maybe<(
    { __typename?: 'DeleteBoatMutationPayload' }
    & Pick<DeleteBoatMutationPayload, 'clientMutationId'>
  )> }
);

export type Individual_CustomerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Individual_CustomerQuery = (
  { __typename?: 'Query' }
  & { profile?: Maybe<(
    { __typename?: 'ProfileNode' }
    & Pick<ProfileNode, 'comment' | 'firstName' | 'invoicingType' | 'lastName' | 'id' | 'language'>
    & { organization?: Maybe<(
      { __typename?: 'OrganizationNode' }
      & Pick<OrganizationNode, 'address' | 'businessId' | 'city' | 'name' | 'organizationType' | 'postalCode'>
    )>, primaryAddress?: Maybe<(
      { __typename?: 'AddressNode' }
      & Pick<AddressNode, 'address' | 'postalCode' | 'city'>
    )>, primaryEmail?: Maybe<(
      { __typename?: 'EmailNode' }
      & Pick<EmailNode, 'email'>
    )>, primaryPhone?: Maybe<(
      { __typename?: 'PhoneNode' }
      & Pick<PhoneNode, 'phone'>
    )>, boats?: Maybe<(
      { __typename?: 'BoatNodeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'BoatNodeEdge' }
        & { node?: Maybe<(
          { __typename?: 'BoatNode' }
          & Pick<BoatNode, 'id' | 'width' | 'length' | 'draught' | 'weight' | 'name' | 'model' | 'registrationNumber' | 'propulsion' | 'hullMaterial' | 'intendedUse'>
          & { boatType: (
            { __typename?: 'BoatTypeType' }
            & Pick<BoatTypeType, 'id' | 'name'>
          ), certificates: Array<Maybe<(
            { __typename?: 'BoatCertificateNode' }
            & Pick<BoatCertificateNode, 'file' | 'certificateType' | 'validUntil' | 'checkedAt' | 'checkedBy'>
          )>> }
        )> }
      )>> }
    )>, berthLeases?: Maybe<(
      { __typename?: 'BerthLeaseNodeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'BerthLeaseNodeEdge' }
        & { node?: Maybe<(
          { __typename?: 'BerthLeaseNode' }
          & Pick<BerthLeaseNode, 'id' | 'status' | 'startDate' | 'endDate'>
          & { berth: (
            { __typename?: 'BerthNode' }
            & Pick<BerthNode, 'number'>
            & { pier: (
              { __typename?: 'PierNode' }
              & { properties?: Maybe<(
                { __typename?: 'PierProperties' }
                & Pick<PierProperties, 'identifier'>
                & { harbor: (
                  { __typename?: 'HarborNode' }
                  & Pick<HarborNode, 'id'>
                  & { properties?: Maybe<(
                    { __typename?: 'HarborProperties' }
                    & Pick<HarborProperties, 'name'>
                  )> }
                ) }
              )> }
            ) }
          ) }
        )> }
      )>> }
    )>, orders?: Maybe<(
      { __typename?: 'OrderNodeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'OrderNodeEdge' }
        & { node?: Maybe<(
          { __typename?: 'OrderNode' }
          & Pick<OrderNode, 'dueDate' | 'totalPrice' | 'totalTaxPercentage' | 'price' | 'taxPercentage' | 'status'>
          & { orderLines: (
            { __typename?: 'OrderLineNodeConnection' }
            & { edges: Array<Maybe<(
              { __typename?: 'OrderLineNodeEdge' }
              & { node?: Maybe<(
                { __typename?: 'OrderLineNode' }
                & Pick<OrderLineNode, 'price' | 'taxPercentage'>
                & { product?: Maybe<(
                  { __typename?: 'AdditionalProductNode' }
                  & Pick<AdditionalProductNode, 'service'>
                )> }
              )> }
            )>> }
          ), lease?: Maybe<(
            { __typename?: 'BerthLeaseNode' }
            & Pick<BerthLeaseNode, 'startDate' | 'endDate'>
            & { berth: (
              { __typename?: 'BerthNode' }
              & Pick<BerthNode, 'number'>
              & { pier: (
                { __typename?: 'PierNode' }
                & { properties?: Maybe<(
                  { __typename?: 'PierProperties' }
                  & Pick<PierProperties, 'identifier'>
                  & { harbor: (
                    { __typename?: 'HarborNode' }
                    & { properties?: Maybe<(
                      { __typename?: 'HarborProperties' }
                      & Pick<HarborProperties, 'name'>
                    )> }
                  ) }
                )> }
              ) }
            ) }
          ) | { __typename?: 'WinterStorageLeaseNode' }> }
        )> }
      )>> }
    )>, berthApplications?: Maybe<(
      { __typename?: 'BerthApplicationNodeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'BerthApplicationNodeEdge' }
        & { node?: Maybe<(
          { __typename?: 'BerthApplicationNode' }
          & Pick<BerthApplicationNode, 'id' | 'createdAt' | 'status' | 'boatType' | 'boatRegistrationNumber' | 'boatWidth' | 'boatLength' | 'boatDraught' | 'boatWeight' | 'boatName' | 'boatModel' | 'accessibilityRequired'>
          & { berthSwitch?: Maybe<(
            { __typename?: 'BerthSwitchType' }
            & Pick<BerthSwitchType, 'berthNumber' | 'harbor' | 'harborName' | 'id' | 'pier'>
            & { reason?: Maybe<(
              { __typename?: 'BerthSwitchReasonType' }
              & Pick<BerthSwitchReasonType, 'title'>
            )> }
          )>, lease?: Maybe<(
            { __typename?: 'BerthLeaseNode' }
            & Pick<BerthLeaseNode, 'id'>
            & { berth: (
              { __typename?: 'BerthNode' }
              & Pick<BerthNode, 'number'>
              & { pier: (
                { __typename?: 'PierNode' }
                & { properties?: Maybe<(
                  { __typename?: 'PierProperties' }
                  & Pick<PierProperties, 'identifier'>
                  & { harbor: (
                    { __typename?: 'HarborNode' }
                    & Pick<HarborNode, 'id'>
                    & { properties?: Maybe<(
                      { __typename?: 'HarborProperties' }
                      & Pick<HarborProperties, 'name'>
                    )> }
                  ) }
                )> }
              ) }
            ) }
          )>, harborChoices?: Maybe<Array<Maybe<(
            { __typename?: 'HarborChoiceType' }
            & Pick<HarborChoiceType, 'harbor' | 'priority' | 'harborName'>
          )>>> }
        )> }
      )>> }
    )> }
  )>, boatTypes?: Maybe<Array<(
    { __typename?: 'BoatTypeType' }
    & Pick<BoatTypeType, 'id' | 'name'>
  )>> }
);

export type HarborsQueryVariables = Exact<{ [key: string]: never; }>;


export type HarborsQuery = (
  { __typename?: 'Query' }
  & { harbors?: Maybe<(
    { __typename?: 'HarborNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'HarborNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'HarborNode' }
        & Pick<HarborNode, 'id'>
        & { properties?: Maybe<(
          { __typename?: 'HarborProperties' }
          & Pick<HarborProperties, 'name' | 'numberOfPlaces' | 'numberOfFreePlaces' | 'streetAddress' | 'zipCode' | 'municipality' | 'wwwUrl' | 'imageFile' | 'servicemapId' | 'maxWidth'>
          & { maps: Array<Maybe<(
            { __typename?: 'HarborMapType' }
            & Pick<HarborMapType, 'id' | 'url'>
          )>>, piers?: Maybe<(
            { __typename?: 'PierNodeConnection' }
            & { edges: Array<Maybe<(
              { __typename?: 'PierNodeEdge' }
              & { node?: Maybe<(
                { __typename?: 'PierNode' }
                & Pick<PierNode, 'id'>
                & { properties?: Maybe<(
                  { __typename?: 'PierProperties' }
                  & Pick<PierProperties, 'electricity' | 'wasteCollection' | 'gate' | 'water' | 'lighting'>
                )> }
              )> }
            )>> }
          )> }
        )> }
      )> }
    )>> }
  )> }
);

export type Update_BerthMutationVariables = Exact<{
  input: UpdateBerthMutationInput;
}>;


export type Update_BerthMutation = (
  { __typename?: 'Mutation' }
  & { updateBerth?: Maybe<(
    { __typename?: 'UpdateBerthMutationPayload' }
    & Pick<UpdateBerthMutationPayload, 'clientMutationId'>
  )> }
);

export type Delete_BerthMutationVariables = Exact<{
  input: DeleteBerthMutationInput;
}>;


export type Delete_BerthMutation = (
  { __typename?: 'Mutation' }
  & { deleteBerth?: Maybe<(
    { __typename?: 'DeleteBerthMutationPayload' }
    & Pick<DeleteBerthMutationPayload, 'clientMutationId'>
  )> }
);

export type Create_BerthMutationVariables = Exact<{
  input: CreateBerthMutationInput;
}>;


export type Create_BerthMutation = (
  { __typename?: 'Mutation' }
  & { createBerth?: Maybe<(
    { __typename?: 'CreateBerthMutationPayload' }
    & Pick<CreateBerthMutationPayload, 'clientMutationId'>
  )> }
);

export type Individual_BerthQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Individual_BerthQuery = (
  { __typename?: 'Query' }
  & { berth?: Maybe<(
    { __typename?: 'BerthNode' }
    & Pick<BerthNode, 'number' | 'comment' | 'isActive' | 'mooringType' | 'width' | 'length' | 'depth'>
    & { pier: (
      { __typename?: 'PierNode' }
      & Pick<PierNode, 'id'>
      & { properties?: Maybe<(
        { __typename?: 'PierProperties' }
        & Pick<PierProperties, 'identifier'>
      )> }
    ) }
  )> }
);

export type Update_HarborMutationVariables = Exact<{
  input: UpdateHarborMutationInput;
}>;


export type Update_HarborMutation = (
  { __typename?: 'Mutation' }
  & { updateHarbor?: Maybe<(
    { __typename?: 'UpdateHarborMutationPayload' }
    & Pick<UpdateHarborMutationPayload, 'clientMutationId'>
  )> }
);

export type Harbor_FormQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Harbor_FormQuery = (
  { __typename?: 'Query' }
  & { harbor?: Maybe<(
    { __typename?: 'HarborNode' }
    & Pick<HarborNode, 'id'>
    & { properties?: Maybe<(
      { __typename?: 'HarborProperties' }
      & Pick<HarborProperties, 'name' | 'streetAddress' | 'zipCode' | 'municipality' | 'wwwUrl' | 'imageFile'>
      & { maps: Array<Maybe<(
        { __typename?: 'HarborMapType' }
        & Pick<HarborMapType, 'id' | 'url'>
      )>> }
    )> }
  )> }
);

export type Create_PierMutationVariables = Exact<{
  input: CreatePierMutationInput;
}>;


export type Create_PierMutation = (
  { __typename?: 'Mutation' }
  & { createPier?: Maybe<(
    { __typename?: 'CreatePierMutationPayload' }
    & Pick<CreatePierMutationPayload, 'clientMutationId'>
  )> }
);

export type Update_PierMutationVariables = Exact<{
  input: UpdatePierMutationInput;
}>;


export type Update_PierMutation = (
  { __typename?: 'Mutation' }
  & { updatePier?: Maybe<(
    { __typename?: 'UpdatePierMutationPayload' }
    & Pick<UpdatePierMutationPayload, 'clientMutationId'>
  )> }
);

export type Delete_PierMutationVariables = Exact<{
  input: DeletePierMutationInput;
}>;


export type Delete_PierMutation = (
  { __typename?: 'Mutation' }
  & { deletePier?: Maybe<(
    { __typename?: 'DeletePierMutationPayload' }
    & Pick<DeletePierMutationPayload, 'clientMutationId'>
  )> }
);

export type Boat_TypesQueryVariables = Exact<{ [key: string]: never; }>;


export type Boat_TypesQuery = (
  { __typename?: 'Query' }
  & { boatTypes?: Maybe<Array<(
    { __typename?: 'BoatTypeType' }
    & Pick<BoatTypeType, 'id' | 'name'>
  )>> }
);

export type Pier_And_Boat_TypesQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Pier_And_Boat_TypesQuery = (
  { __typename?: 'Query' }
  & { pier?: Maybe<(
    { __typename?: 'PierNode' }
    & { properties?: Maybe<(
      { __typename?: 'PierProperties' }
      & Pick<PierProperties, 'identifier' | 'mooring' | 'lighting' | 'electricity' | 'gate' | 'wasteCollection' | 'water' | 'personalElectricity'>
      & { suitableBoatTypes: Array<(
        { __typename?: 'BoatTypeType' }
        & Pick<BoatTypeType, 'id'>
      )> }
    )> }
  )>, boatTypes?: Maybe<Array<(
    { __typename?: 'BoatTypeType' }
    & Pick<BoatTypeType, 'id' | 'name'>
  )>> }
);

export type Individual_HarborQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Individual_HarborQuery = (
  { __typename?: 'Query' }
  & { harbor?: Maybe<(
    { __typename?: 'HarborNode' }
    & Pick<HarborNode, 'id'>
    & { properties?: Maybe<(
      { __typename?: 'HarborProperties' }
      & Pick<HarborProperties, 'name' | 'numberOfPlaces' | 'numberOfFreePlaces' | 'streetAddress' | 'zipCode' | 'municipality' | 'wwwUrl' | 'imageFile' | 'servicemapId' | 'maxWidth'>
      & { maps: Array<Maybe<(
        { __typename?: 'HarborMapType' }
        & Pick<HarborMapType, 'id' | 'url'>
      )>>, piers?: Maybe<(
        { __typename?: 'PierNodeConnection' }
        & { edges: Array<Maybe<(
          { __typename?: 'PierNodeEdge' }
          & { node?: Maybe<(
            { __typename?: 'PierNode' }
            & Pick<PierNode, 'id'>
            & { properties?: Maybe<(
              { __typename?: 'PierProperties' }
              & Pick<PierProperties, 'identifier' | 'electricity' | 'wasteCollection' | 'water' | 'lighting' | 'gate'>
              & { suitableBoatTypes: Array<(
                { __typename?: 'BoatTypeType' }
                & Pick<BoatTypeType, 'name'>
              )>, berths: (
                { __typename?: 'BerthNodeConnection' }
                & { edges: Array<Maybe<(
                  { __typename?: 'BerthNodeEdge' }
                  & { node?: Maybe<(
                    { __typename?: 'BerthNode' }
                    & Pick<BerthNode, 'id' | 'isActive' | 'number' | 'width' | 'length' | 'depth' | 'mooringType' | 'comment'>
                    & { pier: (
                      { __typename?: 'PierNode' }
                      & Pick<PierNode, 'id'>
                      & { properties?: Maybe<(
                        { __typename?: 'PierProperties' }
                        & Pick<PierProperties, 'identifier'>
                      )> }
                    ), leases?: Maybe<(
                      { __typename?: 'BerthLeaseNodeConnection' }
                      & { edges: Array<Maybe<(
                        { __typename?: 'BerthLeaseNodeEdge' }
                        & { node?: Maybe<(
                          { __typename?: 'BerthLeaseNode' }
                          & Pick<BerthLeaseNode, 'status' | 'startDate' | 'endDate' | 'isActive'>
                          & { customer: (
                            { __typename?: 'ProfileNode' }
                            & Pick<ProfileNode, 'id' | 'firstName' | 'lastName'>
                          ) }
                        )> }
                      )>> }
                    )> }
                  )> }
                )>> }
              ) }
            )> }
          )> }
        )>> }
      )> }
    )> }
  )> }
);

export type Create_LeaseMutationVariables = Exact<{
  input: CreateBerthLeaseMutationInput;
}>;


export type Create_LeaseMutation = (
  { __typename?: 'Mutation' }
  & { createBerthLease?: Maybe<(
    { __typename?: 'CreateBerthLeaseMutationPayload' }
    & { berthLease?: Maybe<(
      { __typename?: 'BerthLeaseNode' }
      & Pick<BerthLeaseNode, 'id' | 'status'>
    )> }
  )> }
);

export type OfferQueryVariables = Exact<{
  applicationId: Scalars['ID'];
  servicemapId: Scalars['String'];
}>;


export type OfferQuery = (
  { __typename?: 'Query' }
  & { berthApplication?: Maybe<(
    { __typename?: 'BerthApplicationNode' }
    & Pick<BerthApplicationNode, 'id' | 'createdAt' | 'status' | 'boatType' | 'boatRegistrationNumber' | 'boatName' | 'boatModel' | 'boatWidth' | 'boatLength' | 'boatDraught' | 'boatWeight'>
    & { berthSwitch?: Maybe<(
      { __typename?: 'BerthSwitchType' }
      & Pick<BerthSwitchType, 'id'>
    )>, customer?: Maybe<(
      { __typename?: 'ProfileNode' }
      & Pick<ProfileNode, 'id'>
    )> }
  )>, boatTypes?: Maybe<Array<(
    { __typename?: 'BoatTypeType' }
    & Pick<BoatTypeType, 'id' | 'name'>
  )>>, harborByServicemapId?: Maybe<(
    { __typename?: 'HarborNode' }
    & Pick<HarborNode, 'id'>
    & { properties?: Maybe<(
      { __typename?: 'HarborProperties' }
      & Pick<HarborProperties, 'name' | 'servicemapId' | 'imageFile' | 'streetAddress' | 'municipality' | 'zipCode' | 'maxWidth' | 'numberOfPlaces' | 'numberOfFreePlaces'>
      & { maps: Array<Maybe<(
        { __typename?: 'HarborMapType' }
        & Pick<HarborMapType, 'id' | 'url'>
      )>>, piers?: Maybe<(
        { __typename?: 'PierNodeConnection' }
        & { edges: Array<Maybe<(
          { __typename?: 'PierNodeEdge' }
          & { node?: Maybe<(
            { __typename?: 'PierNode' }
            & Pick<PierNode, 'id'>
            & { properties?: Maybe<(
              { __typename?: 'PierProperties' }
              & Pick<PierProperties, 'identifier' | 'electricity' | 'gate' | 'water' | 'lighting' | 'wasteCollection'>
              & { berths: (
                { __typename?: 'BerthNodeConnection' }
                & { edges: Array<Maybe<(
                  { __typename?: 'BerthNodeEdge' }
                  & { node?: Maybe<(
                    { __typename?: 'BerthNode' }
                    & Pick<BerthNode, 'id' | 'number' | 'width' | 'length' | 'depth' | 'mooringType' | 'comment' | 'isAccessible'>
                    & { leases?: Maybe<(
                      { __typename?: 'BerthLeaseNodeConnection' }
                      & { edges: Array<Maybe<(
                        { __typename?: 'BerthLeaseNodeEdge' }
                        & { node?: Maybe<(
                          { __typename?: 'BerthLeaseNode' }
                          & Pick<BerthLeaseNode, 'status' | 'startDate' | 'endDate' | 'isActive'>
                          & { customer: (
                            { __typename?: 'ProfileNode' }
                            & Pick<ProfileNode, 'id' | 'firstName' | 'lastName'>
                          ) }
                        )> }
                      )>> }
                    )> }
                  )> }
                )>> }
              ) }
            )> }
          )> }
        )>> }
      )> }
    )> }
  )> }
);

export type AdditionalServicePricingFragment = (
  { __typename?: 'AdditionalProductNodeConnection' }
  & { edges: Array<Maybe<(
    { __typename?: 'AdditionalProductNodeEdge' }
    & { node?: Maybe<(
      { __typename?: 'AdditionalProductNode' }
      & Pick<AdditionalProductNode, 'id' | 'service' | 'priceValue' | 'priceUnit' | 'period' | 'productType' | 'taxPercentage'>
    )> }
  )>> }
);

export type Update_Additional_Service_PriceMutationVariables = Exact<{
  input: UpdateAdditionalProductMutationInput;
}>;


export type Update_Additional_Service_PriceMutation = (
  { __typename?: 'Mutation' }
  & { updateAdditionalProduct?: Maybe<(
    { __typename?: 'UpdateAdditionalProductMutationPayload' }
    & { additionalProduct?: Maybe<(
      { __typename?: 'AdditionalProductNode' }
      & Pick<AdditionalProductNode, 'id' | 'priceValue' | 'priceUnit' | 'service' | 'period' | 'taxPercentage' | 'productType'>
    )> }
  )> }
);

export type BerthPricingFragment = (
  { __typename?: 'BerthPriceGroupNodeConnection' }
  & { edges: Array<Maybe<(
    { __typename?: 'BerthPriceGroupNodeEdge' }
    & { node?: Maybe<(
      { __typename?: 'BerthPriceGroupNode' }
      & Pick<BerthPriceGroupNode, 'id' | 'name'>
      & { defaultProduct?: Maybe<(
        { __typename?: 'BerthProductNode' }
        & Pick<BerthProductNode, 'id' | 'priceUnit' | 'priceValue'>
      )> }
    )> }
  )>> }
);

export type Update_Berth_PriceMutationVariables = Exact<{
  input: UpdateBerthProductMutationInput;
}>;


export type Update_Berth_PriceMutation = (
  { __typename?: 'Mutation' }
  & { updateBerthProduct?: Maybe<(
    { __typename?: 'UpdateBerthProductMutationPayload' }
    & { berthProduct?: Maybe<(
      { __typename?: 'BerthProductNode' }
      & Pick<BerthProductNode, 'id' | 'priceValue' | 'priceUnit'>
    )> }
  )> }
);

export type Create_Berth_ProductMutationVariables = Exact<{
  input: CreateBerthProductMutationInput;
}>;


export type Create_Berth_ProductMutation = (
  { __typename?: 'Mutation' }
  & { createBerthProduct?: Maybe<(
    { __typename?: 'CreateBerthProductMutationPayload' }
    & { berthProduct?: Maybe<(
      { __typename?: 'BerthProductNode' }
      & Pick<BerthProductNode, 'id' | 'priceValue' | 'priceUnit'>
    )> }
  )> }
);

export type HarborServicePricingFragment = (
  { __typename?: 'AdditionalProductNodeConnection' }
  & { edges: Array<Maybe<(
    { __typename?: 'AdditionalProductNodeEdge' }
    & { node?: Maybe<(
      { __typename?: 'AdditionalProductNode' }
      & Pick<AdditionalProductNode, 'id' | 'service' | 'priceValue' | 'priceUnit' | 'period' | 'productType' | 'taxPercentage'>
    )> }
  )>> }
);

export type Update_Harbor_Service_PriceMutationVariables = Exact<{
  input: UpdateAdditionalProductMutationInput;
}>;


export type Update_Harbor_Service_PriceMutation = (
  { __typename?: 'Mutation' }
  & { updateAdditionalProduct?: Maybe<(
    { __typename?: 'UpdateAdditionalProductMutationPayload' }
    & { additionalProduct?: Maybe<(
      { __typename?: 'AdditionalProductNode' }
      & Pick<AdditionalProductNode, 'id' | 'priceValue' | 'priceUnit' | 'service' | 'period' | 'taxPercentage' | 'productType'>
    )> }
  )> }
);

export type PricingQueryVariables = Exact<{ [key: string]: never; }>;


export type PricingQuery = (
  { __typename?: 'Query' }
  & { berthPriceGroups?: Maybe<(
    { __typename?: 'BerthPriceGroupNodeConnection' }
    & BerthPricingFragment
  )>, winterStorageAreas?: Maybe<(
    { __typename?: 'WinterStorageAreaNodeConnection' }
    & WinterStoragePricingFragment
  )>, additionalProducts?: Maybe<(
    { __typename?: 'AdditionalProductNodeConnection' }
    & HarborServicePricingFragment
  )>, optionalProducts?: Maybe<(
    { __typename?: 'AdditionalProductNodeConnection' }
    & AdditionalServicePricingFragment
  )> }
);

export type WinterStoragePricingFragment = (
  { __typename?: 'WinterStorageAreaNodeConnection' }
  & { edges: Array<Maybe<(
    { __typename?: 'WinterStorageAreaNodeEdge' }
    & { node?: Maybe<(
      { __typename?: 'WinterStorageAreaNode' }
      & Pick<WinterStorageAreaNode, 'id'>
      & { properties?: Maybe<(
        { __typename?: 'WinterStorageAreaProperties' }
        & Pick<WinterStorageAreaProperties, 'name'>
        & { product?: Maybe<(
          { __typename?: 'WinterStorageProductNode' }
          & Pick<WinterStorageProductNode, 'id' | 'priceValue' | 'priceUnit'>
        )> }
      )> }
    )> }
  )>> }
);

export type Update_Winter_Storage_PriceMutationVariables = Exact<{
  input: UpdateWinterStorageProductMutationInput;
}>;


export type Update_Winter_Storage_PriceMutation = (
  { __typename?: 'Mutation' }
  & { updateWinterStorageProduct?: Maybe<(
    { __typename?: 'UpdateWinterStorageProductMutationPayload' }
    & { winterStorageProduct?: Maybe<(
      { __typename?: 'WinterStorageProductNode' }
      & Pick<WinterStorageProductNode, 'id' | 'priceValue' | 'priceUnit' | 'taxPercentage'>
    )> }
  )> }
);

export type Create_Winter_Storage_ProductMutationVariables = Exact<{
  input: CreateWinterStorageProductMutationInput;
}>;


export type Create_Winter_Storage_ProductMutation = (
  { __typename?: 'Mutation' }
  & { createWinterStorageProduct?: Maybe<(
    { __typename?: 'CreateWinterStorageProductMutationPayload' }
    & { winterStorageProduct?: Maybe<(
      { __typename?: 'WinterStorageProductNode' }
      & Pick<WinterStorageProductNode, 'id' | 'priceValue' | 'priceUnit' | 'taxPercentage'>
    )> }
  )> }
);

export type Winter_Storage_AreasQueryVariables = Exact<{ [key: string]: never; }>;


export type Winter_Storage_AreasQuery = (
  { __typename?: 'Query' }
  & { winterStorageAreas?: Maybe<(
    { __typename?: 'WinterStorageAreaNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'WinterStorageAreaNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'WinterStorageAreaNode' }
        & Pick<WinterStorageAreaNode, 'id'>
        & { properties?: Maybe<(
          { __typename?: 'WinterStorageAreaProperties' }
          & Pick<WinterStorageAreaProperties, 'imageFile' | 'maxWidth' | 'municipality' | 'name' | 'numberOfFreePlaces' | 'numberOfPlaces' | 'servicemapId' | 'streetAddress' | 'wwwUrl' | 'zipCode'>
          & { maps: Array<Maybe<(
            { __typename?: 'WinterStorageAreaMapType' }
            & Pick<WinterStorageAreaMapType, 'id' | 'url'>
          )>>, sections: (
            { __typename?: 'WinterStorageSectionNodeConnection' }
            & { edges: Array<Maybe<(
              { __typename?: 'WinterStorageSectionNodeEdge' }
              & { node?: Maybe<(
                { __typename?: 'WinterStorageSectionNode' }
                & Pick<WinterStorageSectionNode, 'id'>
                & { properties?: Maybe<(
                  { __typename?: 'WinterStorageSectionProperties' }
                  & Pick<WinterStorageSectionProperties, 'electricity' | 'gate' | 'summerStorageForDockingEquipment' | 'summerStorageForTrailers' | 'water'>
                )> }
              )> }
            )>> }
          ) }
        )> }
      )> }
    )>> }
  )> }
);

export type Individual_Winter_Storage_AreaQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Individual_Winter_Storage_AreaQuery = (
  { __typename?: 'Query' }
  & { winterStorageArea?: Maybe<(
    { __typename?: 'WinterStorageAreaNode' }
    & { properties?: Maybe<(
      { __typename?: 'WinterStorageAreaProperties' }
      & Pick<WinterStorageAreaProperties, 'name' | 'servicemapId' | 'zipCode' | 'municipality' | 'streetAddress' | 'wwwUrl' | 'imageFile'>
      & { maps: Array<Maybe<(
        { __typename?: 'WinterStorageAreaMapType' }
        & Pick<WinterStorageAreaMapType, 'id' | 'url'>
      )>>, sections: (
        { __typename?: 'WinterStorageSectionNodeConnection' }
        & { edges: Array<Maybe<(
          { __typename?: 'WinterStorageSectionNodeEdge' }
          & { node?: Maybe<(
            { __typename?: 'WinterStorageSectionNode' }
            & { properties?: Maybe<(
              { __typename?: 'WinterStorageSectionProperties' }
              & Pick<WinterStorageSectionProperties, 'electricity' | 'water' | 'gate' | 'summerStorageForBoats' | 'summerStorageForTrailers' | 'summerStorageForDockingEquipment'>
            )> }
          )> }
        )>> }
      ) }
    )> }
  )> }
);

export const BerthLeaseFragmentDoc = gql`
    fragment BerthLease on BerthApplicationNode {
  lease {
    id
    berth {
      depth
      length
      mooringType
      width
      comment
      isAccessible
      number
      pier {
        properties {
          identifier
          electricity
          gate
          lighting
          mooring
          wasteCollection
          water
          harbor {
            id
            properties {
              name
            }
          }
        }
      }
    }
    order {
      id
      price
      totalPrice
      orderLines {
        edges {
          node {
            id
            price
            product {
              id
              service
              productType
            }
          }
        }
      }
    }
  }
}
    `;
export const AdditionalServicesFragmentDoc = gql`
    fragment AdditionalServices on Query {
  additionalProducts(productType: OPTIONAL_SERVICE) {
    edges {
      node {
        id
        service
        priceValue
        priceUnit
        period
        productType
      }
    }
  }
}
    `;
export const AdditionalServicePricingFragmentDoc = gql`
    fragment AdditionalServicePricing on AdditionalProductNodeConnection {
  edges {
    node {
      id
      service
      priceValue
      priceUnit
      period
      productType
      taxPercentage
    }
  }
}
    `;
export const BerthPricingFragmentDoc = gql`
    fragment BerthPricing on BerthPriceGroupNodeConnection {
  edges {
    node {
      id
      name
      defaultProduct {
        id
        priceUnit
        priceValue
      }
    }
  }
}
    `;
export const HarborServicePricingFragmentDoc = gql`
    fragment HarborServicePricing on AdditionalProductNodeConnection {
  edges {
    node {
      id
      service
      priceValue
      priceUnit
      period
      productType
      taxPercentage
    }
  }
}
    `;
export const WinterStoragePricingFragmentDoc = gql`
    fragment WinterStoragePricing on WinterStorageAreaNodeConnection {
  edges {
    node {
      id
      properties {
        name
        product {
          id
          priceValue
          priceUnit
        }
      }
    }
  }
}
    `;
export const Berth_ApplicationsDocument = gql`
    query BERTH_APPLICATIONS($first: Int!, $after: String, $switchApplications: Boolean, $orderBy: String) {
  berthApplications(first: $first, after: $after, switchApplications: $switchApplications, orderBy: $orderBy) {
    count
    edges {
      node {
        id
        customer {
          id
        }
        berthSwitch {
          berthNumber
          harbor
          harborName
          id
          pier
          reason {
            title
          }
        }
        createdAt
        municipality
        boatType
        boatRegistrationNumber
        boatWidth
        boatLength
        boatDraught
        boatWeight
        boatName
        boatModel
        accessibilityRequired
        status
        lease {
          id
          berth {
            number
            pier {
              properties {
                identifier
                harbor {
                  id
                  properties {
                    name
                  }
                }
              }
            }
          }
        }
        harborChoices {
          harbor
          priority
          harborName
        }
      }
    }
  }
  boatTypes {
    id
    name
  }
}
    `;
export type Berth_ApplicationsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Berth_ApplicationsQuery, Berth_ApplicationsQueryVariables>, 'query'> & ({ variables: Berth_ApplicationsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const Berth_ApplicationsComponent = (props: Berth_ApplicationsComponentProps) => (
      <ApolloReactComponents.Query<Berth_ApplicationsQuery, Berth_ApplicationsQueryVariables> query={Berth_ApplicationsDocument} {...props} />
    );
    

/**
 * __useBerth_ApplicationsQuery__
 *
 * To run a query within a React component, call `useBerth_ApplicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBerth_ApplicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBerth_ApplicationsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      switchApplications: // value for 'switchApplications'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useBerth_ApplicationsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Berth_ApplicationsQuery, Berth_ApplicationsQueryVariables>) {
        return ApolloReactHooks.useQuery<Berth_ApplicationsQuery, Berth_ApplicationsQueryVariables>(Berth_ApplicationsDocument, baseOptions);
      }
export function useBerth_ApplicationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Berth_ApplicationsQuery, Berth_ApplicationsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Berth_ApplicationsQuery, Berth_ApplicationsQueryVariables>(Berth_ApplicationsDocument, baseOptions);
        }
export type Berth_ApplicationsQueryHookResult = ReturnType<typeof useBerth_ApplicationsQuery>;
export type Berth_ApplicationsLazyQueryHookResult = ReturnType<typeof useBerth_ApplicationsLazyQuery>;
export type Berth_ApplicationsQueryResult = ApolloReactCommon.QueryResult<Berth_ApplicationsQuery, Berth_ApplicationsQueryVariables>;
export const Update_Berth_ApplicationDocument = gql`
    mutation UPDATE_BERTH_APPLICATION($input: UpdateBerthApplicationInput!) {
  updateBerthApplication(input: $input) {
    berthApplication {
      id
      customer {
        id
      }
    }
  }
}
    `;
export type Update_Berth_ApplicationMutationFn = ApolloReactCommon.MutationFunction<Update_Berth_ApplicationMutation, Update_Berth_ApplicationMutationVariables>;
export type Update_Berth_ApplicationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Update_Berth_ApplicationMutation, Update_Berth_ApplicationMutationVariables>, 'mutation'>;

    export const Update_Berth_ApplicationComponent = (props: Update_Berth_ApplicationComponentProps) => (
      <ApolloReactComponents.Mutation<Update_Berth_ApplicationMutation, Update_Berth_ApplicationMutationVariables> mutation={Update_Berth_ApplicationDocument} {...props} />
    );
    

/**
 * __useUpdate_Berth_ApplicationMutation__
 *
 * To run a mutation, you first call `useUpdate_Berth_ApplicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_Berth_ApplicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBerthApplicationMutation, { data, loading, error }] = useUpdate_Berth_ApplicationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdate_Berth_ApplicationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Update_Berth_ApplicationMutation, Update_Berth_ApplicationMutationVariables>) {
        return ApolloReactHooks.useMutation<Update_Berth_ApplicationMutation, Update_Berth_ApplicationMutationVariables>(Update_Berth_ApplicationDocument, baseOptions);
      }
export type Update_Berth_ApplicationMutationHookResult = ReturnType<typeof useUpdate_Berth_ApplicationMutation>;
export type Update_Berth_ApplicationMutationResult = ApolloReactCommon.MutationResult<Update_Berth_ApplicationMutation>;
export type Update_Berth_ApplicationMutationOptions = ApolloReactCommon.BaseMutationOptions<Update_Berth_ApplicationMutation, Update_Berth_ApplicationMutationVariables>;
export const Create_New_ProfileDocument = gql`
    mutation CREATE_NEW_PROFILE($firstName: String!, $lastName: String!, $address: String!, $postalCode: String!, $city: String!, $email: String!, $phone: String!) {
  createProfile(input: {serviceType: BERTH, profile: {firstName: $firstName, lastName: $lastName, addAddresses: {address: $address, postalCode: $postalCode, city: $city, primary: true, addressType: NONE}, addEmails: {email: $email, emailType: NONE, primary: true}, addPhones: {phone: $phone, phoneType: NONE, primary: true}}}) {
    profile {
      id
      lastName
      firstName
      primaryAddress {
        address
        city
      }
    }
  }
}
    `;
export type Create_New_ProfileMutationFn = ApolloReactCommon.MutationFunction<Create_New_ProfileMutation, Create_New_ProfileMutationVariables>;
export type Create_New_ProfileComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Create_New_ProfileMutation, Create_New_ProfileMutationVariables>, 'mutation'>;

    export const Create_New_ProfileComponent = (props: Create_New_ProfileComponentProps) => (
      <ApolloReactComponents.Mutation<Create_New_ProfileMutation, Create_New_ProfileMutationVariables> mutation={Create_New_ProfileDocument} {...props} />
    );
    

/**
 * __useCreate_New_ProfileMutation__
 *
 * To run a mutation, you first call `useCreate_New_ProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_New_ProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewProfileMutation, { data, loading, error }] = useCreate_New_ProfileMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      address: // value for 'address'
 *      postalCode: // value for 'postalCode'
 *      city: // value for 'city'
 *      email: // value for 'email'
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useCreate_New_ProfileMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Create_New_ProfileMutation, Create_New_ProfileMutationVariables>) {
        return ApolloReactHooks.useMutation<Create_New_ProfileMutation, Create_New_ProfileMutationVariables>(Create_New_ProfileDocument, baseOptions);
      }
export type Create_New_ProfileMutationHookResult = ReturnType<typeof useCreate_New_ProfileMutation>;
export type Create_New_ProfileMutationResult = ApolloReactCommon.MutationResult<Create_New_ProfileMutation>;
export type Create_New_ProfileMutationOptions = ApolloReactCommon.BaseMutationOptions<Create_New_ProfileMutation, Create_New_ProfileMutationVariables>;
export const Order_Optional_ProductsDocument = gql`
    query ORDER_OPTIONAL_PRODUCTS {
  additionalProducts(productType: OPTIONAL_SERVICE) {
    edges {
      node {
        id
        service
        priceValue
        priceUnit
        period
        productType
      }
    }
  }
}
    `;
export type Order_Optional_ProductsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Order_Optional_ProductsQuery, Order_Optional_ProductsQueryVariables>, 'query'>;

    export const Order_Optional_ProductsComponent = (props: Order_Optional_ProductsComponentProps) => (
      <ApolloReactComponents.Query<Order_Optional_ProductsQuery, Order_Optional_ProductsQueryVariables> query={Order_Optional_ProductsDocument} {...props} />
    );
    

/**
 * __useOrder_Optional_ProductsQuery__
 *
 * To run a query within a React component, call `useOrder_Optional_ProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrder_Optional_ProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrder_Optional_ProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrder_Optional_ProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Order_Optional_ProductsQuery, Order_Optional_ProductsQueryVariables>) {
        return ApolloReactHooks.useQuery<Order_Optional_ProductsQuery, Order_Optional_ProductsQueryVariables>(Order_Optional_ProductsDocument, baseOptions);
      }
export function useOrder_Optional_ProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Order_Optional_ProductsQuery, Order_Optional_ProductsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Order_Optional_ProductsQuery, Order_Optional_ProductsQueryVariables>(Order_Optional_ProductsDocument, baseOptions);
        }
export type Order_Optional_ProductsQueryHookResult = ReturnType<typeof useOrder_Optional_ProductsQuery>;
export type Order_Optional_ProductsLazyQueryHookResult = ReturnType<typeof useOrder_Optional_ProductsLazyQuery>;
export type Order_Optional_ProductsQueryResult = ApolloReactCommon.QueryResult<Order_Optional_ProductsQuery, Order_Optional_ProductsQueryVariables>;
export const Filtered_CustomersDocument = gql`
    query FILTERED_CUSTOMERS($first: Int!, $after: String, $firstName: String, $lastName: String, $email: String, $address: String, $orderBy: String) {
  profiles(first: $first, after: $after, serviceType: BERTH, firstName: $firstName, lastName: $lastName, emails_Email: $email, addresses_Address: $address, orderBy: $orderBy) {
    count
    edges {
      node {
        id
        firstName
        lastName
        primaryAddress {
          address
          postalCode
          city
        }
        organization {
          businessId
          organizationType
        }
        berthLeases {
          edges {
            node {
              berth {
                number
                pier {
                  properties {
                    identifier
                    harbor {
                      id
                      properties {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
        berthApplications {
          edges {
            node {
              berthSwitch {
                harborName
              }
            }
          }
        }
      }
    }
  }
}
    `;
export type Filtered_CustomersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Filtered_CustomersQuery, Filtered_CustomersQueryVariables>, 'query'> & ({ variables: Filtered_CustomersQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const Filtered_CustomersComponent = (props: Filtered_CustomersComponentProps) => (
      <ApolloReactComponents.Query<Filtered_CustomersQuery, Filtered_CustomersQueryVariables> query={Filtered_CustomersDocument} {...props} />
    );
    

/**
 * __useFiltered_CustomersQuery__
 *
 * To run a query within a React component, call `useFiltered_CustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFiltered_CustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFiltered_CustomersQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      address: // value for 'address'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFiltered_CustomersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Filtered_CustomersQuery, Filtered_CustomersQueryVariables>) {
        return ApolloReactHooks.useQuery<Filtered_CustomersQuery, Filtered_CustomersQueryVariables>(Filtered_CustomersDocument, baseOptions);
      }
export function useFiltered_CustomersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Filtered_CustomersQuery, Filtered_CustomersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Filtered_CustomersQuery, Filtered_CustomersQueryVariables>(Filtered_CustomersDocument, baseOptions);
        }
export type Filtered_CustomersQueryHookResult = ReturnType<typeof useFiltered_CustomersQuery>;
export type Filtered_CustomersLazyQueryHookResult = ReturnType<typeof useFiltered_CustomersLazyQuery>;
export type Filtered_CustomersQueryResult = ApolloReactCommon.QueryResult<Filtered_CustomersQuery, Filtered_CustomersQueryVariables>;
export const Individual_ApplicationDocument = gql`
    query INDIVIDUAL_APPLICATION($id: ID!) {
  berthApplication(id: $id) {
    id
    firstName
    lastName
    address
    municipality
    zipCode
    phoneNumber
    email
    businessId
    companyName
    language
    customer {
      comment
      firstName
      invoicingType
      lastName
      id
      organization {
        address
        businessId
        city
        name
        organizationType
        postalCode
      }
      primaryAddress {
        address
        postalCode
        city
      }
      primaryEmail {
        email
      }
      primaryPhone {
        phone
      }
      language
    }
    berthSwitch {
      berthNumber
      harbor
      harborName
      id
      pier
      reason {
        title
      }
    }
    createdAt
    municipality
    boatType
    boatRegistrationNumber
    boatWidth
    boatLength
    boatDraught
    boatWeight
    boatName
    boatModel
    accessibilityRequired
    status
    harborChoices {
      harbor
      priority
      harborName
    }
    ...BerthLease
  }
  boatTypes {
    id
    name
  }
  ...AdditionalServices
}
    ${BerthLeaseFragmentDoc}
${AdditionalServicesFragmentDoc}`;
export type Individual_ApplicationComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Individual_ApplicationQuery, Individual_ApplicationQueryVariables>, 'query'> & ({ variables: Individual_ApplicationQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const Individual_ApplicationComponent = (props: Individual_ApplicationComponentProps) => (
      <ApolloReactComponents.Query<Individual_ApplicationQuery, Individual_ApplicationQueryVariables> query={Individual_ApplicationDocument} {...props} />
    );
    

/**
 * __useIndividual_ApplicationQuery__
 *
 * To run a query within a React component, call `useIndividual_ApplicationQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndividual_ApplicationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndividual_ApplicationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useIndividual_ApplicationQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Individual_ApplicationQuery, Individual_ApplicationQueryVariables>) {
        return ApolloReactHooks.useQuery<Individual_ApplicationQuery, Individual_ApplicationQueryVariables>(Individual_ApplicationDocument, baseOptions);
      }
export function useIndividual_ApplicationLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Individual_ApplicationQuery, Individual_ApplicationQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Individual_ApplicationQuery, Individual_ApplicationQueryVariables>(Individual_ApplicationDocument, baseOptions);
        }
export type Individual_ApplicationQueryHookResult = ReturnType<typeof useIndividual_ApplicationQuery>;
export type Individual_ApplicationLazyQueryHookResult = ReturnType<typeof useIndividual_ApplicationLazyQuery>;
export type Individual_ApplicationQueryResult = ApolloReactCommon.QueryResult<Individual_ApplicationQuery, Individual_ApplicationQueryVariables>;
export const CustomersDocument = gql`
    query CUSTOMERS($first: Int!, $after: String, $firstName: String, $lastName: String, $email: String, $address: String, $orderBy: String) {
  profiles(first: $first, after: $after, serviceType: BERTH, firstName: $firstName, lastName: $lastName, emails_Email: $email, addresses_Address: $address, orderBy: $orderBy) {
    count
    edges {
      node {
        id
        firstName
        lastName
        nickname
        comment
        organization {
          name
          address
          postalCode
          city
          businessId
          organizationType
        }
        primaryAddress {
          address
          city
          postalCode
        }
        primaryPhone {
          phone
        }
        primaryEmail {
          email
        }
        serviceConnections {
          edges {
            node {
              id
              service {
                id
                type
              }
            }
          }
        }
        contactMethod
        image
        boats {
          edges {
            node {
              id
              name
            }
          }
        }
        berthApplications {
          edges {
            node {
              id
              createdAt
            }
          }
        }
        berthLeases {
          edges {
            node {
              id
              berth {
                number
                pier {
                  properties {
                    identifier
                    harbor {
                      properties {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;
export type CustomersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CustomersQuery, CustomersQueryVariables>, 'query'> & ({ variables: CustomersQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CustomersComponent = (props: CustomersComponentProps) => (
      <ApolloReactComponents.Query<CustomersQuery, CustomersQueryVariables> query={CustomersDocument} {...props} />
    );
    

/**
 * __useCustomersQuery__
 *
 * To run a query within a React component, call `useCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomersQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      address: // value for 'address'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useCustomersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CustomersQuery, CustomersQueryVariables>) {
        return ApolloReactHooks.useQuery<CustomersQuery, CustomersQueryVariables>(CustomersDocument, baseOptions);
      }
export function useCustomersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CustomersQuery, CustomersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CustomersQuery, CustomersQueryVariables>(CustomersDocument, baseOptions);
        }
export type CustomersQueryHookResult = ReturnType<typeof useCustomersQuery>;
export type CustomersLazyQueryHookResult = ReturnType<typeof useCustomersLazyQuery>;
export type CustomersQueryResult = ApolloReactCommon.QueryResult<CustomersQuery, CustomersQueryVariables>;
export const Update_Customer_BoatDocument = gql`
    mutation UPDATE_CUSTOMER_BOAT($input: UpdateBoatMutationInput!) {
  updateBoat(input: $input) {
    clientMutationId
  }
}
    `;
export type Update_Customer_BoatMutationFn = ApolloReactCommon.MutationFunction<Update_Customer_BoatMutation, Update_Customer_BoatMutationVariables>;
export type Update_Customer_BoatComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Update_Customer_BoatMutation, Update_Customer_BoatMutationVariables>, 'mutation'>;

    export const Update_Customer_BoatComponent = (props: Update_Customer_BoatComponentProps) => (
      <ApolloReactComponents.Mutation<Update_Customer_BoatMutation, Update_Customer_BoatMutationVariables> mutation={Update_Customer_BoatDocument} {...props} />
    );
    

/**
 * __useUpdate_Customer_BoatMutation__
 *
 * To run a mutation, you first call `useUpdate_Customer_BoatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_Customer_BoatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomerBoatMutation, { data, loading, error }] = useUpdate_Customer_BoatMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdate_Customer_BoatMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Update_Customer_BoatMutation, Update_Customer_BoatMutationVariables>) {
        return ApolloReactHooks.useMutation<Update_Customer_BoatMutation, Update_Customer_BoatMutationVariables>(Update_Customer_BoatDocument, baseOptions);
      }
export type Update_Customer_BoatMutationHookResult = ReturnType<typeof useUpdate_Customer_BoatMutation>;
export type Update_Customer_BoatMutationResult = ApolloReactCommon.MutationResult<Update_Customer_BoatMutation>;
export type Update_Customer_BoatMutationOptions = ApolloReactCommon.BaseMutationOptions<Update_Customer_BoatMutation, Update_Customer_BoatMutationVariables>;
export const Delete_Customer_BoatDocument = gql`
    mutation DELETE_CUSTOMER_BOAT($input: DeleteBoatMutationInput!) {
  deleteBoat(input: $input) {
    clientMutationId
  }
}
    `;
export type Delete_Customer_BoatMutationFn = ApolloReactCommon.MutationFunction<Delete_Customer_BoatMutation, Delete_Customer_BoatMutationVariables>;
export type Delete_Customer_BoatComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Delete_Customer_BoatMutation, Delete_Customer_BoatMutationVariables>, 'mutation'>;

    export const Delete_Customer_BoatComponent = (props: Delete_Customer_BoatComponentProps) => (
      <ApolloReactComponents.Mutation<Delete_Customer_BoatMutation, Delete_Customer_BoatMutationVariables> mutation={Delete_Customer_BoatDocument} {...props} />
    );
    

/**
 * __useDelete_Customer_BoatMutation__
 *
 * To run a mutation, you first call `useDelete_Customer_BoatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelete_Customer_BoatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCustomerBoatMutation, { data, loading, error }] = useDelete_Customer_BoatMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDelete_Customer_BoatMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Delete_Customer_BoatMutation, Delete_Customer_BoatMutationVariables>) {
        return ApolloReactHooks.useMutation<Delete_Customer_BoatMutation, Delete_Customer_BoatMutationVariables>(Delete_Customer_BoatDocument, baseOptions);
      }
export type Delete_Customer_BoatMutationHookResult = ReturnType<typeof useDelete_Customer_BoatMutation>;
export type Delete_Customer_BoatMutationResult = ApolloReactCommon.MutationResult<Delete_Customer_BoatMutation>;
export type Delete_Customer_BoatMutationOptions = ApolloReactCommon.BaseMutationOptions<Delete_Customer_BoatMutation, Delete_Customer_BoatMutationVariables>;
export const Individual_CustomerDocument = gql`
    query INDIVIDUAL_CUSTOMER($id: ID!) {
  profile(id: $id, serviceType: BERTH) {
    comment
    firstName
    invoicingType
    lastName
    id
    organization {
      address
      businessId
      city
      name
      organizationType
      postalCode
    }
    primaryAddress {
      address
      postalCode
      city
    }
    primaryEmail {
      email
    }
    primaryPhone {
      phone
    }
    language
    boats {
      edges {
        node {
          id
          boatType {
            id
            name
          }
          width
          length
          draught
          weight
          name
          model
          registrationNumber
          propulsion
          hullMaterial
          intendedUse
          certificates {
            file
            certificateType
            validUntil
            checkedAt
            checkedBy
          }
        }
      }
    }
    berthLeases {
      edges {
        node {
          id
          status
          startDate
          endDate
          berth {
            number
            pier {
              properties {
                identifier
                harbor {
                  id
                  properties {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
    orders {
      edges {
        node {
          dueDate
          totalPrice
          totalTaxPercentage
          price
          taxPercentage
          status
          orderLines {
            edges {
              node {
                product {
                  service
                }
                price
                taxPercentage
              }
            }
          }
          lease {
            ... on BerthLeaseNode {
              startDate
              endDate
              berth {
                number
                pier {
                  properties {
                    identifier
                    harbor {
                      properties {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    berthApplications {
      edges {
        node {
          id
          berthSwitch {
            berthNumber
            harbor
            harborName
            id
            pier
            reason {
              title
            }
          }
          createdAt
          status
          lease {
            id
            berth {
              number
              pier {
                properties {
                  identifier
                  harbor {
                    id
                    properties {
                      name
                    }
                  }
                }
              }
            }
          }
          boatType
          boatRegistrationNumber
          boatWidth
          boatLength
          boatDraught
          boatWeight
          boatName
          boatModel
          harborChoices {
            harbor
            priority
            harborName
          }
          accessibilityRequired
        }
      }
    }
  }
  boatTypes {
    id
    name
  }
}
    `;
export type Individual_CustomerComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Individual_CustomerQuery, Individual_CustomerQueryVariables>, 'query'> & ({ variables: Individual_CustomerQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const Individual_CustomerComponent = (props: Individual_CustomerComponentProps) => (
      <ApolloReactComponents.Query<Individual_CustomerQuery, Individual_CustomerQueryVariables> query={Individual_CustomerDocument} {...props} />
    );
    

/**
 * __useIndividual_CustomerQuery__
 *
 * To run a query within a React component, call `useIndividual_CustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndividual_CustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndividual_CustomerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useIndividual_CustomerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Individual_CustomerQuery, Individual_CustomerQueryVariables>) {
        return ApolloReactHooks.useQuery<Individual_CustomerQuery, Individual_CustomerQueryVariables>(Individual_CustomerDocument, baseOptions);
      }
export function useIndividual_CustomerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Individual_CustomerQuery, Individual_CustomerQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Individual_CustomerQuery, Individual_CustomerQueryVariables>(Individual_CustomerDocument, baseOptions);
        }
export type Individual_CustomerQueryHookResult = ReturnType<typeof useIndividual_CustomerQuery>;
export type Individual_CustomerLazyQueryHookResult = ReturnType<typeof useIndividual_CustomerLazyQuery>;
export type Individual_CustomerQueryResult = ApolloReactCommon.QueryResult<Individual_CustomerQuery, Individual_CustomerQueryVariables>;
export const HarborsDocument = gql`
    query HARBORS {
  harbors {
    edges {
      node {
        id
        properties {
          name
          numberOfPlaces
          numberOfFreePlaces
          streetAddress
          zipCode
          municipality
          wwwUrl
          imageFile
          maps {
            id
            url
          }
          servicemapId
          maxWidth
          piers {
            edges {
              node {
                id
                properties {
                  electricity
                  wasteCollection
                  gate
                  water
                  lighting
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;
export type HarborsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<HarborsQuery, HarborsQueryVariables>, 'query'>;

    export const HarborsComponent = (props: HarborsComponentProps) => (
      <ApolloReactComponents.Query<HarborsQuery, HarborsQueryVariables> query={HarborsDocument} {...props} />
    );
    

/**
 * __useHarborsQuery__
 *
 * To run a query within a React component, call `useHarborsQuery` and pass it any options that fit your needs.
 * When your component renders, `useHarborsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHarborsQuery({
 *   variables: {
 *   },
 * });
 */
export function useHarborsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HarborsQuery, HarborsQueryVariables>) {
        return ApolloReactHooks.useQuery<HarborsQuery, HarborsQueryVariables>(HarborsDocument, baseOptions);
      }
export function useHarborsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HarborsQuery, HarborsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HarborsQuery, HarborsQueryVariables>(HarborsDocument, baseOptions);
        }
export type HarborsQueryHookResult = ReturnType<typeof useHarborsQuery>;
export type HarborsLazyQueryHookResult = ReturnType<typeof useHarborsLazyQuery>;
export type HarborsQueryResult = ApolloReactCommon.QueryResult<HarborsQuery, HarborsQueryVariables>;
export const Update_BerthDocument = gql`
    mutation UPDATE_BERTH($input: UpdateBerthMutationInput!) {
  updateBerth(input: $input) {
    clientMutationId
  }
}
    `;
export type Update_BerthMutationFn = ApolloReactCommon.MutationFunction<Update_BerthMutation, Update_BerthMutationVariables>;
export type Update_BerthComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Update_BerthMutation, Update_BerthMutationVariables>, 'mutation'>;

    export const Update_BerthComponent = (props: Update_BerthComponentProps) => (
      <ApolloReactComponents.Mutation<Update_BerthMutation, Update_BerthMutationVariables> mutation={Update_BerthDocument} {...props} />
    );
    

/**
 * __useUpdate_BerthMutation__
 *
 * To run a mutation, you first call `useUpdate_BerthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_BerthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBerthMutation, { data, loading, error }] = useUpdate_BerthMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdate_BerthMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Update_BerthMutation, Update_BerthMutationVariables>) {
        return ApolloReactHooks.useMutation<Update_BerthMutation, Update_BerthMutationVariables>(Update_BerthDocument, baseOptions);
      }
export type Update_BerthMutationHookResult = ReturnType<typeof useUpdate_BerthMutation>;
export type Update_BerthMutationResult = ApolloReactCommon.MutationResult<Update_BerthMutation>;
export type Update_BerthMutationOptions = ApolloReactCommon.BaseMutationOptions<Update_BerthMutation, Update_BerthMutationVariables>;
export const Delete_BerthDocument = gql`
    mutation DELETE_BERTH($input: DeleteBerthMutationInput!) {
  deleteBerth(input: $input) {
    clientMutationId
  }
}
    `;
export type Delete_BerthMutationFn = ApolloReactCommon.MutationFunction<Delete_BerthMutation, Delete_BerthMutationVariables>;
export type Delete_BerthComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Delete_BerthMutation, Delete_BerthMutationVariables>, 'mutation'>;

    export const Delete_BerthComponent = (props: Delete_BerthComponentProps) => (
      <ApolloReactComponents.Mutation<Delete_BerthMutation, Delete_BerthMutationVariables> mutation={Delete_BerthDocument} {...props} />
    );
    

/**
 * __useDelete_BerthMutation__
 *
 * To run a mutation, you first call `useDelete_BerthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelete_BerthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBerthMutation, { data, loading, error }] = useDelete_BerthMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDelete_BerthMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Delete_BerthMutation, Delete_BerthMutationVariables>) {
        return ApolloReactHooks.useMutation<Delete_BerthMutation, Delete_BerthMutationVariables>(Delete_BerthDocument, baseOptions);
      }
export type Delete_BerthMutationHookResult = ReturnType<typeof useDelete_BerthMutation>;
export type Delete_BerthMutationResult = ApolloReactCommon.MutationResult<Delete_BerthMutation>;
export type Delete_BerthMutationOptions = ApolloReactCommon.BaseMutationOptions<Delete_BerthMutation, Delete_BerthMutationVariables>;
export const Create_BerthDocument = gql`
    mutation CREATE_BERTH($input: CreateBerthMutationInput!) {
  createBerth(input: $input) {
    clientMutationId
  }
}
    `;
export type Create_BerthMutationFn = ApolloReactCommon.MutationFunction<Create_BerthMutation, Create_BerthMutationVariables>;
export type Create_BerthComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Create_BerthMutation, Create_BerthMutationVariables>, 'mutation'>;

    export const Create_BerthComponent = (props: Create_BerthComponentProps) => (
      <ApolloReactComponents.Mutation<Create_BerthMutation, Create_BerthMutationVariables> mutation={Create_BerthDocument} {...props} />
    );
    

/**
 * __useCreate_BerthMutation__
 *
 * To run a mutation, you first call `useCreate_BerthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_BerthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBerthMutation, { data, loading, error }] = useCreate_BerthMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreate_BerthMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Create_BerthMutation, Create_BerthMutationVariables>) {
        return ApolloReactHooks.useMutation<Create_BerthMutation, Create_BerthMutationVariables>(Create_BerthDocument, baseOptions);
      }
export type Create_BerthMutationHookResult = ReturnType<typeof useCreate_BerthMutation>;
export type Create_BerthMutationResult = ApolloReactCommon.MutationResult<Create_BerthMutation>;
export type Create_BerthMutationOptions = ApolloReactCommon.BaseMutationOptions<Create_BerthMutation, Create_BerthMutationVariables>;
export const Individual_BerthDocument = gql`
    query INDIVIDUAL_BERTH($id: ID!) {
  berth(id: $id) {
    number
    comment
    isActive
    pier {
      id
      properties {
        identifier
      }
    }
    mooringType
    width
    length
    depth
  }
}
    `;
export type Individual_BerthComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Individual_BerthQuery, Individual_BerthQueryVariables>, 'query'> & ({ variables: Individual_BerthQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const Individual_BerthComponent = (props: Individual_BerthComponentProps) => (
      <ApolloReactComponents.Query<Individual_BerthQuery, Individual_BerthQueryVariables> query={Individual_BerthDocument} {...props} />
    );
    

/**
 * __useIndividual_BerthQuery__
 *
 * To run a query within a React component, call `useIndividual_BerthQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndividual_BerthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndividual_BerthQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useIndividual_BerthQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Individual_BerthQuery, Individual_BerthQueryVariables>) {
        return ApolloReactHooks.useQuery<Individual_BerthQuery, Individual_BerthQueryVariables>(Individual_BerthDocument, baseOptions);
      }
export function useIndividual_BerthLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Individual_BerthQuery, Individual_BerthQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Individual_BerthQuery, Individual_BerthQueryVariables>(Individual_BerthDocument, baseOptions);
        }
export type Individual_BerthQueryHookResult = ReturnType<typeof useIndividual_BerthQuery>;
export type Individual_BerthLazyQueryHookResult = ReturnType<typeof useIndividual_BerthLazyQuery>;
export type Individual_BerthQueryResult = ApolloReactCommon.QueryResult<Individual_BerthQuery, Individual_BerthQueryVariables>;
export const Update_HarborDocument = gql`
    mutation UPDATE_HARBOR($input: UpdateHarborMutationInput!) {
  updateHarbor(input: $input) {
    clientMutationId
  }
}
    `;
export type Update_HarborMutationFn = ApolloReactCommon.MutationFunction<Update_HarborMutation, Update_HarborMutationVariables>;
export type Update_HarborComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Update_HarborMutation, Update_HarborMutationVariables>, 'mutation'>;

    export const Update_HarborComponent = (props: Update_HarborComponentProps) => (
      <ApolloReactComponents.Mutation<Update_HarborMutation, Update_HarborMutationVariables> mutation={Update_HarborDocument} {...props} />
    );
    

/**
 * __useUpdate_HarborMutation__
 *
 * To run a mutation, you first call `useUpdate_HarborMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_HarborMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHarborMutation, { data, loading, error }] = useUpdate_HarborMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdate_HarborMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Update_HarborMutation, Update_HarborMutationVariables>) {
        return ApolloReactHooks.useMutation<Update_HarborMutation, Update_HarborMutationVariables>(Update_HarborDocument, baseOptions);
      }
export type Update_HarborMutationHookResult = ReturnType<typeof useUpdate_HarborMutation>;
export type Update_HarborMutationResult = ApolloReactCommon.MutationResult<Update_HarborMutation>;
export type Update_HarborMutationOptions = ApolloReactCommon.BaseMutationOptions<Update_HarborMutation, Update_HarborMutationVariables>;
export const Harbor_FormDocument = gql`
    query HARBOR_FORM($id: ID!) {
  harbor(id: $id) {
    id
    properties {
      name
      streetAddress
      zipCode
      municipality
      wwwUrl
      imageFile
      maps {
        id
        url
      }
    }
  }
}
    `;
export type Harbor_FormComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Harbor_FormQuery, Harbor_FormQueryVariables>, 'query'> & ({ variables: Harbor_FormQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const Harbor_FormComponent = (props: Harbor_FormComponentProps) => (
      <ApolloReactComponents.Query<Harbor_FormQuery, Harbor_FormQueryVariables> query={Harbor_FormDocument} {...props} />
    );
    

/**
 * __useHarbor_FormQuery__
 *
 * To run a query within a React component, call `useHarbor_FormQuery` and pass it any options that fit your needs.
 * When your component renders, `useHarbor_FormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHarbor_FormQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useHarbor_FormQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Harbor_FormQuery, Harbor_FormQueryVariables>) {
        return ApolloReactHooks.useQuery<Harbor_FormQuery, Harbor_FormQueryVariables>(Harbor_FormDocument, baseOptions);
      }
export function useHarbor_FormLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Harbor_FormQuery, Harbor_FormQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Harbor_FormQuery, Harbor_FormQueryVariables>(Harbor_FormDocument, baseOptions);
        }
export type Harbor_FormQueryHookResult = ReturnType<typeof useHarbor_FormQuery>;
export type Harbor_FormLazyQueryHookResult = ReturnType<typeof useHarbor_FormLazyQuery>;
export type Harbor_FormQueryResult = ApolloReactCommon.QueryResult<Harbor_FormQuery, Harbor_FormQueryVariables>;
export const Create_PierDocument = gql`
    mutation CREATE_PIER($input: CreatePierMutationInput!) {
  createPier(input: $input) {
    clientMutationId
  }
}
    `;
export type Create_PierMutationFn = ApolloReactCommon.MutationFunction<Create_PierMutation, Create_PierMutationVariables>;
export type Create_PierComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Create_PierMutation, Create_PierMutationVariables>, 'mutation'>;

    export const Create_PierComponent = (props: Create_PierComponentProps) => (
      <ApolloReactComponents.Mutation<Create_PierMutation, Create_PierMutationVariables> mutation={Create_PierDocument} {...props} />
    );
    

/**
 * __useCreate_PierMutation__
 *
 * To run a mutation, you first call `useCreate_PierMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_PierMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPierMutation, { data, loading, error }] = useCreate_PierMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreate_PierMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Create_PierMutation, Create_PierMutationVariables>) {
        return ApolloReactHooks.useMutation<Create_PierMutation, Create_PierMutationVariables>(Create_PierDocument, baseOptions);
      }
export type Create_PierMutationHookResult = ReturnType<typeof useCreate_PierMutation>;
export type Create_PierMutationResult = ApolloReactCommon.MutationResult<Create_PierMutation>;
export type Create_PierMutationOptions = ApolloReactCommon.BaseMutationOptions<Create_PierMutation, Create_PierMutationVariables>;
export const Update_PierDocument = gql`
    mutation UPDATE_PIER($input: UpdatePierMutationInput!) {
  updatePier(input: $input) {
    clientMutationId
  }
}
    `;
export type Update_PierMutationFn = ApolloReactCommon.MutationFunction<Update_PierMutation, Update_PierMutationVariables>;
export type Update_PierComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Update_PierMutation, Update_PierMutationVariables>, 'mutation'>;

    export const Update_PierComponent = (props: Update_PierComponentProps) => (
      <ApolloReactComponents.Mutation<Update_PierMutation, Update_PierMutationVariables> mutation={Update_PierDocument} {...props} />
    );
    

/**
 * __useUpdate_PierMutation__
 *
 * To run a mutation, you first call `useUpdate_PierMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_PierMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePierMutation, { data, loading, error }] = useUpdate_PierMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdate_PierMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Update_PierMutation, Update_PierMutationVariables>) {
        return ApolloReactHooks.useMutation<Update_PierMutation, Update_PierMutationVariables>(Update_PierDocument, baseOptions);
      }
export type Update_PierMutationHookResult = ReturnType<typeof useUpdate_PierMutation>;
export type Update_PierMutationResult = ApolloReactCommon.MutationResult<Update_PierMutation>;
export type Update_PierMutationOptions = ApolloReactCommon.BaseMutationOptions<Update_PierMutation, Update_PierMutationVariables>;
export const Delete_PierDocument = gql`
    mutation DELETE_PIER($input: DeletePierMutationInput!) {
  deletePier(input: $input) {
    clientMutationId
  }
}
    `;
export type Delete_PierMutationFn = ApolloReactCommon.MutationFunction<Delete_PierMutation, Delete_PierMutationVariables>;
export type Delete_PierComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Delete_PierMutation, Delete_PierMutationVariables>, 'mutation'>;

    export const Delete_PierComponent = (props: Delete_PierComponentProps) => (
      <ApolloReactComponents.Mutation<Delete_PierMutation, Delete_PierMutationVariables> mutation={Delete_PierDocument} {...props} />
    );
    

/**
 * __useDelete_PierMutation__
 *
 * To run a mutation, you first call `useDelete_PierMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelete_PierMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePierMutation, { data, loading, error }] = useDelete_PierMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDelete_PierMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Delete_PierMutation, Delete_PierMutationVariables>) {
        return ApolloReactHooks.useMutation<Delete_PierMutation, Delete_PierMutationVariables>(Delete_PierDocument, baseOptions);
      }
export type Delete_PierMutationHookResult = ReturnType<typeof useDelete_PierMutation>;
export type Delete_PierMutationResult = ApolloReactCommon.MutationResult<Delete_PierMutation>;
export type Delete_PierMutationOptions = ApolloReactCommon.BaseMutationOptions<Delete_PierMutation, Delete_PierMutationVariables>;
export const Boat_TypesDocument = gql`
    query BOAT_TYPES {
  boatTypes {
    id
    name
  }
}
    `;
export type Boat_TypesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Boat_TypesQuery, Boat_TypesQueryVariables>, 'query'>;

    export const Boat_TypesComponent = (props: Boat_TypesComponentProps) => (
      <ApolloReactComponents.Query<Boat_TypesQuery, Boat_TypesQueryVariables> query={Boat_TypesDocument} {...props} />
    );
    

/**
 * __useBoat_TypesQuery__
 *
 * To run a query within a React component, call `useBoat_TypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoat_TypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoat_TypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useBoat_TypesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Boat_TypesQuery, Boat_TypesQueryVariables>) {
        return ApolloReactHooks.useQuery<Boat_TypesQuery, Boat_TypesQueryVariables>(Boat_TypesDocument, baseOptions);
      }
export function useBoat_TypesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Boat_TypesQuery, Boat_TypesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Boat_TypesQuery, Boat_TypesQueryVariables>(Boat_TypesDocument, baseOptions);
        }
export type Boat_TypesQueryHookResult = ReturnType<typeof useBoat_TypesQuery>;
export type Boat_TypesLazyQueryHookResult = ReturnType<typeof useBoat_TypesLazyQuery>;
export type Boat_TypesQueryResult = ApolloReactCommon.QueryResult<Boat_TypesQuery, Boat_TypesQueryVariables>;
export const Pier_And_Boat_TypesDocument = gql`
    query PIER_AND_BOAT_TYPES($id: ID!) {
  pier(id: $id) {
    properties {
      identifier
      suitableBoatTypes {
        id
      }
      mooring
      lighting
      electricity
      gate
      wasteCollection
      water
      personalElectricity
    }
  }
  boatTypes {
    id
    name
  }
}
    `;
export type Pier_And_Boat_TypesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Pier_And_Boat_TypesQuery, Pier_And_Boat_TypesQueryVariables>, 'query'> & ({ variables: Pier_And_Boat_TypesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const Pier_And_Boat_TypesComponent = (props: Pier_And_Boat_TypesComponentProps) => (
      <ApolloReactComponents.Query<Pier_And_Boat_TypesQuery, Pier_And_Boat_TypesQueryVariables> query={Pier_And_Boat_TypesDocument} {...props} />
    );
    

/**
 * __usePier_And_Boat_TypesQuery__
 *
 * To run a query within a React component, call `usePier_And_Boat_TypesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePier_And_Boat_TypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePier_And_Boat_TypesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePier_And_Boat_TypesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Pier_And_Boat_TypesQuery, Pier_And_Boat_TypesQueryVariables>) {
        return ApolloReactHooks.useQuery<Pier_And_Boat_TypesQuery, Pier_And_Boat_TypesQueryVariables>(Pier_And_Boat_TypesDocument, baseOptions);
      }
export function usePier_And_Boat_TypesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Pier_And_Boat_TypesQuery, Pier_And_Boat_TypesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Pier_And_Boat_TypesQuery, Pier_And_Boat_TypesQueryVariables>(Pier_And_Boat_TypesDocument, baseOptions);
        }
export type Pier_And_Boat_TypesQueryHookResult = ReturnType<typeof usePier_And_Boat_TypesQuery>;
export type Pier_And_Boat_TypesLazyQueryHookResult = ReturnType<typeof usePier_And_Boat_TypesLazyQuery>;
export type Pier_And_Boat_TypesQueryResult = ApolloReactCommon.QueryResult<Pier_And_Boat_TypesQuery, Pier_And_Boat_TypesQueryVariables>;
export const Individual_HarborDocument = gql`
    query INDIVIDUAL_HARBOR($id: ID!) {
  harbor(id: $id) {
    id
    properties {
      name
      numberOfPlaces
      numberOfFreePlaces
      streetAddress
      zipCode
      municipality
      wwwUrl
      imageFile
      maps {
        id
        url
      }
      servicemapId
      maxWidth
      piers {
        edges {
          node {
            id
            properties {
              identifier
              electricity
              wasteCollection
              water
              lighting
              gate
              suitableBoatTypes {
                name
              }
              berths {
                edges {
                  node {
                    id
                    isActive
                    number
                    width
                    length
                    depth
                    mooringType
                    comment
                    pier {
                      id
                      properties {
                        identifier
                      }
                    }
                    leases {
                      edges {
                        node {
                          customer {
                            id
                            firstName
                            lastName
                          }
                          status
                          startDate
                          endDate
                          isActive
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;
export type Individual_HarborComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Individual_HarborQuery, Individual_HarborQueryVariables>, 'query'> & ({ variables: Individual_HarborQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const Individual_HarborComponent = (props: Individual_HarborComponentProps) => (
      <ApolloReactComponents.Query<Individual_HarborQuery, Individual_HarborQueryVariables> query={Individual_HarborDocument} {...props} />
    );
    

/**
 * __useIndividual_HarborQuery__
 *
 * To run a query within a React component, call `useIndividual_HarborQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndividual_HarborQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndividual_HarborQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useIndividual_HarborQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Individual_HarborQuery, Individual_HarborQueryVariables>) {
        return ApolloReactHooks.useQuery<Individual_HarborQuery, Individual_HarborQueryVariables>(Individual_HarborDocument, baseOptions);
      }
export function useIndividual_HarborLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Individual_HarborQuery, Individual_HarborQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Individual_HarborQuery, Individual_HarborQueryVariables>(Individual_HarborDocument, baseOptions);
        }
export type Individual_HarborQueryHookResult = ReturnType<typeof useIndividual_HarborQuery>;
export type Individual_HarborLazyQueryHookResult = ReturnType<typeof useIndividual_HarborLazyQuery>;
export type Individual_HarborQueryResult = ApolloReactCommon.QueryResult<Individual_HarborQuery, Individual_HarborQueryVariables>;
export const Create_LeaseDocument = gql`
    mutation CREATE_LEASE($input: CreateBerthLeaseMutationInput!) {
  createBerthLease(input: $input) {
    berthLease {
      id
      status
    }
  }
}
    `;
export type Create_LeaseMutationFn = ApolloReactCommon.MutationFunction<Create_LeaseMutation, Create_LeaseMutationVariables>;
export type Create_LeaseComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Create_LeaseMutation, Create_LeaseMutationVariables>, 'mutation'>;

    export const Create_LeaseComponent = (props: Create_LeaseComponentProps) => (
      <ApolloReactComponents.Mutation<Create_LeaseMutation, Create_LeaseMutationVariables> mutation={Create_LeaseDocument} {...props} />
    );
    

/**
 * __useCreate_LeaseMutation__
 *
 * To run a mutation, you first call `useCreate_LeaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_LeaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLeaseMutation, { data, loading, error }] = useCreate_LeaseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreate_LeaseMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Create_LeaseMutation, Create_LeaseMutationVariables>) {
        return ApolloReactHooks.useMutation<Create_LeaseMutation, Create_LeaseMutationVariables>(Create_LeaseDocument, baseOptions);
      }
export type Create_LeaseMutationHookResult = ReturnType<typeof useCreate_LeaseMutation>;
export type Create_LeaseMutationResult = ApolloReactCommon.MutationResult<Create_LeaseMutation>;
export type Create_LeaseMutationOptions = ApolloReactCommon.BaseMutationOptions<Create_LeaseMutation, Create_LeaseMutationVariables>;
export const OfferDocument = gql`
    query OFFER($applicationId: ID!, $servicemapId: String!) {
  berthApplication(id: $applicationId) {
    id
    createdAt
    status
    berthSwitch {
      id
    }
    customer {
      id
    }
    boatType
    boatRegistrationNumber
    boatName
    boatModel
    boatWidth
    boatLength
    boatDraught
    boatWeight
  }
  boatTypes {
    id
    name
  }
  harborByServicemapId(servicemapId: $servicemapId) {
    id
    properties {
      name
      servicemapId
      imageFile
      maps {
        id
        url
      }
      streetAddress
      municipality
      zipCode
      maxWidth
      numberOfPlaces
      numberOfFreePlaces
      piers(forApplication: $applicationId) {
        edges {
          node {
            id
            properties {
              identifier
              electricity
              gate
              water
              lighting
              wasteCollection
              berths {
                edges {
                  node {
                    id
                    number
                    width
                    length
                    depth
                    mooringType
                    comment
                    isAccessible
                    leases {
                      edges {
                        node {
                          status
                          startDate
                          endDate
                          isActive
                          customer {
                            id
                            firstName
                            lastName
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;
export type OfferComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<OfferQuery, OfferQueryVariables>, 'query'> & ({ variables: OfferQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const OfferComponent = (props: OfferComponentProps) => (
      <ApolloReactComponents.Query<OfferQuery, OfferQueryVariables> query={OfferDocument} {...props} />
    );
    

/**
 * __useOfferQuery__
 *
 * To run a query within a React component, call `useOfferQuery` and pass it any options that fit your needs.
 * When your component renders, `useOfferQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOfferQuery({
 *   variables: {
 *      applicationId: // value for 'applicationId'
 *      servicemapId: // value for 'servicemapId'
 *   },
 * });
 */
export function useOfferQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OfferQuery, OfferQueryVariables>) {
        return ApolloReactHooks.useQuery<OfferQuery, OfferQueryVariables>(OfferDocument, baseOptions);
      }
export function useOfferLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OfferQuery, OfferQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OfferQuery, OfferQueryVariables>(OfferDocument, baseOptions);
        }
export type OfferQueryHookResult = ReturnType<typeof useOfferQuery>;
export type OfferLazyQueryHookResult = ReturnType<typeof useOfferLazyQuery>;
export type OfferQueryResult = ApolloReactCommon.QueryResult<OfferQuery, OfferQueryVariables>;
export const Update_Additional_Service_PriceDocument = gql`
    mutation UPDATE_ADDITIONAL_SERVICE_PRICE($input: UpdateAdditionalProductMutationInput!) {
  updateAdditionalProduct(input: $input) {
    additionalProduct {
      id
      priceValue
      priceUnit
      service
      period
      taxPercentage
      productType
    }
  }
}
    `;
export type Update_Additional_Service_PriceMutationFn = ApolloReactCommon.MutationFunction<Update_Additional_Service_PriceMutation, Update_Additional_Service_PriceMutationVariables>;
export type Update_Additional_Service_PriceComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Update_Additional_Service_PriceMutation, Update_Additional_Service_PriceMutationVariables>, 'mutation'>;

    export const Update_Additional_Service_PriceComponent = (props: Update_Additional_Service_PriceComponentProps) => (
      <ApolloReactComponents.Mutation<Update_Additional_Service_PriceMutation, Update_Additional_Service_PriceMutationVariables> mutation={Update_Additional_Service_PriceDocument} {...props} />
    );
    

/**
 * __useUpdate_Additional_Service_PriceMutation__
 *
 * To run a mutation, you first call `useUpdate_Additional_Service_PriceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_Additional_Service_PriceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdditionalServicePriceMutation, { data, loading, error }] = useUpdate_Additional_Service_PriceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdate_Additional_Service_PriceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Update_Additional_Service_PriceMutation, Update_Additional_Service_PriceMutationVariables>) {
        return ApolloReactHooks.useMutation<Update_Additional_Service_PriceMutation, Update_Additional_Service_PriceMutationVariables>(Update_Additional_Service_PriceDocument, baseOptions);
      }
export type Update_Additional_Service_PriceMutationHookResult = ReturnType<typeof useUpdate_Additional_Service_PriceMutation>;
export type Update_Additional_Service_PriceMutationResult = ApolloReactCommon.MutationResult<Update_Additional_Service_PriceMutation>;
export type Update_Additional_Service_PriceMutationOptions = ApolloReactCommon.BaseMutationOptions<Update_Additional_Service_PriceMutation, Update_Additional_Service_PriceMutationVariables>;
export const Update_Berth_PriceDocument = gql`
    mutation UPDATE_BERTH_PRICE($input: UpdateBerthProductMutationInput!) {
  updateBerthProduct(input: $input) {
    berthProduct {
      id
      priceValue
      priceUnit
    }
  }
}
    `;
export type Update_Berth_PriceMutationFn = ApolloReactCommon.MutationFunction<Update_Berth_PriceMutation, Update_Berth_PriceMutationVariables>;
export type Update_Berth_PriceComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Update_Berth_PriceMutation, Update_Berth_PriceMutationVariables>, 'mutation'>;

    export const Update_Berth_PriceComponent = (props: Update_Berth_PriceComponentProps) => (
      <ApolloReactComponents.Mutation<Update_Berth_PriceMutation, Update_Berth_PriceMutationVariables> mutation={Update_Berth_PriceDocument} {...props} />
    );
    

/**
 * __useUpdate_Berth_PriceMutation__
 *
 * To run a mutation, you first call `useUpdate_Berth_PriceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_Berth_PriceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBerthPriceMutation, { data, loading, error }] = useUpdate_Berth_PriceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdate_Berth_PriceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Update_Berth_PriceMutation, Update_Berth_PriceMutationVariables>) {
        return ApolloReactHooks.useMutation<Update_Berth_PriceMutation, Update_Berth_PriceMutationVariables>(Update_Berth_PriceDocument, baseOptions);
      }
export type Update_Berth_PriceMutationHookResult = ReturnType<typeof useUpdate_Berth_PriceMutation>;
export type Update_Berth_PriceMutationResult = ApolloReactCommon.MutationResult<Update_Berth_PriceMutation>;
export type Update_Berth_PriceMutationOptions = ApolloReactCommon.BaseMutationOptions<Update_Berth_PriceMutation, Update_Berth_PriceMutationVariables>;
export const Create_Berth_ProductDocument = gql`
    mutation CREATE_BERTH_PRODUCT($input: CreateBerthProductMutationInput!) {
  createBerthProduct(input: $input) {
    berthProduct {
      id
      priceValue
      priceUnit
    }
  }
}
    `;
export type Create_Berth_ProductMutationFn = ApolloReactCommon.MutationFunction<Create_Berth_ProductMutation, Create_Berth_ProductMutationVariables>;
export type Create_Berth_ProductComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Create_Berth_ProductMutation, Create_Berth_ProductMutationVariables>, 'mutation'>;

    export const Create_Berth_ProductComponent = (props: Create_Berth_ProductComponentProps) => (
      <ApolloReactComponents.Mutation<Create_Berth_ProductMutation, Create_Berth_ProductMutationVariables> mutation={Create_Berth_ProductDocument} {...props} />
    );
    

/**
 * __useCreate_Berth_ProductMutation__
 *
 * To run a mutation, you first call `useCreate_Berth_ProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_Berth_ProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBerthProductMutation, { data, loading, error }] = useCreate_Berth_ProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreate_Berth_ProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Create_Berth_ProductMutation, Create_Berth_ProductMutationVariables>) {
        return ApolloReactHooks.useMutation<Create_Berth_ProductMutation, Create_Berth_ProductMutationVariables>(Create_Berth_ProductDocument, baseOptions);
      }
export type Create_Berth_ProductMutationHookResult = ReturnType<typeof useCreate_Berth_ProductMutation>;
export type Create_Berth_ProductMutationResult = ApolloReactCommon.MutationResult<Create_Berth_ProductMutation>;
export type Create_Berth_ProductMutationOptions = ApolloReactCommon.BaseMutationOptions<Create_Berth_ProductMutation, Create_Berth_ProductMutationVariables>;
export const Update_Harbor_Service_PriceDocument = gql`
    mutation UPDATE_HARBOR_SERVICE_PRICE($input: UpdateAdditionalProductMutationInput!) {
  updateAdditionalProduct(input: $input) {
    additionalProduct {
      id
      priceValue
      priceUnit
      service
      period
      taxPercentage
      productType
    }
  }
}
    `;
export type Update_Harbor_Service_PriceMutationFn = ApolloReactCommon.MutationFunction<Update_Harbor_Service_PriceMutation, Update_Harbor_Service_PriceMutationVariables>;
export type Update_Harbor_Service_PriceComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Update_Harbor_Service_PriceMutation, Update_Harbor_Service_PriceMutationVariables>, 'mutation'>;

    export const Update_Harbor_Service_PriceComponent = (props: Update_Harbor_Service_PriceComponentProps) => (
      <ApolloReactComponents.Mutation<Update_Harbor_Service_PriceMutation, Update_Harbor_Service_PriceMutationVariables> mutation={Update_Harbor_Service_PriceDocument} {...props} />
    );
    

/**
 * __useUpdate_Harbor_Service_PriceMutation__
 *
 * To run a mutation, you first call `useUpdate_Harbor_Service_PriceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_Harbor_Service_PriceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHarborServicePriceMutation, { data, loading, error }] = useUpdate_Harbor_Service_PriceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdate_Harbor_Service_PriceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Update_Harbor_Service_PriceMutation, Update_Harbor_Service_PriceMutationVariables>) {
        return ApolloReactHooks.useMutation<Update_Harbor_Service_PriceMutation, Update_Harbor_Service_PriceMutationVariables>(Update_Harbor_Service_PriceDocument, baseOptions);
      }
export type Update_Harbor_Service_PriceMutationHookResult = ReturnType<typeof useUpdate_Harbor_Service_PriceMutation>;
export type Update_Harbor_Service_PriceMutationResult = ApolloReactCommon.MutationResult<Update_Harbor_Service_PriceMutation>;
export type Update_Harbor_Service_PriceMutationOptions = ApolloReactCommon.BaseMutationOptions<Update_Harbor_Service_PriceMutation, Update_Harbor_Service_PriceMutationVariables>;
export const PricingDocument = gql`
    query PRICING {
  berthPriceGroups {
    ...BerthPricing
  }
  winterStorageAreas {
    ...WinterStoragePricing
  }
  additionalProducts(productType: FIXED_SERVICE) {
    ...HarborServicePricing
  }
  optionalProducts: additionalProducts(productType: OPTIONAL_SERVICE) {
    ...AdditionalServicePricing
  }
}
    ${BerthPricingFragmentDoc}
${WinterStoragePricingFragmentDoc}
${HarborServicePricingFragmentDoc}
${AdditionalServicePricingFragmentDoc}`;
export type PricingComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PricingQuery, PricingQueryVariables>, 'query'>;

    export const PricingComponent = (props: PricingComponentProps) => (
      <ApolloReactComponents.Query<PricingQuery, PricingQueryVariables> query={PricingDocument} {...props} />
    );
    

/**
 * __usePricingQuery__
 *
 * To run a query within a React component, call `usePricingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePricingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePricingQuery({
 *   variables: {
 *   },
 * });
 */
export function usePricingQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PricingQuery, PricingQueryVariables>) {
        return ApolloReactHooks.useQuery<PricingQuery, PricingQueryVariables>(PricingDocument, baseOptions);
      }
export function usePricingLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PricingQuery, PricingQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PricingQuery, PricingQueryVariables>(PricingDocument, baseOptions);
        }
export type PricingQueryHookResult = ReturnType<typeof usePricingQuery>;
export type PricingLazyQueryHookResult = ReturnType<typeof usePricingLazyQuery>;
export type PricingQueryResult = ApolloReactCommon.QueryResult<PricingQuery, PricingQueryVariables>;
export const Update_Winter_Storage_PriceDocument = gql`
    mutation UPDATE_WINTER_STORAGE_PRICE($input: UpdateWinterStorageProductMutationInput!) {
  updateWinterStorageProduct(input: $input) {
    winterStorageProduct {
      id
      priceValue
      priceUnit
      taxPercentage
    }
  }
}
    `;
export type Update_Winter_Storage_PriceMutationFn = ApolloReactCommon.MutationFunction<Update_Winter_Storage_PriceMutation, Update_Winter_Storage_PriceMutationVariables>;
export type Update_Winter_Storage_PriceComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Update_Winter_Storage_PriceMutation, Update_Winter_Storage_PriceMutationVariables>, 'mutation'>;

    export const Update_Winter_Storage_PriceComponent = (props: Update_Winter_Storage_PriceComponentProps) => (
      <ApolloReactComponents.Mutation<Update_Winter_Storage_PriceMutation, Update_Winter_Storage_PriceMutationVariables> mutation={Update_Winter_Storage_PriceDocument} {...props} />
    );
    

/**
 * __useUpdate_Winter_Storage_PriceMutation__
 *
 * To run a mutation, you first call `useUpdate_Winter_Storage_PriceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_Winter_Storage_PriceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWinterStoragePriceMutation, { data, loading, error }] = useUpdate_Winter_Storage_PriceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdate_Winter_Storage_PriceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Update_Winter_Storage_PriceMutation, Update_Winter_Storage_PriceMutationVariables>) {
        return ApolloReactHooks.useMutation<Update_Winter_Storage_PriceMutation, Update_Winter_Storage_PriceMutationVariables>(Update_Winter_Storage_PriceDocument, baseOptions);
      }
export type Update_Winter_Storage_PriceMutationHookResult = ReturnType<typeof useUpdate_Winter_Storage_PriceMutation>;
export type Update_Winter_Storage_PriceMutationResult = ApolloReactCommon.MutationResult<Update_Winter_Storage_PriceMutation>;
export type Update_Winter_Storage_PriceMutationOptions = ApolloReactCommon.BaseMutationOptions<Update_Winter_Storage_PriceMutation, Update_Winter_Storage_PriceMutationVariables>;
export const Create_Winter_Storage_ProductDocument = gql`
    mutation CREATE_WINTER_STORAGE_PRODUCT($input: CreateWinterStorageProductMutationInput!) {
  createWinterStorageProduct(input: $input) {
    winterStorageProduct {
      id
      priceValue
      priceUnit
      taxPercentage
    }
  }
}
    `;
export type Create_Winter_Storage_ProductMutationFn = ApolloReactCommon.MutationFunction<Create_Winter_Storage_ProductMutation, Create_Winter_Storage_ProductMutationVariables>;
export type Create_Winter_Storage_ProductComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Create_Winter_Storage_ProductMutation, Create_Winter_Storage_ProductMutationVariables>, 'mutation'>;

    export const Create_Winter_Storage_ProductComponent = (props: Create_Winter_Storage_ProductComponentProps) => (
      <ApolloReactComponents.Mutation<Create_Winter_Storage_ProductMutation, Create_Winter_Storage_ProductMutationVariables> mutation={Create_Winter_Storage_ProductDocument} {...props} />
    );
    

/**
 * __useCreate_Winter_Storage_ProductMutation__
 *
 * To run a mutation, you first call `useCreate_Winter_Storage_ProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_Winter_Storage_ProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWinterStorageProductMutation, { data, loading, error }] = useCreate_Winter_Storage_ProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreate_Winter_Storage_ProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Create_Winter_Storage_ProductMutation, Create_Winter_Storage_ProductMutationVariables>) {
        return ApolloReactHooks.useMutation<Create_Winter_Storage_ProductMutation, Create_Winter_Storage_ProductMutationVariables>(Create_Winter_Storage_ProductDocument, baseOptions);
      }
export type Create_Winter_Storage_ProductMutationHookResult = ReturnType<typeof useCreate_Winter_Storage_ProductMutation>;
export type Create_Winter_Storage_ProductMutationResult = ApolloReactCommon.MutationResult<Create_Winter_Storage_ProductMutation>;
export type Create_Winter_Storage_ProductMutationOptions = ApolloReactCommon.BaseMutationOptions<Create_Winter_Storage_ProductMutation, Create_Winter_Storage_ProductMutationVariables>;
export const Winter_Storage_AreasDocument = gql`
    query WINTER_STORAGE_AREAS {
  winterStorageAreas {
    edges {
      node {
        id
        properties {
          imageFile
          maps {
            id
            url
          }
          maxWidth
          municipality
          name
          numberOfFreePlaces
          numberOfPlaces
          sections {
            edges {
              node {
                id
                properties {
                  electricity
                  gate
                  summerStorageForDockingEquipment
                  summerStorageForTrailers
                  water
                }
              }
            }
          }
          servicemapId
          streetAddress
          wwwUrl
          zipCode
        }
      }
    }
  }
}
    `;
export type Winter_Storage_AreasComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Winter_Storage_AreasQuery, Winter_Storage_AreasQueryVariables>, 'query'>;

    export const Winter_Storage_AreasComponent = (props: Winter_Storage_AreasComponentProps) => (
      <ApolloReactComponents.Query<Winter_Storage_AreasQuery, Winter_Storage_AreasQueryVariables> query={Winter_Storage_AreasDocument} {...props} />
    );
    

/**
 * __useWinter_Storage_AreasQuery__
 *
 * To run a query within a React component, call `useWinter_Storage_AreasQuery` and pass it any options that fit your needs.
 * When your component renders, `useWinter_Storage_AreasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWinter_Storage_AreasQuery({
 *   variables: {
 *   },
 * });
 */
export function useWinter_Storage_AreasQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Winter_Storage_AreasQuery, Winter_Storage_AreasQueryVariables>) {
        return ApolloReactHooks.useQuery<Winter_Storage_AreasQuery, Winter_Storage_AreasQueryVariables>(Winter_Storage_AreasDocument, baseOptions);
      }
export function useWinter_Storage_AreasLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Winter_Storage_AreasQuery, Winter_Storage_AreasQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Winter_Storage_AreasQuery, Winter_Storage_AreasQueryVariables>(Winter_Storage_AreasDocument, baseOptions);
        }
export type Winter_Storage_AreasQueryHookResult = ReturnType<typeof useWinter_Storage_AreasQuery>;
export type Winter_Storage_AreasLazyQueryHookResult = ReturnType<typeof useWinter_Storage_AreasLazyQuery>;
export type Winter_Storage_AreasQueryResult = ApolloReactCommon.QueryResult<Winter_Storage_AreasQuery, Winter_Storage_AreasQueryVariables>;
export const Individual_Winter_Storage_AreaDocument = gql`
    query INDIVIDUAL_WINTER_STORAGE_AREA($id: ID!) {
  winterStorageArea(id: $id) {
    properties {
      name
      servicemapId
      zipCode
      municipality
      streetAddress
      wwwUrl
      imageFile
      maps {
        id
        url
      }
      sections {
        edges {
          node {
            properties {
              electricity
              water
              gate
              summerStorageForBoats
              summerStorageForTrailers
              summerStorageForDockingEquipment
            }
          }
        }
      }
    }
  }
}
    `;
export type Individual_Winter_Storage_AreaComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Individual_Winter_Storage_AreaQuery, Individual_Winter_Storage_AreaQueryVariables>, 'query'> & ({ variables: Individual_Winter_Storage_AreaQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const Individual_Winter_Storage_AreaComponent = (props: Individual_Winter_Storage_AreaComponentProps) => (
      <ApolloReactComponents.Query<Individual_Winter_Storage_AreaQuery, Individual_Winter_Storage_AreaQueryVariables> query={Individual_Winter_Storage_AreaDocument} {...props} />
    );
    

/**
 * __useIndividual_Winter_Storage_AreaQuery__
 *
 * To run a query within a React component, call `useIndividual_Winter_Storage_AreaQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndividual_Winter_Storage_AreaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndividual_Winter_Storage_AreaQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useIndividual_Winter_Storage_AreaQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Individual_Winter_Storage_AreaQuery, Individual_Winter_Storage_AreaQueryVariables>) {
        return ApolloReactHooks.useQuery<Individual_Winter_Storage_AreaQuery, Individual_Winter_Storage_AreaQueryVariables>(Individual_Winter_Storage_AreaDocument, baseOptions);
      }
export function useIndividual_Winter_Storage_AreaLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Individual_Winter_Storage_AreaQuery, Individual_Winter_Storage_AreaQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Individual_Winter_Storage_AreaQuery, Individual_Winter_Storage_AreaQueryVariables>(Individual_Winter_Storage_AreaDocument, baseOptions);
        }
export type Individual_Winter_Storage_AreaQueryHookResult = ReturnType<typeof useIndividual_Winter_Storage_AreaQuery>;
export type Individual_Winter_Storage_AreaLazyQueryHookResult = ReturnType<typeof useIndividual_Winter_Storage_AreaLazyQuery>;
export type Individual_Winter_Storage_AreaQueryResult = ApolloReactCommon.QueryResult<Individual_Winter_Storage_AreaQuery, Individual_Winter_Storage_AreaQueryVariables>;
