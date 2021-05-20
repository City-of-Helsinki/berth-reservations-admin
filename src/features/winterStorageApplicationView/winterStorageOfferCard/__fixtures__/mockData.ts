import { WinterStorageLease } from '../__generated__/WinterStorageLease';
import {
  AdditionalProductType,
  LeaseStatus,
  OrderStatus,
  ProductServiceType,
} from '../../../../@types/__generated__/globalTypes';

export const mockLease: WinterStorageLease = {
  __typename: 'WinterStorageLeaseNode',
  customer: {
    __typename: 'ProfileNode',
    id: 'MOCK-PROFILE',
    primaryEmail: { __typename: 'EmailNode', email: 'test@example.com', id: 'MOCK-EMAIL' },
  },
  id: 'MOCK-LEASE',
  order: {
    __typename: 'OrderNode',
    id: 'MOCK-ORDER',
    orderLines: {
      __typename: 'OrderLineNodeConnection',
      edges: [
        {
          __typename: 'OrderLineNodeEdge',
          node: {
            __typename: 'OrderLineNode',
            id: '',
            price: 50,
            product: {
              __typename: 'AdditionalProductNode',
              id: 'MOCK-PRODUCT',
              productType: AdditionalProductType.FIXED_SERVICE,
              service: ProductServiceType.GATE,
            },
          },
        },
      ],
    },
    orderNumber: 'ORDER-NUMBER',
    price: 100,
    status: OrderStatus.PAID,
    totalPrice: 150,
  },
  place: {
    __typename: 'WinterStoragePlaceNode',
    id: 'MOCK-PLACE',
    length: 3,
    number: 1,
    width: 3,
    winterStorageSection: {
      __typename: 'WinterStorageSectionNode',
      id: 'MOCK-SECTION',
      properties: {
        __typename: 'WinterStorageSectionProperties',
        area: {
          __typename: 'WinterStorageAreaNode',
          id: 'MOCK-AREA',
          properties: {
            __typename: 'WinterStorageAreaProperties',
            name: 'AREA',
          },
        },
        electricity: false,
        gate: true,
        identifier: 'SECTION',
        summerStorageForBoats: false,
        summerStorageForDockingEquipment: false,
        summerStorageForTrailers: false,
        water: false,
      },
    },
  },
  status: LeaseStatus.PAID,
};
