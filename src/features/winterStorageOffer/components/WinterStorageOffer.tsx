import React from 'react';
import { useTranslation } from 'react-i18next';
import PageTitle from '../../../common/pageTitle/PageTitle';
import WinterStorageAreaCard from '../../../common/winterStorageAreaCard/WinterStorageAreaCard';
import styles from '../../berthOffer/components/berthOffer.module.scss';
import BoatCard from '../../../common/boatCard/BoatCard';
import { NoBoatAlertNotification } from '../../berthOffer/components/notifications';
import { ApplicationStatus } from '../../../@types/__generated__/globalTypes';
import { Boat } from '../../../common/boatCard/types';
import { PlaceData, SectionTab } from '../types';
import PageContent from '../../../common/pageContent/PageContent';
import ConfirmationModal from '../../../common/confirmationModal/ConfirmationModal';
import WinterStorageOfferTable from './WinterStorageOfferTable';
import { WinterStorageArea } from '../../winterStorageAreaView/types';

export interface WinterStorageOfferProps {
  application?: {
    date: string;
    status: ApplicationStatus;
    type: string;
  } | null;
  area: WinterStorageArea;
  boat?: Boat;
  chosenPlace: PlaceData | null;
  confirmModalVisible: boolean;
  handleConfirm: (confirmed: boolean) => void;
  handleSelect: (place: PlaceData | null) => void;
  handleReturn: () => void;
  isSubmitting: boolean;
  sectionsIdentifiers: SectionTab[];
  setChosenPlace: (place: PlaceData | null) => void;
  tableData: PlaceData[];
}

const WinterStorageOffer = ({
  application,
  area,
  boat,
  confirmModalVisible,
  handleConfirm,
  handleSelect,
  handleReturn,
  isSubmitting,
  sectionsIdentifiers,
  tableData,
}: WinterStorageOfferProps) => {
  const { t } = useTranslation();

  return (
    <>
      <PageContent className={styles.offer}>
        <PageTitle title={t('common.terminology.offer')} />

        {area && <WinterStorageAreaCard className={styles.card} {...area} />}

        {boat ? <BoatCard boat={boat} /> : <NoBoatAlertNotification className={styles.card} />}

        <WinterStorageOfferTable
          application={application}
          boat={boat}
          handleReturn={handleReturn}
          handleSelect={handleSelect}
          isSubmitting={isSubmitting}
          sectionsIdentifiers={sectionsIdentifiers}
          tableData={tableData}
        />
      </PageContent>

      <ConfirmationModal
        isOpen={confirmModalVisible}
        title={t('offer.confirmation.title')}
        infoText={t('offer.confirmation.info')}
        confirmButtonVariant="primary"
        onCancelText={t('common.cancel')}
        onCancel={() => handleConfirm(false)}
        onConfirmText={t('common.yes')}
        onConfirm={() => handleConfirm(true)}
      />
    </>
  );
};

export default WinterStorageOffer;
