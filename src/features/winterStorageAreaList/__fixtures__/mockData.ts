import { WINTER_STORAGE_AREAS } from '../__generated__/WINTER_STORAGE_AREAS';

export const mockData: WINTER_STORAGE_AREAS = {
  winterStorageAreas: {
    __typename: 'WinterStorageAreaNodeConnection',
    edges: [
      {
        __typename: 'WinterStorageAreaNodeEdge',
        node: {
          __typename: 'WinterStorageAreaNode',
          id: '0',
          properties: {
            __typename: 'WinterStorageAreaProperties',
            imageFile: null,
            maxWidth: null,
            municipality: null,
            name: null,
            numberOfPlaces: 15,
            numberOfFreePlaces: 5,
            numberOfInactivePlaces: 5,
            estimatedNumberOfUnmarkedSpaces: 5,
            sections: {
              __typename: 'WinterStorageSectionNodeConnection',
              edges: [
                {
                  __typename: 'WinterStorageSectionNodeEdge',
                  node: {
                    __typename: 'WinterStorageSectionNode',
                    id: '00',
                    properties: {
                      __typename: 'WinterStorageSectionProperties',
                      electricity: false,
                      gate: false,
                      summerStorageForDockingEquipment: false,
                      summerStorageForTrailers: false,
                      water: false,
                    },
                  },
                },
              ],
            },
            streetAddress: null,
            wwwUrl: 'https://www.hel.fi/',
            zipCode: '00100',
          },
        },
      },
      {
        __typename: 'WinterStorageAreaNodeEdge',
        node: {
          __typename: 'WinterStorageAreaNode',
          id: '1',
          properties: {
            __typename: 'WinterStorageAreaProperties',
            imageFile: null,
            maxWidth: 5,
            municipality: 'Helsinki',
            name: 'Pursilahdenranta',
            numberOfPlaces: 15,
            numberOfFreePlaces: 5,
            numberOfInactivePlaces: 5,
            estimatedNumberOfUnmarkedSpaces: 5,
            sections: {
              __typename: 'WinterStorageSectionNodeConnection',
              edges: [
                {
                  __typename: 'WinterStorageSectionNodeEdge',
                  node: {
                    __typename: 'WinterStorageSectionNode',
                    id: '10',
                    properties: {
                      __typename: 'WinterStorageSectionProperties',
                      electricity: true,
                      gate: true,
                      summerStorageForDockingEquipment: true,
                      summerStorageForTrailers: true,
                      water: true,
                    },
                  },
                },
              ],
            },
            streetAddress: 'Pursilahdenranta 1',
            wwwUrl: 'https://www.hel.fi/',
            zipCode: '00990',
          },
        },
      },
    ],
  },
};
