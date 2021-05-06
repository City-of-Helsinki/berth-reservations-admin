import gql from 'graphql-tag';

export const UNMARKED_WINTER_STORAGE_NOTICE_QUERY = gql`
  query UNMARKED_WINTER_STORAGE_NOTICE($id: ID!) {
    winterStorageNotice: winterStorageApplication(id: $id) {
      id
      firstName
      lastName
      address
      municipality
      zipCode
      phoneNumber
      email
      businessId
      companyName
      language
      customer {
        customerGroup
        comment
        firstName
        invoicingType
        lastName
        id
        organization {
          id
          address
          businessId
          city
          name
          organizationType
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
      }
      createdAt
      municipality
      applicationCode
      boatType
      boatRegistrationNumber
      boatWidth
      boatLength
      boatName
      boatModel
      acceptBoatingNewsletter
      acceptFitnessNews
      acceptLibraryNews
      acceptOtherCultureNews
      status
      winterStorageAreaChoices {
        priority
        winterStorageArea {
          id
          properties {
            name
          }
        }
        winterStorageSectionIds
      }
      lease {
        id
        status
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
    }
    boatTypes {
      id
      name
    }
  }
`;
