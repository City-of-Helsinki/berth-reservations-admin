import { ApplicationDetailsProps } from '../../common/applicationDetails/ApplicationDetails';
import {
  INDIVIDUAL_WINTER_STORAGE_APPLICATION_boatTypes as BOAT_TYPES,
  INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication as WINTER_STORAGE_APPLICATION,
} from './__generated__/INDIVIDUAL_WINTER_STORAGE_APPLICATION';
import { ApplicationTypeEnum } from '../../common/applicationDetails/types';
import { getApplicantDetails } from '../../common/utils/applicationUtils';
import { LeaseStatus } from '../../@types/__generated__/globalTypes';

interface Lease {
  placeNum: string | number;
  areaId: string;
  areaName: string;
  id: string;
  sectionIdentifier: string;
  status: LeaseStatus;
}

export const getWinterStorageApplicationDetailsData = (
  winterStorageApplication: WINTER_STORAGE_APPLICATION,
  boatTypes: BOAT_TYPES[]
): ApplicationDetailsProps & Required<Pick<ApplicationDetailsProps, 'applicant'>> => {
  const choices =
    winterStorageApplication.winterStorageAreaChoices?.map((choice) => {
      return {
        priority: choice?.priority ?? Number.MAX_VALUE,
        winterStorageAreaName: choice?.winterStorageArea.properties?.name ?? '',
        winterStorageArea: choice?.winterStorageArea.id ?? '',
      };
    }) ?? [];

  const {
    applicationCode,
    boatLength,
    boatModel,
    boatName,
    boatRegistrationNumber,
    boatWidth,
    createdAt,
    id,
    status,
  } = winterStorageApplication;

  const lease: Lease | null = winterStorageApplication.lease
    ? {
        areaId: winterStorageApplication.lease.place?.winterStorageSection.properties?.area.id || '',
        areaName: winterStorageApplication.lease.place?.winterStorageSection.properties?.area.properties?.name || '',
        id: winterStorageApplication.lease.id,
        placeNum: winterStorageApplication.lease.place?.number || '',
        sectionIdentifier: winterStorageApplication.lease.place?.winterStorageSection.properties?.identifier || '',
        status: winterStorageApplication.lease.status,
      }
    : null;

  return {
    applicant: getApplicantDetails(winterStorageApplication),
    applicationCode,
    applicationType: ApplicationTypeEnum.WINTER_STORAGE,
    boatLength,
    boatModel,
    boatName,
    boatRegistrationNumber,
    boatType: boatTypes.find(({ id }) => id === winterStorageApplication.boatType)?.name,
    boatWidth,
    choices,
    createdAt,
    customerId: winterStorageApplication.customer?.id,
    id,
    lease,
    queue: 0, // TODO
    status,
    summaryInformation: {
      applicationCode: winterStorageApplication.applicationCode,
      acceptBoatingNewsletter: winterStorageApplication.acceptBoatingNewsletter,
      acceptFitnessNews: winterStorageApplication.acceptFitnessNews,
      acceptLibraryNews: winterStorageApplication.acceptLibraryNews,
      acceptOtherCultureNews: winterStorageApplication.acceptOtherCultureNews,
    },
  };
};
