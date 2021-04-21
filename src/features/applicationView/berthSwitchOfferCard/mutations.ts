import gql from 'graphql-tag';

export const SEND_BERTH_SWITCH_OFFER_MUTATION = gql`
  mutation SEND_BERTH_SWITCH_OFFER($input: SendBerthSwitchOfferMutationInput!) {
    sendBerthSwitchOffer(input: $input) {
      failedOffers {
        id
        error
      }
      sentOffers
    }
  }
`;

export const UPDATE_BERTH_SWITCH_OFFER_MUTATION = gql`
  mutation UPDATE_BERTH_SWITCH_OFFER($input: UpdateBerthSwitchOfferMutationInput!) {
    updateBerthSwitchOffer(input: $input) {
      clientMutationId
    }
  }
`;
