import { ApplicationStatus, LeaseStatus } from '../../@types/__generated__/globalTypes';
import { WINTER_STORAGE_APPLICATIONS } from './__generated__/WINTER_STORAGE_APPLICATIONS';
import { ApplicationTypeEnum } from '../../common/applicationDetails/types';

interface WinterStorageAreaChoice {
  priority: number;
  winterStorageArea: string;
  winterStorageAreaName: string;
}

interface Lease {
  areaId: string;
  areaName: string;
  id: string;
  orderId: string | undefined;
  placeNum: number | string;
  sectionIdentifier: string;
  status: LeaseStatus;
}

export type WinterStorageApplication = {
  applicationCode: string;
  applicationType: ApplicationTypeEnum;
  boatLength: number;
  boatModel: string | null;
  boatName: string | null;
  boatRegistrationNumber: string | null;
  boatType?: string | null;
  boatWidth: number;
  choices: WinterStorageAreaChoice[];
  createdAt: string;
  customerId?: string;
  firstName: string;
  id: string;
  lastName: string;
  municipality: string;
  queue: number;
  status: ApplicationStatus;
};

export const getWinterStorageApplicationData = (
  data: WINTER_STORAGE_APPLICATIONS | undefined
): WinterStorageApplication[] => {
  const boatTypes = data?.boatTypes;

  return (
    data?.winterStorageApplications?.edges.reduce<WinterStorageApplication[]>((acc, edge) => {
      if (!edge?.node) return acc;

      const {
        applicationCode,
        boatLength,
        boatModel,
        boatName,
        boatRegistrationNumber,
        boatType,
        boatWidth,
        createdAt,
        customer,
        firstName,
        id,
        lastName,
        lease,
        municipality,
        status,
        winterStorageAreaChoices,
      } = edge.node;

      const choices =
        winterStorageAreaChoices?.map((choice) => {
          return {
            priority: choice?.priority ?? Number.MAX_VALUE,
            winterStorageAreaName: choice?.winterStorageArea.properties?.name ?? '',
            winterStorageArea: choice?.winterStorageArea.id ?? '',
          };
        }) ?? [];

      let leaseProps: Lease | null = null;
      if (lease?.place?.winterStorageSection.properties?.area) {
        leaseProps = {
          placeNum: lease.place.number || '',
          areaId: lease.place.winterStorageSection.properties.area.id,
          areaName: lease.place.winterStorageSection.properties.area.properties?.name || '',
          id: lease.id,
          sectionIdentifier: lease.place.winterStorageSection.properties?.identifier || '',
          status: lease.status,
          orderId: lease.order?.id,
        };
      }

      const applicationData = {
        applicationCode,
        applicationType: ApplicationTypeEnum.WINTER_STORAGE,
        boatLength,
        boatModel,
        boatName,
        boatRegistrationNumber,
        boatType: boatTypes?.find(({ id }) => id === boatType)?.name,
        boatWidth,
        choices,
        createdAt,
        customerId: customer?.id,
        firstName,
        id,
        lastName,
        lease: leaseProps,
        municipality,
        queue: 0, // TODO,
        status,
      };

      return [...acc, applicationData];
    }, []) ?? []
  );
};
