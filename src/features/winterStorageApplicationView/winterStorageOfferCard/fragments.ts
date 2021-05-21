import gql from 'graphql-tag';

export const WINTER_STORAGE_LEASE_FRAGMENT = gql`
  fragment WinterStorageLease on WinterStorageLeaseNode {
    id
    status
    place {
      id
      length
      width
      number
      winterStorageSection {
        id
        properties {
          identifier
          electricity
          gate
          water
          summerStorageForBoats
          summerStorageForDockingEquipment
          summerStorageForTrailers
          area {
            id
            properties {
              name
            }
          }
        }
      }
    }
    customer {
      id
      primaryEmail {
        id
        email
      }
    }
    order {
      id
      orderNumber
      price
      totalPrice
      status
      orderLines {
        edges {
          node {
            id
            price
            product {
              id
              service
              productType
            }
          }
        }
      }
    }
  }
`;
