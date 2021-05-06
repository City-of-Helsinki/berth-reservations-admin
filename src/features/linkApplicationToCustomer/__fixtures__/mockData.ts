import {
  FILTERED_CUSTOMERS,
  FILTERED_CUSTOMERS_profiles_edges_node as PROFILE_NODE,
  FILTERED_CUSTOMERS_profiles_edges_node_berthApplications as BERTH_APPLICATIONS,
  FILTERED_CUSTOMERS_profiles_edges_node_berthLeases as BERTH_LEASES,
  FILTERED_CUSTOMERS_profiles_edges_node_winterStorageLeases as WINTER_STORAGE_LEASES,
} from '../__generated__/FILTERED_CUSTOMERS';
import { CustomerGroup } from '../../../@types/__generated__/globalTypes';

const berthApplications: BERTH_APPLICATIONS = {
  __typename: 'BerthApplicationNodeConnection',
  edges: [
    {
      __typename: 'BerthApplicationNodeEdge',
      node: {
        id: 'MOCK-BERTH-APPLICATION',
        __typename: 'BerthApplicationNode',
        berthSwitch: {
          __typename: 'BerthSwitchType',
          berth: {
            __typename: 'BerthNode',
            id: 'MOCK-BERTH-0',
            pier: {
              __typename: 'PierNode',
              id: 'MOCK-PIER-0',
              properties: {
                __typename: 'PierProperties',
                harbor: {
                  id: 'MOCK-HARBOR-0',
                  __typename: 'HarborNode',
                  properties: {
                    __typename: 'HarborProperties',
                    name: 'Test Harbor',
                  },
                },
              },
            },
          },
        },
      },
    },
  ],
};

const berthLeases: BERTH_LEASES = {
  __typename: 'BerthLeaseNodeConnection',
  edges: [
    {
      __typename: 'BerthLeaseNodeEdge',
      node: {
        __typename: 'BerthLeaseNode',
        id: '1388d48d-cada-4171-9772-62a28e3c5e1a',
        berth: {
          __typename: 'BerthNode',
          id: 'cf16edea-5d9d-4e81-88af-cb4feeceef2d',
          number: '1',
          pier: {
            __typename: 'PierNode',
            id: '9b533377-55db-4199-b4c3-a5199a23fb80',
            properties: {
              __typename: 'PierProperties',
              harbor: {
                __typename: 'HarborNode',
                id: 'Rn9dNgRGIT',
                properties: { __typename: 'HarborProperties', name: 'Test Harbor' },
              },
              identifier: 'A',
            },
          },
        },
      },
    },
    {
      __typename: 'BerthLeaseNodeEdge',
      node: null,
    },
  ],
};

export const mockWinterStorageLeases: WINTER_STORAGE_LEASES = {
  __typename: 'WinterStorageLeaseNodeConnection',
  edges: [
    {
      __typename: 'WinterStorageLeaseNodeEdge',
      node: {
        __typename: 'WinterStorageLeaseNode',
        id: '122',
        isActive: false,
        place: null,
        section: {
          __typename: 'WinterStorageSectionNode',
          id: '0db7f1fa-ad28-4303-86b3-7afb952fcc0d',
          properties: {
            __typename: 'WinterStorageSectionProperties',
            area: {
              __typename: 'WinterStorageAreaNode',
              id: '27138bba-2a85-479c-8762-b44836a94a54',
              properties: {
                __typename: 'WinterStorageAreaProperties',
                name: 'Nostojärjestysalue 0',
              },
            },
          },
        },
      },
    },
    {
      __typename: 'WinterStorageLeaseNodeEdge',
      node: {
        __typename: 'WinterStorageLeaseNode',
        id: '123',
        isActive: false,
        place: {
          __typename: 'WinterStoragePlaceNode',
          id: '206f135a-0c0d-4c40-a10f-aaf69275ff8c',
          winterStorageSection: {
            __typename: 'WinterStorageSectionNode',
            id: '24ce2563-5b31-4a65-86b9-141a5de3c686',
            properties: {
              __typename: 'WinterStorageSectionProperties',
              area: {
                __typename: 'WinterStorageAreaNode',
                id: '77e46f7f-8f3d-4956-ac23-bbc447bcb0ef',
                properties: { __typename: 'WinterStorageAreaProperties', name: 'Talvisäilytysalue 0' },
              },
            },
          },
        },
        section: null,
      },
    },
    {
      __typename: 'WinterStorageLeaseNodeEdge',
      node: {
        __typename: 'WinterStorageLeaseNode',
        id: '124',
        isActive: true,
        place: null,
        section: {
          __typename: 'WinterStorageSectionNode',
          id: '26e02991-3e7b-4078-84ef-25e57ee16ba0',
          properties: {
            __typename: 'WinterStorageSectionProperties',
            area: {
              __typename: 'WinterStorageAreaNode',
              id: '18d4d225-9107-4092-8ec6-00bfa5eb40cc',
              properties: {
                __typename: 'WinterStorageAreaProperties',
                name: 'Nostojärjestysalue',
              },
            },
          },
        },
      },
    },
    {
      __typename: 'WinterStorageLeaseNodeEdge',
      node: {
        __typename: 'WinterStorageLeaseNode',
        id: '125',
        isActive: true,
        place: {
          __typename: 'WinterStoragePlaceNode',
          id: '420a6d19-4f74-4410-994a-cef31155eea3',
          winterStorageSection: {
            __typename: 'WinterStorageSectionNode',
            id: 'df7bc1ea-e3ae-4649-83c1-69c518696e01',
            properties: {
              __typename: 'WinterStorageSectionProperties',
              area: {
                __typename: 'WinterStorageAreaNode',
                id: 'd7be8041-f0f8-4bd7-9d4f-989bce0824fd',
                properties: { __typename: 'WinterStorageAreaProperties', name: 'Talvisäilytysalue' },
              },
            },
          },
        },
        section: null,
      },
    },
  ],
};

const mockProfile: PROFILE_NODE = {
  __typename: 'ProfileNode',
  berthApplications: berthApplications,
  berthLeases: berthLeases,
  winterStorageLeases: mockWinterStorageLeases,
  firstName: 'Testi',
  id: 'MOCK-PROFILE',
  lastName: 'Testinen',
  organization: null,
  primaryAddress: { __typename: 'AddressNode', address: 'Testikatu 1', city: 'Helsinki', postalCode: '00100' },
  customerGroup: CustomerGroup.PRIVATE,
};

export const mockFilteredCustomers: FILTERED_CUSTOMERS = {
  profiles: {
    __typename: 'ProfileNodeConnection',
    count: 1,
    edges: [
      {
        __typename: 'ProfileNodeEdge',
        node: mockProfile,
      },
    ],
  },
};
