import gql from 'graphql-tag';

export const HARBOR_TIERS_FRAGMENT = gql`
  fragment HarborTiers on HarborNodeConnection {
    edges {
      node {
        id
        properties {
          name
          piers {
            edges {
              node {
                id
                properties {
                  priceTier
                }
              }
            }
          }
        }
      }
    }
  }
`;
