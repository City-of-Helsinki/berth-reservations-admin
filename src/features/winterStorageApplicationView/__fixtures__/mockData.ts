import {
  INDIVIDUAL_WINTER_STORAGE_APPLICATION,
  INDIVIDUAL_WINTER_STORAGE_APPLICATION_boatTypes as BOAT_TYPES,
  INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication as WINTER_STORAGE_APPLICATION,
} from '../__generated__/INDIVIDUAL_WINTER_STORAGE_APPLICATION';
import { ApplicationStatus, WinterStorageApplicationLanguage } from '../../../@types/__generated__/globalTypes';

export const winterStorageApplication: WINTER_STORAGE_APPLICATION = {
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
  language: WinterStorageApplicationLanguage.EN,
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
      winterStorageArea: {
        __typename: 'WinterStorageAreaNode',
        id: 'MOCK-WINTER-STORAGE-AREA-0',
        properties: {
          __typename: 'WinterStorageAreaProperties',
          name: 'Iso-Sarvasto',
        },
      },
      priority: 1,
      __typename: 'WinterStorageAreaChoiceType',
    },
    {
      winterStorageArea: {
        __typename: 'WinterStorageAreaNode',
        id: 'MOCK-WINTER-STORAGE-AREA-1',
        properties: {
          __typename: 'WinterStorageAreaProperties',
          name: 'Rajasaari',
        },
      },
      priority: 2,
      __typename: 'WinterStorageAreaChoiceType',
    },
  ],
  applicationCode: '1234',
  lease: null,
  __typename: 'WinterStorageApplicationNode',
};

export const mockData: INDIVIDUAL_WINTER_STORAGE_APPLICATION & {
  winterStorageApplication: WINTER_STORAGE_APPLICATION;
  boatTypes: BOAT_TYPES[];
} = {
  winterStorageApplication: winterStorageApplication,
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
