import {
  INDIVIDUAL_CUSTOMER_boatTypes as BOAT_TYPES,
  INDIVIDUAL_CUSTOMER_profile as CUSTOMER_PROFILE,
} from './__generated__/INDIVIDUAL_CUSTOMER';
import {
  Application,
  ApplicationLease,
  BerthBill,
  BerthLease,
  Bill,
  Boat,
  LargeBoat,
  Lease,
  OrderLine,
  WinterStorageBill,
  WinterStorageLease,
} from './types';
import { CustomerProfileCardProps } from '../../common/customerProfileCard/CustomerProfileCard';

export const getCustomerProfile = (
  profile: Omit<CUSTOMER_PROFILE, 'berthLeases' | 'winterStorageLeases' | 'berthApplications' | 'boats' | 'orders'>
): CustomerProfileCardProps & { customerId: string } => {
  return {
    ...{
      customerId: profile.id,
      firstName: profile.firstName,
      lastName: profile.lastName,
      organization: profile.organization,
      primaryAddress: profile.primaryAddress,
      primaryPhone: profile.primaryPhone?.phone,
      primaryEmail: profile.primaryEmail?.email,
      language: profile.language,
      customerGroup: profile.customerGroup,
      comment: profile.comment,
    },
    ...(profile.organization && {
      organization: profile.organization,
    }),
  };
};

export const getBerthLeases = (profile: CUSTOMER_PROFILE): Lease[] => {
  if (!profile.berthLeases?.edges) return [];

  return profile.berthLeases.edges.reduce<Lease[]>((acc, edge) => {
    if (!edge?.node || edge?.node?.status !== 'PAID') return acc;

    const berthNum = edge.node.berth.number;
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

export const getWinterStorageLeases = (profile: CUSTOMER_PROFILE): Lease[] => {
  if (!profile.winterStorageLeases?.edges) return [];

  return profile.winterStorageLeases.edges.reduce<Lease[]>((acc, edge) => {
    if (!edge?.node?.place || edge?.node?.status !== 'PAID') return acc;

    const placeNum = edge.node.place.number.toString(10);
    const sectionIdentifier = edge.node.place.winterStorageSection.properties?.identifier || null;
    const winterStorageArea = edge.node.place.winterStorageSection.properties?.area;

    const lease = {
      id: edge.node.id,
      winterStorageArea: winterStorageArea
        ? {
            id: winterStorageArea.id,
            name: winterStorageArea.properties?.name || '',
          }
        : null,
      placeNum,
      sectionIdentifier,
      startDate: edge.node.startDate,
      endDate: edge.node.endDate,
    };

    return [...acc, lease];
  }, []);
};

export const getBoats = (profile: CUSTOMER_PROFILE) => {
  if (!profile.boats) return [];

  return profile.boats.edges.reduce<(Boat | LargeBoat)[]>((acc, edge) => {
    if (!edge?.node) return acc;

    return [...acc, edge.node];
  }, []);
};

export const getApplications = (profile: CUSTOMER_PROFILE, boatTypes: BOAT_TYPES[]): Application[] => {
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
          accessibilityRequired,
        } = edge.node;
        let leaseProps: ApplicationLease | null = null;

        const choices =
          edge.node.harborChoices?.map((choice) => {
            return {
              priority: choice?.priority ?? Number.MAX_VALUE,
              harbor: choice?.harbor ?? '',
              harborName: choice?.harborName ?? '',
            };
          }) ?? [];

        if (lease?.berth?.pier.properties?.harbor) {
          leaseProps = {
            berthNum: lease.berth.number,
            harborId: lease.berth.pier.properties.harbor.id,
            harborName: lease.berth.pier.properties.harbor.properties?.name || '',
            id: lease.id,
            pierIdentifier: lease.berth.pier.properties.identifier,
            status: lease.status,
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
          queue: 0, // TODO
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
          choices,
          accessibilityRequired,
        };

        return [...acc, applicationData];
      }
      return acc;
    }, []) ?? []
  );
};

export const getBills = (profile: CUSTOMER_PROFILE): (BerthBill | WinterStorageBill)[] => {
  return (
    profile.orders?.edges
      .map((edge) => edge?.node)
      .reduce<(BerthBill | WinterStorageBill)[]>((acc, orderNode) => {
        if (!orderNode || !orderNode.lease) {
          return acc;
        }
        const orderLines = orderNode.orderLines.edges
          .map((edge) => edge?.node)
          .reduce<OrderLine[]>((acc, orderLineNode) => {
            if (!orderLineNode || !orderLineNode.product) {
              return acc;
            }
            return [
              ...acc,
              {
                product: orderLineNode.product.service,
                price: orderLineNode.price,
                priceUnit: orderLineNode.product.priceUnit,
                priceValue: orderLineNode.product.priceValue,
              },
            ];
          }, []);
        const { lease } = orderNode;
        const bill = {
          status: orderNode.status,
          contractPeriod: {
            startDate: lease.startDate,
            endDate: lease.endDate,
          },
          dueDate: orderNode.dueDate,
          basePrice: orderNode.price,
          totalPrice: orderNode.totalPrice,
          orderLines,
        };
        if ('berth' in lease) {
          return [
            ...acc,
            {
              ...bill,
              berthInformation: {
                number: lease.berth.number,
                pierIdentifier: lease.berth.pier.properties?.identifier ?? '',
                harborName: lease.berth.pier.properties?.harbor?.properties?.name ?? '',
              },
            },
          ];
        } else {
          return [
            ...acc,
            {
              ...bill,
              winterStorageInformation: {
                winterStorageAreaName: lease.place?.winterStorageSection.properties?.area.properties?.name ?? '',
              },
            },
          ];
        }
      }, []) ?? []
  );
};

export const isBerthBill = (bill: Bill): bill is BerthBill => (bill as BerthBill).berthInformation !== undefined;
export const isWinterStorageBill = (bill: Bill): bill is WinterStorageBill =>
  (bill as WinterStorageBill).winterStorageInformation !== undefined;

export const isBerthLease = (lease: Lease): lease is BerthLease => (lease as BerthLease).harbor !== undefined;
export const isWinterStorageLease = (lease: Lease): lease is WinterStorageLease =>
  (lease as WinterStorageLease).winterStorageArea !== undefined;
