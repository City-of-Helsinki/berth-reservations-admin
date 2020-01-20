import { HARBORS } from './__generated__/HARBORS';
import {
  INDIVIDUAL_HARBOR,
  INDIVIDUAL_HARBOR_harbor_properties as HarborProperties,
} from './__generated__/INDIVIDUAL_HARBOR';

interface PierProps {
  electricity: boolean;
  gate: boolean;
  lighting: boolean;
  water: boolean;
  wasteCollection: boolean;
}

export type IndividualHarborData = {
  id: string;
  name: string | null;
} & HarborProperties &
  PierProps;

export const getIndividualHarborData = (
  data: INDIVIDUAL_HARBOR | undefined
): IndividualHarborData | null => {
  if (data?.harbor?.properties) {
    const pierProps = data.harbor.properties.piers.edges.reduce(
      (prev, pier) => {
        if (pier?.node?.properties) {
          return {
            electricity: prev.electricity || pier.node.properties.electricity,
            gate: prev.gate || pier.node.properties.gate,
            lighting: prev.lighting || pier.node.properties.lighting,
            wasteCollection:
              prev.wasteCollection || pier.node.properties.wasteCollection,
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
    return {
      id: data.harbor.id,
      ...data.harbor.properties,
      ...pierProps,
    };
  }
  return null;
};

export type Berth = {
  number: string;
  identifier: string;
  length: string;
  width: string;
  mooring: string;
};

export const getBerths = (data: INDIVIDUAL_HARBOR | undefined) => {
  if (!data || !data.harbor || !data.harbor.properties) return [];

  return data.harbor.properties.piers.edges.reduce<Berth[]>((acc, pierEdge) => {
    if (!pierEdge || !pierEdge.node || !pierEdge.node.properties) return [];

    const identifier = pierEdge.node.properties.identifier;
    const berths = pierEdge.node.properties.berths.edges.reduce<Berth[]>(
      (prev, berthEdge) => {
        if (!berthEdge || !berthEdge.node) return prev;

        const mooringType = berthEdge.node.berthType.mooringType;
        const mooring =
          data.__type?.enumValues &&
          data.__type?.enumValues.find(mooring => mooring.name === mooringType);

        return [
          ...prev,
          {
            identifier,
            length: `${berthEdge.node.berthType.length / 100} m`,
            mooring: mooring?.description ? mooring.description : '',
            number: berthEdge.node.number,
            width: `${berthEdge.node.berthType.width / 100} m`,
          },
        ];
      },
      []
    );

    return [...acc, ...berths];
  }, []);
};

export interface HarborData {
  id: string;
  electricity: number;
  gate: number;
  lighting: number;
  wasteCollection: number;
  water: number;
  name: string;
  numberOfPlaces: number;
  streetAddress: string | null;
  zipCode: string | null;
  municipality: string | null;
  wwwUrl: string | null;
  imageFile: string | null;
  servicemapId: string | null;
  maximumWidth: number | null;
}

export const getHarborsData = (data: HARBORS | undefined) => {
  if (data?.harbors?.edges) {
    return data.harbors.edges.reduce<HarborData[]>((acc, harbor) => {
      if (harbor?.node?.properties) {
        const properties = harbor.node.properties.piers.edges.reduce<{
          electricity: number;
          gate: number;
          lighting: number;
          wasteCollection: number;
          water: number;
        }>(
          (prev, pier) => {
            if (pier?.node?.properties) {
              return {
                electricity: pier.node.properties.electricity
                  ? prev.electricity + 1
                  : prev.electricity,
                gate: pier.node.properties.gate ? prev.gate + 1 : prev.gate,
                lighting: pier.node.properties.lighting
                  ? prev.lighting + 1
                  : prev.lighting,
                wasteCollection: pier.node.properties.wasteCollection
                  ? prev.wasteCollection + 1
                  : prev.wasteCollection,
                water: pier.node.properties.water ? prev.water + 1 : prev.water,
              };
            }
            return prev;
          },
          {
            electricity: 0,
            gate: 0,
            lighting: 0,
            wasteCollection: 0,
            water: 0,
          }
        );
        return [
          ...acc,
          {
            id: harbor.node.id,
            imageFile: harbor.node.properties.imageFile,
            maximumWidth: harbor.node.properties.maximumWidth,
            municipality: harbor.node.properties.municipality,
            name: harbor.node.properties.name || '-',
            numberOfPlaces: harbor.node.properties.numberOfPlaces || 0,
            servicemapId: harbor.node.properties.servicemapId,
            streetAddress: harbor.node.properties.streetAddress,
            wwwUrl: harbor.node.properties.wwwUrl,
            zipCode: harbor.node.properties.zipCode,
            ...properties,
          },
        ];
      }
      return acc;
    }, []);
  }
  return [];
};
