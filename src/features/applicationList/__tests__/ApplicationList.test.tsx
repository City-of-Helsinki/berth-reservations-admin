import React from 'react';
import { mount } from 'enzyme';
import { HashRouter } from 'react-router-dom';
import { IconAngleDown } from 'hds-react';

import ApplicationList, { ApplicationListProps } from '../ApplicationList';
import { mockData, mockTableData } from '../__fixtures__/mockData';
import ApplicationDetails from '../../../common/applicationDetails/ApplicationDetails';
import TableFilters from '../../../common/tableFilters/TableFilters';

const mockProps: ApplicationListProps = {
  sortBy: [],
  onStatusFilterChange: jest.fn(),
  data: undefined,
  getPageCount: jest.fn(() => 0),
  goToPage: jest.fn(),
  handleDeleteLease: jest.fn(),
  isDeleting: false,
  loading: false,
  onSortedColsChange: jest.fn(),
  onlySwitchApps: false,
  pageIndex: 0,
  setOnlySwitchApps: jest.fn(),
  tableData: [],
};

describe('ApplicationList', () => {
  const getWrapper = (props?: Partial<ApplicationListProps>) =>
    mount(
      <HashRouter>
        <ApplicationList {...mockProps} {...props} />
      </HashRouter>
    );

  it('renders normally with minimum props', () => {
    const wrapper = getWrapper();

    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders normally with all props', () => {
    const wrapper = getWrapper({
      data: mockData,
      tableData: mockTableData,
    });

    expect(wrapper.render()).toMatchSnapshot();
  });

  it('shows ApplicationDetails on expanded row', () => {
    const wrapper = getWrapper({
      data: mockData,
      tableData: mockTableData,
    });

    wrapper.find(IconAngleDown).at(0).simulate('click');
    wrapper.update();

    expect(wrapper.find(ApplicationDetails)).toBeDefined();
  });

  it('should call goToPage and setOnlySwitchApps when filter is changed', () => {
    const goToPage = jest.fn();
    const setOnlySwitchApps = jest.fn();
    const wrapper = getWrapper({
      data: mockData,
      tableData: mockTableData,
      goToPage,
      setOnlySwitchApps,
    });

    wrapper.find(TableFilters).find('button.filterBtn').at(1).simulate('click');
    wrapper.update();

    expect(goToPage).toHaveBeenCalledWith(0);
    expect(setOnlySwitchApps).toHaveBeenCalledWith(true);
  });

  it('should call goToPage when page is changed', () => {
    const goToPage = jest.fn();
    const getPageCount = jest.fn(() => 2);
    const wrapper = getWrapper({
      data: mockData,
      tableData: mockTableData,
      goToPage,
      getPageCount,
    });

    wrapper.find('Pagination').find('div.icnBtn').at(1).simulate('click');
    wrapper.update();

    expect(goToPage).toHaveBeenCalledWith(1);
  });
});
