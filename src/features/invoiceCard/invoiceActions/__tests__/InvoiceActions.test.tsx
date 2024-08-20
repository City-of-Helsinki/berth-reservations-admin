import React from 'react';
import { shallow } from 'enzyme';
import InvoiceActions, { InvoiceActionsProps } from '../InvoiceActions';

describe('InvoiceActions', () => {
  const actions = [
    {
      value: 0,
      label: 'First action',
      disabled: false,
      onClick: jest.fn(),
    },
    {
      value: 1,
      label: 'Second action',
      disabled: false,
      onClick: jest.fn(),
    },
  ];

  const initialProps: InvoiceActionsProps = {
    selectedAction: null,
    actions,
  };

  const getWrapper = (props: Partial<InvoiceActionsProps> = {}) =>
    shallow(<InvoiceActions {...initialProps} {...props} />);

  it('renders normally', () => {
    const wrapper = getWrapper();

    expect(wrapper.render()).toMatchSnapshot();
  });
});
