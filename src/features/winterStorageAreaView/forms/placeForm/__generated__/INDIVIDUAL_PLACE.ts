/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: INDIVIDUAL_PLACE
// ====================================================

export interface INDIVIDUAL_PLACE_winterStoragePlace_winterStorageSection_properties {
  __typename: "WinterStorageSectionProperties";
  identifier: string;
}

export interface INDIVIDUAL_PLACE_winterStoragePlace_winterStorageSection {
  __typename: "WinterStorageSectionNode";
  id: string;
  properties: INDIVIDUAL_PLACE_winterStoragePlace_winterStorageSection_properties | null;
}

export interface INDIVIDUAL_PLACE_winterStoragePlace {
  __typename: "WinterStoragePlaceNode";
  id: string;
  number: number;
  isActive: boolean;
  winterStorageSection: INDIVIDUAL_PLACE_winterStoragePlace_winterStorageSection;
  width: number;
  length: number;
}

export interface INDIVIDUAL_PLACE {
  winterStoragePlace: INDIVIDUAL_PLACE_winterStoragePlace | null;
}

export interface INDIVIDUAL_PLACEVariables {
  id: string;
}
