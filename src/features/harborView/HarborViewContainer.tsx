import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { INDIVIDUAL_HARBOR_QUERY } from './queries';
import {
  INDIVIDUAL_HARBOR,
  INDIVIDUAL_HARBORVariables as INDIVIDUAL_HARBOR_VARS,
} from './__generated__/INDIVIDUAL_HARBOR';
import { getIndividualHarborData, getBerths, getPiers } from './utils';
import HarborView from './HarborView';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import Modal from '../../common/modal/Modal';
import BerthEditForm from './forms/berthForm/BerthEditForm';
import BerthCreateForm from './forms/berthForm/BerthCreateForm';
import PierCreateForm from './forms/pierForm/PierCreateForm';
import PierEditForm from './forms/pierForm/PierEditForm';
import HarborEditForm from './forms/harborForm/HarborEditForm';

const HarborViewContainer = () => {
  const [editingHarbor, setEditingHarbor] = useState<boolean>(false);
  const [berthToEdit, setBerthToEdit] = useState<string | null>(null);
  const [creatingBerth, setCreatingBerth] = useState<boolean>(false);
  const [pierToEdit, setPierToEdit] = useState<string | null>(null);
  const [creatingPier, setCreatingPier] = useState<boolean>(false);
  const [filterByActiveBerths, setFilterByActiveBerths] = useState<boolean | null>(true);
  const { id: harborId } = useParams<{ id: string }>();
  const { loading, data } = useQuery<INDIVIDUAL_HARBOR, INDIVIDUAL_HARBOR_VARS>(INDIVIDUAL_HARBOR_QUERY, {
    variables: {
      harborId,
      isBerthActive: filterByActiveBerths,
    },
  });

  const harbor = getIndividualHarborData(data);

  if (loading || !harbor) return <LoadingSpinner />;

  const piers = getPiers(data);
  const berths = getBerths(data);

  return (
    <>
      <HarborView
        berths={berths}
        harbor={harbor}
        piers={piers}
        setBerthToEdit={setBerthToEdit}
        setCreatingBerth={setCreatingBerth}
        setCreatingPier={setCreatingPier}
        setEditingHarbor={setEditingHarbor}
        setPierToEdit={setPierToEdit}
        setFilterByActiveBerths={setFilterByActiveBerths}
        filterByActiveBerths={filterByActiveBerths}
      />

      {berthToEdit && (
        <Modal isOpen toggleModal={() => setBerthToEdit(null)}>
          <BerthEditForm
            berthId={berthToEdit}
            onCancel={() => setBerthToEdit(null)}
            onDelete={() => setBerthToEdit(null)}
            onSubmit={() => setBerthToEdit(null)}
            refetchQueries={[{ query: INDIVIDUAL_HARBOR_QUERY, variables: { harborId } }]}
            pierOptions={piers}
          />
        </Modal>
      )}

      <Modal isOpen={creatingBerth} toggleModal={() => setCreatingBerth(false)}>
        <BerthCreateForm
          onCancel={() => setCreatingBerth(false)}
          onSubmit={() => setCreatingBerth(false)}
          refetchQueries={[{ query: INDIVIDUAL_HARBOR_QUERY, variables: { harborId } }]}
          pierOptions={piers}
        />
      </Modal>

      <Modal isOpen={creatingPier} toggleModal={() => setCreatingPier(false)}>
        <PierCreateForm
          harborId={harborId}
          onCancel={() => setCreatingPier(false)}
          onSubmit={() => setCreatingPier(false)}
          refetchQueries={[{ query: INDIVIDUAL_HARBOR_QUERY, variables: { harborId } }]}
        />
      </Modal>

      {pierToEdit && (
        <Modal isOpen toggleModal={() => setPierToEdit(null)}>
          <PierEditForm
            pierId={pierToEdit}
            onCancel={() => setPierToEdit(null)}
            onDelete={() => setPierToEdit(null)}
            onSubmit={() => setPierToEdit(null)}
            refetchQueries={[{ query: INDIVIDUAL_HARBOR_QUERY, variables: { harborId } }]}
          />
        </Modal>
      )}

      <Modal isOpen={editingHarbor} toggleModal={() => setEditingHarbor(false)}>
        <HarborEditForm
          harborId={harborId}
          onCancel={() => setEditingHarbor(false)}
          onSubmit={() => setEditingHarbor(false)}
          refetchQueries={[{ query: INDIVIDUAL_HARBOR_QUERY, variables: { harborId } }]}
        />
      </Modal>
    </>
  );
};

export default HarborViewContainer;
