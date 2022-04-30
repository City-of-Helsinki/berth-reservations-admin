/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SECTION
// ====================================================

export interface SECTION_winterStorageSection_properties {
  __typename: "WinterStorageSectionProperties";
  identifier: string;
  electricity: boolean;
  gate: boolean;
  water: boolean;
  summerStorageForBoats: boolean;
  summerStorageForDockingEquipment: boolean;
  summerStorageForTrailers: boolean;
}

export interface SECTION_winterStorageSection {
  __typename: "WinterStorageSectionNode";
  properties: SECTION_winterStorageSection_properties | null;
}

export interface SECTION {
  winterStorageSection: SECTION_winterStorageSection | null;
}

export interface SECTIONVariables {
  id: string;
}
