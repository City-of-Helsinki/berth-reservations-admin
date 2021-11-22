import gql from 'graphql-tag';

import { WINTER_STORAGE_OFFER_AREA_FRAGMENT, WINTER_STORAGE_OFFER_SECTIONS_FRAGMENT } from './fragments';

export const WINTER_STORAGE_OFFER_QUERY = gql`
  query WINTER_STORAGE_OFFER($applicationId: ID!, $areaId: ID!) {
    winterStorageApplication(id: $applicationId) {
      id
      createdAt
      status
      customer {
        id
      }
      boatType
      boatRegistrationNumber
      boatName
      boatModel
      boatWidth
      boatLength
    }
    boatTypes {
      id
      name
    }
    winterStorageArea(id: $areaId) {
      ...WinterStorageOfferArea
      properties {
        sections {
          ...WinterStorageOfferSections
        }
      }
    }
  }
  ${WINTER_STORAGE_OFFER_AREA_FRAGMENT}
  ${WINTER_STORAGE_OFFER_SECTIONS_FRAGMENT}
`;

export const WINTER_STORAGE_WITHOUT_APPLICATION_QUERY = gql`
  query WINTER_STORAGE_WITHOUT_APPLICATION($areaId: ID!, $customerId: ID!) {
    winterStorageArea(id: $areaId) {
      ...WinterStorageOfferArea
      properties {
        sections {
          ...WinterStorageOfferSections
        }
      }
    }
    profile(id: $customerId, serviceType: BERTH) {
      id
      boats {
        edges {
          node {
            id
            boatType {
              id
              name
            }
            length
            width
            draught
            weight
            name
            model
            registrationNumber
          }
        }
      }
    }
  }
  ${WINTER_STORAGE_OFFER_AREA_FRAGMENT}
  ${WINTER_STORAGE_OFFER_SECTIONS_FRAGMENT}
`;
