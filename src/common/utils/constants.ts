import { StatusLabelProps } from '../statusLabel/StatusLabel';
import { ApplicationStatus, LeaseStatus, OrderStatus } from '../../@types/__generated__/globalTypes';

type ApplicationStatusType = {
  [key in ApplicationStatus]: {
    label: string;
    type: StatusLabelProps['type'];
  };
};

export const APPLICATION_STATUS: ApplicationStatusType = {
  PENDING: { label: 'applicationList.status.pending', type: 'alert' },
  OFFER_GENERATED: {
    label: 'applicationList.status.offerGenerated',
    type: 'info',
  },
  OFFER_SENT: { label: 'applicationList.status.offerSent', type: 'success' },
  HANDLED: { label: 'applicationList.status.handled', type: 'info' },
  EXPIRED: { label: 'applicationList.status.expired', type: 'neutral' },
  NO_SUITABLE_BERTHS: { label: 'applicationList.status.noSuitable', type: 'error' },
  REJECTED: { label: 'applicationList.status.rejected', type: 'error' },
};

type OrderStatusType = {
  [key in OrderStatus]: {
    label: string;
    type: StatusLabelProps['type'];
  };
};

export const ORDER_STATUS: OrderStatusType = {
  CANCELLED: {
    label: 'common.orderStatus.cancelled',
    type: 'error',
  },
  ERROR: {
    label: 'common.orderStatus.error',
    type: 'error',
  },
  EXPIRED: {
    label: 'common.orderStatus.expired',
    type: 'error',
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
  WAITING: {
    label: 'common.orderStatus.waiting',
    type: 'warning',
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
