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
import SectionCreateForm from './forms/sectionForm/SectionCreateForm';
import SectionEditForm from './forms/sectionForm/SectionEditForm';
import PlaceEditForm from './forms/placeForm/PlaceEditForm';
import PlaceCreateForm from './forms/placeForm/PlaceCreateForm';

const WinterStorageAreaViewContainer = () => {
  const { id } = useParams<{ id: string }>();

  const [editingWinterStorageArea, setEditingWinterStorageArea] = useState<boolean>(false);
  const [sectionToEdit, setSectionToEdit] = useState<string | null>(null);
  const [creatingSection, setCreatingSection] = useState<boolean>(false);
  const [placeToEdit, setPlaceToEdit] = useState<string | null>(null);
  const [creatingPlace, setCreatingPlace] = useState<boolean>(false);

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
        setSectionToEdit={setSectionToEdit}
        setCreatingSection={setCreatingSection}
        setPlaceToEdit={setPlaceToEdit}
        setCreatingPlace={setCreatingPlace}
      />
      <Modal isOpen={editingWinterStorageArea} toggleModal={() => setEditingWinterStorageArea(false)}>
        <WinterStorageAreaEditForm
          winterStorageAreaId={id}
          onCancel={() => setEditingWinterStorageArea(false)}
          onSubmit={() => setEditingWinterStorageArea(false)}
          refetchQueries={[{ query: INDIVIDUAL_WINTER_STORAGE_AREA_QUERY, variables: { id } }]}
        />
      </Modal>
      <Modal isOpen={creatingSection} toggleModal={() => setCreatingSection(false)}>
        <SectionCreateForm
          winterStorageAreaId={id}
          onCancel={() => setCreatingSection(false)}
          onSubmit={() => setCreatingSection(false)}
          refetchQueries={[{ query: INDIVIDUAL_WINTER_STORAGE_AREA_QUERY, variables: { id } }]}
        />
      </Modal>
      {sectionToEdit && (
        <Modal isOpen toggleModal={() => setSectionToEdit(null)}>
          <SectionEditForm
            winterStorageSectionId={sectionToEdit}
            onCancel={() => setSectionToEdit(null)}
            onDelete={() => setSectionToEdit(null)}
            onSubmit={() => setSectionToEdit(null)}
            refetchQueries={[{ query: INDIVIDUAL_WINTER_STORAGE_AREA_QUERY, variables: { id } }]}
          />
        </Modal>
      )}
      {placeToEdit && (
        <Modal isOpen toggleModal={() => setPlaceToEdit(null)}>
          <PlaceEditForm
            placeId={placeToEdit}
            onCancel={() => setPlaceToEdit(null)}
            onDelete={() => setPlaceToEdit(null)}
            onSubmit={() => setPlaceToEdit(null)}
            refetchQueries={[{ query: INDIVIDUAL_WINTER_STORAGE_AREA_QUERY, variables: { id } }]}
            sectionOptions={markedWinterStorage?.sections || []}
          />
        </Modal>
      )}
      <Modal isOpen={creatingPlace} toggleModal={() => setCreatingPlace(false)}>
        <PlaceCreateForm
          onCancel={() => setCreatingPlace(false)}
          onSubmit={() => setCreatingPlace(false)}
          refetchQueries={[{ query: INDIVIDUAL_WINTER_STORAGE_AREA_QUERY, variables: { id } }]}
          sectionOptions={markedWinterStorage?.sections || []}
        />
      </Modal>
    </>
  );
};

export default WinterStorageAreaViewContainer;
