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

export const SWITCH_PLACE_BERTH_LEASE_QUERY = gql`
  query SWITCH_PLACE_BERTH_LEASE($leaseId: ID!) {
    berthLease(id: $leaseId) {
      id
      boat {
        boatType {
          id
          name
        }
        draught
        id
        length
        model
        name
        registrationNumber
        weight
        width
      }
    }
  }
`;
