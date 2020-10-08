import { ApplicationStatus } from '../../../@types/__generated__/globalTypes';
import { canDeleteApplication } from '../applicationUtils';

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
});
