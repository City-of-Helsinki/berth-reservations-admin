import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  CREATE_LEASE_HARBORS,
  CREATE_LEASE_HARBORSVariables as CREATE_LEASE_HARBORS_VARS,
} from './__generated__/CREATE_LEASE_HARBORS';
import { CREATE_LEASE_HARBORS_QUERY } from './queries';
import { getBoatsOptions, getHarborOptions } from './utils';
import Modal from '../../../common/modal/Modal';
import LoadingSpinner from '../../../common/spinner/LoadingSpinner';
import styles from './createLeaseModal.module.scss';
import FormHeader from '../../../common/formHeader/FormHeader';
import Button from '../../../common/button/Button';
import Select from '../../../common/select/Select';

export interface CreateLeaseModalProps {
  customerId: string;
  isOpen: boolean;
  closeModal(): void;
}

const CreateLeaseModal = ({ customerId, isOpen, closeModal }: CreateLeaseModalProps) => {
  const { t } = useTranslation();
  const history = useHistory();
  const { loading, data } = useQuery<CREATE_LEASE_HARBORS, CREATE_LEASE_HARBORS_VARS>(CREATE_LEASE_HARBORS_QUERY, {
    fetchPolicy: 'no-cache',
    variables: { customerId },
  });
  const [selectedHarbor, setSelectedHarbor] = useState<string | null>(null);
  const [selectedBoat, setSelectedBoat] = useState<string | null>(null);

  const harborOptions = getHarborOptions(data);
  const customerBoats = getBoatsOptions(data);
  const openOfferForm = () =>
    history.push(
      `/berth-offer-without-application?customer=${customerId}&harbor=${selectedHarbor}&boat=${selectedBoat}`
    );

  return (
    <Modal isOpen={isOpen} toggleModal={closeModal}>
      <div className={styles.createLeaseModal}>
        <FormHeader title={t('customerView.createLease.title')} upperCase />

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className={styles.body}>
            <Select
              className={styles.select}
              options={harborOptions}
              value={selectedHarbor}
              visibleOptions={3}
              label={t('customerView.createLease.selectHarbor')}
              onChange={(e) => setSelectedHarbor(e.target.value)}
            />
            <Select
              className={styles.select}
              options={customerBoats}
              value={selectedBoat}
              visibleOptions={3}
              label={t('customerView.createLease.selectBoat')}
              onChange={(e) => setSelectedBoat(e.target.value)}
            />
          </div>
        )}

        <div className={styles.buttons}>
          <Button variant="secondary" onClick={closeModal}>
            {t('common.cancel')}
          </Button>
          <Button disabled={!selectedHarbor || !selectedBoat} onClick={openOfferForm}>
            {t('common.continue')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateLeaseModal;
