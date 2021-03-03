import gql from 'graphql-tag';

export const WINTER_STORAGE_APPLICATIONS_QUERY = gql`
  query WINTER_STORAGE_APPLICATIONS(
    $first: Int!
    $after: String
    $orderBy: String
    $statuses: [ApplicationStatus]
    $nameFilter: String
  ) {
    winterStorageApplications(
      first: $first
      after: $after
      orderBy: $orderBy
      areaTypes: [MARKED]
      statuses: $statuses
      name: $nameFilter
    ) {
      count
      edges {
        node {
          areaType
          applicationCode
          id
          status
          createdAt
          municipality
          firstName
          lastName
          customer {
            id
          }
          boatType
          boatRegistrationNumber
          boatWidth
          boatLength
          boatName
          boatModel
          winterStorageAreaChoices {
            priority
            winterStorageAreaName
            winterStorageArea
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
