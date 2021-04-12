import { OFFER } from './__generated__/OFFER';
import { LeaseStatus } from '../../@types/__generated__/globalTypes';
import { HarborCardProps } from '../../common/harborCard/HarborCard';
import { Boat } from '../../common/boatCard/types';
import { HarborData, BerthData, PiersData, BoatData, Lease, PierTab } from './types';

export const getOfferData = (data: HarborData | null | undefined): BerthData[] => {
  if (!data?.properties?.piers) return [];

  const harborId = data.id;
  const harbor = data.properties.name || '';
  return data.properties.piers.edges.reduce<BerthData[]>((acc, pier) => {
    if (!pier?.node?.properties) return acc;

    const { properties } = pier.node;
    const berths = pier.node.properties.berths.edges.reduce<BerthData[]>((acc, berth) => {
      if (!berth?.node) return acc;

      const leases =
        berth.node.leases?.edges.reduce<Lease[]>((acc, edge) => {
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
          berth: berth.node.number,
          berthId: berth.node.id,
          comment: berth.node.comment,
          draught: berth.node.depth,
          harbor,
          harborId,
          id: berth.node.id,
          isActive: berth.node.isActive,
          leases,
          length: berth.node.length,
          mooringType: berth.node.mooringType,
          pier: properties.identifier,
          properties: {
            lighting: properties.lighting,
            water: properties.water,
            gate: properties.gate,
            electricity: properties.electricity,
            wasteCollection: properties.wasteCollection,
            isAccessible: berth.node.isAccessible,
          },
          width: berth.node.width,
        },
      ];
    }, []);

    return [...acc, ...berths];
  }, []);
};

export const getAllPiersIdentifiers = (data: PiersData | null | undefined): PierTab[] => {
  const piers = data?.edges ?? [];

  return piers.reduce<PierTab[]>((acc, pier) => {
    if (!pier?.node?.properties) return acc;

    const pierTab = {
      label: pier.node.properties.identifier,
      value: pier.node.properties.identifier,
      disabled: !pier.node.properties?.berths.edges.length,
    };

    return [...acc, pierTab];
  }, []);
};

export const getHarbor = (data: OFFER['harborByServicemapId'] | undefined): HarborCardProps['harbor'] | null => {
  if (!data || !data || !data.properties || !data.properties.piers) {
    return null;
  }

  const pierProps = data.properties.piers.edges.reduce(
    (prev, pier) => {
      if (pier?.node?.properties) {
        return {
          electricity: prev.electricity || pier.node.properties.electricity,
          gate: prev.gate || pier.node.properties.gate,
          lighting: prev.lighting || pier.node.properties.lighting,
          wasteCollection: prev.wasteCollection || pier.node.properties.wasteCollection,
          water: prev.water || pier.node.properties.water,
        };
      }
      return prev;
    },
    {
      electricity: false,
      gate: false,
      lighting: false,
      wasteCollection: false,
      water: false,
    }
  );

  type Map = {
    id: string;
    url: string;
  };

  const maps = data.properties.maps.reduce<Map[]>((acc, map) => {
    if (map !== null) {
      return acc.concat({
        id: map.id,
        url: map.url,
      });
    }
    return acc;
  }, []);

  const { properties } = data;
  return {
    imageUrl: properties.imageFile,
    maps,
    name: properties.name || '',
    streetAddress: properties.streetAddress,
    municipality: properties.municipality,
    zipCode: properties.zipCode,
    servicemapId: properties.servicemapId || '',
    properties: {
      ...pierProps,
      queue: 0, // TODO
      numberOfPlaces: properties.numberOfPlaces,
      numberOfFreePlaces: properties.numberOfFreePlaces,
      maxWidth: properties.maxWidth || 0,
    },
  };
};

export const getBoat = (
  berthApplication: OFFER['berthApplication'] | undefined,
  boatTypes: OFFER['boatTypes'] | undefined
): Boat | null => {
  if (!berthApplication) return null;

  const {
    boatType,
    boatRegistrationNumber,
    boatName,
    boatModel,
    boatWidth,
    boatLength,
    boatDraught,
    boatWeight,
  } = berthApplication;

  return {
    boatType: boatTypes?.find(({ id }) => id === boatType)?.name ?? null,
    boatRegistrationNumber,
    boatName,
    boatModel,
    boatWidth,
    boatLength,
    boatDraught,
    boatWeight,
  };
};

export const getCustomerBoat = (data: BoatData | null | undefined): Boat | null => {
  if (!data) return null;

  return {
    boatRegistrationNumber: data.registrationNumber,
    boatType: data.boatType.name,
    boatName: data.name,
    boatWidth: data.width,
    boatDraught: data.draught,
    boatLength: data.length,
    boatWeight: data.weight,
    boatModel: data.model,
  };
};

export const isSuitableBerthLength = (berthLength: number, boatLength: number) => berthLength >= boatLength;
