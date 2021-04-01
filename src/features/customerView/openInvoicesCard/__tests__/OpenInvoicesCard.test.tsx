import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import { act } from 'react-dom/test-utils';

import Button from '../../../../common/button/Button';
import OpenInvoicesCard, { OpenInvoicesCardProps } from '../OpenInvoicesCard';
import { mockInvoices } from '../../__fixtures__/mockData';

const mockProps: OpenInvoicesCardProps = {
  invoices: mockInvoices,
  handleShowInvoice: jest.fn(),
  handleResendInvoice: jest.fn(),
};

// BerthContractDetailsContainer is mocked to limit the test scope
jest.mock('../../../contractDetails/BerthContractDetailsContainer', () => {
  const BerthContractDetailsContainer = () => <div>BerthContractDetailsContainer</div>;

  return {
    __esModule: true,
    default: BerthContractDetailsContainer,
  };
});

describe('OpenInvoicesCard', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const getWrapper = (props = mockProps) =>
    mount(
      <MockedProvider>
        <OpenInvoicesCard {...props} />
      </MockedProvider>
    );

  it('renders normally', () => {
    const wrapper = getWrapper();

    expect(wrapper.render()).toMatchSnapshot();
  });

  it('invokes handleShowInvoice method when the user clicks on the Show Invoice button', () => {
    const wrapper = getWrapper();

    act(() => {
      wrapper.find(Button).at(0).simulate('click');
    });
    wrapper.update();

    expect(mockProps.handleShowInvoice).toHaveBeenCalledTimes(1);
  });

  it('invokes handleShowInvoice method when the user clicks on the Resend Invoice button', () => {
    const wrapper = getWrapper();

    act(() => {
      wrapper.find(Button).at(1).simulate('click');
    });
    wrapper.update();

    expect(mockProps.handleResendInvoice).toHaveBeenCalledTimes(1);
  });
});
