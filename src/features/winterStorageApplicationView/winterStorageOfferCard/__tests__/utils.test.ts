import { getOfferDetailsData } from '../utils';
import { mockLease } from '../__fixtures__/mockData';

describe('winterStorageOfferCard utils', () => {
  describe('getOfferDetailsData', () => {
    it('maps lease data to lease details correctly', () => {
      expect(getOfferDetailsData(mockLease)).toMatchSnapshot();
    });
  });
});
