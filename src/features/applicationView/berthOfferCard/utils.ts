import { BerthLease } from './__generated__/BerthLease';
import { LeaseDetails } from './types';
import { getOrder } from '../../invoiceCard/utils';

export const getOfferDetailsData = (lease: BerthLease | null | undefined): LeaseDetails | null => {
  if (!lease) return null;

  const order: LeaseDetails['order'] = lease.order ? getOrder(lease.order) : null;

  return {
    id: lease.id,
    status: lease.status,
    berthComment: lease.berth?.comment ?? '',
    berthDepth: lease.berth?.depth ?? null,
    berthIsAccessible: lease.berth?.isAccessible ?? false,
    berthLength: lease.berth?.length ?? null,
    berthMooringType: lease.berth?.mooringType ?? null,
    berthNum: lease.berth?.number ?? '',
    berthWidth: lease.berth?.width ?? null,
    customerEmail: lease.customer.primaryEmail?.email ?? null,
    electricity: lease.berth?.pier.properties?.electricity ?? false,
    gate: lease.berth?.pier.properties?.gate ?? false,
    harborName: lease.berth?.pier.properties?.harbor.properties?.name ?? '',
    lighting: lease.berth?.pier.properties?.lighting ?? false,
    pierIdentifier: lease.berth?.pier.properties?.identifier ?? '',
    wasteCollection: lease.berth?.pier.properties?.wasteCollection ?? false,
    water: lease.berth?.pier.properties?.water ?? false,
    order,
  };
};
