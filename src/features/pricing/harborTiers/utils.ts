import { HarborTiers as HarborTiersData } from './__generated__/HarborTiers';
import { HarborTiersCol } from './HarborTiers';
import { getPriceTier } from '../../../common/utils/translations';

export const getHarborTiersData = (data: HarborTiersData | null | undefined) => {
  if (!data) return [];

  return data?.edges.reduce<HarborTiersCol[]>((acc, harbor) => {
    if (!harbor?.node?.properties?.piers?.edges) return acc;

    const id = harbor.node.id;
    const name = harbor.node.properties.name ?? '-';
    const tiers = harbor.node.properties.piers.edges
      .reduce<string[]>((acc, edge) => {
        if (!edge?.node?.properties?.priceTier) return acc;
        const tier = getPriceTier(edge.node.properties.priceTier);
        if (acc.includes(tier)) return acc;
        return [...acc, tier];
      }, [])
      .join(', ');

    return [...acc, { id, name, tiers }];
  }, []);
};
