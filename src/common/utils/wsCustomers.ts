interface WinterStorageLeaseNode {
  __typename: 'WinterStorageLeaseNode';
  isActive: boolean;
}

interface WinterStorageLeaseNodeEdge {
  __typename: 'WinterStorageLeaseNodeEdge';
  node: WinterStorageLeaseNode;
}

interface WinterStorageLeaseNodeConnection {
  __typename: 'WinterStorageLeaseNodeConnection';
  edges: (WinterStorageLeaseNodeEdge | null)[];
}

interface WinterStoragePlaceNode {
  __typename: 'WinterStoragePlaceNode';
  leases: WinterStorageLeaseNodeConnection | null;
}

interface WinterStoragePlaceNodeEdge {
  __typename: 'WinterStoragePlaceNodeEdge';
  node: WinterStoragePlaceNode | null;
}

interface WinterStoragePlaceNodeConnection {
  __typename: 'WinterStoragePlaceNodeConnection';
  edges: (WinterStoragePlaceNodeEdge | null)[];
}

interface WinterStorageSectionProperties {
  __typename: 'WinterStorageSectionProperties';
  places: WinterStoragePlaceNodeConnection;
}

interface WinterStorageSectionNode {
  __typename: 'WinterStorageSectionNode';
  properties: WinterStorageSectionProperties | null;
}

interface WinterStorageSectionNodeEdge {
  __typename: 'WinterStorageSectionNodeEdge';
  node: WinterStorageSectionNode | null;
}

export interface WinterStorageSectionNodeConnection {
  __typename: 'WinterStorageSectionNodeConnection';
  edges: (WinterStorageSectionNodeEdge | null)[];
}

const getNumberOfCustomersForPlace = (place: WinterStoragePlaceNode): number => {
  const isActive = place.leases?.edges?.find((edge) => edge?.node?.isActive);
  return isActive ? 1 : 0;
};

const getNumberOfCustomersForSection = (section: WinterStorageSectionNode): number => {
  const countPerPlace =
    section.properties?.places.edges.map((edge) => (edge?.node ? getNumberOfCustomersForPlace(edge.node) : 0)) || [];

  return countPerPlace.reduce((a, b) => {
    return a + b;
  }, 0);
};

export const getNumberOfCustomers = (sections: WinterStorageSectionNodeConnection): number => {
  const countPerSection =
    sections.edges.map((edge) => (edge?.node ? getNumberOfCustomersForSection(edge.node) : 0)) || [];

  return countPerSection.reduce((a, b) => {
    return a + b;
  }, 0);
};
