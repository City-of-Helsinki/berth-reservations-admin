import { ApplicationDetailsProps } from '../../common/applicationDetails/ApplicationDetails';
import {
  INDIVIDUAL_APPLICATION_berthApplication as BERTH_APPLICATION,
  INDIVIDUAL_APPLICATION_boatTypes as BOAT_TYPES,
} from './__generated__/INDIVIDUAL_APPLICATION';
import {
  BerthApplicationLanguage,
  WinterStorageApplicationLanguage,
  Language,
  LeaseStatus,
} from '../../@types/__generated__/globalTypes';
import { ApplicationTypeEnum } from '../../common/applicationDetails/types';
import { getApplicantDetails } from '../../common/utils/applicationUtils';

interface Lease {
  berthNum: string | number;
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

export const mapApplicationLanguageToLanguage = (
  applicationLanguage: BerthApplicationLanguage | WinterStorageApplicationLanguage
): Language | null => {
  switch (applicationLanguage) {
    case 'FI':
      return Language.FINNISH;
    case 'SV':
      return Language.SWEDISH;
    case 'EN':
      return Language.ENGLISH;
    default:
      return null;
  }
};

export const getApplicationDetailsData = (
  berthApplication: BERTH_APPLICATION,
  boatTypes: BOAT_TYPES[]
): ApplicationDetailsProps & Required<Pick<ApplicationDetailsProps, 'applicant'>> => {
  const choices =
    berthApplication.harborChoices?.map((choice) => {
      return {
        priority: choice?.priority ?? Number.MAX_VALUE,
        harborName: choice?.harbor.properties?.name ?? '',
        harbor: choice?.harbor.id ?? '',
      };
    }) ?? [];

  const {
    accessibilityRequired,
    applicationCode,
    boatDraught,
    boatLength,
    boatModel,
    boatName,
    boatRegistrationNumber,
    boatWeight,
    boatWidth,
    createdAt,
    id,
    status,
    switchOffers,
  } = berthApplication;

  const lease: Lease | null = berthApplication.lease
    ? {
        harborId: berthApplication.lease.berth.pier.properties?.harbor.id || '',
        harborName: berthApplication.lease.berth.pier.properties?.harbor.properties?.name || '',
        id: berthApplication.lease.id,
        berthNum: berthApplication.lease.berth.number,
        pierIdentifier: berthApplication.lease.berth.pier.properties?.identifier || '',
        status: berthApplication.lease.status,
      }
    : null;
  const berthSwitch: BerthSwitch | null = berthApplication.berthSwitch
    ? {
        harborId: berthApplication.berthSwitch.berth.pier.properties?.harbor.id ?? '',
        harborName: berthApplication.berthSwitch.berth.pier.properties?.harbor.properties?.name ?? '',
        berthNum: berthApplication.berthSwitch.berth.number,
        pierIdentifier: berthApplication.berthSwitch.berth.pier.properties?.identifier ?? '',
        reason: berthApplication.berthSwitch.reason?.title || null,
      }
    : null;

  return {
    accessibilityRequired,
    applicant: getApplicantDetails(berthApplication),
    applicationCode,
    applicationType: berthSwitch ? ApplicationTypeEnum.BERTH_SWITCH : ApplicationTypeEnum.BERTH,
    berthSwitch,
    berthSwitchOffered: switchOffers.edges.length > 0,
    queue: 0, // TODO
    choices,
    lease,
    boatType: boatTypes.find(({ id }) => id === berthApplication.boatType)?.name,
    summaryInformation: {
      applicationCode: berthApplication.applicationCode,
      acceptBoatingNewsletter: berthApplication.acceptBoatingNewsletter,
      acceptFitnessNews: berthApplication.acceptFitnessNews,
      acceptLibraryNews: berthApplication.acceptLibraryNews,
      acceptOtherCultureNews: berthApplication.acceptOtherCultureNews,
    },
    boatDraught,
    boatLength,
    boatModel,
    boatName,
    boatRegistrationNumber,
    boatWeight,
    boatWidth,
    createdAt,
    customerId: berthApplication.customer?.id,
    id,
    status,
  };
};
