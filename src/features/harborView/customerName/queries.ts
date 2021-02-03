import gql from 'graphql-tag';

export const CUSTOMER_NAME_QUERY = gql`
  query CUSTOMER_NAME($customerId: ID!) {
    profile(id: $customerId, serviceType: BERTH) {
      id
      firstName
      lastName
    }
  }
`;
