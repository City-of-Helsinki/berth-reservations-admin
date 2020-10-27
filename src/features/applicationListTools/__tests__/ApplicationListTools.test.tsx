import React from 'react';
import { mount } from 'enzyme';

import ApplicationListTools, { ApplicationListToolsProps } from '../ApplicationListTools';

describe('ApplicationListTools', () => {
  const initialProps: ApplicationListToolsProps = {
    offersCount: 2,
    offersWithoutPlacesCount: 1,
    selectedApplicationsCount: 3,
    isSubmitting: false,
    clearSelectedRows: jest.fn(),
    handleApproveOrders: jest.fn(),
  };

  const getWrapper = (props: Partial<ApplicationListToolsProps> = {}) =>
    mount(<ApplicationListTools {...initialProps} {...props} />);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders normally', () => {
    const wrapper = getWrapper();

    expect(wrapper.render()).toMatchSnapshot();
  });
});
