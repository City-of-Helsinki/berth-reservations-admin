import { AreaData, Lease, PlaceData, SectionsData, SectionTab } from './types';
import { Boat } from '../../common/boatCard/types';
import { WinterStorageArea } from '../winterStorageAreaView/types';
import { LeaseStatus } from '../../@types/__generated__/globalTypes';
import { WINTER_STORAGE_OFFER } from './__generated__/WINTER_STORAGE_OFFER';
import { getNumberOfCustomers, WinterStorageSectionNodeConnection } from '../../common/utils/wsCustomers';

export const getWinterStoragePlaceData = (data: AreaData | null | undefined): PlaceData[] => {
  if (!data?.properties?.sections) return [];

  const areaId = data.id;
  const area = data.properties.name || '';
  return data.properties.sections.edges.reduce<PlaceData[]>((acc, section) => {
    if (!section?.node?.properties) return acc;

    const { properties } = section.node;
    const places = section.node.properties.places.edges.reduce<PlaceData[]>((acc, place) => {
      if (!place?.node) return acc;

      const leases =
        place.node.leases?.edges.reduce<Lease[]>((acc, edge) => {
          if (!edge?.node || edge?.node?.status !== LeaseStatus.PAID) return acc;

          return [
            ...acc,
            {
              startDate: edge.node.startDate,
              endDate: edge.node.endDate,
              status: edge.node.status,
              isActive: edge.node.isActive,
              customer: {
                id: edge.node.customer.id,
              },
            },
          ];
        }, []) ?? [];

      return [
        ...acc,
        {
          area,
          areaId,
          id: place.node.id,
          isActive: place.node.isActive,
          isAvailable: place.node.isAvailable,
          leases,
          length: place.node.length,
          number: place.node.number,
          properties: {
            electricity: properties.electricity,
            water: properties.water,
            gate: properties.gate,
            summerStorageForBoats: properties.summerStorageForBoats,
            summerStorageForDockingEquipment: properties.summerStorageForDockingEquipment,
            summerStorageForTrailers: properties.summerStorageForTrailers,
          },
          section: properties.identifier,
          width: place.node.width,
        },
      ];
    }, []);

    return [...acc, ...places];
  }, []);
};

export const getAllSectionsIdentifiers = (data: SectionsData | null | undefined): SectionTab[] => {
  const sections = data?.edges ?? [];

  return sections.reduce<SectionTab[]>((acc, section) => {
    if (!section?.node?.properties) return acc;

    const sectionTab = {
      label: section.node.properties.identifier,
      value: section.node.properties.identifier,
      disabled: !section.node.properties?.places.edges.length,
    };

    return [...acc, sectionTab];
  }, []);
};

export const getWinterStorageArea = (
  data: WINTER_STORAGE_OFFER['winterStorageArea'] | undefined
): WinterStorageArea | null => {
  if (!data?.properties?.sections) return null;

  const sectionProps = data.properties.sections.edges.reduce(
    (prev, section) => {
      if (section?.node?.properties) {
        return {
          electricity: prev.electricity || section.node.properties.electricity,
          water: prev.water || section.node.properties.water,
          gate: prev.gate || section.node.properties.gate,
          summerStorageForBoats: prev.summerStorageForBoats || section.node.properties.summerStorageForBoats,
          summerStorageForDockingEquipment:
            prev.summerStorageForDockingEquipment || section.node.properties.summerStorageForDockingEquipment,
          summerStorageForTrailers: prev.summerStorageForTrailers || section.node.properties.summerStorageForTrailers,
        };
      }
      return prev;
    },
    {
      electricity: false,
      water: false,
      gate: false,
      summerStorageForBoats: false,
      summerStorageForDockingEquipment: false,
      summerStorageForTrailers: false,
    }
  );

  const { properties } = data;
  return {
    imageFile: properties.imageFile,
    name: properties.name || '',
    streetAddress: properties.streetAddress,
    municipality: properties.municipality,
    zipCode: properties.zipCode,
    wwwUrl: properties.wwwUrl || '',
    properties: {
      ...sectionProps,
      numberOfCustomers: getNumberOfCustomers(data.properties.sections as WinterStorageSectionNodeConnection) || 0,
    },
  };
};

export const getApplicationBoat = (
  application: WINTER_STORAGE_OFFER['winterStorageApplication'] | undefined,
  boatTypes: WINTER_STORAGE_OFFER['boatTypes'] | undefined
): Boat | null => {
  if (!application) return null;

  return {
    boatType: boatTypes?.find(({ id }) => id === application.boatType)?.name ?? null,
    boatRegistrationNumber: application.boatRegistrationNumber,
    boatName: application.boatName,
    boatModel: application.boatModel,
    boatWidth: application.boatWidth,
    boatLength: application.boatLength,
    boatDraught: null,
    boatWeight: null,
  };
};

export const isPlaceSuitableForBoat = (place: PlaceData, boat: Boat | undefined): boolean => {
  const placeLength = place.length || 0;
  const boatLength = boat?.boatLength || 0;
  return placeLength >= boatLength;
};
