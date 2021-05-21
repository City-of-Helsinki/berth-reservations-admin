import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { getOperationName } from 'apollo-link';
import { useMutation, useQuery } from '@apollo/react-hooks';

import useRouterQuery from '../../common/hooks/useRouterQuery';
import { WINTER_STORAGE_APPLICATIONS_QUERY } from '../winterStorageApplicationList/queries';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import { ErrorNotification, NoBoatErrorNotification, NoDataNotification } from '../berthOffer/components/notifications';
import { formatDate } from '../../common/utils/format';
import { showWinterStorageSuccessToast } from './components/notifications';
import WinterStorageOffer from './components/WinterStorageOffer';
import { CREATE_WINTER_STORAGE_LEASE_MUTATION } from './mutations';
import { WINTER_STORAGE_OFFER_QUERY } from './queries';
import {
  getAllSectionsIdentifiers,
  getApplicationBoat,
  getWinterStorageArea,
  getWinterStoragePlaceData,
  isPlaceSuitableForBoat,
} from './utils';
import {
  CREATE_WINTER_STORAGE_LEASE,
  CREATE_WINTER_STORAGE_LEASEVariables as CREATE_WINTER_STORAGE_LEASE_VARS,
} from './__generated__/CREATE_WINTER_STORAGE_LEASE';
import {
  WINTER_STORAGE_OFFER,
  WINTER_STORAGE_OFFERVariables as WINTER_STORAGE_OFFER_VARS,
} from './__generated__/WINTER_STORAGE_OFFER';
import { PlaceData } from './types';

const WinterStorageOfferContainer = () => {
  const { t, i18n } = useTranslation();
  const routerQuery = useRouterQuery();
  const history = useHistory();

  const [chosenPlace, setChosenPlace] = useState<PlaceData | null>(null);
  const [confirmModalVisible, setConfirmModalVisible] = useState<boolean>(false);

  const areaId = routerQuery.get('winterStorageArea') || '';
  const applicationId = routerQuery.get('application') || '';

  const { loading: applicationLoading, error: applicationError, data: applicationData } = useQuery<
    WINTER_STORAGE_OFFER,
    WINTER_STORAGE_OFFER_VARS
  >(WINTER_STORAGE_OFFER_QUERY, {
    variables: { applicationId, areaId },
  });

  const [createWinterStorageLease, { loading: isSubmitting }] = useMutation<
    CREATE_WINTER_STORAGE_LEASE,
    CREATE_WINTER_STORAGE_LEASE_VARS
  >(CREATE_WINTER_STORAGE_LEASE_MUTATION, {
    refetchQueries: [getOperationName(WINTER_STORAGE_APPLICATIONS_QUERY) || 'WINTER_STORAGE_APPLICATIONS'],
  });
  const createLease = (place: PlaceData) => {
    createWinterStorageLease({
      variables: {
        input: {
          applicationId: applicationId,
          placeId: place.id,
        },
      },
    }).then(() => {
      history.goBack();
      showWinterStorageSuccessToast(place, t);
    });
  };

  if (applicationLoading) return <LoadingSpinner />;

  const data = applicationData?.winterStorageArea;
  const boat = getApplicationBoat(applicationData?.winterStorageApplication, applicationData?.boatTypes);

  if (!data) return <NoDataNotification />;
  if (applicationError) return <ErrorNotification />;
  if (!boat) return <NoBoatErrorNotification />;

  const application = applicationData?.winterStorageApplication && {
    date: formatDate(applicationData.winterStorageApplication.createdAt, i18n.language),
    status: applicationData.winterStorageApplication.status,
    type: t('applicationList.applicationType.newApplication'),
  };
  const tableData = getWinterStoragePlaceData(data);
  const area = getWinterStorageArea(data);
  const sectionsIdentifiers = getAllSectionsIdentifiers(data?.properties?.sections);

  if (!area) return <NoDataNotification />;

  const handleReturn = () => history.goBack();
  const handleConfirm = (confirmed: boolean) => {
    if (!chosenPlace) return;
    if (!confirmed) {
      setChosenPlace(null);
      setConfirmModalVisible(false);
      return;
    }
    setConfirmModalVisible(false);
    return createLease(chosenPlace);
  };
  const handleSelect = (place: PlaceData | null) => {
    setChosenPlace(place);
    if (!place) return;
    if (!isPlaceSuitableForBoat(place, boat)) return setConfirmModalVisible(true);
    return createLease(place);
  };

  return (
    <WinterStorageOffer
      application={application}
      area={area}
      boat={boat}
      chosenPlace={chosenPlace}
      confirmModalVisible={confirmModalVisible}
      handleConfirm={handleConfirm}
      handleSelect={handleSelect}
      handleReturn={handleReturn}
      isSubmitting={isSubmitting}
      sectionsIdentifiers={sectionsIdentifiers}
      setChosenPlace={setChosenPlace}
      tableData={tableData}
    />
  );
};

export default WinterStorageOfferContainer;
