import gql from 'graphql-tag';

export const UNMARKED_WINTER_STORAGE_NOTICES_QUERY = gql`
  query UNMARKED_WINTER_STORAGE_NOTICES(
    $first: Int!
    $after: String
    $orderBy: String
    $statuses: [ApplicationStatus]
  ) {
    winterStorageNotices: winterStorageApplications(
      first: $first
      after: $after
      orderBy: $orderBy
      areaTypes: [UNMARKED]
      statuses: $statuses
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
