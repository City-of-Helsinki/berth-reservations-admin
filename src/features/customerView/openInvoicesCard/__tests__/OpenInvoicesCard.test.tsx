import React from 'react';
import { shallow } from 'enzyme';

import Button from '../../../../common/button/Button';
import OpenInvoicesCard from '../OpenInvoicesCard';
import { mockInvoices } from '../../__fixtures__/mockData';

const mockProps = {
  invoices: mockInvoices,
  handleShowInvoice: jest.fn(),
};

describe('OpenInvoicesCard', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  const getWrapper = (props = mockProps) => shallow(<OpenInvoicesCard {...props} />);

  it('renders normally', () => {
    const wrapper = getWrapper();

    expect(wrapper.render()).toMatchSnapshot();
  });

  it('invokes handleShowInvoice method when the user clicks on the Show Invoice button', () => {
    const wrapper = getWrapper();
    wrapper.find(Button).simulate('click');

    expect(mockProps.handleShowInvoice).toHaveBeenCalledTimes(1);
  });
});
