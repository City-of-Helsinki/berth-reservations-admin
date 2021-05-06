import { BerthMooringType, LeaseStatus } from '../../../@types/__generated__/globalTypes';
import { Order } from '../../invoiceCard/types';

export type { Product } from '../../invoiceCard/types';

export interface LeaseDetails {
  id: string;
  status: LeaseStatus;
  berthComment: string;
  berthDepth: number | null;
  berthIsAccessible: boolean;
  berthLength: number | null;
  berthMooringType: BerthMooringType | null;
  berthNum: number | string;
  berthWidth: number | null;
  customerEmail: string | null;
  electricity: boolean;
  gate: boolean;
  harborId: string;
  harborName: string;
  lighting: boolean;
  pierIdentifier: string;
  wasteCollection: boolean;
  water: boolean;
  order: Order | null;
}
