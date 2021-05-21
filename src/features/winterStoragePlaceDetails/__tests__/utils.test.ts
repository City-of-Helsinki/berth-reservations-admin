import { getPlaceLeases } from '../utils';
import { mockLeases } from '../__fixtures__/mockData';

describe('winterStoragePlaceDetails utils', () => {
  describe('getPlaceLeases', () => {
    it('maps data correctly', () => {
      expect(getPlaceLeases(mockLeases)).toMatchSnapshot();
    });
  });
});
