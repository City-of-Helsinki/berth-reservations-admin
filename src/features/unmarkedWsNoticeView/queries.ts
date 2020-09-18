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
        winterStorageArea
        priority
        winterStorageAreaName
      }
    }
    boatTypes {
      id
      name
    }
  }
`;
