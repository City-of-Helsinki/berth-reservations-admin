import {
  AdditionalProductTaxEnum,
  BerthMooringType,
  CustomerGroup,
  OrderStatus,
  PeriodType,
  PriceUnits,
  ProductServiceType,
} from '../../@types/__generated__/globalTypes';
import { formatPercentage } from './format';
import { Invoice } from '../../features/customerView/types';
import { isAdditionalProductInvoice, isBerthInvoice } from '../../features/customerView/utils';

export const getMooringTypeTKey = (mooringType: BerthMooringType) => {
  switch (mooringType) {
    case BerthMooringType.DINGHY_PLACE:
      return 'common.mooringTypes.DINGHY_PLACE';
    case BerthMooringType.NO_STERN_TO_MOORING:
      return 'common.mooringTypes.NO_STERN_TO_MOORING';
    case BerthMooringType.QUAYSIDE_MOORING:
      return 'common.mooringTypes.QUAYSIDE_MOORING';
    case BerthMooringType.SEA_BUOY_MOORING:
      return 'common.mooringTypes.SEA_BUOY_MOORING';
    case BerthMooringType.SIDE_SLIP_PLACE:
      return 'common.mooringTypes.SIDE_SLIP_PLACE';
    case BerthMooringType.SINGLE_SLIP_PLACE:
      return 'common.mooringTypes.SINGLE_SLIP_PLACE';
    case BerthMooringType.STERN_BUOY_PLACE:
      return 'common.mooringTypes.STERN_BUOY_PLACE';
    case BerthMooringType.STERN_POLE_MOORING:
      return 'common.mooringTypes.STERN_POLE_MOORING';
    case BerthMooringType.TRAWLER_PLACE:
      return 'common.mooringTypes.TRAWLER_PLACE';

    default:
      return mooringType;
  }
};

export const getPeriodTKey = (period: PeriodType) => {
  switch (period) {
    case PeriodType.MONTH:
      return 'common.periodTypes.MONTH';
    case PeriodType.SEASON:
      return 'common.periodTypes.SEASON';
    case PeriodType.YEAR:
      return 'common.periodTypes.YEAR';

    default:
      return period;
  }
};

export const getProductServiceTKey = (productService: ProductServiceType) => {
  switch (productService) {
    case ProductServiceType.DINGHY_PLACE:
      return 'common.terminology.dinghyPlace';
    case ProductServiceType.ELECTRICITY:
      return 'common.terminology.electricity';
    case ProductServiceType.GATE:
      return 'common.terminology.gate';
    case ProductServiceType.LIGHTING:
      return 'common.terminology.lighting';
    case ProductServiceType.MOORING:
      return 'common.terminology.mooring';
    case ProductServiceType.PARKING_PERMIT:
      return 'common.terminology.parkingPermit';
    case ProductServiceType.STORAGE_ON_ICE:
      return 'common.terminology.storageOnIce';
    case ProductServiceType.SUMMER_STORAGE_FOR_DOCKING_EQUIPMENT:
      return 'common.terminology.dockingEquipmentSummerStorage';
    case ProductServiceType.SUMMER_STORAGE_FOR_TRAILERS:
      return 'common.terminology.trawlerSummerStorage';
    case ProductServiceType.WASTE_COLLECTION:
      return 'common.terminology.wasteCollection';
    case ProductServiceType.WATER:
      return 'common.terminology.water';

    default:
      return productService;
  }
};

export const getOrderStatusTKey = (orderStatus: OrderStatus): string => {
  switch (orderStatus) {
    case OrderStatus.CANCELLED:
      return 'common.orderStatus.cancelled';
    case OrderStatus.ERROR:
      return 'common.orderStatus.error';
    case OrderStatus.EXPIRED:
      return 'common.orderStatus.expired';
    case OrderStatus.PAID:
      return 'common.orderStatus.paid';
    case OrderStatus.REJECTED:
      return 'common.orderStatus.rejected';
    case OrderStatus.WAITING:
      return 'common.orderStatus.waiting';

    default:
      return orderStatus;
  }
};

export const getProductTax = (tax: AdditionalProductTaxEnum, locale: string) => {
  switch (tax) {
    case AdditionalProductTaxEnum.TAX_10_00:
      return formatPercentage(10, locale);
    case AdditionalProductTaxEnum.TAX_24_00:
      return formatPercentage(24, locale);

    default:
      return tax;
  }
};

export const getPriceUnits = (unit: PriceUnits) => {
  switch (unit) {
    case PriceUnits.AMOUNT:
      return '€';
    case PriceUnits.PERCENTAGE:
      return '%';

    default:
      return unit;
  }
};

export const getCustomerGroupKey = (customerGroup: CustomerGroup | null): string => {
  return customerGroup ? `common.customerGroups.${customerGroup}` : 'common.customerGroups.PRIVATE';
};

export const getInvoiceTypeKey = (invoice: Invoice): string => {
  if (isAdditionalProductInvoice(invoice)) {
    return 'common.terminology.additionalProductInvoice';
  } else if (isBerthInvoice(invoice)) {
    return 'common.terminology.berthRent';
  } else {
    return 'common.terminology.winterStoragePlaceRent';
  }
};
