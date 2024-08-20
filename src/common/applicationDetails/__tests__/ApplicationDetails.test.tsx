import React from 'react';
import { mount } from 'enzyme';
import { HashRouter } from 'react-router-dom';
import ReactModal from 'react-modal';
import { MockedProvider } from '@apollo/react-testing';
import { act } from 'react-dom/test-utils';
import ApplicationDetails, { ApplicationDetailsProps } from '../ApplicationDetails';
import { LeaseStatus } from '../../../@types/__generated__/globalTypes';
import DeleteButton from '../../deleteButton/DeleteButton';
import ConfirmationModal from '../../confirmationModal/ConfirmationModal';
import { canDeleteLease } from '../../utils/leaseUtils';
import {
  lease,
  minimumProps,
  moreProps,
  organizationCustomerProfile,
  privateCustomerProfile,
} from '../__fixtures__/mockData';

// BerthContractDetailsContainer is mocked to limit the test scope
jest.mock('../../../features/contractDetails/BerthContractDetailsContainer', () => {
  const BerthContractDetailsContainer = () => <div>BerthContractDetailsContainer</div>;

  return {
    __esModule: true,
    default: BerthContractDetailsContainer,
  };
});

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

    act(() => {
      wrapper.find(DeleteButton).find('button').simulate('click');
    });
    wrapper.update();
    act(() => {
      wrapper.find(ConfirmationModal).find('button').last().simulate('click');
    });

    expect(handleDeleteLease).toHaveBeenCalled();
  });
});
