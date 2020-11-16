import { CustomerListApplication, CustomerListBerthLeases, CustomerListInvoice, CustomerListBoat } from '../../types';
import { CustomerGroup } from '../../../../@types/__generated__/globalTypes';
import { CustomerDetailsProps } from '../CustomerDetails';

export const customerListEntry: Omit<
  CustomerDetailsProps,
  'berths' | 'winterStoragePlaces' | 'boats' | 'applications' | 'invoices'
> = {
  name: 'Mikko Matias Mallikas',
  address: 'Telakkakatu 1 A 10',
  postalCode: '00100',
  city: 'Helsinki',
  phone: '+358 040 123 4567',
  email: 'mikko.mallikas@meri.fi',
  customerGroup: CustomerGroup.PRIVATE,
  comment:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada id est ut pellentesque. ' +
    'Vivamus quis maximus sem. Ut auctor vestibulum mattis. Vestibulum mollis diam convallis ligula consequat ' +
    'sagittis.',
};

export const customerListWinterStoragePlaces = [{ id: '123', title: 'Rajasaari' }];

export const customerListBoats: CustomerListBoat[] = [{ id: '123', name: 'Cama la Yano' }];

export const customerListApplications: CustomerListApplication[] = [{ id: '123', createdAt: '2019-12-01' }];

export const customerListInvoices: CustomerListInvoice[] = [{ id: '123', date: '2020-01-21' }];

export const customerListBerthLeases: CustomerListBerthLeases[] = [
  { id: '123', isActive: true, title: 'Pursilahdenranta B31' },
  { id: '321', isActive: true, title: 'Strömsinlahdenranta B31' },
];
