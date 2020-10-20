import { ApplicationStatus } from '../../@types/__generated__/globalTypes';
import {
  WINTER_STORAGE_APPLICATIONS,
  WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges as WINTER_STORAGE_APPLICATIONS_EDGE,
  WINTER_STORAGE_APPLICATIONS_winterStorageApplications_edges_node as WINTER_STORAGE_APPLICATIONS_NODE,
} from './__generated__/WINTER_STORAGE_APPLICATIONS';

interface WinterStorageAreaChoice {
  priority: number;
  winterStorageArea: string;
  winterStorageAreaName: string;
}

export type WinterStorageApplication = {
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
      const {
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
      } = (edge as WINTER_STORAGE_APPLICATIONS_EDGE).node as WINTER_STORAGE_APPLICATIONS_NODE;

      const choices =
        winterStorageAreaChoices?.map((choice) => {
          return {
            priority: choice?.priority ?? Number.MAX_VALUE,
            winterStorageAreaName: choice?.winterStorageAreaName ?? '',
            winterStorageArea: choice?.winterStorageAreaName ?? '',
          };
        }) ?? [];

      // TODO: lease

      const applicationData = {
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
