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

export const getNoticeDetailsData = (
  winterStorageNotice: WINTER_STORAGE_NOTICE,
  boatTypes: BOAT_TYPES[]
): UnmarkedWsNoticeDetailsProps & Required<Pick<UnmarkedWsNoticeDetailsProps, 'applicant'>> => {
  const choices = winterStorageNotice.winterStorageAreaChoices;
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

  return {
    ...winterStorageNotice,
    customerId: winterStorageNotice.customer?.id,
    applicant: getApplicantDetails({ ...winterStorageNotice, applicationCode: '' }),
    choice,
    boatType: boatTypes.find(({ id }) => id === winterStorageNotice.boatType)?.name,
    summaryInformation: {
      acceptBoatingNewsletter: winterStorageNotice.acceptBoatingNewsletter,
      acceptFitnessNews: winterStorageNotice.acceptFitnessNews,
      acceptLibraryNews: winterStorageNotice.acceptLibraryNews,
      acceptOtherCultureNews: winterStorageNotice.acceptOtherCultureNews,
    },
  };
};
