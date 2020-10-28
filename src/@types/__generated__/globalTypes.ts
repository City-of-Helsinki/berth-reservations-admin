/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum AdditionalProductTaxEnum {
  TAX_10_00 = "TAX_10_00",
  TAX_24_00 = "TAX_24_00",
}

export enum AdditionalProductType {
  FIXED_SERVICE = "FIXED_SERVICE",
  OPTIONAL_SERVICE = "OPTIONAL_SERVICE",
}

export enum AddressType {
  HOME = "HOME",
  NONE = "NONE",
  OTHER = "OTHER",
  WORK = "WORK",
}

export enum ApplicationStatus {
  EXPIRED = "EXPIRED",
  HANDLED = "HANDLED",
  NO_SUITABLE_BERTHS = "NO_SUITABLE_BERTHS",
  NO_SUITABLE_BERTHS_NOTIFIED = "NO_SUITABLE_BERTHS_NOTIFIED",
  OFFER_GENERATED = "OFFER_GENERATED",
  OFFER_SENT = "OFFER_SENT",
  PENDING = "PENDING",
}

export enum BerthApplicationLanguage {
  EN = "EN",
  FI = "FI",
  SV = "SV",
}

export enum BerthMooringType {
  DINGHY_PLACE = "DINGHY_PLACE",
  NO_STERN_TO_MOORING = "NO_STERN_TO_MOORING",
  QUAYSIDE_MOORING = "QUAYSIDE_MOORING",
  SEA_BUOY_MOORING = "SEA_BUOY_MOORING",
  SIDE_SLIP_PLACE = "SIDE_SLIP_PLACE",
  SINGLE_SLIP_PLACE = "SINGLE_SLIP_PLACE",
  STERN_BUOY_PLACE = "STERN_BUOY_PLACE",
  STERN_POLE_MOORING = "STERN_POLE_MOORING",
  TRAWLER_PLACE = "TRAWLER_PLACE",
}

export enum BoatCertificateType {
  INSPECTION = "INSPECTION",
  INSURANCE = "INSURANCE",
}

export enum ContactMethod {
  EMAIL = "EMAIL",
  SMS = "SMS",
}

export enum CustomerGroup {
  COMPANY = "COMPANY",
  INTERNAL = "INTERNAL",
  NON_BILLABLE = "NON_BILLABLE",
  OTHER = "OTHER",
  PRIVATE = "PRIVATE",
}

export enum EmailType {
  NONE = "NONE",
  OTHER = "OTHER",
  PERSONAL = "PERSONAL",
  WORK = "WORK",
}

export enum InvoicingType {
  DIGITAL_INVOICE = "DIGITAL_INVOICE",
  ONLINE_PAYMENT = "ONLINE_PAYMENT",
  PAPER_INVOICE = "PAPER_INVOICE",
}

export enum Language {
  ENGLISH = "ENGLISH",
  FINNISH = "FINNISH",
  SWEDISH = "SWEDISH",
}

export enum LeaseStatus {
  DRAFTED = "DRAFTED",
  EXPIRED = "EXPIRED",
  OFFERED = "OFFERED",
  PAID = "PAID",
  REFUSED = "REFUSED",
}

export enum NotificationTemplateLanguage {
  EN = "EN",
  FI = "FI",
  SV = "SV",
}

export enum OrderStatus {
  CANCELLED = "CANCELLED",
  EXPIRED = "EXPIRED",
  PAID = "PAID",
  REJECTED = "REJECTED",
  WAITING = "WAITING",
}

export enum OrganizationType {
  COMPANY = "COMPANY",
  INTERNAL = "INTERNAL",
  NON_BILLABLE = "NON_BILLABLE",
  OTHER = "OTHER",
}

export enum PeriodType {
  MONTH = "MONTH",
  SEASON = "SEASON",
  YEAR = "YEAR",
}

export enum PhoneType {
  HOME = "HOME",
  MOBILE = "MOBILE",
  NONE = "NONE",
  OTHER = "OTHER",
  WORK = "WORK",
}

export enum PlaceProductTaxEnum {
  TAX_24_00 = "TAX_24_00",
}

