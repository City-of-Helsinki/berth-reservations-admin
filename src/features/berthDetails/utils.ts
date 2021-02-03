import { BERTH_DETAILS_berth as BERTH } from './__generated__/BERTH_DETAILS';
import { Lease } from './BerthDetails';

export const getBerthLeases = (leases: BERTH['leases']) => {
  if (!leases) return [];
  return leases?.edges.reduce<Lease[]>((acc, leaseEdge) => {
    if (!leaseEdge?.node) return acc;
    return [...acc, { ...leaseEdge.node }];
  }, []);
};
