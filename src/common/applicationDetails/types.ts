import { LeaseStatus } from '../../@types/__generated__/globalTypes';

export enum ApplicationTypeEnum {
  WINTER_STORAGE = 'WINTER_STORAGE',
  BERTH = 'BERTH',
  BERTH_SWITCH = 'BERTH_SWITCH',
}

export interface BerthLease {
  berthNum: string | number;
  harborId: string;
  harborName: string;
  id: string;
  pierIdentifier: string;
  status: LeaseStatus;
}

export interface WinterStorageLease {
  placeNum: string | number;
  areaId: string;
  areaName: string;
  id: string;
  sectionIdentifier: string;
  status: LeaseStatus;
}

export type Lease = BerthLease | WinterStorageLease;

export interface BerthSwitch {
  berthNum: string | number;
  harborId: string;
  harborName: string;
  pierIdentifier: string;
  reason: string | null;
}

export interface SummaryInformation {
  applicationCode: string;
  acceptBoatingNewsletter: boolean;
  acceptFitnessNews: boolean;
  acceptLibraryNews: boolean;
  acceptOtherCultureNews: boolean;
}
