import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../../common/section/Section';
import LabelValuePair from '../../common/labelValuePair/LabelValuePair';
import { ContractStatus } from '../../@types/__generated__/globalTypes';
import { formatDate } from '../../common/utils/format';
import ExternalLink from '../../common/externalLink/ExternalLink';

interface ContractDetailsProps {
  createdAt: string;
  modifiedAt: string;
  status: ContractStatus | null;
  documentId: string;
}

const ContractDetails = ({ createdAt, modifiedAt, status, documentId }: ContractDetailsProps) => {
  const { t, i18n } = useTranslation();

  return (
    <Section title={t('unmarkedWsNotices.noticeDetails.contractDetails.title')}>
      <LabelValuePair
        label={t('unmarkedWsNotices.noticeDetails.contractDetails.createdAt')}
        value={formatDate(createdAt, i18n.language)}
      />
      <LabelValuePair
        label={t('unmarkedWsNotices.noticeDetails.contractDetails.modifiedAt')}
        value={formatDate(modifiedAt, i18n.language)}
      />
      <LabelValuePair
        label={t('unmarkedWsNotices.noticeDetails.contractDetails.status')}
        value={
          status === ContractStatus.SIGNED
            ? t('unmarkedWsNotices.noticeDetails.contractDetails.signed')
            : t('unmarkedWsNotices.noticeDetails.contractDetails.unsigned')
        }
      />
      <ExternalLink href={`${process.env.REACT_APP_BERTH_API_URL}contract_document/${documentId}`}>
        <span>{t('unmarkedWsNotices.noticeDetails.contractDetails.document')}</span>
      </ExternalLink>
    </Section>
  );
};

export default ContractDetails;
