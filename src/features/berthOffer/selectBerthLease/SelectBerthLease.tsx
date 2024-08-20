import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/react-hooks';
import Modal from '../../../common/modal/Modal';
import Select from '../../../common/select/Select';
import { SELECT_BERTH_LEASE_QUERY } from './queries';
import {
  SELECT_BERTH_LEASE,
  SELECT_BERTH_LEASEVariables as SELECT_BERTH_LEASE_VARS,
} from './__generated__/SELECT_BERTH_LEASE';
import { getBerthLeases } from './utils';
import Button from '../../../common/button/Button';
import styles from './selectBerthLease.module.scss';
import hdsToast from '../../../common/toast/hdsToast';

export interface SelectLeaseProps {
  customerId: string;
  isSubmitting: boolean;
  confirm(oldLeaseId: string): void;
  closeModal(): void;
}

const SelectBerthLease = ({ customerId, confirm, closeModal, isSubmitting }: SelectLeaseProps) => {
  const { t } = useTranslation();
  const [selectedBerthLease, setSelectedBerthLease] = useState<string | null>(null);

  const { data, loading } = useQuery<SELECT_BERTH_LEASE, SELECT_BERTH_LEASE_VARS>(SELECT_BERTH_LEASE_QUERY, {
    variables: { customerId },
  });
  const berthLeases = getBerthLeases(data);

  if (!loading && berthLeases.length === 0) {
    hdsToast({
      type: 'error',
      autoDismiss: false,
      labelText: t('common.notification.error.label'),
      text: t('offer.selectBerthLease.errorMessage'),
    });
  }

  const onConfirm = () => {
    selectedBerthLease && confirm(selectedBerthLease);
    closeModal();
  };

  return (
    <Modal isOpen label={t('offer.selectBerthLease.title')}>
      <div>
        <p>{t('offer.selectBerthLease.message')}</p>

        <Select
          className={styles.control}
          label={t('common.terminology.berths')}
          required
          onChange={(e) => setSelectedBerthLease(e.target.value)}
          options={berthLeases.map((lease) => ({
            label: lease.name,
            value: lease.id,
          }))}
          value={selectedBerthLease}
        />

        <div className={styles.buttons}>
          <Button onClick={() => closeModal()} variant={'secondary'}>
            {t('common.cancel')}
          </Button>
          <Button disabled={!selectedBerthLease || isSubmitting} onClick={() => onConfirm()}>
            {t('common.save')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SelectBerthLease;
