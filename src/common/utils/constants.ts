import { StatusLabelProps } from '../statusLabel/StatusLabel';
import { ApplicationStatus } from '../../@types/__generated__/globalTypes';

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
  NO_SUITABLE_BERTHS_NOTIFIED: {
    label: 'applicationList.status.noSuitableNotified',
    type: 'warning',
  },
};
