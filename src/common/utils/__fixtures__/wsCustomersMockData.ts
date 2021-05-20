import { WinterStorageSectionNodeConnection } from '../wsCustomers';

export const getMockData = (isActive: boolean): WinterStorageSectionNodeConnection => ({
  __typename: 'WinterStorageSectionNodeConnection',
  edges: [
    {
      __typename: 'WinterStorageSectionNodeEdge',
      node: {
        __typename: 'WinterStorageSectionNode',
        properties: {
          __typename: 'WinterStorageSectionProperties',
          places: {
            __typename: 'WinterStoragePlaceNodeConnection',
            edges: [
              {
                __typename: 'WinterStoragePlaceNodeEdge',
                node: {
                  __typename: 'WinterStoragePlaceNode',
                  leases: {
                    __typename: 'WinterStorageLeaseNodeConnection',
                    edges: [
                      {
                        __typename: 'WinterStorageLeaseNodeEdge',
                        node: {
                          __typename: 'WinterStorageLeaseNode',
                          isActive: isActive,
                        },
                      },
                      {
                        __typename: 'WinterStorageLeaseNodeEdge',
                        node: {
                          __typename: 'WinterStorageLeaseNode',
                          isActive: false,
                        },
                      },
                    ],
                  },
                },
              },
              {
                __typename: 'WinterStoragePlaceNodeEdge',
                node: {
                  __typename: 'WinterStoragePlaceNode',
                  leases: {
                    __typename: 'WinterStorageLeaseNodeConnection',
                    edges: [
                      {
                        __typename: 'WinterStorageLeaseNodeEdge',
                        node: {
                          __typename: 'WinterStorageLeaseNode',
                          isActive: isActive,
                        },
                      },
                      {
                        __typename: 'WinterStorageLeaseNodeEdge',
                        node: {
                          __typename: 'WinterStorageLeaseNode',
                          isActive: false,
                        },
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
    },
    {
      __typename: 'WinterStorageSectionNodeEdge',
      node: {
        __typename: 'WinterStorageSectionNode',
        properties: {
          __typename: 'WinterStorageSectionProperties',
          places: {
            __typename: 'WinterStoragePlaceNodeConnection',
            edges: [
              {
                __typename: 'WinterStoragePlaceNodeEdge',
                node: {
                  __typename: 'WinterStoragePlaceNode',
                  leases: {
                    __typename: 'WinterStorageLeaseNodeConnection',
                    edges: [
                      {
                        __typename: 'WinterStorageLeaseNodeEdge',
                        node: {
                          __typename: 'WinterStorageLeaseNode',
                          isActive: isActive,
                        },
                      },
                      {
                        __typename: 'WinterStorageLeaseNodeEdge',
                        node: {
                          __typename: 'WinterStorageLeaseNode',
                          isActive: false,
                        },
                      },
                    ],
                  },
                },
              },
              {
                __typename: 'WinterStoragePlaceNodeEdge',
                node: {
                  __typename: 'WinterStoragePlaceNode',
                  leases: {
                    __typename: 'WinterStorageLeaseNodeConnection',
                    edges: [
                      {
                        __typename: 'WinterStorageLeaseNodeEdge',
                        node: {
                          __typename: 'WinterStorageLeaseNode',
                          isActive: isActive,
                        },
                      },
                      {
                        __typename: 'WinterStorageLeaseNodeEdge',
                        node: {
                          __typename: 'WinterStorageLeaseNode',
                          isActive: false,
                        },
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
    },
  ],
});
