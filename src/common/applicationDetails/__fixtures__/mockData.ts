import { ApplicationDetailsProps, Lease } from '../ApplicationDetails';
import { ApplicationStatus, CustomerGroup, Language, LeaseStatus } from '../../../@types/__generated__/globalTypes';
import { PrivateCustomerDetailsProps } from '../../privateCustomerDetails/PrivateCustomerDetails';
import { OrganizationCustomerDetailsProps } from '../../organizationCustomerDetails/OrganizationCustomerDetails';
import { ApplicationTypeEnum } from '../types';

export const minimumProps: ApplicationDetailsProps = {
  applicationCode: 'TESTEST',
  applicationType: ApplicationTypeEnum.BERTH,
  accessibilityRequired: false,
  berthSwitch: null,
  boatDraught: null,
  boatLength: 6,
  boatModel: 'Marine',
  boatName: 'Cama la Yano',
  boatRegistrationNumber: 'A 12345',
  boatType: null,
  boatWeight: null,
  boatWidth: 3.2,
  createdAt: 'Wed Oct 23 2019 15:15:05 GMT+0300 (Eastern European Summer Time)',
  choices: [],
  id: '54321',
  queue: 0,
  status: ApplicationStatus.PENDING,
};

export const moreProps: Partial<ApplicationDetailsProps> = {
  accessibilityRequired: true,
  applicationType: ApplicationTypeEnum.BERTH_SWITCH,
  berthSwitch: {
    berthNum: 'berth',
    harborId: '123',
    harborName: 'harbor',
    pierIdentifier: 'pier',
    reason: 'reason',
  },
  boatDraught: 0.8,
  boatType: 'Purjevene / moottoripursi',
  boatWeight: 350,
  customerId: '47',
  choices: [
    { harborName: 'Eka satama', harbor: '123', priority: 1 },
    { harborName: 'Kolmas satama', harbor: '321', priority: 3 },
  ],
};

export const privateCustomerProfile: PrivateCustomerDetailsProps = {
  firstName: 'Testi',
  lastName: 'Käyttäjä',
  primaryAddress: {
    address: 'Testikatu 1',
    postalCode: '00100',
    city: 'Helsinki',
  },
  primaryEmail: 'test@example.com',
  primaryPhone: '0504391742',
  language: Language.FINNISH,
};

export const organizationCustomerProfile: OrganizationCustomerDetailsProps = {
  ...privateCustomerProfile,
  organization: {
    address: 'Liiketoimintaraitti 12',
    businessId: '1234567-8',
    city: 'Helsinki',
    name: 'Liikeyritys Oy',
    postalCode: '00100',
  },
  customerGroup: CustomerGroup.COMPANY,
};

export const lease: Lease = {
  berthNum: '1',
  harborId: 'harborId',
  harborName: 'Testisatama',
  id: 'id',
  pierIdentifier: '2',
  status: LeaseStatus.DRAFTED,
};
