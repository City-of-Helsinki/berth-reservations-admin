import React from 'react';
import { useTranslation } from 'react-i18next';

import Section from '../../../../common/section/Section';
import LabelValuePair from '../../../../common/labelValuePair/LabelValuePair';
import { formatDate } from '../../../../common/utils/format';
import { APPLICATION_STATUS } from '../../../../common/utils/constants';
import { UnmarkedWsNoticeDetailsProps } from '../../UnmarkedWsNoticeDetails';

type NoticeDetailsProps = Pick<UnmarkedWsNoticeDetailsProps, 'applicationCode' | 'choice' | 'createdAt' | 'status'>;

const NoticeDetails = ({ applicationCode, choice, createdAt, status }: NoticeDetailsProps) => {
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
      <LabelValuePair label={t('applicationList.applicationDetails.applicationCode')} value={applicationCode} />
    </Section>
  );
};

export default NoticeDetails;
