import React from 'react';
import { mount } from 'enzyme';

import CustomerDetails, { CustomerDetailsProps } from '../CustomerDetails';
import {
  customerListApplications,
  customerListBerthLeases,
  customerListInvoices,
  customerListBoats,
  customerListEntry,
  customerListWinterStoragePlaces,
} from '../__mocks__/mockData';
import { CustomerListBerthLeases } from '../../types';

const mockProps = {
  ...customerListEntry,
  berths: customerListBerthLeases,
  winterStoragePlaces: customerListWinterStoragePlaces,
  boats: customerListBoats,
  applications: customerListApplications,
  invoices: customerListInvoices,
};

describe('CustomerDetails', () => {
  const getWrapper = (props?: Partial<CustomerDetailsProps>) => mount(<CustomerDetails {...mockProps} {...props} />);

  it('renders normally', () => {
    const wrapper = getWrapper();

    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders a horizontal rule if there are inactive berth leases', () => {
    const berths: CustomerListBerthLeases[] = [
      { id: '123', isActive: false, title: 'Pursilahdenranta B31' },
      { id: '321', isActive: true, title: 'Strömsinlahdenranta B31' },
    ];

    const wrapper = getWrapper({
      berths,
    });

    expect(wrapper.find('hr').exists()).toEqual(true);
  });

  it('renders no horizontal rule if there are no inactive berth leases', () => {
    const berths: CustomerListBerthLeases[] = [
      { id: '123', isActive: true, title: 'Pursilahdenranta B31' },
      { id: '321', isActive: true, title: 'Strömsinlahdenranta B31' },
    ];

    const wrapper = getWrapper({
      berths,
    });

    expect(wrapper.find('hr').exists()).toEqual(false);
  });
});
