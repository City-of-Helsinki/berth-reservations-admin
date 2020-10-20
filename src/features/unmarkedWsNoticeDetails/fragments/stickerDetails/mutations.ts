import gql from 'graphql-tag';

export const ASSIGN_NEW_STICKER_NUMBER_MUTATION = gql`
  mutation ASSIGN_NEW_STICKER_NUMBER($input: AssignNewStickerNumberMutationInput!) {
    assignNewStickerNumber(input: $input) {
      clientMutationId
    }
  }
`;
