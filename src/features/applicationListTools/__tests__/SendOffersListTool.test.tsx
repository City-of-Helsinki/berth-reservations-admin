import React from 'react';
import { mount } from 'enzyme';

import SendOffersListTool, { SendOffersListToolProps } from '../SendOffersListTool';

type TestApplication = {
  id: string;
  leaseId: string;
};

type TestOffer = TestApplication & {
  orderId: string;
};

type TestProps = SendOffersListToolProps<TestApplication, TestOffer>;

describe('SendOffersListTool', () => {
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

  const getWrapper = (props: Partial<TestProps> = {}) => mount(<SendOffersListTool {...initialProps} {...props} />);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders normally', () => {
    const wrapper = getWrapper();

    expect(wrapper.render()).toMatchSnapshot();
  });
});
