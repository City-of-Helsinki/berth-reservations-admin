import React from 'react';
import { shallow } from 'enzyme';
import { HashRouter } from 'react-router-dom';

import CustomerView, { CustomerViewProps } from '../CustomerView';
import { privateCustomerProfile } from '../../../common/privateCustomerDetails/__fixtures__/mockData';

const mockProps: CustomerViewProps = {
  applications: [],
  bills: [],
  boats: [],
  customerProfile: privateCustomerProfile,
  handleEditCustomer: jest.fn(),
  leases: [],
  openBills: [],
  setBoatToEdit: jest.fn(),
  setOpenBill: jest.fn(),
  onClickCreateBoat: jest.fn(),
};

describe('CustomerView', () => {
  const getWrapper = (props?: Partial<CustomerViewProps>) =>
    shallow(
      <HashRouter>
        <CustomerView {...mockProps} {...props} />
      </HashRouter>
    );

  it('renders normally', () => {
    const wrapper = getWrapper();

    expect(wrapper.render()).toMatchSnapshot();
  });
});
