import { AdditionalService } from '../pricing/additionalServicePricing/AdditionalServicePricing';
import { ADDITIONAL_SERVICES } from './__generated__/ADDITIONAL_SERVICES';
import { PeriodType, ProductServiceType } from '../../@types/__generated__/globalTypes';

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
