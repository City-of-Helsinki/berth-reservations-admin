import { WINTER_STORAGE_PLACE_DETAILS_winterStoragePlace as PLACE } from '../__generated__/WINTER_STORAGE_PLACE_DETAILS';
import { LeaseStatus } from '../../../@types/__generated__/globalTypes';

export const mockLeases: PLACE['leases'] = {
  __typename: 'WinterStorageLeaseNodeConnection',
  edges: [
    {
      __typename: 'WinterStorageLeaseNodeEdge',
      node: {
        __typename: 'WinterStorageLeaseNode',
        customer: { __typename: 'ProfileNode', firstName: 'Testi', id: 'MOCK-PROFILE', lastName: 'Testinen' },
        endDate: undefined,
        id: '',
        isActive: true,
        startDate: undefined,
        status: LeaseStatus.PAID,
      },
    },
    {
      __typename: 'WinterStorageLeaseNodeEdge',
      node: {
        __typename: 'WinterStorageLeaseNode',
        customer: { __typename: 'ProfileNode', firstName: 'Testi', id: 'MOCK-PROFILE', lastName: 'Testinen' },
        endDate: undefined,
        id: '',
        isActive: false,
        startDate: undefined,
        status: LeaseStatus.DRAFTED,
      },
    },
  ],
};
