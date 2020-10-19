import React from 'react';
import { useTranslation } from 'react-i18next';

import Section from '../../../section/Section';
import LabelValuePair from '../../../labelValuePair/LabelValuePair';
import { formatDate } from '../../../utils/format';
import { APPLICATION_STATUS } from '../../../utils/consonants';
import { UnmarkedWsNoticeDetailsProps } from '../../UnmarkedWsNoticeDetails';

type NoticeDetailsProps = Pick<UnmarkedWsNoticeDetailsProps, 'choice' | 'createdAt' | 'status'>;

const NoticeDetails = ({ choice, createdAt, status }: NoticeDetailsProps) => {
  const { t, i18n } = useTranslation();

  return (
    <Section title={t('unmarkedWsNotices.noticeDetails.notice').toUpperCase()}>
      <LabelValuePair label={t('unmarkedWsNotices.noticeDetails.area')} value={choice.winterStorageAreaName} />
      <LabelValuePair
        label={t('applicationList.applicationDetails.receivedDate')}
        value={formatDate(createdAt, i18n.language, true)}
      />
      <LabelValuePair
        label={t('applicationList.applicationDetails.status')}
        value={t(APPLICATION_STATUS[status]?.label)}
      />
    </Section>
  );
};

export default NoticeDetails;
