import { getBerthsData } from '../utils';
import { BerthPricing } from '../__generated__/BerthPricing';
import { data } from '../__fixtures__/data';

describe('utils', () => {
  describe('getBerthsData', () => {
    it('should return an array of BerthPrice objects', () => {
      expect(getBerthsData(data)).toMatchSnapshot();
    });

    it('should return an empty array when the provided data is undefined or null', () => {
      expect(getBerthsData(undefined)).toEqual([]);
      expect(getBerthsData(null)).toEqual([]);
    });

    it('should remove all potential null/undefined nodes', () => {
      const data = { __typename: '', edges: [undefined, null] };

      expect(getBerthsData(data as BerthPricing)).toEqual([]);
    });
  });
});
