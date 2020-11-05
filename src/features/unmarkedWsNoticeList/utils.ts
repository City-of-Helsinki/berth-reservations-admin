import { ApplicationStatus, LeaseStatus } from '../../@types/__generated__/globalTypes';
import { UNMARKED_WINTER_STORAGE_NOTICES } from './__generated__/UNMARKED_WINTER_STORAGE_NOTICES';
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
  email: string;
  id: string;
  lastName: string;
  status: ApplicationStatus;
  leaseStatus?: LeaseStatus;
  leaseId?: string;
  orderId: string | undefined;
};

export const getUnmarkedWinterStorageNotices = (
  data: UNMARKED_WINTER_STORAGE_NOTICES | undefined
): UnmarkedWinterStorageNotice[] => {
  return (
    data?.winterStorageNotices?.edges.reduce<UnmarkedWinterStorageNotice[]>((acc, edge) => {
      if (!edge?.node) return acc;

      const {
        boatLength,
        boatModel,
        boatName,
        boatRegistrationNumber,
        boatType,
        boatWidth,
        createdAt,
        firstName,
        email,
        id,
        lastName,
        status,
        winterStorageAreaChoices,
        lease,
      } = edge.node;

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
        email: email,
        id: id,
        lastName: lastName,
        status: status,
        leaseId: lease?.id,
        orderId: lease?.order?.id,
        leaseStatus: lease?.status,
      };

      return [...acc, applicationData];
    }, []) ?? []
  );
};

interface Offer {
  orderId: string;
  email: string;
}

export const getDraftedOffers = (applications: UnmarkedWinterStorageNotice[]) =>
  applications.reduce<Offer[]>((acc, application) => {
    if (application.status !== ApplicationStatus.OFFER_GENERATED || !application.orderId || !application.email)
      return acc;

    return [
      ...acc,
      {
        orderId: application.orderId,
        email: application.email,
      },
    ];
  }, []);
