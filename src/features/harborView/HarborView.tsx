import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './harborView.module.scss';
import PageTitle from '../../common/pageTitle/PageTitle';
import PageContent from '../../common/pageContent/PageContent';
import HarborCard from '../../common/harborCard/HarborCard';
import ContactInformationCard from '../../common/contactInformationCard/ContactInformationCard';
import ActionHistoryCard from '../../common/actionHistoryCard/ActionHistoryCard';
import HarborViewTable from './HarborViewTable';
import { Berth, IndividualHarborData, Pier } from './types';

export type HarborViewProps = {
  berths: Berth[];
  harbor: IndividualHarborData;
  piers: Pier[];
  setBerthToEdit: (berthToEdit: string | null) => void;
  setCreatingBerth: (creatingBerth: boolean) => void;
  setCreatingPier: (creatingPier: boolean) => void;
  setEditingHarbor: (editingHarbor: boolean) => void;
  setPierToEdit: (pierToEdit: string | null) => void;
  setFilterByActiveBerths: (filterByActiveBerths: boolean | null) => void;
  filterByActiveBerths: boolean | null;
};

const HarborView = ({
  berths,
  harbor,
  piers,
  setBerthToEdit,
  setCreatingBerth,
  setCreatingPier,
  setEditingHarbor,
  setPierToEdit,
  setFilterByActiveBerths,
  filterByActiveBerths,
}: HarborViewProps) => {
  const { t } = useTranslation();

  return (
    <PageContent className={styles.harborView}>
      <PageTitle title={t('harborView.title')} />
      <div className={styles.grid}>
        <HarborCard
          className={styles.fullWidth}
          harbor={{
            name: harbor.name || '',
            imageUrl: harbor.imageFile,
            servicemapId: harbor.servicemapId || '',
            streetAddress: harbor.streetAddress,
            zipCode: harbor.zipCode,
            municipality: harbor.municipality,
            properties: {
              electricity: harbor.electricity,
              gate: harbor.gate,
              lighting: harbor.lighting,
              maxWidth: harbor.maxWidth || 0,
              numberOfPlaces: harbor.numberOfPlaces || 0,
              numberOfFreePlaces: harbor.numberOfFreePlaces || 0,
              queue: harbor.numberOfPlacesInQueue || 0,
              wasteCollection: harbor.wasteCollection,
              water: harbor.water,
            },
          }}
          editHarbor={() => setEditingHarbor(true)}
        />
        <ContactInformationCard />
        <ActionHistoryCard />
      </div>

      <HarborViewTable
        berths={berths}
        piers={piers}
        onAddPier={() => setCreatingPier(true)}
        onAddBerth={() => setCreatingBerth(true)}
        onEditBerth={(berth) => setBerthToEdit(berth.id)}
        onEditPier={(pier) => setPierToEdit(pier.id)}
        setFilterByActiveBerths={setFilterByActiveBerths}
        filterByActiveBerths={filterByActiveBerths}
      />
    </PageContent>
  );
};

export default HarborView;
