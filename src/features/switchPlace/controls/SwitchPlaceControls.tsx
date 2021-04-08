import React, { useState } from 'react';

import SwitchPlaceModal from './SwitchPlaceModal';
import { LeaseStatus } from '../../../@types/__generated__/globalTypes';
import SwitchPlaceButton from './SwitchPlaceButton';
import { Lease } from '../../customerView/leasesCard/types';

export type SwitchPlaceProps = Pick<Lease, 'id' | 'type' | 'status'>;

const SwitchPlaceControls = ({ id, type, status }: SwitchPlaceProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const canPlaceBeSwitched = (status: LeaseStatus) => status === LeaseStatus.PAID;

  if (type === 'winterStorage') return null; // Not implemented for winter storage
  return (
    <>
      {canPlaceBeSwitched(status) && <SwitchPlaceButton onClick={() => setModalVisible(true)} />}
      {modalVisible && <SwitchPlaceModal closeModal={() => setModalVisible(false)} leaseId={id} />}
    </>
  );
};

export default SwitchPlaceControls;
