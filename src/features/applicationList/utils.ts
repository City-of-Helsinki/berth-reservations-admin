import { BERTH_APPLICATIONS } from './__generated__/BERTH_APPLICATIONS';
import { ApplicationStatus, LeaseStatus } from '../../@types/__generated__/globalTypes';

interface HarborChoice {
  harbor: string;
  harborName: string;
  priority: number;
}

interface Lease {
  berthNum: string;
  harborId: string;
  harborName: string;
  id: string;
  pierIdentifier: string;
  status: LeaseStatus;
  orderId: string | undefined;
}

interface BerthSwitch {
  berthNum: string;
  harborId: string;
  harborName: string;
  pierIdentifier: string;
  reason: string | null;
}

export interface ApplicationData {
  accessibilityRequired: boolean;
  applicationCode: string;
  berthSwitch: BerthSwitch | null;
  boatDraught: number | null;
  boatLength: number;
  boatModel: string;
  boatName: string;
  boatRegistrationNumber: string;
  boatType?: string | null;
  boatWeight: number | null;
  boatWidth: number;
  choices: Array<HarborChoice>;
  createdAt: string;
  customerId?: string;
  email: string;
  firstName: string;
  id: string;
  isSwitch: boolean;
  lastName: string;
  lease: Lease | null;
  municipality: string;
  queue: number;
  status: ApplicationStatus;
}

export const getBerthApplicationData = (data: BERTH_APPLICATIONS | undefined): ApplicationData[] => {
  const boatTypes = data?.boatTypes;

  return (
    data?.berthApplications?.edges.reduce<ApplicationData[]>((acc, edge) => {
      if (!edge?.node) return acc;

      const {
        accessibilityRequired,
        applicationCode,
        berthSwitch,
        boatDraught,
        boatLength,
        boatModel,
        boatName,
        boatRegistrationNumber,
        boatType,
        boatWeight,
        boatWidth,
        createdAt,
        customer,
        email,
        firstName,
        harborChoices,
        id,
        lastName,
        lease,
        municipality,
        status,
        switchOffers,
      } = edge.node;

      const choices =
        harborChoices?.map((choice) => {
          return {
            priority: choice?.priority ?? Number.MAX_VALUE,
            harbor: choice?.harbor ?? '',
            harborName: choice?.harborName ?? '',
          };
        }) ?? [];

      let leaseProps: Lease | null = null;
      if (lease?.berth?.pier.properties?.harbor) {
        leaseProps = {
          berthNum: lease.berth.number || '',
          harborId: lease.berth.pier.properties.harbor.id,
          harborName: lease.berth.pier.properties.harbor.properties?.name || '',
          id: lease.id,
          pierIdentifier: lease.berth.pier.properties?.identifier || '',
          status: lease.status,
          orderId: lease.order?.id,
        };
      }

      const berthSwitchProps = berthSwitch && {
        berthNum: berthSwitch.berthNumber,
        harborId: berthSwitch.harbor,
        harborName: berthSwitch.harborName,
        pierIdentifier: berthSwitch.pier,
        reason: berthSwitch.reason?.title || null,
      };

      const applicationData = {
        accessibilityRequired,
        applicationCode,
        berthSwitch: berthSwitchProps,
        berthSwitchOffered: switchOffers.edges.length > 0,
        boatDraught,
        boatLength,
        boatModel,
        boatName,
        boatRegistrationNumber,
        boatType: boatTypes?.find(({ id }) => id === boatType)?.name,
        boatWeight,
        boatWidth,
        choices,
        createdAt,
        customerId: customer?.id,
        email,
        firstName,
        id,
        isSwitch: !!berthSwitch,
        lastName,
        lease: leaseProps,
        municipality,
        queue: 0, // TODO
        status,
      };

      return [...acc, applicationData];
    }, []) ?? []
  );
};

interface Offer {
  orderId: string;
  email: string;
}

export const getDraftedOffers = (applications: ApplicationData[]) =>
  applications.reduce<Offer[]>((acc, application) => {
    if (application.status !== ApplicationStatus.OFFER_GENERATED || !application.lease?.orderId || !application.email)
      return acc;

    return [
      ...acc,
      {
        orderId: application.lease.orderId,
        email: application.email,
      },
    ];
  }, []);

export const getSentOffers = (applications: ApplicationData[]) =>
  applications.reduce<Offer[]>((acc, application) => {
    if (application.status !== ApplicationStatus.OFFER_SENT || !application.lease?.orderId || !application.email)
      return acc;

    return [
      ...acc,
      {
        orderId: application.lease.orderId,
        email: application.email,
      },
    ];
  }, []);