export enum PriceUnits {
  AMOUNT = "AMOUNT",
  PERCENTAGE = "PERCENTAGE",
}

export enum ProductServiceType {
  DINGHY_PLACE = "DINGHY_PLACE",
  ELECTRICITY = "ELECTRICITY",
  GATE = "GATE",
  LIGHTING = "LIGHTING",
  MOORING = "MOORING",
  PARKING_PERMIT = "PARKING_PERMIT",
  STORAGE_ON_ICE = "STORAGE_ON_ICE",
  SUMMER_STORAGE_FOR_DOCKING_EQUIPMENT = "SUMMER_STORAGE_FOR_DOCKING_EQUIPMENT",
  SUMMER_STORAGE_FOR_TRAILERS = "SUMMER_STORAGE_FOR_TRAILERS",
  WASTE_COLLECTION = "WASTE_COLLECTION",
  WATER = "WATER",
}

export enum ServiceType {
  BERTH = "BERTH",
  GODCHILDREN_OF_CULTURE = "GODCHILDREN_OF_CULTURE",
  HKI_MY_DATA = "HKI_MY_DATA",
  YOUTH_MEMBERSHIP = "YOUTH_MEMBERSHIP",
}

export enum WinterStorageApplicationAreaType {
  MARKED = "MARKED",
  UNMARKED = "UNMARKED",
}

export enum YouthLanguage {
  ARABIC = "ARABIC",
  ENGLISH = "ENGLISH",
  ESTONIAN = "ESTONIAN",
  FINNISH = "FINNISH",
  RUSSIAN = "RUSSIAN",
  SOMALI = "SOMALI",
  SWEDISH = "SWEDISH",
}

export interface AddBoatCertificateInput {
  file?: any | null;
  certificateType: BoatCertificateType;
  validUntil?: any | null;
  checkedAt?: any | null;
  checkedBy?: string | null;
}

export interface ApproveOrderMutationInput {
  orders: (OrderApprovalInput | null)[];
  dueDate?: any | null;
  clientMutationId?: string | null;
}

export interface AssignNewStickerNumberMutationInput {
  leaseId: string;
  clientMutationId?: string | null;
}

