import React from 'react';
import { useTranslation } from 'react-i18next';
import OrganizationCustomerDetails from '../../../../common/organizationCustomerDetails/OrganizationCustomerDetails';
import PrivateCustomerDetails from '../../../../common/privateCustomerDetails/PrivateCustomerDetails';
import { UnmarkedWsNoticeDetailsProps } from '../../UnmarkedWsNoticeDetails';

type ApplicantDetailsProps = Pick<UnmarkedWsNoticeDetailsProps, 'applicant'>;

const ApplicantDetails = ({ applicant }: ApplicantDetailsProps) => {
  const { t } = useTranslation();

  if (!applicant) {
    return null;
  }

  return 'organization' in applicant ? (
    <OrganizationCustomerDetails
      {...applicant}
      title={t('unmarkedWsNotices.noticeDetails.ownerInformation').toUpperCase()}
    />
  ) : (
    <PrivateCustomerDetails
      {...applicant}
      title={t('unmarkedWsNotices.noticeDetails.ownerInformation').toUpperCase()}
    />
  );
};

export default ApplicantDetails;
