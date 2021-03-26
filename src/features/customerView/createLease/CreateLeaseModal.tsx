import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { CREATE_LEASE_HARBORS } from './__generated__/CREATE_LEASE_HARBORS';
import { CREATE_LEASE_HARBORS_QUERY } from './queries';
import { getHarborOptions } from './utils';
import Modal from '../../../common/modal/Modal';
import LoadingSpinner from '../../../common/spinner/LoadingSpinner';
import styles from './createLeaseModal.module.scss';
import FormHeader from '../../../common/formHeader/FormHeader';
import Button from '../../../common/button/Button';
import RadioButton from '../../../common/radioButton/RadioButton';

export interface CreateLeaseModalProps {
  customerId: string;
  isOpen: boolean;
  closeModal(): void;
}

const CreateLeaseModal = ({ customerId, isOpen, closeModal }: CreateLeaseModalProps) => {
  const { t } = useTranslation();
  const history = useHistory();
  const { loading, data } = useQuery<CREATE_LEASE_HARBORS>(CREATE_LEASE_HARBORS_QUERY);
  const [selectedHarbor, setSelectedHarbor] = useState<string | null>(null);

  const harborOptions = getHarborOptions(data);
  const openOfferForm = () => history.push(`/offer?customer=${customerId}&harbor=${selectedHarbor}`);

  return (
    <Modal isOpen={isOpen} toggleModal={closeModal}>
      <div className={styles.createLeaseModal}>
        <FormHeader title={t('customerView.createLease.title')} upperCase />

        <p>{t('customerView.createLease.selectHarbor')}</p>
        {loading ? (
          <LoadingSpinner isLoading />
        ) : (
          <div className={styles.harborOptions}>
            {harborOptions.map((option) => (
              <RadioButton
                id={option.value}
                key={option.value}
                checked={option.value === selectedHarbor}
                value={option.value}
                label={option.label}
                onChange={(e) => setSelectedHarbor(e.target.value)}
              />
            ))}
          </div>
        )}

        <Button disabled={!selectedHarbor} onClick={openOfferForm}>
          {t('common.continue')}
        </Button>
      </div>
    </Modal>
  );
};

export default CreateLeaseModal;
