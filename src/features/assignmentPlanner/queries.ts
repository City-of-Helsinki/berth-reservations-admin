import gql from 'graphql-tag';

export const BERTH_ASSIGNMENT_PLANS_QUERY = gql`
  query BERTH_ASSIGNMENT_PLANS {
    berthAssignmentPlans {
      id
      application {
        id
        firstName
        lastName
        email
        harborChoices {
          harbor
          harborName
          priority
        }
      }
      berth {
        id
        number
        pier {
          properties {
            identifier
            harbor {
              properties {
                servicemapId
                name
              }
            }
          }
        }
      }
    }
  }
`;
