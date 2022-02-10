/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FILTER_WINTER_STORAGE_AREA_LABEL
// ====================================================

export interface FILTER_WINTER_STORAGE_AREA_LABEL_winterStorageArea_properties {
  __typename: "WinterStorageAreaProperties";
  name: string | null;
}

export interface FILTER_WINTER_STORAGE_AREA_LABEL_winterStorageArea {
  __typename: "WinterStorageAreaNode";
  id: string;
  properties: FILTER_WINTER_STORAGE_AREA_LABEL_winterStorageArea_properties | null;
}

export interface FILTER_WINTER_STORAGE_AREA_LABEL {
  winterStorageArea: FILTER_WINTER_STORAGE_AREA_LABEL_winterStorageArea | null;
}

export interface FILTER_WINTER_STORAGE_AREA_LABELVariables {
  winterStorageAreaId: string;
}
