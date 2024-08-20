import React from 'react';
import { useTranslation } from 'react-i18next';
import PageContent from '../../common/pageContent/PageContent';
import PageTitle from '../../common/pageTitle/PageTitle';
import styles from './winterStorageAreaView.module.scss';
import WinterStorageAreaCard from '../../common/winterStorageAreaCard/WinterStorageAreaCard';
import ContactInformationCard from '../../common/contactInformationCard/ContactInformationCard';
import ActionHistoryCard from '../../common/actionHistoryCard/ActionHistoryCard';
import WinterStoragePlaceTable from './WinterStoragePlaceTable';
import { MarkedWinterStorage, UnmarkedWinterStorage, WinterStorageArea } from './types';
import UnmarkedWinterStorageLeaseTable from './UnmarkedWinterStorageLeaseTable';

interface WinterStorageAreaViewPageProps {
  winterStorageArea: WinterStorageArea;
  markedWinterStorage?: MarkedWinterStorage;
  unmarkedWinterStorage?: UnmarkedWinterStorage;
  setEditingWinterStorageArea: (editingWinterStorageArea: boolean) => void;
  setSectionToEdit: (sectionToEdit: string | null) => void;
  setCreatingSection: (creatingSection: boolean) => void;
  setCreatingPlace: (creatingPlace: boolean) => void;
  setPlaceToEdit: (placeToEdit: string | null) => void;
}

const WinterStorageAreaView = ({
  winterStorageArea,
  markedWinterStorage,
  unmarkedWinterStorage,
  setEditingWinterStorageArea,
  setCreatingSection,
  setSectionToEdit,
  setCreatingPlace,
  setPlaceToEdit,
}: WinterStorageAreaViewPageProps) => {
  const { t } = useTranslation();

  return (
    <PageContent>
      <PageTitle title={t('winterStorageAreaView.title')} />
      <div className={styles.grid}>
        <WinterStorageAreaCard
          {...winterStorageArea}
          className={styles.fullWidth}
          editWinterStorageArea={() => setEditingWinterStorageArea(true)}
        />
        <ContactInformationCard />
        <ActionHistoryCard />
        {markedWinterStorage && (
          <WinterStoragePlaceTable
            {...markedWinterStorage}
            className={styles.fullWidth}
            onAddSection={() => setCreatingSection(true)}
            onAddPlace={() => setCreatingPlace(true)}
            onEditSection={(section) => setSectionToEdit(section.id)}
            onEditPlace={(place) => setPlaceToEdit(place.id)}
          />
        )}
        {unmarkedWinterStorage && (
          <UnmarkedWinterStorageLeaseTable {...unmarkedWinterStorage} className={styles.fullWidth} />
        )}
      </div>
    </PageContent>
  );
};

export default WinterStorageAreaView;
