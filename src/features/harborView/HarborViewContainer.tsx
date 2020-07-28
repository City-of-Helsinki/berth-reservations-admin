import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { INDIVIDUAL_HARBOR_QUERY } from './queries';
import HarborView from './HarborView';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import Modal from '../../common/modal/Modal';
import BerthEditForm from './forms/berthForm/BerthEditForm';
import BerthCreateForm from './forms/berthForm/BerthCreateForm';
import PierCreateForm from './forms/pierForm/PierCreateForm';
import PierEditForm from './forms/pierForm/PierEditForm';
import HarborEditForm from './forms/harborForm/HarborEditForm';
// eslint-disable-next-line @typescript-eslint/camelcase
import { HarborProperties, useIndividual_HarborQuery } from '../../generated/types.d';
import { edgesToArr } from '../../generated/utils';

const HarborViewContainer = () => {
  const [editingHarbor, setEditingHarbor] = useState<boolean>(false);
  const [berthToEdit, setBerthToEdit] = useState<string | null>(null);
  const [creatingBerth, setCreatingBerth] = useState<boolean>(false);
  const [pierToEdit, setPierToEdit] = useState<string | null>(null);
  const [creatingPier, setCreatingPier] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  const { loading, data } = useIndividual_HarborQuery({ variables: { id } });

  const harbor = data?.harbor?.properties as HarborProperties;
  const piers = edgesToArr(data?.harbor?.properties?.piers);

  if (loading || !harbor) return <LoadingSpinner isLoading={true} />;

  return (
    <>
      <HarborView
        harbor={harbor}
        setBerthToEdit={setBerthToEdit}
        setCreatingBerth={setCreatingBerth}
        setCreatingPier={setCreatingPier}
        setEditingHarbor={setEditingHarbor}
        setPierToEdit={setPierToEdit}
      />

      {berthToEdit && (
        <Modal isOpen={!!berthToEdit} toggleModal={() => setBerthToEdit(null)}>
          <BerthEditForm
            berthId={berthToEdit}
            onCancel={() => setBerthToEdit(null)}
            onDelete={() => setBerthToEdit(null)}
            onSubmit={() => setBerthToEdit(null)}
            refetchQueries={[{ query: INDIVIDUAL_HARBOR_QUERY, variables: { id } }]}
            pierOptions={piers}
          />
        </Modal>
      )}

      <Modal isOpen={creatingBerth} toggleModal={() => setCreatingBerth(false)}>
        <BerthCreateForm
          onCancel={() => setCreatingBerth(false)}
          onSubmit={() => setCreatingBerth(false)}
          refetchQueries={[{ query: INDIVIDUAL_HARBOR_QUERY, variables: { id } }]}
          pierOptions={piers}
        />
      </Modal>

      <Modal isOpen={creatingPier} toggleModal={() => setCreatingPier(false)}>
        <PierCreateForm
          harborId={id}
          onCancel={() => setCreatingPier(false)}
          onSubmit={() => setCreatingPier(false)}
          refetchQueries={[{ query: INDIVIDUAL_HARBOR_QUERY, variables: { id } }]}
        />
      </Modal>

      {pierToEdit && (
        <Modal isOpen={!!pierToEdit} toggleModal={() => setPierToEdit(null)}>
          <PierEditForm
            pierId={pierToEdit}
            onCancel={() => setPierToEdit(null)}
            onDelete={() => setPierToEdit(null)}
            onSubmit={() => setPierToEdit(null)}
            refetchQueries={[{ query: INDIVIDUAL_HARBOR_QUERY, variables: { id } }]}
          />
        </Modal>
      )}

      <Modal isOpen={editingHarbor} toggleModal={() => setEditingHarbor(false)}>
        <HarborEditForm
          harborId={id}
          onCancel={() => setEditingHarbor(false)}
          onSubmit={() => setEditingHarbor(false)}
          refetchQueries={[{ query: INDIVIDUAL_HARBOR_QUERY, variables: { id } }]}
        />
      </Modal>
    </>
  );
};

export default HarborViewContainer;
