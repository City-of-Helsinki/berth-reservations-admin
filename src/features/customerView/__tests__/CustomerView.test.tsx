import React from 'react';
import { shallow } from 'enzyme';
import { HashRouter } from 'react-router-dom';

import CustomerView, { CustomerViewProps } from '../CustomerView';
import { privateCustomerProfile } from '../../../common/privateCustomerDetails/__fixtures__/mockData';

const mockProps: CustomerViewProps = {
  applications: [],
  boats: [],
  cancelLease: jest.fn(),
  createLease: jest.fn(),
  customerProfile: privateCustomerProfile,
  handleDeleteOffer: jest.fn(),
  handleEditCustomer: jest.fn(),
  handleNoPlacesAvailable: jest.fn(),
  invoices: [],
  isDeletingOffer: false,
  leases: [],
  offers: [],
  onClickCreateAdditionalInvoice: jest.fn(),
  onClickCreateBoat: jest.fn(),
  openInvoices: [],
  refetchQueries: [],
  setOpenResendInvoice: jest.fn(),
  setBoatToEdit: jest.fn(),
  setOpenInvoice: jest.fn(),
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
