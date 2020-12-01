import gql from 'graphql-tag';

export const UNMARKED_WINTER_STORAGE_NOTICES_STICKERS_QUERY = gql`
  query UNMARKED_WINTER_STORAGE_NOTICES_STICKERS {
    winterStorageNotices: winterStorageApplications(areaTypes: [UNMARKED]) {
      count
      edges {
        node {
          firstName
          lastName
          municipality
          zipCode
          address
          lease {
            id
            status
            stickerNumber
            stickerSeason
          }
        }
      }
    }
  }
`;
