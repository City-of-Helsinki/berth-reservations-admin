import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';

import {
  CREATE_WINTER_STORAGE_LEASE_MODAL,
  CREATE_WINTER_STORAGE_LEASE_MODALVariables as CREATE_WINTER_STORAGE_LEASE_MODAL_VARS,
} from './__generated__/CREATE_WINTER_STORAGE_LEASE_MODAL';
import LoadingSpinner from '../../../common/spinner/LoadingSpinner';
import Select from '../../../common/select/Select';
import { CREATE_WINTER_STORAGE_LEASE_MODAL_QUERY } from './queries';
import { getBoatsOptions, getAreaOptions } from './utils';
import styles from './createLeaseModal.module.scss';
import CreateLeaseModal from './CreateLeaseModal';

type CreateWinterStorageLeaseIntentionDetails = {
  areaId: string | null;
  boatId: string | null;
};

export interface CreateLeaseModalProps {
  customerId: string;
  isOpen: boolean;
  title: string;
  closeModal(): void;
  onContinue(data: CreateWinterStorageLeaseIntentionDetails): void;
}

const CreateWinterStorageLeaseModal = ({
  customerId,
  isOpen,
  closeModal: onClose,
  title,
  onContinue,
}: CreateLeaseModalProps) => {
  const { t } = useTranslation();
  const { loading, data } = useWinterStorageAreas({ customerId });
  const [areaId, setAreaId] = useState<string>('');
  const [boatId, setBoatId] = useState<string>('');

  const harborOptions = getAreaOptions(data);
  const customerBoats = getBoatsOptions(data);

  const handleOnContinue = () => {
    onContinue({
      areaId,
      boatId,
    });
  };

  return (
    <CreateLeaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      onContinue={handleOnContinue}
      isReadyToContinue={Boolean(areaId && boatId)}
    >
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className={styles.body}>
          <Select
            className={styles.select}
            options={harborOptions}
            visibleOptions={3}
            label={t('customerView.selectArea')}
            onChange={(e) => setAreaId(e.target.value || '')}
            value={areaId}
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

type UseWinterStorageAreasConfig = {
  customerId: string;
};

function useWinterStorageAreas({ customerId }: UseWinterStorageAreasConfig) {
  return useQuery<CREATE_WINTER_STORAGE_LEASE_MODAL, CREATE_WINTER_STORAGE_LEASE_MODAL_VARS>(
    CREATE_WINTER_STORAGE_LEASE_MODAL_QUERY,
    {
      fetchPolicy: 'no-cache',
      variables: { customerId },
    }
  );
}

export default CreateWinterStorageLeaseModal;
