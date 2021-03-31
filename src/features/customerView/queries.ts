import gql from 'graphql-tag';

import { BERTH_LEASE_FRAGMENT } from '../applicationView/berthOfferCard/fragments';

export const INDIVIDUAL_CUSTOMER_QUERY = gql`
  query INDIVIDUAL_CUSTOMER($id: ID!) {
    profile(id: $id, serviceType: BERTH) {
      id
      comment
      firstName
      invoicingType
      lastName
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
              id
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
            startDate
            endDate
            isActive
            ...BerthLease
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
              id
              number
              winterStorageSection {
                id
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
      orders {
        edges {
          node {
            id
            orderNumber
            orderType
            dueDate
            paidAt
            totalPrice
            price
            status
            orderLines {
              edges {
                node {
                  id
                  product {
                    id
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
                id
                startDate
                endDate
                status
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
              ... on WinterStorageLeaseNode {
                id
                startDate
                endDate
                status
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
        }
      }
      berthApplications {
        edges {
          node {
            id
            applicationCode
            berthSwitch {
              id
              berthNumber
              harbor
              harborName
              pier
              reason {
                id
                title
              }
            }
            createdAt
            status
            lease {
              id
              status
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
  ${BERTH_LEASE_FRAGMENT}
`;
