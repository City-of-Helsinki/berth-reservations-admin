import gql from 'graphql-tag';

export const CUSTOMER_FORM_QUERY = gql`
  query CUSTOMER_FORM($id: ID!) {
    profile(id: $id, serviceType: BERTH) {
      id
      comment
      firstName
      lastName
      customerGroup
      organization {
        address
        businessId
        city
        name
        postalCode
      }
      primaryAddress {
        address
        postalCode
        city
      }
      primaryEmail {
        email
      }
      primaryPhone {
        phone
      }
      language
    }
  }
`;
