import gql from 'graphql-tag';

export const SWITCH_BERTH_HARBORS_QUERY = gql`
  query SWITCH_BERTH_HARBORS {
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
