import { LeaseStatus } from '../../../@types/__generated__/globalTypes';
import { Order } from '../../invoiceCard/types';

export interface LeaseDetails {
  areaId: string;
  areaName: string;
  customerEmail: string;
  electricity: boolean;
  gate: boolean;
  id: string;
  order: Order | null;
  placeLength: number | null;
  placeNum: number | string;
  placeWidth: number | null;
  sectionIdentifier: string;
  status: LeaseStatus;
  summerStorageForBoats: boolean;
  summerStorageForDockingEquipment: boolean;
  summerStorageForTrailers: boolean;
  water: boolean;
}
