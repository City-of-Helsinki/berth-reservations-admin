import gql from 'graphql-tag';
import { BERTH_LEASE_FRAGMENT, ADDITIONAL_SERVICES_FRAGMENT } from './berthOfferCard/fragments';

export const INDIVIDUAL_APPLICATION_QUERY = gql`
  query INDIVIDUAL_APPLICATION($id: ID!) {
    berthApplication(id: $id) {
      id
      firstName
      lastName
      address
      municipality
      zipCode
      phoneNumber
      email
      businessId
      companyName
      language
      customer {
        comment
        firstName
        invoicingType
        lastName
        id
        customerGroup
        organization {
          id
          address
          businessId
          city
          name
          postalCode
        }
        primaryAddress {
          id
          address
          postalCode
          city
        }
        primaryEmail {
          id
          email
        }
        primaryPhone {
          id
          phone
        }
        language
      }
      berthSwitch {
        id
        berth {
          id
          number
          pier {
            id
            properties {
              identifier
              harbor {
                id
                properties {
                  name
                }
              }
            }
          }
        }
        reason {
          title
        }
      }
      switchOffers {
        edges {
          node {
            id
            offerNumber
            lease {
              id
            }
            berth {
              id
              depth
              length
              mooringType
              width
              comment
              isAccessible
              number
              pier {
                id
                properties {
                  identifier
                  electricity
                  gate
                  lighting
                  mooring
                  wasteCollection
                  water
                  harbor {
                    id
                    properties {
                      name
                    }
                  }
                }
              }
            }
            status
          }
        }
      }
      createdAt
      municipality
      boatType
      boatRegistrationNumber
      boatWidth
      boatLength
      boatDraught
      boatWeight
      boatName
      boatModel
      accessibilityRequired
      status
      harborChoices {
        harbor {
          id
          properties {
            name
          }
        }
        priority
      }
      acceptBoatingNewsletter
      acceptFitnessNews
      acceptLibraryNews
      acceptOtherCultureNews
      applicationCode
      lease {
        ...BerthLease
      }
    }
    boatTypes {
      id
      name
    }
    ...AdditionalServices
  }
  ${BERTH_LEASE_FRAGMENT}
  ${ADDITIONAL_SERVICES_FRAGMENT}
`;
