import { StatusLabelProps } from '../statusLabel/StatusLabel';
import { ApplicationStatus, OrderStatus } from '../../@types/__generated__/globalTypes';

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
  REJECTED: {
    label: 'common.orderStatus.rejected',
    type: 'error',
  },
  WAITING: {
    label: 'common.orderStatus.waiting',
    type: 'warning',
  },
};
