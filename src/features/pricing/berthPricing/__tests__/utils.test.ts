import { getBerthsData } from '../utils';
import { BerthPricing } from '../__generated__/BerthPricing';
import { data } from '../__fixtures__/data';
import { PricingCategory } from '../../../../@types/__generated__/globalTypes';

describe('utils', () => {
  describe('getBerthsData', () => {
    const noData = {
      [PricingCategory.DEFAULT]: [],
      [PricingCategory.DINGHY]: [],
      [PricingCategory.TRAILER]: [],
      [PricingCategory.VASIKKASAARI]: [],
    };
    it('should return an array of BerthPrice objects', () => {
      expect(getBerthsData(data)).toMatchSnapshot();
    });

    it('should return a dictionary with empty arrays when the provided data is undefined or null', () => {
      expect(getBerthsData(undefined)).toEqual(noData);
      expect(getBerthsData(null)).toEqual(noData);
    });

    it('should remove all potential null/undefined nodes', () => {
      const data = { __typename: '', edges: [undefined, null] };

      expect(getBerthsData(data as BerthPricing)).toEqual(noData);
    });
  });
});
