import React from 'react';
import { useTranslation } from 'react-i18next';

import Section from '../section/Section';
import LabelValuePair from '../labelValuePair/LabelValuePair';
import Text from '../text/Text';
import { formatDimension, formatWeight, formatDate } from '../utils/format';
import { APPLICATION_STATUS } from '../utils/consonants';
import { ApplicationStatus } from '../../@types/__generated__/globalTypes';
import PrivateCustomerDetails, { PrivateCustomerDetailsProps } from '../privateCustomerDetails/PrivateCustomerDetails';
import OrganizationCustomerDetails, {
  OrganizationCustomerDetailsProps,
} from '../organizationCustomerDetails/OrganizationCustomerDetails';

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
  status: ApplicationStatus;
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
}: UnmarkedWsNoticeDetailsProps) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div>
        <Section title={t('unmarkedWsNotices.noticeDetails.notice').toUpperCase()}>
          <LabelValuePair label={'Alue'} value={choice.winterStorageAreaName} />
          <LabelValuePair
            label={t('applicationList.applicationDetails.receivedDate')}
            value={formatDate(createdAt, i18n.language, true)}
          />
          <LabelValuePair
            label={t('applicationList.applicationDetails.status')}
            value={t(APPLICATION_STATUS[status]?.label)}
          />
        </Section>
        {applicant &&
          ('organization' in applicant ? (
            <OrganizationCustomerDetails
              {...applicant}
              title={t('unmarkedWsNotices.noticeDetails.ownerInformation').toUpperCase()}
            />
          ) : (
            <PrivateCustomerDetails
              {...applicant}
              title={t('unmarkedWsNotices.noticeDetails.ownerInformation').toUpperCase()}
            />
          ))}
      </div>
      <div>
        <Section title={t('applicationList.applicationDetails.boatInfo')}>
          <LabelValuePair label={t('applicationList.applicationDetails.boatType')} value={boatType} />
          <LabelValuePair
            label={t('applicationList.applicationDetails.registrationNumber')}
            value={boatRegistrationNumber}
          />
        </Section>
        <Section>
          <LabelValuePair
            label={t('applicationList.applicationDetails.boatWidth')}
            value={formatDimension(boatWidth, i18n.language)}
          />
          <LabelValuePair
            label={t('applicationList.applicationDetails.boatLength')}
            value={formatDimension(boatLength, i18n.language)}
          />
          <LabelValuePair
            label={t('applicationList.applicationDetails.boatDepth')}
            value={formatDimension(boatDraught, i18n.language)}
          />
          <LabelValuePair
            label={t('applicationList.applicationDetails.boatWeight')}
            value={formatWeight(boatWeight, i18n.language)}
          />
        </Section>
        <Section>
          <LabelValuePair label={t('applicationList.applicationDetails.boatName')} value={boatName} />
          <LabelValuePair label={t('applicationList.applicationDetails.boatBrand')} value={boatModel} />
        </Section>
        {summaryInformation && Object.values(summaryInformation).some((value) => value) && (
          <Section title={t('applicationList.applicationDetails.winterStorageApplicationSummary')}>
            {summaryInformation.acceptBoatingNewsletter && (
              <div>
                <Text>{t('applicationList.applicationDetails.acceptBoatingNewsletter')}</Text>
              </div>
            )}
            {summaryInformation.acceptFitnessNews && (
              <div>
                <Text>{t('applicationList.applicationDetails.acceptFitnessNews')}</Text>
              </div>
            )}
            {summaryInformation.acceptLibraryNews && (
              <div>
                <Text>{t('applicationList.applicationDetails.acceptLibraryNews')}</Text>
              </div>
            )}
            {summaryInformation.acceptOtherCultureNews && (
              <div>
                <Text>{t('applicationList.applicationDetails.acceptOtherCultureNews')}</Text>
              </div>
            )}
          </Section>
        )}
      </div>
    </>
  );
};

export default UnmarkedWsNoticeDetails;
