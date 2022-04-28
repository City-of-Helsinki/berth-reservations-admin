/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WINTER_STORAGE_AREA_FORM
// ====================================================

export interface WINTER_STORAGE_AREA_FORM_winterStorageArea_properties {
  __typename: "WinterStorageAreaProperties";
  name: string | null;
  streetAddress: string | null;
  zipCode: string;
  municipality: string | null;
  wwwUrl: string;
  imageFile: string | null;
}

export interface WINTER_STORAGE_AREA_FORM_winterStorageArea {
  __typename: "WinterStorageAreaNode";
  id: string;
  properties: WINTER_STORAGE_AREA_FORM_winterStorageArea_properties | null;
}

export interface WINTER_STORAGE_AREA_FORM {
  winterStorageArea: WINTER_STORAGE_AREA_FORM_winterStorageArea | null;
}

export interface WINTER_STORAGE_AREA_FORMVariables {
  id: string;
}
