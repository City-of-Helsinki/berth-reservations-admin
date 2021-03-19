import gql from 'graphql-tag';

export const CREATE_LEASE_HARBORS_QUERY = gql`
  query CREATE_LEASE_HARBORS {
    harbors {
      edges {
        node {
          id
          properties {
            name
          }
        }
      }
    }
  }
`;
