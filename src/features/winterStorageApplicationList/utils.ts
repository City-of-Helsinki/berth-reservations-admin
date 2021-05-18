import { ApplicationStatus } from '../../@types/__generated__/globalTypes';
import { WINTER_STORAGE_APPLICATIONS } from './__generated__/WINTER_STORAGE_APPLICATIONS';
import { ApplicationTypeEnum } from '../../common/applicationDetails/types';

interface WinterStorageAreaChoice {
  priority: number;
  winterStorageArea: string;
  winterStorageAreaName: string;
}

export type WinterStorageApplication = {
  applicationCode: string;
  applicationType: ApplicationTypeEnum;
  boatLength: number;
  boatModel: string;
  boatName: string;
  boatRegistrationNumber: string;
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

      // TODO: lease

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
        municipality,
        queue: 0, // TODO,
        status,
      };

      return [...acc, applicationData];
    }, []) ?? []
  );
};
