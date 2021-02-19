import { Order, Product } from './types';
import { AdditionalProductType } from '../../@types/__generated__/globalTypes';
import { BerthLease_lease_order as BERTH_LEASE_ORDER } from '../applicationView/berthOfferCard/__generated__/BerthLease';
import { UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice_lease_order as UNMARKED_WINTER_STORAGE_LEASE_ORDER } from '../unmarkedWsNoticeView/__generated__/UNMARKED_WINTER_STORAGE_NOTICE';

export const getOrder = (order: BERTH_LEASE_ORDER | UNMARKED_WINTER_STORAGE_LEASE_ORDER): Order => {
  const products = order.orderLines.edges.reduce<{ fixedProducts: Product[]; optionalProducts: Product[] }>(
    (acc, edge) => {
      if (!edge?.node?.product) return acc;

      const product: Product = {
        id: edge.node.product.id,
        name: edge.node.product.service,
        price: edge.node.price,
        orderId: edge.node.id,
      };

      switch (edge.node.product.productType) {
        case AdditionalProductType.FIXED_SERVICE:
          return { ...acc, fixedProducts: [...acc.fixedProducts, product] };
        case AdditionalProductType.OPTIONAL_SERVICE:
          return { ...acc, optionalProducts: [...acc.optionalProducts, product] };
        default:
          return acc;
      }
    },
    { fixedProducts: [], optionalProducts: [] }
  ) ?? { fixedProducts: [], optionalProducts: [] };

  return {
    id: order.id,
    orderNumber: order.orderNumber,
    price: order.price,
    totalPrice: order.totalPrice,
    status: order.status,
    ...products,
  };
};
