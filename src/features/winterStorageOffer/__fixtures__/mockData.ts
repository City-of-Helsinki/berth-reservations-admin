import { Boat } from '../../../common/boatCard/types';
import { AreaData, PlaceData, SectionsData } from '../types';
import { ApplicationStatus, LeaseStatus } from '../../../@types/__generated__/globalTypes';
import { WINTER_STORAGE_OFFER } from '../__generated__/WINTER_STORAGE_OFFER';

export const mockSectionsData: SectionsData = {
  __typename: 'WinterStorageSectionNodeConnection',
  edges: [
    {
      __typename: 'WinterStorageSectionNodeEdge',
      node: {
        __typename: 'WinterStorageSectionNode',
        id: 'MOCK-SECTION-1',
        properties: {
          __typename: 'WinterStorageSectionProperties',
          electricity: true,
          gate: true,
          identifier: '1',
          places: {
            __typename: 'WinterStoragePlaceNodeConnection',
            edges: [
              {
                __typename: 'WinterStoragePlaceNodeEdge',
                node: {
                  __typename: 'WinterStoragePlaceNode',
                  id: 'MOCK-PLACE',
                  isActive: true,
                  isAvailable: false,
                  leases: {
                    __typename: 'WinterStorageLeaseNodeConnection',
                    edges: [
                      {
                        __typename: 'WinterStorageLeaseNodeEdge',
                        node: {
                          __typename: 'WinterStorageLeaseNode',
                          customer: { __typename: 'ProfileNode', id: 'MOCK-PROFILE' },
                          endDate: undefined,
                          id: 'MOCK-LEASE',
                          isActive: true,
                          startDate: undefined,
                          status: LeaseStatus.PAID,
                        },
                      },
                    ],
                  },
                  length: 3,
                  number: 1,
                  width: 3,
                },
              },
            ],
          },
          summerStorageForBoats: true,
          summerStorageForDockingEquipment: true,
          summerStorageForTrailers: true,
          water: true,
        },
      },
    },
    {
      __typename: 'WinterStorageSectionNodeEdge',
      node: {
        __typename: 'WinterStorageSectionNode',
        id: 'MOCK-SECTION-2',
        properties: {
          __typename: 'WinterStorageSectionProperties',
          electricity: true,
          gate: true,
          identifier: '2',
          places: {
            __typename: 'WinterStoragePlaceNodeConnection',
            edges: [],
          },
          summerStorageForBoats: true,
          summerStorageForDockingEquipment: true,
          summerStorageForTrailers: true,
          water: true,
        },
      },
    },
  ],
};

export const mockAreaData: AreaData = {
  __typename: 'WinterStorageAreaNode',
  id: 'MOCK-AREA',
  properties: {
    __typename: 'WinterStorageAreaProperties',
    imageFile: '',
    maxWidth: 3,
    municipality: 'Helsinki',
    name: 'AREA',
    numberOfFreePlaces: 0,
    numberOfPlaces: 1,
    sections: mockSectionsData,
    servicemapId: 'MOCK-AREA',
    streetAddress: 'Testiosoite 1',
    wwwUrl: '',
    zipCode: '00100',
  },
};

export const mockApplication: WINTER_STORAGE_OFFER['winterStorageApplication'] = {
  __typename: 'WinterStorageApplicationNode',
  boatLength: 3,
  boatModel: 'MOCK',
  boatName: 'BOAT',
  boatRegistrationNumber: 'MOCK-BOAT',
  boatType: 'MOCK-BOAT-TYPE',
  boatWidth: 3,
  createdAt: undefined,
  customer: { __typename: 'ProfileNode', id: 'MOCK-PROFILE' },
  id: '',
  status: ApplicationStatus.HANDLED,
};

export const mockBoatTypes: WINTER_STORAGE_OFFER['boatTypes'] = [
  {
    id: 'MOCK-BOAT-TYPE',
    name: 'Soutuvene',
    __typename: 'BoatTypeType',
  },
];

export const getMockPlace = (length: number | null): PlaceData => ({
  area: 'AREA',
  areaId: 'MOCK-AREA',
  id: 'MOCK-PLACE',
  isActive: true,
  isAvailable: true,
  leases: [],
  length: length,
  number: 1,
  properties: {
    electricity: true,
    gate: true,
    summerStorageForBoats: true,
    summerStorageForDockingEquipment: true,
    summerStorageForTrailers: true,
    water: true,
  },
  section: '',
  width: 1,
});

export const getMockBoat = (length: number | null): Boat => ({
  boatDraught: null,
  boatLength: length,
  boatModel: 'MOCK',
  boatName: 'BOAT',
  boatRegistrationNumber: 'MOCK-BOAT',
  boatType: 'Soutuvene',
  boatWeight: null,
  boatWidth: 1,
});
