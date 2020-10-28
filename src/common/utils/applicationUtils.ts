import { ApplicationStatus } from '../../@types/__generated__/globalTypes';

export const canDeleteApplication = (status: ApplicationStatus) => {
  return ![ApplicationStatus.HANDLED, ApplicationStatus.OFFER_SENT, ApplicationStatus.EXPIRED].includes(status);
};

export const canUnlinkCustomer = (status: ApplicationStatus) => {
  return status === ApplicationStatus.PENDING;
};
