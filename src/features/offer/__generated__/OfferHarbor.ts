/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: OfferHarbor
// ====================================================

export interface OfferHarbor_properties_maps {
  __typename: "HarborMapType";
  id: any;
  url: string;
}

export interface OfferHarbor_properties {
  __typename: "HarborProperties";
  name: string | null;
  servicemapId: string | null;
  imageFile: string | null;
  maps: (OfferHarbor_properties_maps | null)[];
  streetAddress: string | null;
  municipality: string | null;
  zipCode: string;
  maxWidth: number | null;
  numberOfPlaces: number;
  numberOfFreePlaces: number;
}

export interface OfferHarbor {
  __typename: "HarborNode";
  id: string;
  properties: OfferHarbor_properties | null;
}
