import { AdditionalService } from '../pricing/additionalServicePricing/AdditionalServicePricing';
import { ADDITIONAL_SERVICES } from './__generated__/ADDITIONAL_SERVICES';
import { PeriodType, ProductServiceType } from '../../@types/__generated__/globalTypes';
import {
  CREATE_ADDITIONAL_INVOICE_createAdditionalProductOrder_order as CreateAddtionalInvoiceOrder,
  CREATE_ADDITIONAL_INVOICE_createAdditionalProductOrder_order_lease_BerthLeaseNode as BerthLeaseNode,
} from './__generated__/CREATE_ADDITIONAL_INVOICE';
import { CreateOrderBerthLease } from './types';

const BILLABLE_ADDITIONAL_SERVICES = [ProductServiceType.STORAGE_ON_ICE];

export const getBillableAdditionalProducts = (data?: ADDITIONAL_SERVICES): AdditionalService[] => {
  if (!data || !data.optionalProducts) return [];

  return data.optionalProducts.edges.reduce<AdditionalService[]>((acc, edge) => {
    if (
      !edge?.node ||
      !BILLABLE_ADDITIONAL_SERVICES.includes(edge.node.service) ||
      edge.node.period !== PeriodType.SEASON
    )
      return acc;

    const additionalProduct = {
      id: edge.node.id,
      service: edge.node.service,
      priceValue: edge.node.priceValue,
      priceUnit: edge.node.priceUnit,
      taxPercentage: edge.node.taxPercentage,
      period: edge.node.period,
    };

    return [...acc, additionalProduct];
  }, []);
};

export const getAdditionalProductService = (
  order?: CreateAddtionalInvoiceOrder | null
): ProductServiceType | undefined => {
  return order ? order.orderLines.edges[0]?.node?.product?.service : undefined;
};

export const getBerthLease = (order?: CreateAddtionalInvoiceOrder | null): CreateOrderBerthLease => {
  const lease = order?.lease as BerthLeaseNode;

  return {
    id: lease.id,
    harborName: lease.berth.pier.properties?.harbor.properties?.name as string,
    startDate: lease.startDate,
    endDate: lease.endDate,
  };
};
