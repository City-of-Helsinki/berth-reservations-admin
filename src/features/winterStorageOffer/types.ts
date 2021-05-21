export type {
  // eslint-disable-next-line @typescript-eslint/camelcase
  WINTER_STORAGE_OFFER_winterStorageArea as AreaData,
  // eslint-disable-next-line @typescript-eslint/camelcase
  WINTER_STORAGE_OFFER_winterStorageArea_properties_sections as SectionsData,
} from './__generated__/WINTER_STORAGE_OFFER';

export type Lease = {
  customer: {
    id: string;
  };
  status: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
};

export type PlaceData = {
  area: string;
  areaId: string;
  id: string;
  isActive: boolean;
  isAvailable: boolean;
  leases: Lease[];
  length: number | null;
  number: string | number;
  properties: {
    electricity: boolean | null;
    water: boolean | null;
    gate: boolean | null;
    summerStorageForBoats: boolean | null;
    summerStorageForDockingEquipment: boolean | null;
    summerStorageForTrailers: boolean | null;
  };
  section: string;
  width: number | null;
};

export type SectionTab = {
  label: string;
  value: string;
  disabled: boolean;
};
