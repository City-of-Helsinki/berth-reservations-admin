import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/react-hooks';

import Modal from '../../../../common/modal/Modal';
import { SWITCH_PLACE_HARBORS } from './__generated__/SWITCH_PLACE_HARBORS';
import { SWITCH_PLACE_HARBORS_QUERY } from './queries';
import LoadingSpinner from '../../../../common/spinner/LoadingSpinner';
import Select from '../../../../common/select/Select';
import { getHarborOptions } from './utils';
import Button from '../../../../common/button/Button';
import styles from './switchPlaceModal.module.scss';

export interface SwitchPlaceModalProps {
  id: string;
  closeModal(): void;
}

const SwitchPlaceModal = ({ closeModal }: SwitchPlaceModalProps) => {
  const { t } = useTranslation();
  const { loading, data } = useQuery<SWITCH_PLACE_HARBORS>(SWITCH_PLACE_HARBORS_QUERY, {
    fetchPolicy: 'no-cache',
  });
  const [selectedHarbor, setSelectedHarbor] = useState<string | null>(null);

  const harborOptions = getHarborOptions(data);
  const openOfferForm = () => undefined;

  return (
    <Modal isOpen toggleModal={closeModal} label={t('customerView.leases.switchPlace.switchBerth').toUpperCase()}>
      <div className={styles.switchPlaceModal}>
        <p className={styles.instructions}>{t('customerView.leases.switchPlace.berthSwitchInstructions')}</p>

        {loading ? (
          <div className={styles.spinnerWrapper}>
            <LoadingSpinner isLoading />
          </div>
        ) : (
          <Select
            className={styles.select}
            options={harborOptions}
            value={selectedHarbor}
            visibleOptions={3}
            placeholder={t('customerView.leases.switchPlace.selectHarbor')}
            onChange={(e) => setSelectedHarbor(e.target.value)}
          />
        )}

        <div className={styles.buttons}>
          <Button variant="secondary" onClick={closeModal}>
            {t('common.cancel')}
          </Button>
          <Button disabled={!selectedHarbor} onClick={openOfferForm}>
            {t('customerView.leases.switchPlace.continueToBerthSelection')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SwitchPlaceModal;
