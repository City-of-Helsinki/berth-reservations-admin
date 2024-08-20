import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import Modal from '../../../common/modal/Modal';
import LoadingSpinner from '../../../common/spinner/LoadingSpinner';
import Select from '../../../common/select/Select';
import Button from '../../../common/button/Button';
import styles from './switchBerthModal.module.scss';
import { getHarborOptions } from './utils';
import { SWITCH_BERTH_HARBORS_QUERY } from './queries';
import { SWITCH_BERTH_HARBORS } from './__generated__/SWITCH_BERTH_HARBORS';

export interface SwitchBerthModalProps {
  leaseId: string;
  closeModal(): void;
}

const SwitchBerthModal = ({ closeModal, leaseId }: SwitchBerthModalProps) => {
  const { t } = useTranslation();
  const history = useHistory();
  const { loading, data } = useQuery<SWITCH_BERTH_HARBORS>(SWITCH_BERTH_HARBORS_QUERY);
  const [selectedHarbor, setSelectedHarbor] = useState<string | null>(null);

  const harborOptions = getHarborOptions(data);
  const openOfferForm = () => history.push(`/switch-berth?lease=${leaseId}&harbor=${selectedHarbor}`);

  return (
    <Modal
      className={styles.switchBerthModal}
      isOpen
      toggleModal={closeModal}
      label={t('customerView.switchBerth.title').toUpperCase()}
    >
      <div className={styles.content}>
        <p className={styles.instructions}>{t('customerView.switchBerth.instructions')}</p>

        {loading ? (
          <div className={styles.spinnerWrapper}>
            <LoadingSpinner />
          </div>
        ) : (
          <Select
            className={styles.select}
            options={harborOptions}
            value={selectedHarbor}
            visibleOptions={3}
            placeholder={t('customerView.switchBerth.selectHarbor')}
            onChange={(e) => setSelectedHarbor(e.target.value)}
          />
        )}

        <div className={styles.buttons}>
          <Button variant="secondary" onClick={closeModal}>
            {t('common.cancel')}
          </Button>
          <Button disabled={!selectedHarbor} onClick={openOfferForm}>
            {t('customerView.switchBerth.proceed')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SwitchBerthModal;
