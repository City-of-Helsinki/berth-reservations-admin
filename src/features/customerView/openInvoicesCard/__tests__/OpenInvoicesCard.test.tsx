import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';

import Button from '../../../../common/button/Button';
import OpenInvoicesCard, { OpenInvoicesCardProps } from '../OpenInvoicesCard';
import { mockInvoices } from '../../__fixtures__/mockData';

const mockProps: OpenInvoicesCardProps = {
  invoices: mockInvoices,
  handleShowInvoice: jest.fn(),
  handleResendInvoice: jest.fn(),
};

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
    wrapper.find(Button).at(0).simulate('click');

    expect(mockProps.handleShowInvoice).toHaveBeenCalledTimes(1);
  });

  it('invokes handleShowInvoice method when the user clicks on the Resend Invoice button', () => {
    const wrapper = getWrapper();
    wrapper.find(Button).at(1).simulate('click');

    expect(mockProps.handleResendInvoice).toHaveBeenCalledTimes(1);
  });
});
