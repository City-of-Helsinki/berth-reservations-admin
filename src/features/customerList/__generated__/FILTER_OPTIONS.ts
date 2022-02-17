/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FILTER_OPTIONS
// ====================================================

export interface FILTER_OPTIONS_boatTypes {
  __typename: "BoatTypeType";
  id: string;
  name: string | null;
}

export interface FILTER_OPTIONS_harbors_edges_node_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface FILTER_OPTIONS_harbors_edges_node {
  __typename: "HarborNode";
  id: string;
  properties: FILTER_OPTIONS_harbors_edges_node_properties | null;
}

export interface FILTER_OPTIONS_harbors_edges {
  __typename: "HarborNodeEdge";
  node: FILTER_OPTIONS_harbors_edges_node | null;
}

export interface FILTER_OPTIONS_harbors {
  __typename: "HarborNodeConnection";
  edges: (FILTER_OPTIONS_harbors_edges | null)[];
}

export interface FILTER_OPTIONS_piers_edges_node_properties {
  __typename: "PierProperties";
  identifier: string;
}

export interface FILTER_OPTIONS_piers_edges_node {
  __typename: "PierNode";
  id: string;
  properties: FILTER_OPTIONS_piers_edges_node_properties | null;
}

export interface FILTER_OPTIONS_piers_edges {
  __typename: "PierNodeEdge";
  node: FILTER_OPTIONS_piers_edges_node | null;
}

export interface FILTER_OPTIONS_piers {
  __typename: "PierNodeConnection";
  edges: (FILTER_OPTIONS_piers_edges | null)[];
}

export interface FILTER_OPTIONS_berths_edges_node {
  __typename: "BerthNode";
  id: string;
  number: string;
}

export interface FILTER_OPTIONS_berths_edges {
  __typename: "BerthNodeEdge";
  node: FILTER_OPTIONS_berths_edges_node | null;
}

export interface FILTER_OPTIONS_berths {
  __typename: "BerthNodeConnection";
  edges: (FILTER_OPTIONS_berths_edges | null)[];
}

export interface FILTER_OPTIONS_winterStorageAreas_edges_node_properties {
  __typename: "WinterStorageAreaProperties";
  name: string | null;
  estimatedNumberOfUnmarkedSpaces: number | null;
}

export interface FILTER_OPTIONS_winterStorageAreas_edges_node {
  __typename: "WinterStorageAreaNode";
  id: string;
  properties: FILTER_OPTIONS_winterStorageAreas_edges_node_properties | null;
}

export interface FILTER_OPTIONS_winterStorageAreas_edges {
  __typename: "WinterStorageAreaNodeEdge";
  node: FILTER_OPTIONS_winterStorageAreas_edges_node | null;
}

export interface FILTER_OPTIONS_winterStorageAreas {
  __typename: "WinterStorageAreaNodeConnection";
  edges: (FILTER_OPTIONS_winterStorageAreas_edges | null)[];
}

export interface FILTER_OPTIONS_winterStorageGridArea_properties_sections_edges_node_properties_places_edges_node {
  __typename: "WinterStoragePlaceNode";
  id: string;
  number: number;
}

export interface FILTER_OPTIONS_winterStorageGridArea_properties_sections_edges_node_properties_places_edges {
  __typename: "WinterStoragePlaceNodeEdge";
  node: FILTER_OPTIONS_winterStorageGridArea_properties_sections_edges_node_properties_places_edges_node | null;
}

export interface FILTER_OPTIONS_winterStorageGridArea_properties_sections_edges_node_properties_places {
  __typename: "WinterStoragePlaceNodeConnection";
  edges: (FILTER_OPTIONS_winterStorageGridArea_properties_sections_edges_node_properties_places_edges | null)[];
}

export interface FILTER_OPTIONS_winterStorageGridArea_properties_sections_edges_node_properties {
  __typename: "WinterStorageSectionProperties";
  identifier: string;
  places: FILTER_OPTIONS_winterStorageGridArea_properties_sections_edges_node_properties_places;
}

export interface FILTER_OPTIONS_winterStorageGridArea_properties_sections_edges_node {
  __typename: "WinterStorageSectionNode";
  id: string;
  properties: FILTER_OPTIONS_winterStorageGridArea_properties_sections_edges_node_properties | null;
}

export interface FILTER_OPTIONS_winterStorageGridArea_properties_sections_edges {
  __typename: "WinterStorageSectionNodeEdge";
  node: FILTER_OPTIONS_winterStorageGridArea_properties_sections_edges_node | null;
}

export interface FILTER_OPTIONS_winterStorageGridArea_properties_sections {
  __typename: "WinterStorageSectionNodeConnection";
  edges: (FILTER_OPTIONS_winterStorageGridArea_properties_sections_edges | null)[];
}

export interface FILTER_OPTIONS_winterStorageGridArea_properties {
  __typename: "WinterStorageAreaProperties";
  sections: FILTER_OPTIONS_winterStorageGridArea_properties_sections;
}

export interface FILTER_OPTIONS_winterStorageGridArea {
  __typename: "WinterStorageAreaNode";
  id: string;
  properties: FILTER_OPTIONS_winterStorageGridArea_properties | null;
}

export interface FILTER_OPTIONS {
  boatTypes: FILTER_OPTIONS_boatTypes[] | null;
  harbors: FILTER_OPTIONS_harbors | null;
  piers: FILTER_OPTIONS_piers | null;
  berths: FILTER_OPTIONS_berths | null;
  winterStorageAreas: FILTER_OPTIONS_winterStorageAreas | null;
  winterStorageGridArea: FILTER_OPTIONS_winterStorageGridArea | null;
}

export interface FILTER_OPTIONSVariables {
  harborId?: string | null;
  pierId?: string | null;
  winterStorageGridAreaId: string;
  skipPiers: boolean;
  skipBerths: boolean;
  skipWinterStorageGridArea: boolean;
}
