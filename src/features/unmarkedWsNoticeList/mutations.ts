import gql from 'graphql-tag';

export const SET_STICKERS_POSTED_MUTATION = gql`
  mutation SET_STICKERS_POSTED($input: SetStickersPostedMutationInput!) {
    setStickersPosted(input: $input) {
      clientMutationId
    }
  }
`;
