import { ApplicationStatus } from '../../../@types/__generated__/globalTypes';
import { canDeleteApplication, canUnlinkCustomer } from '../applicationUtils';

describe('applicationUtils', () => {
  describe('canDeleteApplication', () => {
    const predicate = (status: ApplicationStatus) =>
      [ApplicationStatus.HANDLED, ApplicationStatus.OFFER_SENT, ApplicationStatus.EXPIRED].includes(status);

    it('returns false for HANDLED, OFFER_SENT, EXPIRED', () => {
      Object.values(ApplicationStatus)
        .filter(predicate)
        .forEach((status) => expect(canDeleteApplication(status)).toBe(false));
    });

    it('returns true for all other values', () => {
      Object.values(ApplicationStatus)
        .filter((status) => !predicate(status))
        .forEach((status) => expect(canDeleteApplication(status)).toBe(true));
    });
  });

  describe('canUnlinkCustomer', () => {
    it('should only be possible to unlink a customer when application status is PENDING', () => {
      expect(canUnlinkCustomer(ApplicationStatus.PENDING)).toBe(true);
      Object.values(ApplicationStatus)
        .filter((status) => status !== ApplicationStatus.PENDING)
        .forEach((status) => expect(canUnlinkCustomer(status)).toBe(false));
    });
  });
});
