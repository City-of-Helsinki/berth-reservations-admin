import gql from 'graphql-tag';

export const BERTH_APPLICATIONS_QUERY = gql`
  query BERTH_APPLICATIONS(
    $first: Int!
    $after: String
    $switchApplications: Boolean
    $orderBy: String
    $statuses: [ApplicationStatus]
    $nameFilter: String
  ) {
    berthApplications(
      first: $first
      after: $after
      switchApplications: $switchApplications
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
            berthNumber
            harbor
            harborName
            id
            pier
            reason {
              title
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
            harbor
            priority
            harborName
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
