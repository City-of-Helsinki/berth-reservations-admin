import { SWITCH_PLACE_HARBORS } from './__generated__/SWITCH_PLACE_HARBORS';
import { HarborOption } from './types';
import { Boat } from '../../common/boatCard/types';
import { SWITCH_PLACE_BERTH_LEASE } from './__generated__/SWITCH_PLACE_BERTH_LEASE';

const sortHarborOptions = (a: HarborOption, b: HarborOption) => {
  if (a.label < b.label) {
    return -1;
  }
  if (a.label > b.label) {
    return 1;
  }
  return 0;
};

export const getHarborOptions = (data: SWITCH_PLACE_HARBORS | undefined): HarborOption[] =>
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

export const getLeaseBoat = (data: SWITCH_PLACE_BERTH_LEASE | undefined): Boat | undefined => {
  const boatData = data?.berthLease?.boat;

  if (!boatData) return undefined;
  return {
    boatRegistrationNumber: boatData.registrationNumber,
    boatType: boatData.boatType.name,
    boatName: boatData.name,
    boatWidth: boatData.width,
    boatDraught: boatData.draught,
    boatLength: boatData.length,
    boatWeight: boatData.weight,
    boatModel: boatData.model,
  };
};
