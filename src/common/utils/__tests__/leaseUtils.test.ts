import { LeaseStatus } from '../../../@types/__generated__/globalTypes';
import { canDeleteLease } from '../leaseUtils';

describe('leaseUtils', () => {
  describe('canDeleteLease', () => {
    it('returns true only for DRAFTED leases', () => {
      Object.values(LeaseStatus)
        .filter((status) => status !== LeaseStatus.DRAFTED)
        .forEach((status) => {
          expect(canDeleteLease(status)).toBe(false);
        });
      expect(canDeleteLease(LeaseStatus.DRAFTED)).toBe(true);
    });
  });
});
