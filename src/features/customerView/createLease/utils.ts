import { CREATE_LEASE_HARBORS } from './__generated__/CREATE_LEASE_HARBORS';
import { BoatOption, HarborOption } from './types';

const sortHarborOptions = (a: HarborOption, b: HarborOption) => {
  if (a.label < b.label) {
    return -1;
  }
  if (a.label > b.label) {
    return 1;
  }
  return 0;
};

export const getHarborOptions = (data: CREATE_LEASE_HARBORS | undefined): HarborOption[] =>
  data?.harbors?.edges
    ?.reduce<HarborOption[]>((acc, edge) => {
      if (edge?.node?.properties?.name) {
        return [
          ...acc,
          {
            label: edge.node.properties.name,
            value: edge.node.id,
          },
        ];
      }
      return acc;
    }, [])
    .sort(sortHarborOptions) || [];

export const getBoatsOptions = (data: CREATE_LEASE_HARBORS | undefined): BoatOption[] =>
  data?.profile?.boats?.edges.reduce<BoatOption[]>((acc, edge) => {
    if (!edge?.node) return acc;
    return [...acc, { label: edge.node.name, value: edge.node.id }];
  }, []) ?? [];
