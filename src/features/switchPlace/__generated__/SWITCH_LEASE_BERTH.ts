/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SwitchBerthMutationInput } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: SWITCH_LEASE_BERTH
// ====================================================

export interface SWITCH_LEASE_BERTH_switchBerth {
  __typename: "SwitchBerthMutationPayload";
  clientMutationId: string | null;
}

export interface SWITCH_LEASE_BERTH {
  switchBerth: SWITCH_LEASE_BERTH_switchBerth | null;
}

export interface SWITCH_LEASE_BERTHVariables {
  input: SwitchBerthMutationInput;
}
