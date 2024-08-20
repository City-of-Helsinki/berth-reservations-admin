import React from 'react';
import { mount } from 'enzyme';
import { HashRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
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
  onClickCreateBoat: jest.fn(),
  refetchQueries: [],
  setBoatToEdit: jest.fn(),
};

describe('CustomerView', () => {
  const getWrapper = (props?: Partial<CustomerViewProps>) =>
    mount(
      <RecoilRoot>
        <HashRouter>
          <CustomerView {...mockProps} {...props} />
        </HashRouter>
      </RecoilRoot>
    );

  it('renders normally', () => {
    const wrapper = getWrapper();

    expect(wrapper.render()).toMatchSnapshot();
  });
});
