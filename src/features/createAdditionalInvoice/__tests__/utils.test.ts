import { getBillableAdditionalProducts } from '../utils';
import { additionalservices } from '../__fixtures__/mockData';
import { PeriodType, ProductServiceType } from '../../../@types/__generated__/globalTypes';

describe('utils', () => {
  describe('getBillableAdditionalProducts', () => {
    it('should return billable products', () => {
      const products = getBillableAdditionalProducts(additionalservices);

      expect(products.length).toEqual(1);

      const product = products[0];
      expect(product.service).toEqual(ProductServiceType.STORAGE_ON_ICE);
      expect(product.period).toEqual(PeriodType.SEASON);
      expect(product.priceValue).toEqual(16);
    });
  });
});
