import { useTranslation } from 'react-i18next';
import React from 'react';

import LabelValuePair from '../../../labelValuePair/LabelValuePair';
import Section from '../../../section/Section';
import ButtonWithConfirmation, {
  ButtonWithConfirmationStyle,
} from '../../../buttonWithConfirmation/buttonWithConfirmation';
import { formatStickerNumber } from '../../../utils/format';

interface StickerDetailsProps {
  stickerNumber: number | null;
  stickerSeason: string | null;
  isAssigningNewStickerNumber?: boolean;
  handleAssignNewStickerNumber?(): void;
}

const StickerDetails = ({
  stickerNumber,
  stickerSeason,
  isAssigningNewStickerNumber,
  handleAssignNewStickerNumber,
}: StickerDetailsProps) => {
  const { t } = useTranslation();

  return (
    <Section title={t('unmarkedWsNotices.noticeDetails.stickerDetails.title')}>
      <LabelValuePair
        label={t('unmarkedWsNotices.noticeDetails.stickerDetails.number')}
        value={formatStickerNumber(stickerNumber)}
      />
      <LabelValuePair label={t('unmarkedWsNotices.noticeDetails.stickerDetails.season')} value={stickerSeason} />
      {handleAssignNewStickerNumber && (
        <ButtonWithConfirmation
          buttonText={t('unmarkedWsNotices.noticeDetails.stickerDetails.assign.buttonText')}
          modalTitle={t('unmarkedWsNotices.noticeDetails.stickerDetails.assign.modalTitle')}
          infoText={t('unmarkedWsNotices.noticeDetails.stickerDetails.assign.infoText')}
          onConfirmText={t('unmarkedWsNotices.noticeDetails.stickerDetails.assign.confirm')}
          onCancelText={t('common.cancel')}
          buttonStyle={ButtonWithConfirmationStyle.FLAT}
          onConfirm={handleAssignNewStickerNumber}
          disabled={isAssigningNewStickerNumber}
        />
      )}
    </Section>
  );
};

export default StickerDetails;
