/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RejectBerthApplicationMutationInput } from "./../../../@types/__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: REJECT_BERTH_APPLICATION
// ====================================================

export interface REJECT_BERTH_APPLICATION_rejectBerthApplication {
  __typename: "RejectBerthApplicationMutationPayload";
  clientMutationId: string | null;
}

export interface REJECT_BERTH_APPLICATION {
  rejectBerthApplication: REJECT_BERTH_APPLICATION_rejectBerthApplication | null;
}

export interface REJECT_BERTH_APPLICATIONVariables {
  input: RejectBerthApplicationMutationInput;
}
