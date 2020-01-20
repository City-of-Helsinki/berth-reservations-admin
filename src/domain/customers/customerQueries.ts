import { gql } from 'apollo-boost';

export const CUSTOMER_QUERY = gql`
  query CUSTOMERS {
    profiles(serviceType: BERTH) {
      edges {
        node {
          id
          firstName
          lastName
          nickname
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
        }
      }
    }
  }
`;

export const INDIVIDUAL_CUSTOMER_QUERY = gql`
  query INDIVIDUAL_CUSTOMER($id: ID!) {
    profile(id: $id, serviceType: BERTH) {
      id
      firstName
      lastName
      primaryEmail {
        email
      }
      primaryPhone {
        phone
      }
      primaryAddress {
        address
        postalCode
        city
      }
      invoicingType
      comment
    }
  }
`;
