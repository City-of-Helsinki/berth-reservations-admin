import { LeaseStatus } from '../../@types/__generated__/globalTypes';

export const canDeleteLease = (status?: LeaseStatus | null) => {
  return status === LeaseStatus.DRAFTED;
};
