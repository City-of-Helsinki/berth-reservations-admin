import gql from 'graphql-tag';

export const BERTH_OFFER_HARBOR_FRAGMENT = gql`
  fragment BerthOfferHarbor on HarborNode {
    id
    properties {
      name
      servicemapId
      imageFile
      streetAddress
      municipality
      zipCode
      maxWidth
      numberOfPlaces
      numberOfFreePlaces
    }
  }
`;

export const BERTH_OFFER_PIERS_FRAGMENT = gql`
  fragment BerthOfferPiers on PierNodeConnection {
    edges {
      node {
        id
        properties {
          identifier
          electricity
          gate
          water
          lighting
          wasteCollection
          berths(isAvailable: true) {
            edges {
              node {
                comment
                depth
                id
                isAccessible
                isActive
                leases {
                  edges {
                    node {
                      status
                      startDate
                      endDate
                      isActive
                      customer {
                        id
                      }
                    }
                  }
                }
                length
                mooringType
                number
                width
              }
            }
          }
        }
      }
    }
  }
`;
