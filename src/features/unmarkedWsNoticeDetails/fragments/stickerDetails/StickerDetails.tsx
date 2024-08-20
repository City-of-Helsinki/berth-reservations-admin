import { useTranslation } from 'react-i18next';
import React from 'react';
import LabelValuePair from '../../../../common/labelValuePair/LabelValuePair';
import Section from '../../../../common/section/Section';
import ButtonWithConfirmation from '../../../../common/buttonWithConfirmation/ButtonWithConfirmation';
import { formatDate, formatStickerNumber } from '../../../../common/utils/format';

interface StickerDetailsProps {
  stickerNumber: number | null;
  stickerSeason: string | null;
  stickerPosted: string | null;
  isAssigningNewStickerNumber?: boolean;
  handleAssignNewStickerNumber?(): void;
}

const StickerDetails = ({
  stickerNumber,
  stickerSeason,
  stickerPosted,
  isAssigningNewStickerNumber,
  handleAssignNewStickerNumber,
}: StickerDetailsProps) => {
  const { t, i18n } = useTranslation();

  return (
    <Section title={t('unmarkedWsNotices.noticeDetails.stickerDetails.title')}>
      <LabelValuePair
        label={t('unmarkedWsNotices.noticeDetails.stickerDetails.number')}
        value={formatStickerNumber(stickerNumber)}
      />
      <LabelValuePair label={t('unmarkedWsNotices.noticeDetails.stickerDetails.season')} value={stickerSeason} />
      <LabelValuePair
        label={t('unmarkedWsNotices.noticeDetails.stickerDetails.posted')}
        value={formatDate(stickerPosted, i18n.language)}
      />
      {handleAssignNewStickerNumber && (
        <ButtonWithConfirmation
          buttonText={t('unmarkedWsNotices.noticeDetails.stickerDetails.assign.buttonText')}
          modalTitle={t('unmarkedWsNotices.noticeDetails.stickerDetails.assign.modalTitle')}
          infoText={t('unmarkedWsNotices.noticeDetails.stickerDetails.assign.infoText')}
          onConfirmText={t('unmarkedWsNotices.noticeDetails.stickerDetails.assign.confirm')}
          onCancelText={t('common.cancel')}
          buttonStyle="flat"
          onConfirm={handleAssignNewStickerNumber}
          disabled={isAssigningNewStickerNumber}
        />
      )}
    </Section>
  );
};

export default StickerDetails;
