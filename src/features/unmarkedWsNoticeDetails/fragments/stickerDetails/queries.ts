import gql from 'graphql-tag';

export const UNMARKED_WINTER_STORAGE_STICKER_QUERY = gql`
  query UNMARKED_WINTER_STORAGE_STICKER($id: ID!) {
    unmarkedWinterStorageSticker: winterStorageLease(id: $id) {
      stickerNumber
      stickerSeason
      stickerPosted
    }
  }
`;
