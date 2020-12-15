import i18next from 'i18next';

import { BerthPricing as BerthPricingData } from './__generated__/BerthPricing';
import { BerthPrice } from './BerthPricing';
import { PriceTier } from '../../../@types/__generated__/globalTypes';
import { formatDimension } from '../../../common/utils/format';

export const getBerthsData = (data: BerthPricingData | null | undefined): BerthPrice[] => {
  if (!data) return [];

  return data.edges.reduce<BerthPrice[]>((acc, edge) => {
    if (!edge?.node) return acc;

    const berthPrice = {
      id: edge.node.id,
      productId: edge.node.id,
      name: `${formatDimension(edge.node.minWidth, i18next.language)} - ${formatDimension(
        edge.node.maxWidth,
        i18next.language
      )}`,
      [PriceTier.TIER_1]: edge.node.tier1Price,
      [PriceTier.TIER_2]: edge.node.tier2Price,
      [PriceTier.TIER_3]: edge.node.tier3Price,
    };

    return [...acc, berthPrice];
  }, []);
};
