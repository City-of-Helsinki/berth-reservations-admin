import gql from 'graphql-tag';

export const UNMARKED_WINTER_STORAGE_NOTICES_QUERY = gql`
  query UNMARKED_WINTER_STORAGE_NOTICES(
    $first: Int!
    $after: String
    $orderBy: String
    $statuses: [ApplicationStatus]
    $nameFilter: String
  ) {
    winterStorageNotices: winterStorageApplications(
      first: $first
      after: $after
      orderBy: $orderBy
      areaTypes: [UNMARKED]
      statuses: $statuses
      name: $nameFilter
    ) {
      count
      edges {
        node {
          areaType
          boatLength
          boatModel
          boatName
          boatRegistrationNumber
          boatType
          boatWidth
          createdAt
          firstName
          id
          lastName
          email
          status
          winterStorageAreaChoices {
            priority
            winterStorageArea
            winterStorageAreaName
            winterStorageSectionIds
          }
          lease {
            id
            status
            order {
              id
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
