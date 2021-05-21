import { PlaceProductTaxEnum, PriceUnits, PricingCategory } from '../../../../@types/__generated__/globalTypes';
import { BerthPricingProps } from '../BerthPricing';

export const data: BerthPricingProps['data'] = {
  __typename: 'BerthProductNodeConnection',
  edges: [
    {
      __typename: 'BerthProductNodeEdge',
      node: {
        __typename: 'BerthProductNode',
        id: '68ac7db5-b397-48f6-af19-99c35d645cb6',
        minWidth: 3,
        maxWidth: 7,
        tier1Price: 50,
        tier2Price: 75,
        tier3Price: 100,
        priceUnit: PriceUnits.AMOUNT,
        taxPercentage: PlaceProductTaxEnum.TAX_24_00,
        pricingCategory: PricingCategory.DEFAULT,
      },
    },
    {
      __typename: 'BerthProductNodeEdge',
      node: {
        __typename: 'BerthProductNode',
        id: '82c3ba8c-f409-4f54-ad8f-12ace3f5df50',
        minWidth: 6,
        maxWidth: 14,
        tier1Price: 150,
        tier2Price: 175,
        tier3Price: 200,
        priceUnit: PriceUnits.AMOUNT,
        taxPercentage: PlaceProductTaxEnum.TAX_24_00,
        pricingCategory: PricingCategory.DEFAULT,
      },
    },
    {
      __typename: 'BerthProductNodeEdge',
      node: {
        __typename: 'BerthProductNode',
        id: '27a112bd-734c-461c-86d1-ba78d7351a3f',
        minWidth: 3,
        maxWidth: 7,
        tier1Price: 40,
        tier2Price: 60,
        tier3Price: 80,
        priceUnit: PriceUnits.AMOUNT,
        taxPercentage: PlaceProductTaxEnum.TAX_24_00,
        pricingCategory: PricingCategory.VASIKKASAARI,
      },
    },
  ],
};
