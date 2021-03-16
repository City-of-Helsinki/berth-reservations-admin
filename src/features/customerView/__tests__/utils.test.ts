import { getBoats, getBerthLeases, getWinterStorageLeases } from '../utils';
import {
  INDIVIDUAL_CUSTOMER_profile as CUSTOMER_PROFILE,
  INDIVIDUAL_CUSTOMER_profile_boats_edges as BOAT_EDGE,
  INDIVIDUAL_CUSTOMER_profile_berthLeases_edges as BERTH_LEASE_EDGE,
  INDIVIDUAL_CUSTOMER_profile_winterStorageLeases_edges as WINTER_STORAGE_LEASE_EDGE,
} from '../__generated__/INDIVIDUAL_CUSTOMER';
import { emptyMockProfile } from '../__fixtures__/mockData';
import { BerthMooringType, LeaseStatus } from '../../../@types/__generated__/globalTypes';

const mockBerthLeases: BERTH_LEASE_EDGE[] = [
  {
    __typename: 'BerthLeaseNodeEdge',
    node: {
      __typename: 'BerthLeaseNode',
      id: 'e4876a7d-86fc-4c13-90fa-2b2e4e935431',
      status: LeaseStatus.PAID,
      startDate: '2019-05-06',
      endDate: '2019-09-14',
      isActive: true,
      berth: {
        id: 'd04e1414-f959-47df-968b-ab37a7c920b7',
        __typename: 'BerthNode',
        number: '30',
        length: 6,
        width: 2.5,
        depth: 1,
        mooringType: BerthMooringType.NO_STERN_TO_MOORING,
        pier: {
          id: 'a1c1831c-5eb8-48ba-8460-c9730662aa52',
          __typename: 'PierNode',
          properties: {
            __typename: 'PierProperties',
            identifier: 'A',
            harbor: {
              __typename: 'HarborNode',
              id: '78e5a1bc-5fde-470e-8236-298427877d0f',
              properties: {
                __typename: 'HarborProperties',
                name: 'Puotilan venesatama',
              },
            },
          },
        },
      },
    },
  },
];

const mockWinterStorageLeases: WINTER_STORAGE_LEASE_EDGE[] = [
  {
    node: {
      id: 'V2ludGVyU3RvcmFnZUxlYXNlTm9kZTo3ZTU0NjdmMy1jZGJhLTQzMmEtODdiZi05ODBiZTI1ZGFjNzg=',
      status: LeaseStatus.PAID,
      startDate: '2020-09-15',
      endDate: '2021-06-10',
      place: {
        id: '529c167f-1cdf-4307-a8e6-32953f3723f9',
        number: 1,
        winterStorageSection: {
          id: '54bb1037-ee6b-4900-85d4-83c90c916c49',
          properties: {
            identifier: '-',
            area: {
              id: 'V2ludGVyU3RvcmFnZUFyZWFOb2RlOmY0ZjczZTFiLTI2NTgtNDFhYi1hNTBhLTQyZDIzZjJjMmU4MQ==',
              properties: {
                name: 'WS Area 1',
                __typename: 'WinterStorageAreaProperties',
              },
              __typename: 'WinterStorageAreaNode',
            },
            __typename: 'WinterStorageSectionProperties',
          },
          __typename: 'WinterStorageSectionNode',
        },
        __typename: 'WinterStoragePlaceNode',
      },
      __typename: 'WinterStorageLeaseNode',
    },
    __typename: 'WinterStorageLeaseNodeEdge',
  },
];

const mockBoats: BOAT_EDGE[] = [
  {
    __typename: 'BoatNodeEdge',
    node: {
      __typename: 'BoatNode',
      boatType: {
        __typename: 'BoatTypeType',
        id: '6',
        name: 'Purjevene / moottoripursi',
      },
      certificates: [],
      draught: null,
      hullMaterial: '',
      id: 'fb2a761f-ccc2-421a-9e32-0957b2510be9',
      intendedUse: '',
      length: 7,
      model: '',
      name: 'Boaty McBerth',
      propulsion: '',
      registrationNumber: 'VEN-101',
      weight: null,
      width: 2.5,
    },
  },
  {
    __typename: 'BoatNodeEdge',
    node: {
      __typename: 'BoatNode',
      boatType: { __typename: 'BoatTypeType', id: '2', name: 'Soutuvene' },
      certificates: [],
      draught: null,
      hullMaterial: '',
      id: '2250193b-aecd-4402-bb12-56a2142ae644',
      intendedUse: '',
      length: 3,
      model: '',
      name: 'RowRowRowYourBoat',
      propulsion: '',
      registrationNumber: '',
      weight: null,
      width: 1,
    },
  },
];

