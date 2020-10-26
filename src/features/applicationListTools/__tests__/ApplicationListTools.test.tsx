import React from 'react';
import { mount } from 'enzyme';

import ApplicationListTools, { ApplicationListToolsProps } from '../ApplicationListTools';

describe('ApplicationListTools', () => {
  const mockApplications = [
    {
      leaseId: '13f92869-1bde-4a65-9932-03d9a05127a7',
      orderId: '2d5d3e03-bf32-43ce-9bed-8aabe6c0361b',
      email: 'john.doe@example.com',
    },
  ];

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
