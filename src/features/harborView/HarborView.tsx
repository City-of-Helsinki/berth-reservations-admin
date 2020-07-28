import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './harborView.module.scss';
import PageTitle from '../../common/pageTitle/PageTitle';
import PageContent from '../../common/pageContent/PageContent';
import HarborCard from '../../common/harborCard/HarborCard';
import ContactInformationCard from '../../common/contactInformationCard/ContactInformationCard';
import ActionHistoryCard from '../../common/actionHistoryCard/ActionHistoryCard';
import HarborViewTable from './HarborViewTable';
import { BerthNode, HarborProperties } from '../../generated/types.d';
import { edgesToArr, propertiesArr } from '../../generated/utils';

export type HarborViewProps = {
  harbor: HarborProperties;
  setBerthToEdit: (berthToEdit: string | null) => void;
  setCreatingBerth: (creatingBerth: boolean) => void;
  setCreatingPier: (creatingPier: boolean) => void;
  setEditingHarbor: (editingHarbor: boolean) => void;
  setPierToEdit: (pierToEdit: string | null) => void;
};

const HarborView = ({
  harbor,
  setBerthToEdit,
  setCreatingBerth,
  setCreatingPier,
  setEditingHarbor,
  setPierToEdit,
}: HarborViewProps) => {
  const { t } = useTranslation();

  const piers = propertiesArr(edgesToArr(harbor.piers));
  const berths = piers.reduce<BerthNode[]>((acc, pierProperties) => {
    return [...acc, ...edgesToArr(pierProperties.berths)];
  }, []);

  return (
    <PageContent className={styles.harborView}>
      <PageTitle title={t('harborView.title')} />
      <div className={styles.grid}>
        <HarborCard className={styles.fullWidth} editHarbor={() => setEditingHarbor(true)} {...harbor} />
        <ContactInformationCard
          name={harbor.name}
          streetAddress={harbor.streetAddress}
          municipality={harbor.municipality}
          zipCode={harbor.zipCode}
        />
        <ActionHistoryCard />
      </div>

      <HarborViewTable
        berths={berths}
        piers={piers}
        onAddPier={() => setCreatingPier(true)}
        onAddBerth={() => setCreatingBerth(true)}
        onEditBerth={(berth) => setBerthToEdit(berth.id)}
        onEditPier={(pier) => setPierToEdit(pier.identifier)}
      />
    </PageContent>
  );
};

export default HarborView;
