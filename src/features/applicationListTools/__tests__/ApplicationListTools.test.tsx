import React from 'react';
import { mount } from 'enzyme';

import ApplicationListTools, { ApplicationListToolsProps } from '../ApplicationListTools';

type TestApplication = {
  id: string;
  leaseId: string;
};

type TestOffer = TestApplication & {
  orderId: string;
};

type TestProps = ApplicationListToolsProps<TestApplication, TestOffer>;

describe('ApplicationListTools', () => {
  const initialProps: TestProps = {
    clearSelectedRows: jest.fn(),
    filterUnhandledApplications: (application) => !application.leaseId,
    getDraftedOffers: (offers) =>
      offers.map((offer, i) => {
        return {
          ...offer,
          orderId: String(i),
        };
      }),
    handleApproveOffers: jest.fn(),
    isSubmitting: false,
    selectedRows: [
      { id: 'UNO', leaseId: 'EINS' },
      { id: 'DOS', leaseId: 'ZWEI' },
      { id: 'TRES', leaseId: 'DREI' },
    ],
  };

  const getWrapper = (props: Partial<TestProps> = {}) => mount(<ApplicationListTools {...initialProps} {...props} />);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders normally', () => {
    const wrapper = getWrapper();

    expect(wrapper.render()).toMatchSnapshot();
  });
});
