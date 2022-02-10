export type ValueOf<T> = T[keyof T];

export type CustomerListTableFilters = {
  customerGroups: string[];
  boatTypeIds: string[];
  leaseStatuses: string[];
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
