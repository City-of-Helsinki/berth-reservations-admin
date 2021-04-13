import { mockOption1, mockOption2, mockOption3, mockOption4, mockSwitchBerthHarbors } from '../__fixtures__/mockData';
import { getHarborOptions, sortHarborOptions } from '../utils';
import { SWITCH_BERTH_HARBORS } from '../__generated__/SWITCH_BERTH_HARBORS';

describe('switchBerth utils', () => {
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
      expect(getHarborOptions(mockSwitchBerthHarbors)).toEqual([mockOption1, mockOption2, mockOption3, mockOption4]);
    });

    it('should skip nameless harbors', () => {
      const nameless: SWITCH_BERTH_HARBORS = {
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
});
