import gql from 'graphql-tag';

export const BERTH_LEASE_FRAGMENT = gql`
  fragment BerthLease on BerthLeaseNode {
    id
    status
    berth {
      id
      depth
      length
      mooringType
      width
      comment
      isAccessible
      number
      pier {
        id
        properties {
          identifier
          electricity
          gate
          lighting
          mooring
          wasteCollection
          water
          harbor {
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

export const ADDITIONAL_SERVICES_FRAGMENT = gql`
  fragment AdditionalServices on Query {
    additionalProducts(productType: OPTIONAL_SERVICE) {
      edges {
        node {
          id
          service
          priceValue
          priceUnit
          period
          productType
        }
      }
    }
  }
`;
