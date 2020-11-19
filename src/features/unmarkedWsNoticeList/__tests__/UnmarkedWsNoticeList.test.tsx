import React from 'react';
import { mount } from 'enzyme';
import { RecoilRoot } from 'recoil';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import UnmarkedWsNoticeList, { UnmarkedWsNoticeListProps } from '../UnmarkedWsNoticeList';
import { getUnmarkedWinterStorageNotices } from '../utils';
import { unmarkedWinterStorageNoticeMockData } from '../__fixtures__/mockData';
import UnmarkedWsNoticeDetails from '../../unmarkedWsNoticeDetails/UnmarkedWsNoticeDetails';

const notices = getUnmarkedWinterStorageNotices(unmarkedWinterStorageNoticeMockData);

const mockProps: UnmarkedWsNoticeListProps = {
  sortBy: [],
  onSortedColsChange: jest.fn(),
  onStatusFilterChange: jest.fn(),
  notices,
  loading: false,
  pageCount: 1,
  pageIndex: 0,
  isSubmittingApproveOrders: false,
  handleApproveOrders: jest.fn(),
  onNameFilterChange: jest.fn(),
  onSavePdf: jest.fn(),
  goToPage: jest.fn(),
};

describe('UnmarkedWsNoticeList', () => {
  const getWrapper = (props?: Partial<UnmarkedWsNoticeListProps>) =>
    mount(
      <RecoilRoot>
        <MemoryRouter>
          <UnmarkedWsNoticeList {...mockProps} {...props} />
        </MemoryRouter>
      </RecoilRoot>
    );

  it('renders normally with data', () => {
    const wrapper = getWrapper();

    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders normally without data', () => {
    const wrapper = getWrapper({ notices: [] });

    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders sub component correctly', async () => {
    const wrapper = getWrapper();

    await act(async () => {
      await wrapper.find('div.expander div').at(0).simulate('click');
    });
    wrapper.update();

    expect(wrapper.find(UnmarkedWsNoticeDetails).props()).toEqual(notices[0]);
  });
});
