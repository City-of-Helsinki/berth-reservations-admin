import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import BerthOfferTable from './BerthOfferTable';
import BoatCard from '../../../common/boatCard/BoatCard';
import ConfirmationModal from '../../../common/confirmationModal/ConfirmationModal';
import HarborCard, { HarborCardProps } from '../../../common/harborCard/HarborCard';
import PageContent from '../../../common/pageContent/PageContent';
import PageTitle from '../../../common/pageTitle/PageTitle';
import styles from './berthOffer.module.scss';
import { ApplicationStatus } from '../../../@types/__generated__/globalTypes';
import { BerthData, PierTab } from '../types';
import { Boat } from '../../../common/boatCard/types';
import { NoBoatAlertNotification } from './notifications';

interface BerthOfferProps {
  application?: {
    date: string;
    status: ApplicationStatus;
    type: string;
  } | null;
  boat?: Boat;
  handleClickSelect: (berth: BerthData) => void;
  handleReturn: () => void;
  harbor: HarborCardProps['harbor'] | null;
  isSubmitting: boolean;
  piersIdentifiers: PierTab[];
  tableData: BerthData[];
}

const BerthOffer = ({
  application,
  boat,
  handleClickSelect,
  handleReturn,
  harbor,
  isSubmitting,
  piersIdentifiers,
  tableData,
}: BerthOfferProps) => {
  const { t } = useTranslation();

  const [isBerthChosen, setIsBerthChosen] = useState<BerthData | null>(null);

  return (
    <>
      <PageContent className={styles.offer}>
        <PageTitle title={t('common.terminology.offer')} />

        {harbor && <HarborCard harbor={harbor} className={styles.card} />}

        {boat ? <BoatCard boat={boat} /> : <NoBoatAlertNotification className={styles.card} />}

        <BerthOfferTable
          application={application}
          boat={boat}
          handleClickSelect={handleClickSelect}
          handleReturn={handleReturn}
          isSubmitting={isSubmitting}
          piersIdentifiers={piersIdentifiers}
          setIsBerthChosen={setIsBerthChosen}
          tableData={tableData}
        />
      </PageContent>

      <ConfirmationModal
        isOpen={!!isBerthChosen}
        title={t('offer.confirmation.title')}
        infoText={t('offer.confirmation.info')}
        confirmButtonVariant="primary"
        onCancelText={t('common.cancel')}
        onCancel={() => setIsBerthChosen(null)}
        onConfirmText={t('common.yes')}
        onConfirm={() => {
          isBerthChosen && handleClickSelect(isBerthChosen);
          setIsBerthChosen(null);
        }}
      />
    </>
  );
};

export default BerthOffer;
