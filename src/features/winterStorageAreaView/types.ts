export type WinterStorageArea = {
  imageFile: string | null;
  municipality: string | null;
  name: string;
  streetAddress: string | null;
  wwwUrl: string;
  zipCode: string;
  properties: {
    electricity: boolean;
    gate: boolean;
    numberOfCustomers: number;
    summerStorageForBoats: boolean;
    summerStorageForDockingEquipment: boolean;
    summerStorageForTrailers: boolean;
    water: boolean;
  };
};

export type Lease = {
  id: string;
  customer: {
    id: string;
  };
  status: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  applicationId: string;
  applicationDate: string;
};

export type WinterStoragePlace = {
  id: string;
  identifier: string;
  number: number;
  isActive: boolean;
  width: number;
  length: number;
  leases?: Lease[];
};

export type WinterStorageSection = {
  identifier: string;
};

export type MarkedWinterStorage = {
  places: WinterStoragePlace[];
  sections: WinterStorageSection[];
};

export type UnmarkedWinterStorage = {
  leases: Lease[];
};
