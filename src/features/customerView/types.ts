import {
  ApplicationStatus,
  BerthMooringType,
  BoatCertificateType,
  LeaseStatus,
  OrderOrderType,
  OrderStatus,
  PriceUnits,
  ProductServiceType,
} from '../../@types/__generated__/globalTypes';
import { INDIVIDUAL_CUSTOMER_boatTypes as IndividualCustomerBoatType } from './__generated__/INDIVIDUAL_CUSTOMER';

export type Boat = {
  id: string;
  boatType: { id: string; name: string | null };
  registrationNumber: string;
  width: number;
  length: number;
  draught: number | null;
  weight: number | null;
  name: string;
  model: string;
};

export type LargeBoat = Boat & {
  propulsion: string;
  hullMaterial: string;
  intendedUse: string;
  certificates: BoatCertificate[];
};

export type BoatCertificate = {
  file: string | null;
  certificateType: BoatCertificateType;
  validUntil: string | null;
  checkedAt: string;
  checkedBy: string | null;
};

export type HarborChoice = {
  harbor: string;
  harborName: string;
  priority: number;
};

export type ApplicationLease = {
  id: string;
  berthNum: string | number;
  harborId: string;
  harborName: string;
  pierIdentifier: string;
  status: LeaseStatus;
};

export type BerthSwitch = {
  harborId: string;
  harborName: string;
  berthNum: string | number;
  pierIdentifier: string;
  reason: string | null;
};

export type Application = {
  id: string;
  customerId: string;
  berthSwitch: BerthSwitch | null;
  applicationCode: string;
  createdAt: string;
  queue: number;
  status: ApplicationStatus;
  lease: ApplicationLease | null;
  boatType?: string | null;
  boatRegistrationNumber: string;
  boatWidth: number;
  boatLength: number;
  boatDraught: number | null;
  boatWeight: number | null;
  boatName: string;
  boatModel: string;
  choices: Array<HarborChoice>;
  accessibilityRequired: boolean;
};

type LeaseBase = {
  id: string;
  startDate: string;
  endDate: string;
};

export type BerthLease = LeaseBase & {
  harbor: { id: string; name: string } | null;
  length: number;
  width: number;
  depth: number | null;
  mooringType: BerthMooringType;
  berthNum: string | number;
  pierIdentifier: string | null;
  isActive: boolean;
};

export type WinterStorageLease = LeaseBase & {
  winterStorageArea: { id: string; name: string } | null;
  placeNum: string | number;
  sectionIdentifier: string | null;
};

export type Lease = BerthLease | WinterStorageLease;

export type OrderLine = {
  product: ProductServiceType;
  price: number;
  priceUnit: PriceUnits;
  priceValue: number;
};

export type Invoice = {
  leaseId: string;
  orderNumber?: string;
  orderId: string;
  orderType: OrderOrderType;
  status: OrderStatus;
  contractPeriod: {
    startDate: string;
    endDate: string;
  };
  dueDate: string;
  paidAt: string;
  totalPrice: number;
  basePrice: number;
  orderLines: OrderLine[];
};

export type BerthInvoice = Invoice & {
  berthInformation: {
    number: string;
    pierIdentifier: string;
    harborName: string;
  };
};

export type WinterStorageInvoice = Invoice & {
  winterStorageInformation: {
    winterStorageAreaName: string;
  };
};

export type BoatType = Omit<IndividualCustomerBoatType, '__typename__'>;
