import gql from 'graphql-tag';

export const SWITCH_PLACE_HARBORS_QUERY = gql`
  query SWITCH_PLACE_HARBORS {
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
