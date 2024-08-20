import React from 'react';
import { shallow } from 'enzyme';

import UnmarkedWsNoticeDetails, { UnmarkedWsNoticeDetailsProps } from '../UnmarkedWsNoticeDetails';
import { ApplicationStatus, CustomerGroup, InvoicingType, Language } from '../../../@types/__generated__/globalTypes';

const minimumProps: UnmarkedWsNoticeDetailsProps = {
  applicationCode: '',
  boatLength: 0,
  boatModel: 'Terhi',
  boatName: 'The Boat',
  boatRegistrationNumber: '1',
  boatWidth: 0,
  choice: { winterStorageArea: 'Laajasalo bus stop', winterStorageAreaName: 'Laajasalo bus stop' },
  createdAt: '2020-09-10T11:01:55Z',
  id: '1',
  status: ApplicationStatus.PENDING,
  onStickerChange: jest.fn(),
};

const applicant = {
  comment: '',
  customerGroup: CustomerGroup.PRIVATE,
  customerId: '1',
  firstName: 'Matti',
  invoicingType: InvoicingType.ONLINE_PAYMENT,
  language: Language.FINNISH,
  lastName: 'Virtanen',
  primaryAddress: { address: 'Mannerheimintie 1', city: 'Helsinki', postalCode: '00100' },
  primaryEmail: 'test@hel.ninja',
  primaryPhone: '+358 123 4567',
  showCustomerNameAsLink: false,
  title: 'Applicant',
};

describe('UnmarkedWsNoticeDetails', () => {
  const getWrapper = (props?: Partial<UnmarkedWsNoticeDetailsProps>) =>
    shallow(<UnmarkedWsNoticeDetails {...minimumProps} {...props} />);

  it('renders normally with minimum props', () => {
    const wrapper = getWrapper();

    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders normally with all props, private applicant', () => {
    const wrapper = getWrapper({
      accessibilityRequired: false,
      applicant,
      boatDraught: 5,
      boatLength: 5,
      boatType: '0',
      boatWeight: 100,
      customerId: '',
      handleDeleteLease: jest.fn(),
      summaryInformation: {
        acceptBoatingNewsletter: true,
        acceptFitnessNews: true,
        acceptLibraryNews: true,
        acceptOtherCultureNews: true,
      },
    });

    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders normally with all props, organization applicant', () => {
    const wrapper = getWrapper({
      accessibilityRequired: false,
      applicant: {
        ...applicant,
        organization: {
          address: 'Mannerheimintie 1',
          businessId: '1234567-8',
          city: 'Helsinki',
          name: 'Suuryritys Oy',
          postalCode: '00100',
        },
        customerGroup: CustomerGroup.COMPANY,
      },
      boatDraught: 5,
      boatLength: 5,
      boatType: '0',
      boatWeight: 100,
      customerId: '',
      handleDeleteLease: jest.fn(),
      summaryInformation: {
        acceptBoatingNewsletter: true,
        acceptFitnessNews: true,
        acceptLibraryNews: true,
        acceptOtherCultureNews: true,
      },
    });

    expect(wrapper.render()).toMatchSnapshot();
  });
});
