import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { getOperationName } from 'apollo-link';

import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import { BERTH_OFFER_WITHOUT_APPLICATION_PROFILE_QUERY, BERTH_OFFER_WITHOUT_APPLICATION_HARBOR_QUERY } from './queries';
import BerthOffer from './components/BerthOffer';
import {
  BERTH_OFFER_WITHOUT_APPLICATION_HARBOR,
  BERTH_OFFER_WITHOUT_APPLICATION_HARBORVariables as BERTH_OFFER_WITHOUT_APPLICATION_HARBOR_VARS,
} from './__generated__/BERTH_OFFER_WITHOUT_APPLICATION_HARBOR';
import {
  BERTH_OFFER_WITHOUT_APPLICATION_PROFILE,
  BERTH_OFFER_WITHOUT_APPLICATION_PROFILEVariables as BERTH_OFFER_WITHOUT_APPLICATION_PROFILE_VARS,
} from './__generated__/BERTH_OFFER_WITHOUT_APPLICATION_PROFILE';
import { getBerthData, getAllPiersIdentifiers, getHarbor, getCustomerBoat } from './utils';
import { CREATE_BERTH_LEASE_MUTATION } from './mutations';
import {
  CREATE_BERTH_LEASE,
  CREATE_BERTH_LEASEVariables as CREATE_BERTH_LEASE_VARS,
} from './__generated__/CREATE_BERTH_LEASE';
import { BERTH_APPLICATIONS_QUERY } from '../applicationList/queries';
import { BerthData } from './types';
import useRouterQuery from '../../common/hooks/useRouterQuery';
import {
  ErrorNotification,
  NoBoatNotification,
  NoDataNotification,
  showBerthSuccessToast,
} from './components/notifications';

const BerthOfferWithoutApplicationContainer = () => {
  const { t } = useTranslation();
  const routerQuery = useRouterQuery();
  const history = useHistory();

  const harborId = routerQuery.get('harbor') || '';
  const customerId = routerQuery.get('customer') || '';
  const boatId = routerQuery.get('boat') || '';

  const { loading: customerLoading, error: customerError, data: customerData } = useQuery<
    BERTH_OFFER_WITHOUT_APPLICATION_PROFILE,
    BERTH_OFFER_WITHOUT_APPLICATION_PROFILE_VARS
  >(BERTH_OFFER_WITHOUT_APPLICATION_PROFILE_QUERY, {
    variables: { customerId },
    skip: !customerId,
  });
  const boatNode = customerData?.profile?.boats?.edges?.find((edge) => edge?.node?.id === boatId)?.node;
  const boat = getCustomerBoat(boatNode);

  const boatWidth = boat?.boatWidth ?? 0;
  const { loading: harborLoading, error: harborError, data: harborData } = useQuery<
    BERTH_OFFER_WITHOUT_APPLICATION_HARBOR,
    BERTH_OFFER_WITHOUT_APPLICATION_HARBOR_VARS
  >(BERTH_OFFER_WITHOUT_APPLICATION_HARBOR_QUERY, {
    variables: { harborId, boatWidth: Number(boatWidth) },
    skip: !boatWidth,
  });
  const [createBerthLease, { loading: isSubmitting }] = useMutation<CREATE_BERTH_LEASE, CREATE_BERTH_LEASE_VARS>(
    CREATE_BERTH_LEASE_MUTATION,
    {
      refetchQueries: [getOperationName(BERTH_APPLICATIONS_QUERY) || 'BERTH_APPLICATIONS'],
    }
  );

  if (customerLoading || harborLoading) return <LoadingSpinner isLoading />;

  const data = harborData?.harbor;

  if (!data && !customerData) return <NoDataNotification />;
  if (customerError || harborError) return <ErrorNotification />;
  if (!boat) return <NoBoatNotification />;

  const tableData = getBerthData(data);
  const harbor = getHarbor(data);
  const piersIdentifiers = getAllPiersIdentifiers(data?.properties?.piers);

  const handleReturn = () => history.goBack();
  const handleClickSelect = (berth: BerthData) => {
    createBerthLease({
      variables: {
        input: {
          applicationId: undefined,
          customerId: customerId,
          berthId: berth.id,
        },
      },
    }).then(() => {
      history.goBack();
      showBerthSuccessToast(berth, t);
    });
  };

  return (
    <BerthOffer
      boat={boat}
      handleClickSelect={handleClickSelect}
      handleReturn={handleReturn}
      harbor={harbor}
      isSubmitting={isSubmitting}
      piersIdentifiers={piersIdentifiers}
      tableData={tableData}
    />
  );
};

export default BerthOfferWithoutApplicationContainer;
