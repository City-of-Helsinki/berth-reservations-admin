import React from 'react';
import { mount } from 'enzyme';
import { HashRouter } from 'react-router-dom';
import ReactModal from 'react-modal';
import { MockedProvider } from '@apollo/react-testing';

import ApplicationDetails, { ApplicationDetailsProps } from '../ApplicationDetails';
import { ApplicationStatus, CustomerGroup, Language, LeaseStatus } from '../../../@types/__generated__/globalTypes';
import { PrivateCustomerDetailsProps } from '../../privateCustomerDetails/PrivateCustomerDetails';
import { OrganizationCustomerDetailsProps } from '../../organizationCustomerDetails/OrganizationCustomerDetails';
import DeleteButton from '../../deleteButton/DeleteButton';
import ConfirmationModal from '../../confirmationModal/ConfirmationModal';
import { canDeleteLease } from '../../utils/leaseUtils';

const minimumProps: ApplicationDetailsProps = {
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

const moreProps: Partial<ApplicationDetailsProps> = {
  accessibilityRequired: true,
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

const privateCustomerProfile: PrivateCustomerDetailsProps = {
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

const organizationCustomerProfile: OrganizationCustomerDetailsProps = {
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

const lease: ApplicationDetailsProps['lease'] = {
  berthNum: '1',
  harborId: 'harborId',
  harborName: 'Testisatama',
  id: 'id',
  pierIdentifier: '2',
  status: LeaseStatus.DRAFTED,
};

describe('ApplicationDetails', () => {
  const getWrapper = (props?: Partial<ApplicationDetailsProps>) =>
    mount(
      <MockedProvider>
        <HashRouter>
          <ApplicationDetails {...minimumProps} {...props} />
        </HashRouter>
      </MockedProvider>
    );

  it('renders normally with minimum props', () => {
    const wrapper = getWrapper();

    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders normally with harborChoices and no customerId', () => {
    const wrapper = getWrapper({
      choices: moreProps.choices,
    });

    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders normally with private customer applicant', () => {
    const wrapper = getWrapper({
      ...moreProps,
      applicant: privateCustomerProfile,
    });

    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders normally with organization customer applicant', () => {
    const wrapper = getWrapper({
      ...moreProps,
      applicant: organizationCustomerProfile,
    });

    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders normally with a lease', () => {
    const wrapper = getWrapper({
      ...moreProps,
      applicant: organizationCustomerProfile,
      lease: lease,
      handleDeleteLease: jest.fn(),
    });

    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders delete lease button if handleDeleteLease prop is provided and lease can be deleted', () => {
    Object.values(LeaseStatus)
      .filter(canDeleteLease)
      .forEach((status) => {
        const wrapper = getWrapper({
          lease: { ...lease, status },
          handleDeleteLease: jest.fn(),
        });
        expect(wrapper.find(DeleteButton).find('button').length).toBe(1);
      });
  });

  it('does not render delete lease button if lease cannot be deleted', () => {
    Object.values(LeaseStatus)
      .filter((status) => !canDeleteLease(status))
      .forEach((status) => {
        const wrapper = getWrapper({
          lease: { ...lease, status },
        });
        expect(wrapper.find(DeleteButton).find('button').length).toBe(0);
      });
  });

  it('delete lease button calls handleDeleteLease', () => {
    // Using a component with react-modal. Silence error output.
    ReactModal.setAppElement('body');

    const handleDeleteLease = jest.fn();
    const wrapper = getWrapper({
      applicant: privateCustomerProfile,
      lease,
      handleDeleteLease: handleDeleteLease,
    });

    expect(wrapper.find(DeleteButton).length).toBe(1);

    wrapper.find(DeleteButton).find('button').simulate('click');
    wrapper.find(ConfirmationModal).find('button').last().simulate('click');
    expect(handleDeleteLease).toHaveBeenCalled();
  });
});
