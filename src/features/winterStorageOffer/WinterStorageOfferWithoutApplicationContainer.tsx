import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { getOperationName } from 'apollo-link';
import { useMutation, useQuery } from '@apollo/react-hooks';
import useRouterQuery from '../../common/hooks/useRouterQuery';
import { WINTER_STORAGE_APPLICATIONS_QUERY } from '../winterStorageApplicationList/queries';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import { ErrorNotification, NoBoatErrorNotification, NoDataNotification } from '../berthOffer/components/notifications';
import { showWinterStorageSuccessToast } from './components/notifications';
import WinterStorageOffer from './components/WinterStorageOffer';
import { CREATE_WINTER_STORAGE_LEASE_MUTATION } from './mutations';
import { WINTER_STORAGE_WITHOUT_APPLICATION_QUERY } from './queries';
import {
  CREATE_WINTER_STORAGE_LEASE,
  CREATE_WINTER_STORAGE_LEASEVariables as CREATE_WINTER_STORAGE_LEASE_VARS,
} from './__generated__/CREATE_WINTER_STORAGE_LEASE';
import {
  WINTER_STORAGE_WITHOUT_APPLICATION,
  WINTER_STORAGE_WITHOUT_APPLICATIONVariables as WINTER_STORAGE_WITHOUT_APPLICATION_VARS,
} from './__generated__/WINTER_STORAGE_WITHOUT_APPLICATION';
import {
  getAllSectionsIdentifiers,
  getWinterStorageArea,
  getWinterStoragePlaceData,
  isPlaceSuitableForBoat,
  getCustomerBoat,
} from './utils';
import { PlaceData } from './types';

const WinterStorageOfferWithoutApplicationContainer = () => {
  const { t } = useTranslation();
  const routerQuery = useRouterQuery();
  const history = useHistory();

  const [chosenPlace, setChosenPlace] = useState<PlaceData | null>(null);
  const [confirmModalVisible, setConfirmModalVisible] = useState<boolean>(false);

  const areaId = routerQuery.get('area') || '';
  const boatId = routerQuery.get('boat') || '';
  const customerId = routerQuery.get('customer') || '';

  const { loading, error, data } = useQuery<
    WINTER_STORAGE_WITHOUT_APPLICATION,
    WINTER_STORAGE_WITHOUT_APPLICATION_VARS
  >(WINTER_STORAGE_WITHOUT_APPLICATION_QUERY, {
    variables: { areaId, customerId },
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
          applicationId: undefined,
          customerId,
          placeId: place.id,
        },
      },
    }).then(() => {
      history.goBack();
      showWinterStorageSuccessToast(place, t);
    });
  };

  if (loading) return <LoadingSpinner />;

  const winterStorageArea = data?.winterStorageArea || undefined;
  const boat = getCustomerBoat(data?.profile?.boats?.edges?.find((boatEdge) => boatEdge?.node?.id === boatId)?.node);

  if (!data) return <NoDataNotification />;
  if (error) return <ErrorNotification />;
  if (!boat) return <NoBoatErrorNotification />;

  const tableData = getWinterStoragePlaceData(winterStorageArea);
  const area = getWinterStorageArea(winterStorageArea);
  const sectionsIdentifiers = getAllSectionsIdentifiers(winterStorageArea?.properties?.sections);

  if (!area) return <NoDataNotification />;

  const handleReturn = () => {
    history.goBack();
  };

  const handleConfirm = (confirmed: boolean) => {
    if (!chosenPlace) {
      return;
    }

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

    if (!place) {
      return;
    }

    if (!isPlaceSuitableForBoat(place, boat)) {
      return setConfirmModalVisible(true);
    }

    return createLease(place);
  };

  return (
    <WinterStorageOffer
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

export default WinterStorageOfferWithoutApplicationContainer;
