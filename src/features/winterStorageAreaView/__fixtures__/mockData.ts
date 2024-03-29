import { INDIVIDUAL_WINTER_STORAGE_AREA } from '../__generated__/INDIVIDUAL_WINTER_STORAGE_AREA';
import { LeaseStatus } from '../../../@types/__generated__/globalTypes';

export const mockData: INDIVIDUAL_WINTER_STORAGE_AREA = {
  winterStorageArea: {
    id: 'V2ludGVyU3RvcmFnZUFyZWFOb2RlOjlkNTc3Yzk5LTYzZjMtNDIzNC04MTM4LWY3MGE0Zjg2ODRmMg',
    properties: {
      name: 'WS Area 1',
      zipCode: '00100',
      municipality: 'Helsinki',
      streetAddress: '',
      wwwUrl: '',
      imageFile: null,
      sections: {
        edges: [
          {
            node: {
              id: 'V2ludGVyU3RvcmFnZVNlY3Rpb25Ob2RlOjI1OTgyMTEyLTllNDktNGUwNy1hYmVjLTZhMTQyMzcyZmZjOQ==',
              properties: {
                identifier: '-',
                electricity: true,
                water: true,
                gate: false,
                summerStorageForBoats: false,
                summerStorageForTrailers: false,
                summerStorageForDockingEquipment: false,
                leases: {
                  __typename: 'WinterStorageLeaseNodeConnection',
                  edges: [],
                },
                places: {
                  edges: [
                    {
                      node: {
                        id: 'V2ludGVyU3RvcmFnZVBsYWNlTm9kZTo0YzUzZTY3NC0zMmFjLTRkNTEtYmQzMC0wNTcyMWNjMjUyMTE=',
                        number: 1,
                        width: 3,
                        length: 5,
                        isActive: true,
                        leases: {
                          edges: [
                            {
                              node: {
                                id: 'V2ludGVyU3RvcmFnZUxlYXNlTm9kZTo3ZTU0NjdmMy1jZGJhLTQzMmEtODdiZi05ODBiZTI1ZGFjNzg=',
                                startDate: '2020-09-15',
                                endDate: '2021-06-10',
                                status: LeaseStatus.DRAFTED,
                                isActive: false,
                                customer: {
                                  __typename: 'ProfileNode',
                                  id: 'UHJvZmlsZU5vZGU6NWNjYzgyNDUtNmRiOS00YTRiLWI5NTEtNWYxNDQ5YTY5NzY2',
                                },
                                application: {
                                  createdAt: '2020-07-17T10:52:57.079036+00:00',
                                  id: 'foo',
                                  __typename: 'WinterStorageApplicationNode',
                                },
                                __typename: 'WinterStorageLeaseNode',
                              },
                              __typename: 'WinterStorageLeaseNodeEdge',
                            },
                          ],
                          __typename: 'WinterStorageLeaseNodeConnection',
                        },
                        __typename: 'WinterStoragePlaceNode',
                      },
                      __typename: 'WinterStoragePlaceNodeEdge',
                    },
                    {
                      node: {
                        id: 'V2ludGVyU3RvcmFnZVBsYWNlTm9kZTo3OTkzYzAxOC0zMTMwLTRjNTItYjA3Ni1mMGZlN2Q5YjRmYTE=',
                        number: 2,
                        width: 3,
                        length: 5,
                        isActive: true,
                        leases: {
                          edges: [
                            {
                              node: {
                                id: 'V2ludGVyU3RvcmFnZUxlYXNlTm9kZTpjOWNjODAyNi1hZTkzLTRjMTUtYmJiNy1kM2Q1ZjE4ZjViYjA=',
                                startDate: '2020-09-15',
                                endDate: '2021-06-10',
                                status: LeaseStatus.DRAFTED,
                                isActive: false,
                                customer: {
                                  __typename: 'ProfileNode',
                                  id: '0a43fd1d-420b-448c-be1a-7268d845c4dc',
                                },
                                application: null,
                                __typename: 'WinterStorageLeaseNode',
                              },
                              __typename: 'WinterStorageLeaseNodeEdge',
                            },
                          ],
                          __typename: 'WinterStorageLeaseNodeConnection',
                        },
                        __typename: 'WinterStoragePlaceNode',
                      },
                      __typename: 'WinterStoragePlaceNodeEdge',
                    },
                  ],
                  __typename: 'WinterStoragePlaceNodeConnection',
                },
                __typename: 'WinterStorageSectionProperties',
              },
              __typename: 'WinterStorageSectionNode',
            },
            __typename: 'WinterStorageSectionNodeEdge',
          },
        ],
        __typename: 'WinterStorageSectionNodeConnection',
      },
      __typename: 'WinterStorageAreaProperties',
    },
    __typename: 'WinterStorageAreaNode',
  },
};
