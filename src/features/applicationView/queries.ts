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
        berthNumber
        harbor
        harborName
        id
        pier
        reason {
          title
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
        harbor
        priority
        harborName
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
