import gql from 'graphql-tag';

export const CUSTOMER_FORM_QUERY = gql`
  query CUSTOMER_FORM($id: ID!) {
    profile(id: $id, serviceType: BERTH) {
      id
      comment
      firstName
      lastName
      customerGroup
      invoicingType
      organization {
        id
        address
        businessId
        city
        name
        postalCode
      }
      primaryAddress {
        id
        address
        postalCode
        city
      }
      primaryEmail {
        id
        email
      }
      primaryPhone {
        id
        phone
      }
      language
    }
  }
`;
