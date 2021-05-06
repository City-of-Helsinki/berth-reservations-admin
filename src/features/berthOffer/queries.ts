import gql from 'graphql-tag';

import { BERTH_OFFER_HARBOR_FRAGMENT, BERTH_OFFER_PIERS_FRAGMENT } from './fragments';

export const BERTH_OFFER_QUERY = gql`
  query BERTH_OFFER($applicationId: ID!, $harborId: ID!) {
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
    harbor(id: $harborId) {
      ...BerthOfferHarbor
      properties {
        piers(forApplication: $applicationId) {
          ...BerthOfferPiers
        }
      }
    }
  }
  ${BERTH_OFFER_HARBOR_FRAGMENT}
  ${BERTH_OFFER_PIERS_FRAGMENT}
`;

export const BERTH_OFFER_WITHOUT_APPLICATION_PROFILE_QUERY = gql`
  query BERTH_OFFER_WITHOUT_APPLICATION_PROFILE($customerId: ID!) {
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

export const BERTH_OFFER_WITHOUT_APPLICATION_HARBOR_QUERY = gql`
  query BERTH_OFFER_WITHOUT_APPLICATION_HARBOR($harborId: ID!, $boatWidth: Float!) {
    harbor(id: $harborId) {
      ...BerthOfferHarbor
      properties {
        piers(minBerthWidth: $boatWidth) {
          ...BerthOfferPiers
        }
      }
    }
  }
  ${BERTH_OFFER_HARBOR_FRAGMENT}
  ${BERTH_OFFER_PIERS_FRAGMENT}
`;

export const SWITCH_BERTH_LEASE_QUERY = gql`
  query SWITCH_BERTH_LEASE($leaseId: ID!) {
    berthLease(id: $leaseId) {
      id
      boat {
        boatType {
          id
          name
        }
        draught
        id
        length
        model
        name
        registrationNumber
        weight
        width
      }
    }
  }
`;
