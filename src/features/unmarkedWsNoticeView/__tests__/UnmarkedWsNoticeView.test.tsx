import React from 'react';
import { mount } from 'enzyme';
import { HashRouter } from 'react-router-dom';

import UnmarkedWsNoticeView, { UnmarkedWsNoticeViewProps } from '../UnmarkedWsNoticeView';
import { mockData, mockCustomer, mockOrder } from '../__fixtures__/mockData';
import { getNoticeDetailsData } from '../utils';
import { getCustomerProfile } from '../../customerView/utils';
import { ApplicationStatus } from '../../../@types/__generated__/globalTypes';
import DeleteButton from '../../../common/deleteButton/DeleteButton';
import InvoiceCard from '../../invoiceCard/InvoiceCard';

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

  it('renders delete notice button for application status pending or offer_generated', () => {
    [ApplicationStatus.PENDING, ApplicationStatus.OFFER_GENERATED].forEach((status) => {
      const wrapper = getWrapper({ ...mockProps, noticeDetails: { ...mockNoticeDetails, status } });
      expect(wrapper.find('.actionsRight').find(DeleteButton).length).toBe(1);
    });
  });

  it('does not render delete notice button for application status other than pending or offer_generated', () => {
    Object.values(ApplicationStatus)
      .filter((status) => status !== ApplicationStatus.OFFER_GENERATED && status !== ApplicationStatus.PENDING)
      .forEach((status) => {
        const wrapper = getWrapper({ ...mockProps, noticeDetails: { ...mockNoticeDetails, status } });
        expect(wrapper.find('.actionsRight').find(DeleteButton).length).toBe(0);
      });
  });

  it('renders delete lease button for application status offer_generated', () => {
    const wrapper = getWrapper({
      ...mockProps,
      order: mockOrder,
      noticeDetails: { ...mockNoticeDetails, status: ApplicationStatus.OFFER_GENERATED },
    });
    expect(wrapper.find(InvoiceCard).find(DeleteButton).length).toBe(1);
  });

  it('does not render delete lease button for application status other than offer_generated', () => {
    Object.values(ApplicationStatus)
      .filter((status) => status !== ApplicationStatus.OFFER_GENERATED)
      .forEach((status) => {
        const wrapper = getWrapper({ ...mockProps, order: mockOrder, noticeDetails: { ...mockNoticeDetails, status } });
        expect(wrapper.find(InvoiceCard).find(DeleteButton).length).toBe(0);
      });
  });
});
