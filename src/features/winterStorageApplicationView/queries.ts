import gql from 'graphql-tag';

import { WINTER_STORAGE_LEASE_FRAGMENT } from './winterStorageOfferCard/fragments';

export const INDIVIDUAL_WINTER_STORAGE_APPLICATION_QUERY = gql`
  query INDIVIDUAL_WINTER_STORAGE_APPLICATION($id: ID!) {
    winterStorageApplication(id: $id) {
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
        customerGroup
        comment
        firstName
        invoicingType
        lastName
        id
        organization {
          id
          address
          businessId
          city
          name
          organizationType
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
      createdAt
      municipality
      boatType
      boatRegistrationNumber
      boatWidth
      boatLength
      boatName
      boatModel
      acceptBoatingNewsletter
      acceptFitnessNews
      acceptLibraryNews
      acceptOtherCultureNews
      status
      winterStorageAreaChoices {
        priority
        winterStorageArea {
          id
          properties {
            name
          }
        }
      }
      applicationCode
      lease {
        ...WinterStorageLease
      }
    }
    boatTypes {
      id
      name
    }
  }
  ${WINTER_STORAGE_LEASE_FRAGMENT}
`;
