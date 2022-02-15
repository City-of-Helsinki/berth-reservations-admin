import gql from 'graphql-tag';

export const CUSTOMERS_QUERY = gql`
  query CUSTOMERS(
    $first: Int!
    $after: String
    $firstName: String
    $lastName: String
    $email: String
    $address: String
    $orderBy: String
  ) {
    profiles(
      first: $first
      after: $after
      serviceType: BERTH
      firstName: $firstName
      lastName: $lastName
      emails_Email: $email
      addresses_Address: $address
      orderBy: $orderBy
    ) {
      count
      edges {
        node {
          id
          firstName
          lastName
          nickname
          comment
          customerGroup
          organization {
            id
            name
            address
            postalCode
            city
            businessId
          }
          primaryAddress {
            id
            address
            city
            postalCode
          }
          primaryPhone {
            id
            phone
          }
          primaryEmail {
            id
            email
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
          boats {
            edges {
              node {
                id
                name
              }
            }
          }
          berthApplications {
            edges {
              node {
                id
                createdAt
              }
            }
          }
          berthLeases {
            edges {
              node {
                id
                isActive
                status
                berth {
                  number
                  pier {
                    properties {
                      identifier
                      harbor {
                        properties {
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const FILTER_OPTIONS_QUERY = gql`
  query FILTER_OPTIONS(
    $harborId: ID
    $pierId: ID
    $winterStorageGridAreaId: ID!
    $skipPiers: Boolean!
    $skipBerths: Boolean!
    $skipWinterStorageGridArea: Boolean!
  ) {
    boatTypes {
      id
      name
    }
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
    piers(harbor: $harborId) @skip(if: $skipPiers) {
      edges {
        node {
          id
          properties {
            identifier
          }
        }
      }
    }
    berths(pier: $pierId) @skip(if: $skipBerths) {
      edges {
        node {
          id
          number
        }
      }
    }
    winterStorageAreas {
      edges {
        node {
          id
          properties {
            name
            estimatedNumberOfUnmarkedSpaces
          }
        }
      }
    }
    winterStorageGridArea: winterStorageArea(id: $winterStorageGridAreaId) @skip(if: $skipWinterStorageGridArea) {
      id
      properties {
        sections {
          edges {
            node {
              id
              properties {
                identifier
                places {
                  edges {
                    node {
                      id
                      number
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const FILTER_BOAT_TYPE_LABELS_QUERY = gql`
  query FILTER_BOAT_TYPE_LABELS {
    boatTypes {
      id
      name
    }
  }
`;

export const FILTER_HARBOR_LABEL_QUERY = gql`
  query FILTER_HARBOR_LABEL($harborId: ID!) {
    harbor(id: $harborId) {
      id
      properties {
        name
      }
    }
  }
`;

export const FILTER_PIER_LABEL_QUERY = gql`
  query FILTER_PIER_LABEL($pierId: ID!) {
    pier(id: $pierId) {
      id
      properties {
        identifier
      }
    }
  }
`;

export const FILTER_BERTH_LABEL_QUERY = gql`
  query FILTER_BERTH_LABEL($berthId: ID!) {
    berth(id: $berthId) {
      id
      number
    }
  }
`;

export const FILTER_WINTER_STORAGE_AREA_LABEL_QUERY = gql`
  query FILTER_WINTER_STORAGE_AREA_LABEL($winterStorageAreaId: ID!) {
    winterStorageArea(id: $winterStorageAreaId) {
      id
      properties {
        name
      }
    }
  }
`;

export const FILTER_WINTER_STORAGE_PLACE_LABEL_QUERY = gql`
  query FILTER_WINTER_STORAGE_PLACE_LABEL($winterStoragePlaceId: ID!) {
    winterStoragePlace(id: $winterStoragePlaceId) {
      id
      number
    }
  }
`;
