import { getHarborOptions, getLeaseBoat, sortHarborOptions } from '../utils';
import {
  mockOption1,
  mockOption2,
  mockOption3,
  mockOption4,
  mockSwitchPlaceBerthLease,
  mockSwitchPlaceHarbors,
} from '../__fixtures__/mockData';
import { SWITCH_PLACE_BERTH_LEASE } from '../__generated__/SWITCH_PLACE_BERTH_LEASE';
import { SWITCH_PLACE_HARBORS } from '../__generated__/SWITCH_PLACE_HARBORS';

describe('switchPlace utils', () => {
  describe('sortHarborOptions', () => {
    it('should sort options correctly by label', () => {
      expect([mockOption2, mockOption1, mockOption3, mockOption4].sort(sortHarborOptions)).toEqual([
        mockOption1,
        mockOption2,
        mockOption3,
        mockOption4,
      ]);
      expect([mockOption4, mockOption3, mockOption2, mockOption1].sort(sortHarborOptions)).toEqual([
        mockOption1,
        mockOption2,
        mockOption3,
        mockOption4,
      ]);
      expect([mockOption4, mockOption3, mockOption1, mockOption1].sort(sortHarborOptions)).toEqual([
        mockOption1,
        mockOption1,
        mockOption3,
        mockOption4,
      ]);
    });
  });

  describe('getHarborOptions', () => {
    it('should map and sort harbor options correctly', () => {
      expect(getHarborOptions(mockSwitchPlaceHarbors)).toEqual([mockOption1, mockOption2, mockOption3, mockOption4]);
    });

    it('should skip nameless harbors', () => {
      const nameless: SWITCH_PLACE_HARBORS = {
        harbors: {
          __typename: 'HarborNodeConnection',
          edges: [
            {
              __typename: 'HarborNodeEdge',
              node: {
                __typename: 'HarborNode',
                id: 'NAMELESS-HARBOR',
                properties: { __typename: 'HarborProperties', name: null },
              },
            },
          ],
        },
      };

      expect(getHarborOptions(nameless)).toEqual([]);
    });

    it('should return an empty array if there is no data', () => {
      expect(getHarborOptions(undefined)).toEqual([]);
    });
  });

  describe('getLeaseBoat', () => {
    it('should map the lease boat correctly', () => {
      expect(getLeaseBoat(mockSwitchPlaceBerthLease)).toEqual({
        boatDraught: 0.5,
        boatLength: 3,
        boatModel: 'MODEL',
        boatName: 'BOAT',
        boatRegistrationNumber: '',
        boatType: 'Soutuvene',
        boatWeight: 100,
        boatWidth: 1,
      });
    });

    it('should return undefined is no boat exists', () => {
      const noBoat: SWITCH_PLACE_BERTH_LEASE = {
        berthLease: {
          __typename: 'BerthLeaseNode',
          boat: null,
          id: 'MOCK-LEASE',
        },
      };

      expect(getLeaseBoat(noBoat)).toEqual(undefined);
    });
  });
});
