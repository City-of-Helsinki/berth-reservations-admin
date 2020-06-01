import {
  INDIVIDUAL_CUSTOMER_profile as CUSTOMER_PROFILE,
  INDIVIDUAL_CUSTOMER_boatTypes as BOAT_TYPES,
} from './__generated__/INDIVIDUAL_CUSTOMER';
import { Application, ApplicationLease, Boat, LargeBoat } from './types';
import { CustomerProfileCardProps } from '../../common/customerProfileCard/CustomerProfileCard';

export const getCustomerProfile = (profile: CUSTOMER_PROFILE): CustomerProfileCardProps => {
  return {
    ...{
      customerId: profile.id,
      firstName: profile.firstName,
      lastName: profile.lastName,
      organization: profile.organization,
      primaryAddress: profile.primaryAddress,
      primaryPhone: profile.primaryPhone?.phone,
      primaryEmail: profile.primaryEmail?.email,
      ssn: '-', // TODO
    },
    ...(profile.organization && {
      organization: profile.organization,
    }),
  };
};

interface Lease {
  id: string;
  harbor: { id: string; name: string } | null;
  berthNum: string | number;
  pierIdentifier: string | null;
  startDate: string;
  endDate: string;
}

export const getLeases = (profile: CUSTOMER_PROFILE): Lease[] => {
  if (!profile.berthLeases?.edges) return [];

  return profile.berthLeases.edges.reduce<Lease[]>((acc, edge) => {
    if (!edge?.node || edge?.node?.status !== 'PAID') return acc;

    const berthNum = edge.node.berth.number.toString(10);
    const pierIdentifier = edge.node.berth.pier.properties?.identifier || null;
    const harbor = edge.node.berth.pier.properties?.harbor;

    const lease = {
      id: edge.node.id,
      harbor: harbor
        ? {
            id: harbor.id,
            name: harbor.properties?.name || '',
          }
        : null,
      berthNum,
      pierIdentifier,
      startDate: edge.node.startDate,
      endDate: edge.node.endDate,
    };

    return [...acc, lease];
  }, []);
};

export const getBoats = (profile: CUSTOMER_PROFILE) => {
  if (!profile.boats) return [];

  const boats = profile.boats.edges.reduce<(Boat | LargeBoat)[]>((acc, edge) => {
    if (!edge?.node) return acc;

    return [...acc, edge.node];
  }, []);

  return boats;
};

export const getApplications = (profile: CUSTOMER_PROFILE, boatTypes: BOAT_TYPES[]) => {
  return (
    profile?.berthApplications?.edges.reduce<Application[]>((acc, edge) => {
      if (edge?.node) {
        const {
          id,
          berthSwitch,
          createdAt,
          status,
          lease,
          boatType,
          boatRegistrationNumber,
          boatWidth,
          boatLength,
          boatDraught,
          boatWeight,
          boatName,
          boatModel,
          harborChoices,
          accessibilityRequired,
        } = edge.node;
        let leaseProps: ApplicationLease | null = null;

        if (lease?.berth?.pier.properties?.harbor) {
          leaseProps = {
            berthNum: lease.berth.number.toString(10),
            harborId: lease.berth.pier.properties.harbor.id,
            harborName: lease.berth.pier.properties.harbor.properties?.name || '',
            id: lease.id,
            pierIdentifier: lease.berth.pier.properties.identifier,
          };
        }
        const berthSwitchProps = berthSwitch
          ? {
              berthNum: berthSwitch.berthNumber,
              harborId: berthSwitch.harbor,
              harborName: berthSwitch.harborName,
              pierIdentifier: berthSwitch.pier,
              reason: berthSwitch.reason?.title || null,
            }
          : null;

        const applicationData = {
          id,
          customerId: profile.id,
          berthSwitch: berthSwitchProps,
          queue: null,
          createdAt,
          status,
          lease: leaseProps,
          boatRegistrationNumber,
          boatModel,
          boatName,
          boatWidth,
          boatLength,
          boatDraught,
          boatWeight,
          boatType: boatTypes?.find(({ id }) => id === boatType)?.name,
          harborChoices: harborChoices || [],
          accessibilityRequired,
        };

        return [...acc, applicationData];
      }
      return acc;
    }, []) ?? []
  );
};