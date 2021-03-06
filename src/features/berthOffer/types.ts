/* eslint-disable @typescript-eslint/camelcase */
export type {
  BERTH_OFFER_harbor as HarborData,
  BERTH_OFFER_harbor_properties_piers as PiersData,
} from './__generated__/BERTH_OFFER';
export type { BERTH_OFFER_WITHOUT_APPLICATION_PROFILE_profile_boats_edges_node as BoatData } from './__generated__/BERTH_OFFER_WITHOUT_APPLICATION_PROFILE';
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
  berth: string | number;
  berthId: string;
  comment: string;
  draught: number | null;
  harbor: string;
  harborId: string;
  id: string;
  isActive: boolean;
  leases: Lease[];
  length: number | null;
  mooringType: string;
  pier: string;
  properties: {
    lighting: boolean | null;
    water: boolean | null;
    gate: boolean | null;
    electricity: boolean | null;
    wasteCollection: boolean | null;
    isAccessible: boolean | null;
  };
  width: number | null;
};

export type PierTab = {
  label: string;
  value: string;
  disabled: boolean;
};
