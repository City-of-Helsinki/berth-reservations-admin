import { CustomerGroup, LeaseStatus } from '../../@types/__generated__/globalTypes';

export interface Organization {
  name: string;
  address: string;
  postalCode: string;
  city: string;
  businessId: string;
}

export interface CustomerData {
  address?: string;
  city?: string;
  email?: string;
  id: string;
  name: string;
  organization: Organization | null;
  phone?: string;
  postalCode?: string;
  comment: string | null;
  berthsColumnData: string;
  invoicesColumnData: string;
  boatsColumnData: string;
  boats: CustomerListBoat[];
  applications: CustomerListApplication[];
  berthLeases: CustomerListBerthLeases[];
  customerGroup: CustomerGroup | null;
}

export interface CustomerListBerthLeases {
  id: string;
  isActive: boolean;
  title: string;
  status: LeaseStatus;
}

export interface CustomerListWinterStoragePlaces {
  id: string;
  title: string;
}

export interface CustomerListBoat {
  id: string;
  name: string;
}

export interface CustomerListApplication {
  id: string;
  createdAt: string;
}

export interface CustomerListInvoice {
  id: string;
  date: string;
}
