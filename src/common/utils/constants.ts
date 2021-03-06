import { StatusLabelProps } from '../statusLabel/StatusLabel';
import { ApplicationStatus, LeaseStatus, OfferStatus, OrderStatus } from '../../@types/__generated__/globalTypes';

type ApplicationStatusType = {
  [key in ApplicationStatus]: {
    label: string;
    type: StatusLabelProps['type'];
  };
};

export const APPLICATION_STATUS: ApplicationStatusType = {
  // Note: Changing the order affects the status filters in application list view
  PENDING: { label: 'applicationList.status.pending', type: 'alert' },
  OFFER_GENERATED: {
    label: 'applicationList.status.offerGenerated',
    type: 'info',
  },
  OFFER_SENT: { label: 'applicationList.status.offerSent', type: 'success' },
  HANDLED: { label: 'applicationList.status.handled', type: 'info' },
  NO_SUITABLE_BERTHS: { label: 'applicationList.status.noSuitable', type: 'error' },
  REJECTED: { label: 'applicationList.status.rejected', type: 'error' },
  EXPIRED: { label: 'applicationList.status.expired', type: 'neutral' },
};

type OrderStatusType = {
  [key in OrderStatus]: {
    label: string;
    type: StatusLabelProps['type'];
  };
};

export const ORDER_STATUS: OrderStatusType = {
  // Note: Changing the order affects the status filters
  DRAFTED: {
    label: 'common.orderStatus.drafted',
    type: 'warning',
  },
  OFFERED: {
    label: 'common.orderStatus.offered',
    type: 'warning',
  },
  PAID: {
    label: 'common.orderStatus.paid',
    type: 'success',
  },
  PAID_MANUALLY: {
    label: 'common.orderStatus.paidManually',
    type: 'success',
  },
  REFUNDED: {
    label: 'common.orderStatus.refunded',
    type: 'warning',
  },
  REJECTED: {
    label: 'common.orderStatus.rejected',
    type: 'error',
  },
  EXPIRED: {
    label: 'common.orderStatus.expired',
    type: 'error',
  },
  CANCELLED: {
    label: 'common.orderStatus.cancelled',
    type: 'error',
  },
  ERROR: {
    label: 'common.orderStatus.error',
    type: 'error',
  },
};

type OfferStatusType = {
  [key in OfferStatus]: {
    label: string;
    type: StatusLabelProps['type'];
  };
};

export const OFFER_STATUS: OfferStatusType = {
  ACCEPTED: {
    label: 'common.offerStatus.accepted',
    type: 'success',
  },
  CANCELLED: {
    label: 'common.offerStatus.cancelled',
    type: 'error',
  },
  DRAFTED: {
    label: 'common.offerStatus.drafted',
    type: 'alert',
  },
  EXPIRED: {
    label: 'common.offerStatus.expired',
    type: 'error',
  },
  OFFERED: {
    label: 'common.offerStatus.offered',
    type: 'alert',
  },
  REJECTED: {
    label: 'common.offerStatus.rejected',
    type: 'error',
  },
};

type LeaseStatusType = {
  [key in LeaseStatus]: {
    label: string;
    type: StatusLabelProps['type'];
  };
};

export const LEASE_STATUS: LeaseStatusType = {
  DRAFTED: {
    label: 'common.leaseStatus.drafted',
    type: 'neutral',
  },
  OFFERED: {
    label: 'common.leaseStatus.offered',
    type: 'success',
  },
  REFUSED: {
    label: 'common.leaseStatus.refused',
    type: 'error',
  },
  EXPIRED: {
    label: 'common.leaseStatus.expired',
    type: 'error',
  },
  ERROR: {
    label: 'common.leaseStatus.error',
    type: 'error',
  },
  PAID: {
    label: 'common.leaseStatus.paid',
    type: 'success',
  },
  TERMINATED: {
    label: 'common.leaseStatus.terminated',
    type: 'error',
  },
};
