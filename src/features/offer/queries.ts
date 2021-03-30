import gql from 'graphql-tag';

import { OFFER_HARBOR_FRAGMENT, OFFER_PIERS_FRAGMENT } from './fragments';

export const OFFER_QUERY = gql`
  query OFFER($applicationId: ID!, $servicemapId: String!) {
    berthApplication(id: $applicationId) {
      id
      createdAt
      status
      berthSwitch {
        id
      }
      customer {
        id
      }
      boatType
      boatRegistrationNumber
      boatName
      boatModel
      boatWidth
      boatLength
      boatDraught
      boatWeight
    }
    boatTypes {
      id
      name
    }
    harborByServicemapId(servicemapId: $servicemapId) {
      ...OfferHarbor
      properties {
        piers(forApplication: $applicationId) {
          ...OfferPiers
        }
      }
    }
  }
  ${OFFER_HARBOR_FRAGMENT}
  ${OFFER_PIERS_FRAGMENT}
`;

export const OFFER_WITHOUT_APPLICATION_PROFILE_QUERY = gql`
  query OFFER_WITHOUT_APPLICATION_PROFILE($customerId: ID!) {
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
`;

export const OFFER_WITHOUT_APPLICATION_HARBOR_QUERY = gql`
  query OFFER_WITHOUT_APPLICATION_HARBOR($harborId: ID!) {
    harbor(id: $harborId) {
      ...OfferHarbor
      properties {
        piers {
          # piers(minBerthWidth: $boatWidth) {
          ...OfferPiers
        }
      }
    }
  }
  ${OFFER_HARBOR_FRAGMENT}
  ${OFFER_PIERS_FRAGMENT}
`;
