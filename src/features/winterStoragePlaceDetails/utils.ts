import { WINTER_STORAGE_PLACE_DETAILS_winterStoragePlace as PLACE } from './__generated__/WINTER_STORAGE_PLACE_DETAILS';
import { Lease } from './WinterStoragePlaceDetails';

export const getPlaceLeases = (leases: PLACE['leases']) => {
  if (!leases) return [];
  return leases?.edges.reduce<Lease[]>((acc, leaseEdge) => {
    if (!leaseEdge?.node) return acc;
    return [...acc, { ...leaseEdge.node }];
  }, []);
};
