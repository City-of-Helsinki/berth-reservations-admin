import {
  INDIVIDUAL_WINTER_STORAGE_AREA,
  INDIVIDUAL_WINTER_STORAGE_AREA_winterStorageArea_properties_sections_edges_node as SECTION,
  INDIVIDUAL_WINTER_STORAGE_AREA_winterStorageArea_properties_sections_edges_node_properties as SECTION_PROPERTIES,
  // eslint-disable-next-line max-len
  INDIVIDUAL_WINTER_STORAGE_AREA_winterStorageArea_properties_sections_edges_node_properties_places_edges_node_leases as LEASES,
  // eslint-disable-next-line max-len
  INDIVIDUAL_WINTER_STORAGE_AREA_winterStorageArea_properties_sections_edges_node_properties_places_edges as WINTER_STORAGE_PLACES,
} from './__generated__/INDIVIDUAL_WINTER_STORAGE_AREA';
import {
  WinterStorageArea,
  WinterStoragePlace,
  WinterStorageSection,
  Lease,
  MarkedWinterStorage,
  UnmarkedWinterStorage,
} from './types';
import { getNumberOfCustomers, WinterStorageSectionNodeConnection } from '../../common/utils/wsCustomers';

export const getIndividualWinterStorageArea = (
  data: INDIVIDUAL_WINTER_STORAGE_AREA | undefined
): WinterStorageArea | null => {
  if (!data || !data.winterStorageArea || !data.winterStorageArea.properties) {
    return null;
  }
  const { name, zipCode, municipality, streetAddress, wwwUrl, imageFile, sections } = data.winterStorageArea.properties;

  const hasService = (service: keyof SECTION_PROPERTIES): boolean => {
    return (
      data.winterStorageArea?.properties?.sections.edges.some((edge) => edge?.node?.properties?.[service]) ?? false
    );
  };

  return {
    name: name ?? '',
    zipCode,
    municipality,
    streetAddress,
    wwwUrl,
    imageFile,
    properties: {
      electricity: hasService('electricity'),
      gate: hasService('gate'),
      numberOfCustomers: getNumberOfCustomers(sections as WinterStorageSectionNodeConnection),
      summerStorageForBoats: hasService('summerStorageForBoats'),
      summerStorageForDockingEquipment: hasService('summerStorageForDockingEquipment'),
      summerStorageForTrailers: hasService('summerStorageForTrailers'),
      water: hasService('water'),
    },
  };
};

const getLeases = (leases: LEASES): Lease[] => {
  return leases?.edges.reduce<Lease[]>((acc, leaseEdge) => {
    if (!leaseEdge?.node) return acc;
    const { id, status, startDate, endDate, isActive } = leaseEdge.node;
    return [
      ...acc,
      {
        id,
        customer: {
          id: leaseEdge.node.customer.id,
        },
        status,
        applicationId: leaseEdge.node.application?.id ?? '',
        applicationDate: leaseEdge.node.application?.createdAt,
        startDate,
        endDate,
        isActive,
      },
    ];
  }, []);
};

const getLeasesForPlaces = (places: WINTER_STORAGE_PLACES): Lease[] => {
  return places?.node?.leases ? getLeases(places.node.leases) : [];
};

const getWinterStorageLeasesFromSectionProperties = (sectionProperties: SECTION_PROPERTIES) => {
  return sectionProperties?.leases ? getLeases(sectionProperties.leases) : [];
};

const getWinterStoragePlacesFromSectionProperties = (sectionProperties: SECTION_PROPERTIES) => {
  return (
    sectionProperties.places.edges.reduce<WinterStoragePlace[]>((acc, placeEdge) => {
      if (!placeEdge?.node) {
        return acc;
      }
      const leases = getLeasesForPlaces(placeEdge);
      return [
        ...acc,
        {
          id: placeEdge.node.id,
          identifier: sectionProperties.identifier,
          number: placeEdge.node.number,
          width: placeEdge.node.width,
          length: placeEdge.node.length,
          isActive: placeEdge.node.isActive,
          leases,
        },
      ];
    }, []) ?? []
  );
};

export const getWinterStoragePlaces = (data: INDIVIDUAL_WINTER_STORAGE_AREA | undefined): WinterStoragePlace[] => {
  if (!data?.winterStorageArea?.properties) {
    return [];
  }
  return data?.winterStorageArea?.properties?.sections.edges
    .reduce<SECTION_PROPERTIES[]>((acc, sectionEdge) => {
      if (!sectionEdge?.node?.properties) {
        return acc;
      }
      return [...acc, sectionEdge.node.properties];
    }, [])
    .map<WinterStoragePlace[]>(getWinterStoragePlacesFromSectionProperties)
    .reduce<WinterStoragePlace[]>((acc, arr) => [...acc, ...arr], []);
};

export const getUnmarkedWinterStorageLeases = (data: INDIVIDUAL_WINTER_STORAGE_AREA | undefined): Lease[] => {
  if (!data?.winterStorageArea?.properties) {
    return [];
  }
  return data?.winterStorageArea?.properties?.sections.edges
    .reduce<SECTION_PROPERTIES[]>((acc, sectionEdge) => {
      if (!sectionEdge?.node?.properties) {
        return acc;
      }
      return [...acc, sectionEdge.node.properties];
    }, [])
    .map<Lease[]>(getWinterStorageLeasesFromSectionProperties)
    .reduce<Lease[]>((acc, arr) => [...acc, ...arr], []);
};

const isUnmarkedSection = (section: SECTION) => {
  if (!section?.properties?.leases?.edges) return false;
  return section.properties?.leases?.edges?.length > 0;
};

export const getWinterStorageSections = (
  data: INDIVIDUAL_WINTER_STORAGE_AREA | undefined,
  unmarked: boolean
): WinterStorageSection[] => {
  if (!data?.winterStorageArea?.properties) {
    return [];
  }
  return data.winterStorageArea.properties.sections.edges.reduce<WinterStorageSection[]>((acc, sectionEdge) => {
    if (!sectionEdge?.node?.properties?.identifier) {
      return acc;
    }
    if (unmarked ? !isUnmarkedSection(sectionEdge.node) : isUnmarkedSection(sectionEdge.node)) {
      return acc;
    }
    return [...acc, { id: sectionEdge.node.id, identifier: sectionEdge.node.properties.identifier }];
  }, []);
};

export const getMarkedWinterStorage = (
  data: INDIVIDUAL_WINTER_STORAGE_AREA | undefined
): MarkedWinterStorage | undefined => {
  const places = getWinterStoragePlaces(data);
  const sections = getWinterStorageSections(data, false);

  if (places.length === 0) return undefined;
  return {
    places,
    sections,
  };
};

export const getUnmarkedWinterStorage = (
  data: INDIVIDUAL_WINTER_STORAGE_AREA | undefined
): UnmarkedWinterStorage | undefined => {
  const leases = getUnmarkedWinterStorageLeases(data).filter((lease) => lease.isActive);

  if (leases.length === 0) return undefined;
  return {
    leases,
  };
};
