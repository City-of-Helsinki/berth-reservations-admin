import { CustomerGroup, LeaseStatus } from '../../../@types/__generated__/globalTypes';

export type ValueOf<T> = T[keyof T];

export type CustomerListTableFilters = {
  customerGroups: CustomerGroup[];
  boatTypeIds: string[];
  leaseStatuses: LeaseStatus[];
  harborIds: string[];
  pierId?: string;
  berthId?: string;
  winterStorageGridAreaIds: string[];
  winterStoragePlaceId?: string;
  winterStorageAreaIds: string[];
  dateInterval?: string; // (D.MM.YYYY)-(D.MM.YYYY)
  moreThanOneBerthOrWinterStorage?: boolean;
};

export type FilterEntryValue = Exclude<ValueOf<CustomerListTableFilters>, string[] | undefined>;

export type FilterEntry = [keyof CustomerListTableFilters, FilterEntryValue];