describe('utils', () => {
  describe('getBerthLeases', () => {
    it('should return an empty array when the provided profile has no berthLeases', () => {
      const profile: CUSTOMER_PROFILE = {
        ...emptyMockProfile,
        berthLeases: null,
      };

      const leases = getBerthLeases(profile);

      expect(leases).toEqual([]);
    });

    it('should return an array of lease objects', () => {
      const profile: CUSTOMER_PROFILE = {
        ...emptyMockProfile,
        berthLeases: {
          __typename: 'BerthLeaseNodeConnection',
          edges: mockBerthLeases,
        },
      };

      const leases = getBerthLeases(profile);

      expect(leases).toMatchSnapshot();
    });

    it('should remove the edges with a value of null from the provided leases array', () => {
      const profile: CUSTOMER_PROFILE = {
        ...emptyMockProfile,
        berthLeases: {
          __typename: 'BerthLeaseNodeConnection',
          edges: [null, ...mockBerthLeases],
        },
      };

      const leases = getBerthLeases(profile);

      expect(leases).toEqual(expect.not.arrayContaining([null]));
    });

    it('should remove the nodes with a value of null from the provided berthLeases array', () => {
      const profile: CUSTOMER_PROFILE = {
        ...emptyMockProfile,
        berthLeases: {
          __typename: 'BerthLeaseNodeConnection',
          edges: [{ __typename: 'BerthLeaseNodeEdge', node: null }, ...mockBerthLeases],
        },
      };

      const leases = getBerthLeases(profile);

      expect(leases).toEqual(expect.not.arrayContaining([null]));
    });

    it('should return an empty array when the provided profile only contains winter storage leases', () => {
      const profile: CUSTOMER_PROFILE = {
        ...emptyMockProfile,
        winterStorageLeases: {
          __typename: 'WinterStorageLeaseNodeConnection',
          edges: mockWinterStorageLeases,
        },
      };

      const leases = getBerthLeases(profile);

      expect(leases).toEqual([]);
    });
  });

  describe('getBoats', () => {
    it('should return an empty array when the provided profile has no boats', () => {
      const profile: CUSTOMER_PROFILE = { ...emptyMockProfile, boats: null };

      const boats = getBoats(profile);

      expect(boats).toEqual([]);
    });

    it('should return an array of boat objects', () => {
      const profile: CUSTOMER_PROFILE = {
        ...emptyMockProfile,
        boats: { __typename: 'BoatNodeConnection', edges: mockBoats },
      };

      const boats = getBoats(profile);

      expect(boats).toMatchSnapshot();
    });

    it('should remove the edges with a value of null from the provided boats array', () => {
      const profile: CUSTOMER_PROFILE = {
        ...emptyMockProfile,
        boats: { __typename: 'BoatNodeConnection', edges: [null, ...mockBoats] },
      };

      const boats = getBoats(profile);

      expect(boats).toEqual(expect.not.arrayContaining([null]));
    });

    it('should remove the nodes with a value of null from the provided boats array', () => {
      const profile: CUSTOMER_PROFILE = {
        ...emptyMockProfile,
        boats: { __typename: 'BoatNodeConnection', edges: [{ __typename: 'BoatNodeEdge', node: null }, ...mockBoats] },
      };

      const boats = getBoats(profile);

      expect(boats).toEqual(expect.not.arrayContaining([null]));
    });
  });

  describe('getWinterStorageLeases', () => {
    it('should return an empty array when the provided profile has no winter storage leases', () => {
      const profile: CUSTOMER_PROFILE = {
        ...emptyMockProfile,
        berthLeases: null,
      };

      const leases = getWinterStorageLeases(profile);

      expect(leases).toEqual([]);
    });

    it('should return an empty array when the provided profile only contains berth leases', () => {
      const profile: CUSTOMER_PROFILE = {
        ...emptyMockProfile,
        berthLeases: {
          __typename: 'BerthLeaseNodeConnection',
          edges: mockBerthLeases,
        },
      };

      const leases = getWinterStorageLeases(profile);

      expect(leases).toEqual([]);
    });

    it('should remove the edges with a value of null from the provided leases array', () => {
      const profile: CUSTOMER_PROFILE = {
        ...emptyMockProfile,
        winterStorageLeases: {
          __typename: 'WinterStorageLeaseNodeConnection',
          edges: [null, ...mockWinterStorageLeases],
        },
      };

      const leases = getWinterStorageLeases(profile);

      expect(leases).toEqual(expect.not.arrayContaining([null]));
    });

    it('should remove the nodes with a value of null from the provided winter storage leases array', () => {
      const profile: CUSTOMER_PROFILE = {
        ...emptyMockProfile,
        winterStorageLeases: {
          __typename: 'WinterStorageLeaseNodeConnection',
          edges: [{ __typename: 'WinterStorageLeaseNodeEdge', node: null }, ...mockWinterStorageLeases],
        },
      };

      const leases = getWinterStorageLeases(profile);

      expect(leases).toEqual(expect.not.arrayContaining([null]));
    });
  });
});
