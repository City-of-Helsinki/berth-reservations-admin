import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';

import { INDIVIDUAL_HARBOR_QUERY } from './harborQueries';
import { INDIVIDUAL_HARBOR } from './__generated__/INDIVIDUAL_HARBOR';
import { getIndividualHarborData, getBerths } from './harborUtils';
import IndividualHarborPage from './components/individualHarborPage/IndividualHarborPage';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';

const IndividualHarborPageContainer: React.SFC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery<INDIVIDUAL_HARBOR>(
    INDIVIDUAL_HARBOR_QUERY,
    { variables: { id } }
  );
  const { t } = useTranslation();

  if (error) return <p>Error</p>;

  const harbor = getIndividualHarborData(data) ?? undefined;

  const berths = getBerths(data);

  return (
    <LoadingSpinner isLoading={loading && harbor !== null}>
      <IndividualHarborPage tableData={berths} harbor={harbor} t={t} />
    </LoadingSpinner>
  );
};

export default IndividualHarborPageContainer;
