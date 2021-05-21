import {
  UNMARKED_WINTER_STORAGE_NOTICE,
  UNMARKED_WINTER_STORAGE_NOTICE_boatTypes as BOAT_TYPES,
  UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice as WINTER_STORAGE_NOTICE,
  UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_customer as CUSTOMER,
} from '../__generated__/UNMARKED_WINTER_STORAGE_NOTICE';
import {
  ApplicationStatus,
  BerthApplicationLanguage,
  CustomerGroup,
  InvoicingType,
  Language,
  OrderStatus,
} from '../../../@types/__generated__/globalTypes';
import { Order } from '../../invoiceCard/types';

export const winterStorageNotice: WINTER_STORAGE_NOTICE = {
  id: 'V2ludGVyU3RvcmFnZUFwcGxpY2F0aW9uTm9kZTox',
  applicationCode: '',
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
  status: ApplicationStatus.OFFER_GENERATED,
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
      winterStorageSectionIds: ['MOCK-SECTION'],
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
      winterStorageSectionIds: ['MOCK-SECTION'],
      __typename: 'WinterStorageAreaChoiceType',
    },
  ],
  lease: null,
  __typename: 'WinterStorageApplicationNode',
};

export const mockData: UNMARKED_WINTER_STORAGE_NOTICE & {
  winterStorageNotice: WINTER_STORAGE_NOTICE;
  boatTypes: BOAT_TYPES[];
} = {
  winterStorageNotice: winterStorageNotice,
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

export const mockCustomer: CUSTOMER = {
  __typename: 'ProfileNode',
  comment: '',
  customerGroup: CustomerGroup.PRIVATE,
  firstName: 'Hessu',
  id: '1',
  invoicingType: InvoicingType.DIGITAL_INVOICE,
  language: Language.FINNISH,
  lastName: 'Hopo',
  organization: null,
  primaryAddress: {
    __typename: 'AddressNode',
    id: 'MOCK-ADDRESS',
    address: 'Paratiisitie 13',
    city: 'Ankkalinna',
    postalCode: '00313',
  },
  primaryEmail: { __typename: 'EmailNode', id: 'MOCK-EMAIL', email: 'hessu@hopo.fi' },
  primaryPhone: { __typename: 'PhoneNode', id: 'MOCK-PHONE', phone: '0' },
};

export const mockOrder: Order = {
  fixedProducts: [],
  id: 'MOCK-ORDER',
  optionalProducts: [],
  orderNumber: '1',
  price: 100,
  status: OrderStatus.PAID,
  totalPrice: 100,
};
