import React from 'react';
import { useTranslation } from 'react-i18next';

import GlobalSearchTableTools from '../../../common/tableTools/globalSearchTableTools/GlobalSearchTableTools';
import styles from './winterStoragePlaceTableTools.module.scss';
import Button from '../../../common/button/Button';

interface Props {
  canAddPlace: boolean;
  onAddSection(): void;
  onAddPlace(): void;
  handleGlobalFilter(value?: string): void;
}

const WinterStoragePlaceTableTools = ({ onAddSection, onAddPlace, handleGlobalFilter, canAddPlace }: Props) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <Button onClick={onAddSection} variant="secondary" className={styles.button}>
          {t('winterStorageAreaView.tableTools.addSection')}
        </Button>
        <Button onClick={onAddPlace} variant="secondary" className={styles.button} disabled={!canAddPlace}>
          {t('winterStorageAreaView.tableTools.addPlace')}
        </Button>
      </div>
      <GlobalSearchTableTools handleGlobalFilter={handleGlobalFilter} />
    </div>
  );
};

export default WinterStoragePlaceTableTools;
