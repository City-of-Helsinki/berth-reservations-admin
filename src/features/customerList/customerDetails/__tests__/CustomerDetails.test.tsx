import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import CustomerDetails, { CustomerDetailsProps } from '../CustomerDetails';
import {
  customerListApplications,
  customerListBerthLeases,
  customerListBoats,
  customerListEntry,
  customerListInvoices,
  customerListWinterStoragePlaces,
} from '../__mocks__/mockData';
import { CustomerListBerthLeases } from '../../types';
import { LeaseStatus } from '../../../../@types/__generated__/globalTypes';

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

  const pastBerthsTitleSelector = (wrapper: ReactWrapper) => wrapper.find('Section').at(4).find('h4').at(0).text();

  it('renders past berths if there are inactive berth leases', () => {
    const berths: CustomerListBerthLeases[] = [
      { id: '123', isActive: false, status: LeaseStatus.PAID, title: 'Pursilahdenranta B31' },
      { id: '321', isActive: true, status: LeaseStatus.PAID, title: 'Strömsinlahdenranta B31' },
    ];

    const wrapper = getWrapper({
      berths,
    });

    expect(pastBerthsTitleSelector(wrapper)).toEqual('AIEMMAT VENEPAIKAT');
  });

  it('renders no past berths if there are no inactive berth leases', () => {
    const berths: CustomerListBerthLeases[] = [
      { id: '123', isActive: true, status: LeaseStatus.PAID, title: 'Pursilahdenranta B31' },
      { id: '321', isActive: true, status: LeaseStatus.PAID, title: 'Strömsinlahdenranta B31' },
    ];

    const wrapper = getWrapper({
      berths,
    });

    expect(pastBerthsTitleSelector(wrapper)).not.toEqual('AIEMMAT VENEPAIKAT');
  });
});
