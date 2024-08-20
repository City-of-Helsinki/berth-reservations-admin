import React from 'react';
import { mount } from 'enzyme';
import { HashRouter } from 'react-router-dom';
import UnmarkedWsNoticeView, { UnmarkedWsNoticeViewProps } from '../UnmarkedWsNoticeView';
import { mockData, mockCustomer, mockOrder } from '../__fixtures__/mockData';
import { getNoticeDetailsData } from '../utils';
import { getCustomerProfile } from '../../customerView/utils';
import { ApplicationStatus, LeaseStatus } from '../../../@types/__generated__/globalTypes';
import DeleteButton from '../../../common/deleteButton/DeleteButton';
import InvoiceCard from '../../invoiceCard/InvoiceCard';
import { canDeleteLease } from '../../../common/utils/leaseUtils';
import { canDeleteApplication } from '../../../common/utils/applicationUtils';
import StatusLabel from '../../../common/statusLabel/StatusLabel';

const mockNoticeDetails = getNoticeDetailsData(mockData.winterStorageNotice, mockData.boatTypes);

const mockProps: UnmarkedWsNoticeViewProps = {
  customerProfile: null,
  order: null,
  leaseStatus: null,
  noticeDetails: mockNoticeDetails,
  winterStorageNotice: mockData.winterStorageNotice,
  isDeletingNotice: false,
  isCreateLeaseLoading: false,
  isDeleteLeaseLoading: false,
  refetchQueries: [],
  handleUnlinkCustomer: jest.fn(),
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

    expect(wrapper.find(StatusLabel)).toBeDefined();
    expect(wrapper.find(InvoiceCard)).toBeDefined();
  });

  it('renders delete notice button if notice can be deleted', () => {
    Object.values(ApplicationStatus)
      .filter(canDeleteApplication)
      .forEach((status) => {
        const wrapper = getWrapper({ ...mockProps, noticeDetails: { ...mockNoticeDetails, status } });
        expect(wrapper.find('.actionsRight').find(DeleteButton).length).toBe(1);
      });
  });

  it('does not render delete notice button if notice cannot be deleted', () => {
    Object.values(ApplicationStatus)
      .filter((status) => !canDeleteApplication(status))
      .forEach((status) => {
        const wrapper = getWrapper({ ...mockProps, noticeDetails: { ...mockNoticeDetails, status } });
        expect(wrapper.find('.actionsRight').find(DeleteButton).length).toBe(0);
      });
  });

  it('renders delete lease button if lease can be deleted', () => {
    Object.values(LeaseStatus)
      .filter(canDeleteLease)
      .forEach((status) => {
        const wrapper = getWrapper({
          ...mockProps,
          order: mockOrder,
          leaseStatus: status,
        });
        expect(wrapper.find(InvoiceCard).find(DeleteButton).length).toBe(1);
      });
  });

  it('does not render delete lease button if lease cannot be deleted', () => {
    Object.values(LeaseStatus)
      .filter((status) => !canDeleteLease(status))
      .forEach((status) => {
        const wrapper = getWrapper({
          ...mockProps,
          order: mockOrder,
          leaseStatus: status,
        });
        expect(wrapper.find(InvoiceCard).find(DeleteButton).length).toBe(0);
      });
  });
});
