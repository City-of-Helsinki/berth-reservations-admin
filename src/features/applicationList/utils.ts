import {
  BERTH_APPLICATIONS,
  BERTH_APPLICATIONS_berthApplications_edges as BERTH_APPLICATIONS_EDGE,
  BERTH_APPLICATIONS_berthApplications_edges_node as BERTH_APPLICATIONS_NODE,
} from './__generated__/BERTH_APPLICATIONS';
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
      const {
        accessibilityRequired,
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
        firstName,
        harborChoices,
        id,
        lastName,
        lease,
        municipality,
        status,
      } = (edge as BERTH_APPLICATIONS_EDGE).node as BERTH_APPLICATIONS_NODE;

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
        berthSwitch: berthSwitchProps,
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
