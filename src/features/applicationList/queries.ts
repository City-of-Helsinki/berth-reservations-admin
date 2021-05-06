import gql from 'graphql-tag';

export const BERTH_APPLICATIONS_QUERY = gql`
  query BERTH_APPLICATIONS(
    $first: Int!
    $after: String
    $applicationCode: Boolean
    $switchApplications: Boolean
    $orderBy: String
    $statuses: [ApplicationStatus]
    $nameFilter: String
  ) {
    berthApplications(
      first: $first
      after: $after
      switchApplications: $switchApplications
      applicationCode: $applicationCode
      orderBy: $orderBy
      statuses: $statuses
      name: $nameFilter
    ) {
      count
      edges {
        node {
          id
          firstName
          lastName
          customer {
            id
          }
          berthSwitch {
            id
            berth {
              id
              number
              pier {
                id
                properties {
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
                status
              }
            }
          }
          email
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
          applicationCode
          status
          lease {
            id
            status
            order {
              id
            }
            berth {
              number
              pier {
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
          }
          harborChoices {
            harbor {
              id
              properties {
                name
              }
            }
            priority
          }
        }
      }
    }
    boatTypes {
      id
      name
    }
  }
`;
