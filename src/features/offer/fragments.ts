import gql from 'graphql-tag';

export const OFFER_HARBOR_FRAGMENT = gql`
  fragment OfferHarbor on HarborNode {
    id
    properties {
      name
      servicemapId
      imageFile
      maps {
        id
        url
      }
      streetAddress
      municipality
      zipCode
      maxWidth
      numberOfPlaces
      numberOfFreePlaces
    }
  }
`;

export const OFFER_PIERS_FRAGMENT = gql`
  fragment OfferPiers on PierNodeConnection {
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
                id
                number
                width
                length
                depth
                mooringType
                comment
                isAccessible
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
              }
            }
          }
        }
      }
    }
  }
`;
