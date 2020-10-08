import { ApplicationStatus, LeaseStatus } from '../../@types/__generated__/globalTypes';
import {
  UNMARKED_WINTER_STORAGE_NOTICES,
  UNMARKED_WINTER_STORAGE_NOTICES_winterStorageNotices_edges as UNMARKED_WINTER_STORAGE_NOTICES_EDGE,
  UNMARKED_WINTER_STORAGE_NOTICES_winterStorageNotices_edges_node as UNMARKED_WINTER_STORAGE_NOTICES_NODE,
} from './__generated__/UNMARKED_WINTER_STORAGE_NOTICES';
import { getChoiceFromWinterStorageAreaChoices } from '../unmarkedWsNoticeView/utils';

interface UnmarkedWinterStorageChoice {
  winterStorageAreaName: string;
  winterStorageArea: string;
}

export type UnmarkedWinterStorageNotice = {
  boatLength: number;
  boatModel: string;
  boatName: string;
  boatRegistrationNumber: string;
  boatType?: string | null;
  boatWidth: number;
  choice: UnmarkedWinterStorageChoice;
  createdAt: string;
  customerId?: string;
  firstName: string;
  id: string;
  lastName: string;
  status: ApplicationStatus;
  leaseStatus?: LeaseStatus;
  leaseId?: string;
};

export const getUnmarkedWinterStorageNotices = (
  data: UNMARKED_WINTER_STORAGE_NOTICES | undefined
): UnmarkedWinterStorageNotice[] => {
  return (
    data?.winterStorageNotices?.edges.reduce<UnmarkedWinterStorageNotice[]>((acc, edge) => {
      const {
        boatLength,
        boatModel,
        boatName,
        boatRegistrationNumber,
        boatType,
        boatWidth,
        createdAt,
        firstName,
        id,
        lastName,
        status,
        winterStorageAreaChoices,
        lease,
      } = (edge as UNMARKED_WINTER_STORAGE_NOTICES_EDGE).node as UNMARKED_WINTER_STORAGE_NOTICES_NODE;

      const applicationData: UnmarkedWinterStorageNotice = {
        boatLength: boatLength,
        boatModel: boatModel,
        boatName: boatName,
        boatRegistrationNumber: boatRegistrationNumber,
        boatType: data.boatTypes?.find(({ id }) => id === boatType)?.name,
        boatWidth: boatWidth,
        choice: getChoiceFromWinterStorageAreaChoices(winterStorageAreaChoices),
        createdAt: createdAt,
        firstName: firstName,
        id: id,
        lastName: lastName,
        status: status,
        leaseId: lease?.id,
        leaseStatus: lease?.status,
      };

      return [...acc, applicationData];
    }, []) ?? []
  );
};
