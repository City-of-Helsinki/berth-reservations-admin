/* eslint-disable @typescript-eslint/camelcase */
export type {
  OFFER_harborByServicemapId as HarborData,
  OFFER_harborByServicemapId_properties_piers as PiersData,
} from './__generated__/OFFER';
export type { OFFER_WITHOUT_APPLICATION_PROFILE_profile_boats_edges_node as BoatData } from './__generated__/OFFER_WITHOUT_APPLICATION_PROFILE';
/* eslint-enable @typescript-eslint/camelcase */

export type Lease = {
  customer: {
    id: string;
  };
  status: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
};

export type BerthData = {
  id: string;
  harborId: string;
  harbor: string;
  pier: string;
  berth: string | number;
  berthId: string;
  width: number | null;
  length: number | null;
  draught: number | null;
  mooringType: string;
  leases: Lease[];
  comment: string;
  properties: {
    lighting: boolean | null;
    water: boolean | null;
    gate: boolean | null;
    electricity: boolean | null;
    wasteCollection: boolean | null;
    isAccessible: boolean | null;
  };
};

export type PierTab = {
  label: string;
  value: string;
  disabled: boolean;
};
