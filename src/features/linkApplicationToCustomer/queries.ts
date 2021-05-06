import gql from 'graphql-tag';

export const FILTERED_CUSTOMERS_QUERY = gql`
  query FILTERED_CUSTOMERS(
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
          customerGroup
          primaryAddress {
            address
            postalCode
            city
          }
          organization {
            id
            businessId
          }
          berthLeases {
            edges {
              node {
                id
                berth {
                  id
                  number
                  pier {
                    id
                    properties {
                      identifier
                      harbor {
                        id
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
          winterStorageLeases {
            edges {
              node {
                id
                isActive
                place {
                  id
                  winterStorageSection {
                    id
                    properties {
                      area {
                        id
                        properties {
                          name
                        }
                      }
                    }
                  }
                }
                section {
                  id
                  properties {
                    area {
                      id
                      properties {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
          berthApplications {
            edges {
              node {
                id
                berthSwitch {
                  berth {
                    id
                    pier {
                      id
                      properties {
                        harbor {
                          id
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
  }
`;
