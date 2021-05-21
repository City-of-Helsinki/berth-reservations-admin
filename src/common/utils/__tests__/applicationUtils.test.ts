import { ApplicationStatus } from '../../../@types/__generated__/globalTypes';
import { canDeleteApplication, canUnlinkCustomer, getApplicantDetails } from '../applicationUtils';
import { berthApplication } from '../../../features/applicationView/__fixtures__/mockData';
import { winterStorageApplication } from '../../../features/winterStorageApplicationView/__fixtures__/mockData';
import { winterStorageNotice } from '../../../features/unmarkedWsNoticeView/__fixtures__/mockData';

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

  describe('getApplicantDetails', () => {
    it('should return correct values for a berth application', () => {
      expect(getApplicantDetails(berthApplication)).toMatchSnapshot();
    });

    it('should return correct values for a winter storage application', () => {
      expect(getApplicantDetails(winterStorageApplication)).toMatchSnapshot();
    });

    it('should return correct values for an unmarked winter storage notice', () => {
      expect(getApplicantDetails(winterStorageNotice)).toMatchSnapshot();
    });
  });
});
