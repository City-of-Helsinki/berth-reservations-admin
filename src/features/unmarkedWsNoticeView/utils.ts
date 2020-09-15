import {
  UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice as WINTER_STORAGE_NOTICE,
  UNMARKED_WINTER_STORAGE_NOTICE_boatTypes as BOAT_TYPES,
} from './__generated__/UNMARKED_WINTER_STORAGE_NOTICE';
import { getApplicantDetails } from '../applicationView/utils';
import { UnmarkedWsNoticeDetailsProps } from '../../common/unmarkedWsNoticeDetails/UnmarkedWsNoticeDetails';

interface UnmarkedWinterStorageChoice {
  winterStorageAreaName: string;
  winterStorageArea: string;
}

type Choices = ({ winterStorageAreaName: string } | null | undefined)[] | null;
export const getChoiceFromWinterStorageAreaChoices = (choices: Choices): UnmarkedWinterStorageChoice => {
  return Array.isArray(choices) && choices[0] !== null && choices[0] !== undefined
    ? {
        winterStorageArea: choices[0].winterStorageAreaName,
        winterStorageAreaName: choices[0].winterStorageAreaName,
      }
    : {
        winterStorageArea: '',
        winterStorageAreaName: '',
      };
};

export const getNoticeDetailsData = (
  winterStorageNotice: WINTER_STORAGE_NOTICE,
  boatTypes: BOAT_TYPES[]
): UnmarkedWsNoticeDetailsProps & Required<Pick<UnmarkedWsNoticeDetailsProps, 'applicant'>> => {
  const {
    acceptBoatingNewsletter,
    acceptFitnessNews,
    acceptLibraryNews,
    acceptOtherCultureNews,
    boatLength,
    boatModel,
    boatName,
    boatRegistrationNumber,
    boatType,
    boatWidth,
    createdAt,
    customer,
    id,
    status,
  } = winterStorageNotice;

  return {
    applicant: getApplicantDetails({ ...winterStorageNotice, applicationCode: '' }),
    boatLength,
    boatModel,
    boatName,
    boatRegistrationNumber,
    boatType: boatTypes.find(({ id }) => id === boatType)?.name,
    boatWidth,
    choice: getChoiceFromWinterStorageAreaChoices(winterStorageNotice.winterStorageAreaChoices),
    createdAt,
    customerId: customer?.id,
    id,
    status,
    summaryInformation: {
      acceptBoatingNewsletter: acceptBoatingNewsletter,
      acceptFitnessNews: acceptFitnessNews,
      acceptLibraryNews: acceptLibraryNews,
      acceptOtherCultureNews: acceptOtherCultureNews,
    },
  };
};
