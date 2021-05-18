import gql from 'graphql-tag';

export const WINTER_STORAGE_OFFER_AREA_FRAGMENT = gql`
  fragment WinterStorageOfferArea on WinterStorageAreaNode {
    id
    properties {
      imageFile
      maxWidth
      municipality
      name
      numberOfFreePlaces
      numberOfPlaces
      servicemapId
      streetAddress
      wwwUrl
      zipCode
    }
  }
`;

export const WINTER_STORAGE_OFFER_SECTIONS_FRAGMENT = gql`
  fragment WinterStorageOfferSections on WinterStorageSectionNodeConnection {
    edges {
      node {
        id
        properties {
          identifier
          electricity
          gate
          water
          summerStorageForBoats
          summerStorageForDockingEquipment
          summerStorageForTrailers
          places {
            edges {
              node {
                id
                isActive
                isAvailable
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
