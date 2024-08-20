import i18next from 'i18next';
import { BerthPricing as BerthPricingData } from './__generated__/BerthPricing';
import { BerthPrice } from './BerthPricing';
import { PriceTier, PricingCategory } from '../../../@types/__generated__/globalTypes';
import { formatDimension } from '../../../common/utils/format';

type BerthPriceData = Record<PricingCategory, BerthPrice[]>;

export const getBerthsData = (data: BerthPricingData | null | undefined): BerthPriceData => {
  const initialData: BerthPriceData = {
    [PricingCategory.DEFAULT]: [],
    [PricingCategory.DINGHY]: [],
    [PricingCategory.TRAILER]: [],
    [PricingCategory.VASIKKASAARI]: [],
  };
  if (!data) return initialData;

  return data.edges.reduce<BerthPriceData>((acc, edge) => {
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

    const pricingCategory = edge.node.pricingCategory;

    return { ...acc, [pricingCategory]: [...acc[pricingCategory], berthPrice] };
  }, initialData);
};
