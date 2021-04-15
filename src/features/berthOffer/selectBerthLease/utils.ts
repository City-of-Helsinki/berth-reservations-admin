import { SELECT_BERTH_LEASE } from './__generated__/SELECT_BERTH_LEASE';
import { BerthLease } from './types';

export const getBerthLeases = (data: SELECT_BERTH_LEASE | undefined): BerthLease[] => {
  if (!data?.profile?.berthLeases) return [];
  return data.profile.berthLeases.edges.reduce<BerthLease[]>((acc, edge) => {
    if (!edge?.node?.isActive) return acc;
    const lease = edge.node;

    const harbor = lease.berth.pier.properties?.harbor.properties?.name ?? '-';
    const pier = lease.berth.pier.properties?.identifier ?? '-';
    const berth = lease.berth.number ?? '-';

    return [
      ...acc,
      {
        id: lease.id,
        name: [harbor, pier, berth].join(' '),
      },
    ];
  }, []);
};
