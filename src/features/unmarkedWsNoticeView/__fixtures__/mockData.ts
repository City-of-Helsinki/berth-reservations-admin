import {
  UNMARKED_WINTER_STORAGE_NOTICE,
  UNMARKED_WINTER_STORAGE_NOTICE_boatTypes as BOAT_TYPES,
  UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice as WINTER_STORAGE_NOTICE,
} from '../__generated__/UNMARKED_WINTER_STORAGE_NOTICE';
import { ApplicationStatus, BerthApplicationLanguage } from '../../../@types/__generated__/globalTypes';

export const mockData: UNMARKED_WINTER_STORAGE_NOTICE & {
  winterStorageNotice: WINTER_STORAGE_NOTICE;
  boatTypes: BOAT_TYPES[];
} = {
  winterStorageNotice: {
    id: 'V2ludGVyU3RvcmFnZUFwcGxpY2F0aW9uTm9kZTox',
    firstName: 'test',
    lastName: 'test',
    address: 'test',
    municipality: 'helsinki',
    zipCode: '00100',
    phoneNumber: '555555',
    email: 'test@test.com',
    businessId: '',
    companyName: '',
    language: BerthApplicationLanguage.EN,
    customer: null,
    createdAt: '2019-05-06T10:54:21.746387+00:00',
    boatType: '3',
    boatRegistrationNumber: 'test',
    boatWidth: 1,
    boatLength: 1,
    boatName: 'test',
    boatModel: 'test',
    acceptBoatingNewsletter: true,
    acceptFitnessNews: true,
    acceptLibraryNews: true,
    acceptOtherCultureNews: true,
    status: ApplicationStatus.PENDING,
    winterStorageAreaChoices: [
      {
        winterStorageArea: null,
        priority: 1,
        winterStorageAreaName: 'Iso-Sarvasto',
        __typename: 'WinterStorageAreaChoiceType',
      },
      {
        winterStorageArea: null,
        priority: 2,
        winterStorageAreaName: 'Rajasaari',
        __typename: 'WinterStorageAreaChoiceType',
      },
    ],
    __typename: 'WinterStorageApplicationNode',
  },
  boatTypes: [
    {
      id: '1',
      name: 'Jollavene',
      __typename: 'BoatTypeType',
    },
    {
      id: '2',
      name: 'Soutuvene',
      __typename: 'BoatTypeType',
    },
    {
      id: '3',
      name: 'Perämoottorivene',
      __typename: 'BoatTypeType',
    },
    {
      id: '4',
      name: 'Sisäperämoottorivene',
      __typename: 'BoatTypeType',
    },
    {
      id: '5',
      name: 'Keskimoottorivene',
      __typename: 'BoatTypeType',
    },
    {
      id: '6',
      name: 'Purjevene / moottoripursi',
      __typename: 'BoatTypeType',
    },
    {
      id: '7',
      name: 'Troolari',
      __typename: 'BoatTypeType',
    },
    {
      id: '8',
      name: 'Suuri alus (yli 20t)',
      __typename: 'BoatTypeType',
    },
  ],
};