/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateBerthSwitchOfferMutationInput, OfferStatus } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CREATE_BERTH_SWITCH_OFFER
// ====================================================

export interface CREATE_BERTH_SWITCH_OFFER_createBerthSwitchOffer_berthSwitchOffer {
  __typename: "BerthSwitchOfferNode";
  id: string;
  status: OfferStatus;
}

export interface CREATE_BERTH_SWITCH_OFFER_createBerthSwitchOffer {
  __typename: "CreateBerthSwitchOfferMutationPayload";
  berthSwitchOffer: CREATE_BERTH_SWITCH_OFFER_createBerthSwitchOffer_berthSwitchOffer;
}

export interface CREATE_BERTH_SWITCH_OFFER {
  createBerthSwitchOffer: CREATE_BERTH_SWITCH_OFFER_createBerthSwitchOffer | null;
}

export interface CREATE_BERTH_SWITCH_OFFERVariables {
  input: CreateBerthSwitchOfferMutationInput;
}
