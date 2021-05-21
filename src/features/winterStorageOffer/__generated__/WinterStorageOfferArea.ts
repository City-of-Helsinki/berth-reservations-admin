/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: WinterStorageOfferArea
// ====================================================

export interface WinterStorageOfferArea_properties {
  __typename: "WinterStorageAreaProperties";
  imageFile: string | null;
  maxWidth: number | null;
  municipality: string | null;
  name: string | null;
  numberOfFreePlaces: number;
  numberOfPlaces: number;
  servicemapId: string | null;
  streetAddress: string | null;
  wwwUrl: string;
  zipCode: string;
}

export interface WinterStorageOfferArea {
  __typename: "WinterStorageAreaNode";
  id: string;
  properties: WinterStorageOfferArea_properties | null;
}
