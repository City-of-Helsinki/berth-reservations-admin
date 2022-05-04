import { BERTH_OFFER } from './__generated__/BERTH_OFFER';
import { LeaseStatus } from '../../@types/__generated__/globalTypes';
import { HarborCardProps } from '../../common/harborCard/HarborCard';
import { Boat } from '../../common/boatCard/types';
import { HarborData, BerthData, PiersData, BoatData, Lease, PierTab } from './types';
import { SWITCH_BERTH_LEASE } from './__generated__/SWITCH_BERTH_LEASE';

export const getBerthData = (data: HarborData | null | undefined): BerthData[] => {
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
          pendingSwitchOffer: berth.node.pendingSwitchOffer,
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

export const getHarbor = (data: BERTH_OFFER['harbor'] | undefined): HarborCardProps['harbor'] | null => {
  if (!data?.properties?.piers) {
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

  const { properties } = data;
  return {
    imageUrl: properties.imageFile,
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

export const getApplicationBoat = (
  application: BERTH_OFFER['berthApplication'] | undefined,
  boatTypes: BERTH_OFFER['boatTypes'] | undefined
): Boat | null => {
  if (!application) return null;

  return {
    boatType: boatTypes?.find(({ id }) => id === application.boatType)?.name ?? null,
    boatRegistrationNumber: application.boatRegistrationNumber,
    boatName: application.boatName,
    boatModel: application.boatModel,
    boatWidth: application.boatWidth,
    boatLength: application.boatLength,
    boatDraught: application.boatDraught,
    boatWeight: application.boatWeight,
  };
};

export const getLeaseBoat = (data: SWITCH_BERTH_LEASE | undefined): Boat | undefined => {
  const boat = data?.berthLease?.boat;
  if (!boat) return undefined;

  return {
    boatRegistrationNumber: boat.registrationNumber,
    boatType: boat.boatType.name,
    boatName: boat.name,
    boatWidth: boat.width ? Number(boat.width) : boat.width,
    boatDraught: boat.draught ? Number(boat.draught) : boat.draught,
    boatLength: boat.length ? Number(boat.length) : boat.length,
    boatWeight: boat.weight ? Number(boat.weight) : boat.weight,
    boatModel: boat.model,
  };
};

export const getCustomerBoat = (data: BoatData | null | undefined): Boat | null => {
  if (!data) return null;

  return {
    boatRegistrationNumber: data.registrationNumber,
    boatType: data.boatType.name,
    boatName: data.name,
    boatWidth: data.width ? Number(data.width) : data.width,
    boatDraught: data.draught ? Number(data.draught) : data.draught,
    boatLength: data.length ? Number(data.length) : data.length,
    boatWeight: data.weight ? Number(data.weight) : data.weight,
    boatModel: data.model,
  };
};

export const isSuitableBerthLength = (berthLength: number, boatLength: number) => berthLength >= boatLength;

export const getApplicationTypeTKey = (isSwitch: boolean): string =>
  isSwitch ? 'applicationList.applicationType.switchApplication' : 'applicationList.applicationType.newApplication';
