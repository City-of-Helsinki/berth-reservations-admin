import React from 'react';
import { mount } from 'enzyme';
import { HashRouter } from 'react-router-dom';

import UnmarkedWsNoticeView, { UnmarkedWsNoticeViewProps } from '../UnmarkedWsNoticeView';
import { mockData, mockCustomer, mockOrder } from '../__fixtures__/mockData';
import { getNoticeDetailsData } from '../utils';
import { getCustomerProfile } from '../../customerView/utils';

const mockNoticeDetails = getNoticeDetailsData(mockData.winterStorageNotice, mockData.boatTypes);

const mockProps: UnmarkedWsNoticeViewProps = {
  customerProfile: null,
  order: null,
  noticeDetails: mockNoticeDetails,
  winterStorageNotice: mockData.winterStorageNotice,
  handleCreateLease: jest.fn(),
  handleDeleteNotice: jest.fn(),
  handleDeleteLease: jest.fn(),
  handleEditCustomer: jest.fn(),
  handleLinkCustomer: jest.fn(),
};

// LinkApplicationToCustomer is mocked to limit the test scope
jest.mock('../../linkApplicationToCustomer/LinkApplicationToCustomerContainer', () => {
  const LinkApplicationToCustomerContainer = () => <div>LinkApplicationToCustomerContainer</div>;

  return {
    __esModule: true,
    default: LinkApplicationToCustomerContainer,
  };
});

describe('UnmarkedWsNoticeView', () => {
  const getWrapper = (props?: Partial<UnmarkedWsNoticeViewProps>) =>
    mount(
      <HashRouter>
        <UnmarkedWsNoticeView {...mockProps} {...props} />
      </HashRouter>
    );

  it('renders normally', () => {
    const wrapper = getWrapper();

    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders normally with customer', () => {
    const customerProfile = getCustomerProfile(mockCustomer);
    const wrapper = getWrapper({ customerProfile });

    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders invoice card correctly if a lease has been created', () => {
    const wrapper = getWrapper({ customerProfile: getCustomerProfile(mockCustomer), order: mockOrder });

    expect(wrapper.find('Chip')).toBeDefined();
    expect(wrapper.find('InvoiceCard')).toBeDefined();
  });
});
