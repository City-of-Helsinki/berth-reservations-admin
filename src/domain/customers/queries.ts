import gql from 'graphql-tag';

export const CUSTOMER_QUERY = gql`
  query CUSTOMERS {
    profiles(serviceType: BERTH) {
      edges {
        node {
          id
          firstName
          lastName
          nickname
          divisionsOfInterest {
            ocdId
            type
            name
          }
          serviceConnections {
            edges {
              node {
                id
                service {
                  id
                  type
                }
              }
            }
          }
          contactMethod
          image
          addresses {
            primary
            addressType
          }
          emails {
            email
            primary
          }
          phones {
            phone
          }
        }
      }
    }
  }
`;
