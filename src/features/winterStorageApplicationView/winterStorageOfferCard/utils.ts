import { LeaseDetails } from './types';
import { getOrder } from '../../invoiceCard/utils';
import { WinterStorageLease } from './__generated__/WinterStorageLease';

export const getOfferDetailsData = (lease: WinterStorageLease | null | undefined): LeaseDetails | null => {
  if (!lease) return null;

  const order: LeaseDetails['order'] = lease.order ? getOrder(lease.order) : null;

  return {
    id: lease.id,
    status: lease.status,
    areaId: lease.place?.winterStorageSection.properties?.area.id ?? '',
    areaName: lease.place?.winterStorageSection.properties?.area.properties?.name ?? '',
    customerEmail: lease.customer.primaryEmail?.email ?? '',
    electricity: lease.place?.winterStorageSection.properties?.electricity ?? false,
    gate: lease.place?.winterStorageSection.properties?.gate ?? false,
    order,
    placeLength: lease.place?.length ?? null,
    placeNum: lease.place?.number ?? '',
    placeWidth: lease.place?.width ?? null,
    sectionIdentifier: lease.place?.winterStorageSection.properties?.identifier ?? '',
    summerStorageForBoats: lease.place?.winterStorageSection.properties?.summerStorageForBoats ?? false,
    summerStorageForDockingEquipment:
      lease.place?.winterStorageSection.properties?.summerStorageForDockingEquipment ?? false,
    summerStorageForTrailers: lease.place?.winterStorageSection.properties?.summerStorageForTrailers ?? false,
    water: lease.place?.winterStorageSection.properties?.water ?? false,
  };
};
