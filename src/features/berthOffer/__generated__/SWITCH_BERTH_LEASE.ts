/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SWITCH_BERTH_LEASE
// ====================================================

export interface SWITCH_BERTH_LEASE_berthLease_boat_boatType {
  __typename: "BoatTypeType";
  id: string;
  name: string | null;
}

export interface SWITCH_BERTH_LEASE_berthLease_boat {
  __typename: "BoatNode";
  boatType: SWITCH_BERTH_LEASE_berthLease_boat_boatType;
  draught: any | null;
  id: string;
  length: any;
  model: string;
  name: string;
  registrationNumber: string;
  weight: number | null;
  width: any;
}

export interface SWITCH_BERTH_LEASE_berthLease {
  __typename: "BerthLeaseNode";
  id: string;
  boat: SWITCH_BERTH_LEASE_berthLease_boat | null;
}

export interface SWITCH_BERTH_LEASE {
  berthLease: SWITCH_BERTH_LEASE_berthLease | null;
}

export interface SWITCH_BERTH_LEASEVariables {
  leaseId: string;
}
