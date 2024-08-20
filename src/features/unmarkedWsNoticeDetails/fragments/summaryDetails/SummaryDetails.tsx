import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../../../../common/section/Section';
import Text from '../../../../common/text/Text';
import { UnmarkedWsNoticeDetailsProps } from '../../UnmarkedWsNoticeDetails';

type SummaryDetailsProps = Pick<UnmarkedWsNoticeDetailsProps, 'summaryInformation'>;

const SummaryDetails = ({ summaryInformation }: SummaryDetailsProps) => {
  const { t } = useTranslation();

  if (!summaryInformation || !Object.values(summaryInformation).some((value) => value)) {
    return null;
  }

  return (
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
  );
};

export default SummaryDetails;
