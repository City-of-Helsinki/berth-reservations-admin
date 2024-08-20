import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';
import {
  CREATE_BERTH_LEASE_MODAL,
  CREATE_BERTH_LEASE_MODALVariables as CREATE_BERTH_LEASE_MODAL_VARS,
} from './__generated__/CREATE_BERTH_LEASE_MODAL';
import LoadingSpinner from '../../../common/spinner/LoadingSpinner';
import Select from '../../../common/select/Select';
import { CREATE_BERTH_LEASE_MODAL_QUERY } from './queries';
import { getBoatsOptions, getHarborOptions } from './utils';
import styles from './createLeaseModal.module.scss';
import CreateLeaseModal from './CreateLeaseModal';

type CreateBerthLeaseIntentionDetails = {
  harborId: string | null;
  boatId: string | null;
};

export interface CreateLeaseModalProps {
  customerId: string;
  isOpen: boolean;
  title: string;
  closeModal(): void;
  onContinue(data: CreateBerthLeaseIntentionDetails): void;
}

const CreateBerthLeaseModal = ({
  customerId,
  isOpen,
  closeModal: onClose,
  title,
  onContinue,
}: CreateLeaseModalProps) => {
  const { t } = useTranslation();
  const { loading, data } = useQuery<CREATE_BERTH_LEASE_MODAL, CREATE_BERTH_LEASE_MODAL_VARS>(
    CREATE_BERTH_LEASE_MODAL_QUERY,
    {
      fetchPolicy: 'no-cache',
      variables: { customerId },
    }
  );
  const [boatId, setBoatId] = useState<string>('');
  const [harborId, setHarborId] = useState<string>('');

  const harborOptions = getHarborOptions(data);
  const customerBoats = getBoatsOptions(data);

  const handleOnContinue = () => {
    onContinue({
      harborId,
      boatId,
    });
  };

  return (
    <CreateLeaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      onContinue={handleOnContinue}
      isReadyToContinue={Boolean(harborId && boatId)}
    >
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className={styles.body}>
          <Select
            className={styles.select}
            options={harborOptions}
            visibleOptions={3}
            label={t('customerView.selectHarbor')}
            onChange={(e) => setHarborId(e.target.value || '')}
            value={harborId}
            required
          />
          <Select
            className={styles.select}
            options={customerBoats}
            visibleOptions={3}
            label={t('customerView.selectBoat')}
            onChange={(e) => setBoatId(e.target.value || '')}
            value={boatId}
            required
          />
        </div>
      )}
    </CreateLeaseModal>
  );
};

export default CreateBerthLeaseModal;
