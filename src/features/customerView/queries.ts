import gql from 'graphql-tag';

export const INDIVIDUAL_CUSTOMER_QUERY = gql`
  query INDIVIDUAL_CUSTOMER($id: ID!) {
    profile(id: $id, serviceType: BERTH) {
      comment
      firstName
      invoicingType
      lastName
      id
      customerGroup
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
      boats {
        edges {
          node {
            id
            boatType {
              id
              name
            }
            width
            length
            draught
            weight
            name
            model
            registrationNumber
            propulsion
            hullMaterial
            intendedUse
            certificates {
              file
              certificateType
              validUntil
              checkedAt
              checkedBy
            }
          }
        }
      }
      berthLeases {
        edges {
          node {
            id
            status
            startDate
            endDate
            isActive
            berth {
              number
              length
              width
              depth
              mooringType
              pier {
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
            status
            startDate
            endDate
            place {
              number
              winterStorageSection {
                properties {
                  identifier
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
      orders {
        edges {
          node {
            orderNumber
            orderType
            dueDate
            totalPrice
            price
            status
            orderLines {
              edges {
                node {
                  product {
                    service
                    priceUnit
                    priceValue
                  }
                  price
                }
              }
            }
            lease {
              ... on BerthLeaseNode {
                startDate
                endDate
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
              ... on WinterStorageLeaseNode {
                startDate
                endDate
                place {
                  winterStorageSection {
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
        }
      }
      berthApplications {
        edges {
          node {
            id
            berthSwitch {
              berthNumber
              harbor
              harborName
              id
              pier
              reason {
                title
              }
            }
            createdAt
            status
            lease {
              id
              status
              berth {
                number
                pier {
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
            boatType
            boatRegistrationNumber
            boatWidth
            boatLength
            boatDraught
            boatWeight
            boatName
            boatModel
            harborChoices {
              harbor
              priority
              harborName
            }
            accessibilityRequired
          }
        }
      }
    }
    boatTypes {
      id
      name
    }
  }
`;
