import React from 'react';
import { shallow } from 'enzyme';
import { HashRouter } from 'react-router-dom';

import CustomerView, { CustomerViewProps } from '../CustomerView';
import { privateCustomerProfile } from '../../../common/privateCustomerDetails/__fixtures__/mockData';

const mockProps: CustomerViewProps = {
  applications: [],
  invoices: [],
  boats: [],
  customerProfile: privateCustomerProfile,
  handleEditCustomer: jest.fn(),
  leases: [],
  openInvoices: [],
  setBoatToEdit: jest.fn(),
  setOpenInvoice: jest.fn(),
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
