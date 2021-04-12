import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import SwitchPlaceModal from './SwitchPlaceModal';
import { LeaseStatus } from '../../../@types/__generated__/globalTypes';
import { Lease } from '../../customerView/leasesCard/types';
import Button from '../../../common/button/Button';

export type SwitchPlaceProps = Pick<Lease, 'id' | 'type' | 'status'>;

const SwitchPlaceControls = ({ id, type, status }: SwitchPlaceProps) => {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const canPlaceBeSwitched = (status: LeaseStatus) => status === LeaseStatus.PAID;

  if (type === 'winterStorage') return null; // Not implemented for winter storage
  return (
    <>
      {canPlaceBeSwitched(status) && (
        <Button onClick={() => setModalVisible(true)} size="small">
          {t('customerView.leases.switchPlace.switchBerth')}
        </Button>
      )}
      {modalVisible && <SwitchPlaceModal closeModal={() => setModalVisible(false)} leaseId={id} />}
    </>
  );
};

export default SwitchPlaceControls;
