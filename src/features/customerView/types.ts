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
import { ApplicationTypeEnum } from '../../common/applicationDetails/types';

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
  accessibilityRequired: boolean;
  applicationCode: string;
  applicationType: ApplicationTypeEnum;
  berthSwitch: BerthSwitch | null;
  berthSwitchOffered: boolean;
  boatDraught: number | null;
  boatLength: number;
  boatModel: string;
  boatName: string;
  boatRegistrationNumber: string;
  boatType?: string | null;
  boatWeight: number | null;
  boatWidth: number;
  choices: Array<HarborChoice>;
  createdAt: string;
  customerId: string;
  id: string;
  lease: ApplicationLease | null;
  queue: number;
  status: ApplicationStatus;
};

type LeaseBase = {
  id: string;
  startDate: string;
  endDate: string;
  status: LeaseStatus;
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
  customer: {
    email: string | null;
  };
  id: string;
  lease: {
    id: string;
    status: LeaseStatus;
  };
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
    width: number;
    length: number;
    depth: number | null;
    mooringType: BerthMooringType;
  };
};

export type WinterStorageInvoice = Invoice & {
  winterStorageInformation: {
    winterStorageAreaName: string;
  };
};

export type BoatType = Omit<IndividualCustomerBoatType, '__typename__'>;
