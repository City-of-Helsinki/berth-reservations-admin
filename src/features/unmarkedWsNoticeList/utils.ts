import { ApplicationStatus } from '../../@types/__generated__/globalTypes';
import { UNMARKED_WINTER_STORAGE_NOTICES } from './__generated__/UNMARKED_WINTER_STORAGE_NOTICES';

interface UnmarkedWinterStorageChoice {
  winterStorageAreaName: string;
  winterStorageArea: string;
}

export type UnmarkedWinterStorageNotice = {
  boatLength: number;
  boatModel: string;
  boatName: string;
  boatRegistrationNumber: string;
  boatType?: string | null;
  boatWidth: number;
  choice: UnmarkedWinterStorageChoice;
  createdAt: string;
  customerId?: string;
  firstName: string;
  id: string;
  lastName: string;
  status: ApplicationStatus;
};

export const getUnmarkedWinterStorageNotice = (
  data: UNMARKED_WINTER_STORAGE_NOTICES | undefined
): UnmarkedWinterStorageNotice[] => {
  if (!data || !data.winterStorageNotices) {
    return [];
  }

  return data.winterStorageNotices.edges.reduce<UnmarkedWinterStorageNotice[]>((acc, edge) => {
    if (!edge || !edge.node) {
      return acc;
    }
    const application = edge.node;

    const choices = application.winterStorageAreaChoices;
    const choice: UnmarkedWinterStorageChoice =
      choices !== null && choices.length > 0 && choices[0] !== null && choices[0].winterStorageAreaName !== null
        ? {
            winterStorageArea: choices[0].winterStorageAreaName,
            winterStorageAreaName: choices[0].winterStorageAreaName,
          }
        : {
            winterStorageArea: '',
            winterStorageAreaName: '',
          };

    const applicationData: UnmarkedWinterStorageNotice = {
      boatLength: application.boatLength,
      boatModel: application.boatModel,
      boatName: application.boatName,
      boatRegistrationNumber: application.boatRegistrationNumber,
      boatType: data.boatTypes?.find(({ id }) => id === application.boatType)?.name,
      boatWidth: application.boatWidth,
      choice,
      createdAt: application.createdAt,
      firstName: application.firstName,
      id: application.id,
      lastName: application.lastName,
      status: application.status,
    };
    return [...acc, applicationData];
  }, []);
};
