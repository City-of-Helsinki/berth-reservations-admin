import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/react-hooks';

import { INDIVIDUAL_WINTER_STORAGE_AREA } from './__generated__/INDIVIDUAL_WINTER_STORAGE_AREA';
import { getIndividualWinterStorageArea, getMarkedWinterStorage, getUnmarkedWinterStorage } from './utils';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import WinterStorageAreaView from './WinterStorageAreaView';
import { INDIVIDUAL_WINTER_STORAGE_AREA_QUERY } from './queries';
import Modal from '../../common/modal/Modal';
import WinterStorageAreaEditForm from './forms/WinterStorageAreaEditForm';

const WinterStorageAreaViewContainer = () => {
  const { id } = useParams<{ id: string }>();

  const [editingWinterStorageArea, setEditingWinterStorageArea] = useState<boolean>(false);

  const { loading, data } = useQuery<INDIVIDUAL_WINTER_STORAGE_AREA>(INDIVIDUAL_WINTER_STORAGE_AREA_QUERY, {
    variables: { id },
  });

  const winterStorageArea = getIndividualWinterStorageArea(data);
  const markedWinterStorage = getMarkedWinterStorage(data);
  const unmarkedWinterStorage = getUnmarkedWinterStorage(data);

  if (loading || !winterStorageArea) return <LoadingSpinner />;

  return (
    <>
      <WinterStorageAreaView
        winterStorageArea={winterStorageArea}
        markedWinterStorage={markedWinterStorage}
        unmarkedWinterStorage={unmarkedWinterStorage}
        setEditingWinterStorageArea={setEditingWinterStorageArea}
      />
      <Modal isOpen={editingWinterStorageArea} toggleModal={() => setEditingWinterStorageArea(false)}>
        <WinterStorageAreaEditForm
          winterStorageAreaId={id}
          onCancel={() => setEditingWinterStorageArea(false)}
          onSubmit={() => setEditingWinterStorageArea(false)}
          refetchQueries={[{ query: INDIVIDUAL_WINTER_STORAGE_AREA_QUERY, variables: { id } }]}
        />
      </Modal>
    </>
  );
};

export default WinterStorageAreaViewContainer;