export interface CreateAdditionalContactPersonInput {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

export interface CreateAdditionalProductMutationInput {
  service: ProductServiceType;
  period: PeriodType;
  priceValue: any;
  priceUnit?: PriceUnits | null;
  taxPercentage?: AdditionalProductTaxEnum | null;
  clientMutationId?: string | null;
}

export interface CreateAddressInput {
  countryCode?: string | null;
  primary?: boolean | null;
  address: string;
  postalCode: string;
  city: string;
  addressType: AddressType;
}

export interface CreateBerthLeaseMutationInput {
  boatId?: string | null;
  startDate?: any | null;
  endDate?: any | null;
  comment?: string | null;
  applicationId: string;
  berthId: string;
  clientMutationId?: string | null;
}

export interface CreateBerthMutationInput {
  isActive?: boolean | null;
  number: string;
  pierId: string;
  comment?: string | null;
  isAccessible?: boolean | null;
  width: number;
  length: number;
  depth?: number | null;
  mooringType: BerthMooringType;
  clientMutationId?: string | null;
}

export interface CreateBerthProductMutationInput {
  priceValue: any;
  priceGroupId: string;
  harborId?: string | null;
  clientMutationId?: string | null;
}

export interface CreateBerthServicesProfileMutationInput {
  invoicingType?: InvoicingType | null;
  comment?: string | null;
  id: string;
  organization?: OrganizationInput | null;
  clientMutationId?: string | null;
}

export interface CreateBoatMutationInput {
  boatTypeId: string;
  registrationNumber?: string | null;
  name?: string | null;
  model?: string | null;
  length: any;
  width: any;
  draught?: any | null;
  weight?: number | null;
  propulsion?: string | null;
  hullMaterial?: string | null;
  intendedUse?: string | null;
  addBoatCertificates?: (AddBoatCertificateInput | null)[] | null;
  ownerId: string;
  clientMutationId?: string | null;
}

export interface CreateEmailInput {
  primary?: boolean | null;
  email: string;
  emailType: EmailType;
}

export interface CreateOrderLineMutationInput {
  quantity?: number | null;
  orderId: string;
  productId: string;
  clientMutationId?: string | null;
}

export interface CreatePhoneInput {
  primary?: boolean | null;
  phone: string;
  phoneType: PhoneType;
}

export interface CreatePierMutationInput {
  identifier?: string | null;
  location?: any | null;
  electricity?: boolean | null;
  water?: boolean | null;
  gate?: boolean | null;
  harborId: string;
  suitableBoatTypes?: (string | null)[] | null;
  mooring?: boolean | null;
  wasteCollection?: boolean | null;
  lighting?: boolean | null;
  personalElectricity?: boolean | null;
  clientMutationId?: string | null;
}

export interface CreateWinterStorageLeaseMutationInput {
  boatId?: string | null;
  startDate?: any | null;
  endDate?: any | null;
  comment?: string | null;
  applicationId: string;
  placeId?: string | null;
  sectionId?: string | null;
  clientMutationId?: string | null;
}

export interface CreateWinterStorageProductMutationInput {
  priceValue: any;
  winterStorageAreaId?: string | null;
  clientMutationId?: string | null;
}

export interface DeleteBerthApplicationMutationInput {
  id: string;
  clientMutationId?: string | null;
}

export interface DeleteBerthLeaseMutationInput {
  id: string;
  clientMutationId?: string | null;
}

export interface DeleteBerthMutationInput {
  id: string;
  clientMutationId?: string | null;
}

export interface DeleteBoatMutationInput {
  id: string;
  clientMutationId?: string | null;
}

export interface DeleteOrderLineMutationInput {
  id: string;
  clientMutationId?: string | null;
}

export interface DeletePierMutationInput {
  id: string;
  clientMutationId?: string | null;
}

export interface DeleteWinterStorageApplicationMutationInput {
  id: string;
  clientMutationId?: string | null;
}

export interface DeleteWinterStorageLeaseMutationInput {
  id: string;
  clientMutationId?: string | null;
}

export interface OrderApprovalInput {
  orderId: string;
  email: string;
}

export interface OrganizationInput {
  organizationType: OrganizationType;
  businessId?: string | null;
  name?: string | null;
  address?: string | null;
  postalCode?: string | null;
  city?: string | null;
}

export interface SensitiveDataFields {
  ssn?: string | null;
}

export interface SetStickersPostedMutationInput {
  leaseIds: string[];
  date: any;
  clientMutationId?: string | null;
}

export interface SubscriptionInputType {
  subscriptionTypeId: string;
  enabled: boolean;
}

export interface UpdateAdditionalContactPersonInput {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  email?: string | null;
}

export interface UpdateAdditionalProductMutationInput {
  service?: ProductServiceType | null;
  period?: PeriodType | null;
  priceValue?: any | null;
  priceUnit?: PriceUnits | null;
  taxPercentage?: AdditionalProductTaxEnum | null;
  id: string;
  clientMutationId?: string | null;
}

export interface UpdateAddressInput {
  countryCode?: string | null;
  primary?: boolean | null;
  id: string;
  address?: string | null;
  postalCode?: string | null;
  city?: string | null;
  addressType?: AddressType | null;
}

export interface UpdateBerthApplicationInput {
  customerId?: string | null;
  id: string;
  clientMutationId?: string | null;
}

export interface UpdateBerthMutationInput {
  isActive?: boolean | null;
  number?: string | null;
  pierId?: string | null;
  comment?: string | null;
  isAccessible?: boolean | null;
  width?: number | null;
  length?: number | null;
  depth?: number | null;
  mooringType?: BerthMooringType | null;
  id: string;
  clientMutationId?: string | null;
}

export interface UpdateBerthProductMutationInput {
  id: string;
  priceValue?: any | null;
  priceGroupId?: string | null;
  harborId?: string | null;
  clientMutationId?: string | null;
}

export interface UpdateBerthServicesProfileMutationInput {
  invoicingType?: InvoicingType | null;
  comment?: string | null;
  id: string;
  organization?: OrganizationInput | null;
  deleteOrganization?: boolean | null;
  clientMutationId?: string | null;
}

export interface UpdateBoatCertificateInput {
  file?: any | null;
  certificateType?: BoatCertificateType | null;
  validUntil?: any | null;
  checkedAt?: any | null;
  checkedBy?: string | null;
  id: string;
}

export interface UpdateBoatMutationInput {
  boatTypeId?: string | null;
  registrationNumber?: string | null;
  name?: string | null;
  model?: string | null;
  length?: any | null;
  width?: any | null;
  draught?: any | null;
  weight?: number | null;
  propulsion?: string | null;
  hullMaterial?: string | null;
  intendedUse?: string | null;
  addBoatCertificates?: (AddBoatCertificateInput | null)[] | null;
  id: string;
  updateBoatCertificates?: (UpdateBoatCertificateInput | null)[] | null;
  removeBoatCertificates?: (string | null)[] | null;
  clientMutationId?: string | null;
}

export interface UpdateEmailInput {
  primary?: boolean | null;
  id: string;
  email?: string | null;
  emailType?: EmailType | null;
}

export interface UpdateHarborMutationInput {
  servicemapId?: string | null;
  zipCode?: string | null;
  phone?: string | null;
  email?: string | null;
  wwwUrl?: string | null;
  location?: any | null;
  imageLink?: string | null;
  municipalityId?: string | null;
  imageFile?: any | null;
  addMapFiles?: (any | null)[] | null;
  availabilityLevelId?: string | null;
  name?: string | null;
  streetAddress?: string | null;
  id: string;
  removeMapFiles?: (string | null)[] | null;
  clientMutationId?: string | null;
}

export interface UpdatePhoneInput {
  primary?: boolean | null;
  id: string;
  phone?: string | null;
  phoneType?: PhoneType | null;
}

export interface UpdatePierMutationInput {
  identifier?: string | null;
  location?: any | null;
  electricity?: boolean | null;
  water?: boolean | null;
  gate?: boolean | null;
  harborId?: string | null;
  suitableBoatTypes?: (string | null)[] | null;
  mooring?: boolean | null;
  wasteCollection?: boolean | null;
  lighting?: boolean | null;
  personalElectricity?: boolean | null;
  id: string;
  clientMutationId?: string | null;
}

export interface UpdateProfileInput {
  firstName?: string | null;
  lastName?: string | null;
  nickname?: string | null;
  image?: string | null;
  language?: Language | null;
  contactMethod?: ContactMethod | null;
  addEmails?: (CreateEmailInput | null)[] | null;
  addPhones?: (CreatePhoneInput | null)[] | null;
  addAddresses?: (CreateAddressInput | null)[] | null;
  subscriptions?: (SubscriptionInputType | null)[] | null;
  youthProfile?: YouthProfileFields | null;
  sensitivedata?: SensitiveDataFields | null;
  id: string;
  updateEmails?: (UpdateEmailInput | null)[] | null;
  removeEmails?: (string | null)[] | null;
  updatePhones?: (UpdatePhoneInput | null)[] | null;
  removePhones?: (string | null)[] | null;
  updateAddresses?: (UpdateAddressInput | null)[] | null;
  removeAddresses?: (string | null)[] | null;
}

export interface UpdateProfileMutationInput {
  serviceType: ServiceType;
  profile: UpdateProfileInput;
  clientMutationId?: string | null;
}

export interface UpdateWinterStorageApplicationInput {
  customerId?: string | null;
  id: string;
  clientMutationId?: string | null;
}

export interface UpdateWinterStorageProductMutationInput {
  id: string;
  priceValue?: any | null;
  winterStorageAreaId?: string | null;
  clientMutationId?: string | null;
}

export interface YouthProfileFields {
  schoolName?: string | null;
  schoolClass?: string | null;
  languageAtHome?: YouthLanguage | null;
  approverFirstName?: string | null;
  approverLastName?: string | null;
  approverPhone?: string | null;
  approverEmail?: string | null;
  birthDate?: any | null;
  photoUsageApproved?: boolean | null;
  addAdditionalContactPersons?: (CreateAdditionalContactPersonInput | null)[] | null;
  updateAdditionalContactPersons?: (UpdateAdditionalContactPersonInput | null)[] | null;
  removeAdditionalContactPersons?: (string | null)[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
