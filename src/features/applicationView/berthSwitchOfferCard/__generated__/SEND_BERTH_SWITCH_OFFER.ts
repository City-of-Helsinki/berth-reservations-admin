/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SendBerthSwitchOfferMutationInput } from "./../../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: SEND_BERTH_SWITCH_OFFER
// ====================================================

export interface SEND_BERTH_SWITCH_OFFER_sendBerthSwitchOffer {
  __typename: "SendBerthSwitchOfferMutationPayload";
  clientMutationId: string | null;
}

export interface SEND_BERTH_SWITCH_OFFER {
  sendBerthSwitchOffer: SEND_BERTH_SWITCH_OFFER_sendBerthSwitchOffer | null;
}

export interface SEND_BERTH_SWITCH_OFFERVariables {
  input: SendBerthSwitchOfferMutationInput;
}
