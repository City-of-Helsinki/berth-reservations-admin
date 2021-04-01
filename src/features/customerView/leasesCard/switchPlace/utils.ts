import { SWITCH_PLACE_HARBORS } from './__generated__/SWITCH_PLACE_HARBORS';
import { HarborOption } from './types';

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
