import React from 'react';

import { ApplicationStatus, LeaseStatus } from '../../@types/__generated__/globalTypes';
import { PrivateCustomerDetailsProps } from '../../common/privateCustomerDetails/PrivateCustomerDetails';
import { OrganizationCustomerDetailsProps } from '../../common/organizationCustomerDetails/OrganizationCustomerDetails';
import NoticeDetails from './fragments/noticeDetails/NoticeDetails';
import ApplicantDetails from './fragments/applicantDetails/ApplicantDetails';
import BoatDetails from './fragments/boatDetails/BoatDetails';
import SummaryDetails from './fragments/summaryDetails/SummaryDetails';
import StickerDetails from './fragments/stickerDetails/StickerDetailsContainer';

interface SummaryInformation {
  acceptBoatingNewsletter: boolean;
  acceptFitnessNews: boolean;
  acceptLibraryNews: boolean;
  acceptOtherCultureNews: boolean;
}

export interface UnmarkedWsNoticeDetailsProps {
  accessibilityRequired?: boolean;
  applicant?: PrivateCustomerDetailsProps | OrganizationCustomerDetailsProps;
  boatDraught?: number | null;
  boatLength: number;
  boatModel: string;
  boatName: string;
  boatRegistrationNumber: string;
  boatType?: string | null;
  boatWeight?: number | null;
  boatWidth: number;
  createdAt: string;
  customerId?: string;
  handleDeleteLease?: (id: string) => void;
  choice: {
    winterStorageAreaName: string;
    winterStorageArea: string;
  };
  id: string;
  leaseId?: string;
  status: ApplicationStatus;
  leaseStatus?: LeaseStatus;
  summaryInformation?: SummaryInformation;
}

const UnmarkedWsNoticeDetails = ({
  applicant,
  createdAt,
  status,
  boatType,
  boatRegistrationNumber,
  boatWidth,
  boatLength,
  boatDraught,
  boatWeight,
  boatName,
  boatModel,
  choice,
  summaryInformation,
  leaseStatus,
  leaseId,
}: UnmarkedWsNoticeDetailsProps) => {
  return (
    <>
      <div>
        <NoticeDetails createdAt={createdAt} choice={choice} status={status} />
        <ApplicantDetails applicant={applicant} />
      </div>
      <div>
        <BoatDetails
          boatType={boatType}
          boatRegistrationNumber={boatRegistrationNumber}
          boatWidth={boatWidth}
          boatLength={boatLength}
          boatDraught={boatDraught}
          boatWeight={boatWeight}
          boatName={boatName}
          boatModel={boatModel}
        />
        <SummaryDetails summaryInformation={summaryInformation} />
      </div>
      {leaseId && leaseStatus && <StickerDetails leaseId={leaseId} leaseStatus={leaseStatus} />}
    </>
  );
};

export default UnmarkedWsNoticeDetails;