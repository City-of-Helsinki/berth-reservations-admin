import React, { useState } from 'react';

import SwitchPlaceModal from './SwitchPlaceModal';
import { canLeaseBeTerminated } from '../../utils';
import { LeaseStatus } from '../../../../@types/__generated__/globalTypes';
import SwitchPlaceButton from './SwitchPlaceButton';
import { Lease } from '../types';

export type SwitchPlaceProps = Pick<Lease, 'id' | 'type' | 'status'>;

const SwitchPlace = ({ id, type, status }: SwitchPlaceProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const canPlaceBeSwitched = (status: LeaseStatus) => canLeaseBeTerminated(status);

  // Not implemented for winter storage
  if (type === 'winterStorage') return null;
  return (
    <>
      {canPlaceBeSwitched(status) && <SwitchPlaceButton onClick={() => setModalVisible(true)} />}
      {modalVisible && <SwitchPlaceModal closeModal={() => setModalVisible(false)} id={id} />}
    </>
  );
};

export default SwitchPlace;
