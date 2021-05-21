import gql from 'graphql-tag';

export const BERTH_PRICING_FRAGMENT = gql`
  fragment BerthPricing on BerthProductNodeConnection {
    edges {
      node {
        id
        minWidth
        maxWidth
        tier1Price
        tier2Price
        tier3Price
        priceUnit
        taxPercentage
        pricingCategory
      }
    }
  }
`;
