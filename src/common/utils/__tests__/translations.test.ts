import i18n from 'i18next';
import {
  getPeriodTKey,
  getProductServiceTKey,
  getProductTax,
  getPriceUnits,
  getOrderStatusTKey,
  getCustomerGroupKey,
  getMooringTypeTKey,
  getPriceTier,
} from '../translations';
import {
  PeriodType,
  ProductServiceType,
  AdditionalProductTaxEnum,
  PriceUnits,
  OrderStatus,
  CustomerGroup,
  BerthMooringType,
  PriceTier,
} from '../../../@types/__generated__/globalTypes';
import { formatPercentage } from '../format';

jest.mock('../format');

describe('translations', () => {
  describe('getMooringTypeTKey', () => {
    test('each provided value of type BerthMooringType should have a corresponding translated value', () => {
      const mooringTypes = Object.values(BerthMooringType);
      expect.assertions(mooringTypes.length);

      mooringTypes.forEach((mooringType) => {
        const tKey = getMooringTypeTKey(mooringType);
        expect(i18n.exists(tKey)).toBe(true);
      });
    });

    it('should fallback to the actual value from the backend if there is no match during the runtime', () => {
      const randomValue = 'random' as BerthMooringType;
      const tKey = getMooringTypeTKey(randomValue);

      expect(tKey).toBe(randomValue);
    });
  });

  describe('getPeriodTKey', () => {
    test('each provided value of type PeriodType should have a corresponding translated value', () => {
      const periods = Object.values(PeriodType);
      expect.assertions(periods.length);

      periods.forEach((period) => {
        const tKey = getPeriodTKey(period);
        expect(i18n.exists(tKey)).toBe(true);
      });
    });

    it('should fallback to the actual value from the backend if there is no match during the runtime', () => {
      const randomValue = 'random' as PeriodType;
      const tKey = getPeriodTKey(randomValue);

      expect(tKey).toBe(randomValue);
    });
  });

  describe('getProductServiceTKey', () => {
    test('each provided value of type ProductServiceType should have a corresponding translated value', () => {
      const services = Object.values(ProductServiceType);
      expect.assertions(services.length);

      services.forEach((service) => {
        const tKey = getProductServiceTKey(service);
        expect(i18n.exists(tKey)).toBe(true);
      });
    });

    it('should fallback to the actual value from the backend if there is no match during the runtime', () => {
      const randomValue = 'random' as ProductServiceType;
      const tKey = getProductServiceTKey(randomValue);

      expect(tKey).toBe(randomValue);
    });
  });

  describe('getOrderStatusTKey', () => {
    test('each provided value of type OrderStatus should have a corresponding translated value', () => {
      const statuses = Object.values(OrderStatus);
      expect.assertions(statuses.length);

      statuses.forEach((status) => {
        const tKey = getOrderStatusTKey(status);
        expect(i18n.exists(tKey)).toBe(true);
      });
    });

    it('should fallback to the actual value from the backend if there is no match during the runtime', () => {
      const randomValue = 'random' as OrderStatus;
      const tKey = getOrderStatusTKey(randomValue);

      expect(tKey).toBe(randomValue);
    });
  });

  describe('getProductTax', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });

    test('each provided value of type AdditionalProductTaxEnum should have a corresponding formatted value', () => {
      const taxes = Object.values(AdditionalProductTaxEnum);

      taxes.forEach((tax) => {
        getProductTax(tax, 'fi');
      });

      expect(formatPercentage).toHaveBeenCalledTimes(taxes.length);
    });

    it('should fallback to the actual value from the backend if there is no match during the runtime', () => {
      const randomValue = 'random' as AdditionalProductTaxEnum;
      const tKey = getProductTax(randomValue, 'fi');

      expect(tKey).toBe(randomValue);
    });
  });

  describe('getPriceUnits', () => {
    test('each provided value of type PriceUnits should have a corresponding formatted value', () => {
      const units = Object.values(PriceUnits);
      expect.assertions(units.length);

      units.forEach((unit) => {
        const priceUnit = getPriceUnits(unit);

        expect(priceUnit).not.toBe(unit);
      });
    });

    it('should fallback to the actual value from the backend if there is no match during the runtime', () => {
      const randomValue = 'random' as PriceUnits;
      const unit = getPriceUnits(randomValue);

      expect(unit).toBe(randomValue);
    });
  });

  describe('getPriceTier', () => {
    test('each provided value of type PriceTier should have a corresponding value', () => {
      const tiers = Object.values(PriceTier);
      expect.assertions(tiers.length);

      tiers.forEach((tier) => {
        const priceTier = getPriceTier(tier);

        expect(priceTier).not.toBe(tier);
      });
    });

    it('should fallback to the actual value from the backend if there is no match during the runtime', () => {
      const randomValue = 'random' as PriceTier;
      const priceTier = getPriceTier(randomValue);

      expect(priceTier).toBe(randomValue);
    });
  });

  describe('getCustomerGroupKey', () => {
    it('should resolve key', () => {
      const key = getCustomerGroupKey(CustomerGroup.COMPANY);
      expect(key).toBe('common.customerGroups.COMPANY');
    });

    it('should fallback to PRIVATE in case of null', () => {
      const key = getCustomerGroupKey(null);
      expect(key).toBe('common.customerGroups.PRIVATE');
    });
  });
});
