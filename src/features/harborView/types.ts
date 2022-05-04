import { INDIVIDUAL_HARBOR_harbor_properties as HarborProperties } from './__generated__/INDIVIDUAL_HARBOR';
import { PriceTier } from '../../@types/__generated__/globalTypes';

interface PierProps {
  electricity: boolean;
  gate: boolean;
  lighting: boolean;
  water: boolean;
  wasteCollection: boolean;
}

export type IndividualHarborData = {
  id: string;
} & Pick<
  HarborProperties,
  | 'name'
  | 'numberOfPlaces'
  | 'numberOfFreePlaces'
  | 'streetAddress'
  | 'zipCode'
  | 'municipality'
  | 'wwwUrl'
  | 'imageFile'
  | 'servicemapId'
  | 'maxWidth'
> &
  PierProps & {
    numberOfPlacesInQueue: number; // TODO
  };

export type Lease = {
  customer: {
    id: string;
  };
  status: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
};

export type PendingSwitchOffer = {
  customer: {
    id: string;
  };
};

export type Berth = {
  id: string;
  isActive: boolean;
  number: string;
  identifier: string;
  length: number;
  width: number;
  depth: number | null;
  mooringType: string;
  comment: string;
  leases?: Lease[];
  prevSeasonLease?: Lease | null;
  pendingSwitchOffer?: PendingSwitchOffer | null;
};

export type Pier = {
  id: string;
  identifier: string;
  electricity: boolean;
  wasteCollection: boolean;
  water: boolean;
  lighting: boolean;
  gate: boolean;
  priceTier: PriceTier | null;
  suitableBoatTypes: string[];
};
