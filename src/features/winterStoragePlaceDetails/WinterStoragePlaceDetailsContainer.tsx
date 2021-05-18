import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/react-hooks';

import { WINTER_STORAGE_PLACE_DETAILS_QUERY } from './queries';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import { getPlaceLeases } from './utils';
import WinterStoragePlaceDetails from './WinterStoragePlaceDetails';
import {
  WINTER_STORAGE_PLACE_DETAILS,
  WINTER_STORAGE_PLACE_DETAILSVariables as WINTER_STORAGE_PLACE_DETAILS_VARS,
} from './__generated__/WINTER_STORAGE_PLACE_DETAILS';

export interface WinterStoragePlaceDetailsContainerProps {
  id: string;
}

const WinterStoragePlaceDetailsContainer = ({ id }: WinterStoragePlaceDetailsContainerProps) => {
  const { t } = useTranslation();
  const { loading, data } = useQuery<WINTER_STORAGE_PLACE_DETAILS, WINTER_STORAGE_PLACE_DETAILS_VARS>(
    WINTER_STORAGE_PLACE_DETAILS_QUERY,
    {
      variables: {
        placeId: id,
      },
    }
  );

  if (loading) return <LoadingSpinner />;
  if (!data?.winterStoragePlace) return <span>{t('common.notification.noData.description')}</span>;

  const leases = getPlaceLeases(data.winterStoragePlace.leases);

  return <WinterStoragePlaceDetails leases={leases} />;
};

export default WinterStoragePlaceDetailsContainer;
