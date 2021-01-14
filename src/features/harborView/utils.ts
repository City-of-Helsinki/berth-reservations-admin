import { INDIVIDUAL_HARBOR } from './__generated__/INDIVIDUAL_HARBOR';
import { Berth, IndividualHarborData, Lease, Map, Pier } from './types';
import { PriceTier } from '../../@types/__generated__/globalTypes';

export const getIndividualHarborData = (data: INDIVIDUAL_HARBOR | undefined): IndividualHarborData | null => {
  if (data?.harbor?.properties && data?.piers) {
    const pierProps = data.piers.edges.reduce(
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

    const { properties } = data.harbor;

    return {
      id: data.harbor.id,
      name: properties.name,
      numberOfPlaces: properties.numberOfPlaces,
      numberOfFreePlaces: properties.numberOfFreePlaces,
      numberOfPlacesInQueue: 0, // TODO
      streetAddress: properties.streetAddress,
      zipCode: properties.zipCode,
      municipality: properties.municipality,
      wwwUrl: properties.wwwUrl,
      imageFile: properties.imageFile,
      servicemapId: properties.servicemapId,
      maxWidth: properties.maxWidth,
      ...pierProps,
    };
  }
  return null;
};

export const getBerths = (data: INDIVIDUAL_HARBOR | undefined): Berth[] => {
  if (!data?.piers || !data?.berths) return [];

  return data.berths.edges.reduce<Berth[]>((acc, berthEdge) => {
    if (!berthEdge || !berthEdge.node || !berthEdge.node.pier?.properties?.identifier) return acc;

    const leases =
      berthEdge?.node?.leases?.edges.reduce<Lease[]>((acc, leaseEdge) => {
        if (!leaseEdge?.node) return acc;
        return [...acc, { ...leaseEdge.node }];
      }, []) ?? [];

    return [
      ...acc,
      {
        id: berthEdge.node.id,
        identifier: berthEdge.node.pier.properties.identifier,
        isActive: berthEdge.node.isActive,
        length: berthEdge.node.length,
        mooringType: berthEdge.node.mooringType,
        number: berthEdge.node.number,
        width: berthEdge.node.width,
        depth: berthEdge.node.depth,
        comment: berthEdge.node.comment,
        leases,
      },
    ];
  }, []);
};

export const getPiers = (data: INDIVIDUAL_HARBOR | undefined): Pier[] => {
  if (!data?.piers) return [];

  return data.piers.edges.reduce<Pier[]>((acc, pierEdge) => {
    if (!pierEdge?.node?.properties) return acc;

    const { identifier, priceTier, electricity, wasteCollection, water, lighting, gate } = pierEdge.node.properties;

    const suitableBoatTypes = pierEdge.node.properties.suitableBoatTypes.reduce<string[]>((acc, suitableBoatType) => {
      if (!suitableBoatType.name) return acc;
      return [...acc, suitableBoatType.name];
    }, []);

    return [
      ...acc,
      {
        id: pierEdge.node.id,
        priceTier,
        identifier,
        electricity,
        wasteCollection,
        water,
        lighting,
        gate,
        suitableBoatTypes,
      },
    ];
  }, []);
};

export const getMaps = (data: INDIVIDUAL_HARBOR | undefined): Map[] => {
  if (!data?.harbor?.properties?.maps) return [];

  return data.harbor.properties.maps.reduce<Map[]>((acc, map) => {
    if (map !== null) {
      return acc.concat({
        id: map.id,
        url: map.url,
      });
    }
    return acc;
  }, []);
};

export const priceTierToString = (priceTier: PriceTier): string => {
  switch (priceTier) {
    case PriceTier.TIER_1:
      return '1';
    case PriceTier.TIER_2:
      return '2';
    case PriceTier.TIER_3:
      return '3';
  }
};
