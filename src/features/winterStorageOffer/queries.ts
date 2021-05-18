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
