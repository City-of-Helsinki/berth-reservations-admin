import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import SwitchBerthModal from './SwitchBerthModal';
import { LeaseStatus } from '../../../@types/__generated__/globalTypes';
import { Lease } from '../leasesCard/types';
import Button from '../../../common/button/Button';

export type SwitchBerthProps = Pick<Lease, 'id' | 'type' | 'status'>;

const SwitchBerth = ({ id, type, status }: SwitchBerthProps) => {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const canPlaceBeSwitched = (status: LeaseStatus) => status === LeaseStatus.PAID;

  if (type === 'winterStorage') return null; // Not implemented for winter storage
  return (
    <>
      {canPlaceBeSwitched(status) && (
        <Button onClick={() => setModalVisible(true)} size="small">
          {t('customerView.switchBerth.title')}
        </Button>
      )}
      {modalVisible && <SwitchBerthModal closeModal={() => setModalVisible(false)} leaseId={id} />}
    </>
  );
};

export default SwitchBerth;
