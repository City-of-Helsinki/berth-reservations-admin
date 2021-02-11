import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';

import BerthDetails from './BerthDetails';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import { BERTH_DETAILS_QUERY } from './queries';
import { BERTH_DETAILS } from './__generated__/BERTH_DETAILS';
import { getBerthLeases } from './utils';

interface BerthDetailsContainerProps {
  id: string;
  onEdit(): void;
}

const BerthDetailsContainer = ({ id, onEdit }: BerthDetailsContainerProps) => {
  const { t } = useTranslation();
  const { loading, data } = useQuery<BERTH_DETAILS>(BERTH_DETAILS_QUERY, {
    variables: {
      berthId: id,
    },
    fetchPolicy: 'no-cache',
  });

  if (loading) return <LoadingSpinner isLoading={loading} />;
  if (!data?.berth) return <span>{t('common.notification.noData.description')}</span>;

  const leases = getBerthLeases(data.berth.leases);

  return <BerthDetails leases={leases} comment={data.berth.comment} onEdit={onEdit} />;
};

export default BerthDetailsContainer;
