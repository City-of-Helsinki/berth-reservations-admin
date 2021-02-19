import React from 'react';
import { shallow } from 'enzyme';

import InvoiceActions, { InvoiceActionsProps } from '../InvoiceActions';

describe('InvoiceActions', () => {
  const actions = [
    {
      label: 'First action',
      onClick: jest.fn(),
    },
    {
      label: 'Second action',
      onClick: jest.fn(),
    },
  ];

  const initialProps: InvoiceActionsProps = {
    actions,
  };

  const getWrapper = (props: Partial<InvoiceActionsProps> = {}) =>
    shallow(<InvoiceActions {...initialProps} {...props} />);

  it('renders normally', () => {
    const wrapper = getWrapper();

    expect(wrapper.html()).toMatchSnapshot();
  });
});
