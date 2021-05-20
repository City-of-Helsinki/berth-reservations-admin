import { getNumberOfCustomers } from '../wsCustomers';
import { getMockData } from '../__fixtures__/wsCustomersMockData';

describe('wsCustomers', () => {
  describe('getNumberOfCustomers', () => {
    it('works correctly with generic reference data', () => {
      expect(getNumberOfCustomers(getMockData(true))).toEqual(4);
      expect(getNumberOfCustomers(getMockData(false))).toEqual(0);
    });
  });
});
