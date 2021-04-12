import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Notification } from 'hds-react';

import Offer from '../offer/Offer';
import {
  OFFER_WITHOUT_APPLICATION_HARBOR,
  OFFER_WITHOUT_APPLICATION_HARBORVariables as OFFER_WITHOUT_APPLICATION_HARBOR_VARS,
} from '../offer/__generated__/OFFER_WITHOUT_APPLICATION_HARBOR';
import { OFFER_WITHOUT_APPLICATION_HARBOR_QUERY } from '../offer/queries';
import { getAllPiersIdentifiers, getHarbor, getOfferData } from '../offer/utils';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import { SWITCH_PLACE_BERTH_LEASE_QUERY } from './queries';
import {
  SWITCH_PLACE_BERTH_LEASE,
  SWITCH_PLACE_BERTH_LEASEVariables as SWITCH_PLACE_BERTH_LEASE_VARS,
} from './__generated__/SWITCH_PLACE_BERTH_LEASE';
import { getLeaseBoat } from './utils';
import { BerthData } from '../offer/types';
import {
  SWITCH_LEASE_BERTH,
  SWITCH_LEASE_BERTHVariables as SWITCH_LEASE_BERTH_VARS,
} from './__generated__/SWITCH_LEASE_BERTH';
import { SWITCH_LEASE_BERTH_MUTATION } from './mutations';
import hdsToast from '../../common/toast/hdsToast';

function useRouterQuery() {
  return new URLSearchParams(useLocation().search);
}

// Implemented only for berths
const SwitchPlaceViewContainer = () => {
  const { t } = useTranslation();
  const routerQuery = useRouterQuery();
  const history = useHistory();

  const harborId = routerQuery.get('harbor') || '';
  const leaseId = routerQuery.get('lease') || '';

  const { data: leaseData, error: leaseError, loading: leaseLoading } = useQuery<
    SWITCH_PLACE_BERTH_LEASE,
    SWITCH_PLACE_BERTH_LEASE_VARS
  >(SWITCH_PLACE_BERTH_LEASE_QUERY, { variables: { leaseId } });

  const boat = getLeaseBoat(leaseData);
  const boatWidth = boat?.boatWidth ?? 0;

  const { data: harborData, error: harborError, loading: harborLoading } = useQuery<
    OFFER_WITHOUT_APPLICATION_HARBOR,
    OFFER_WITHOUT_APPLICATION_HARBOR_VARS
  >(OFFER_WITHOUT_APPLICATION_HARBOR_QUERY, {
    variables: { harborId, boatWidth },
  });

  const [switchBerth, { loading: isSubmitting }] = useMutation<SWITCH_LEASE_BERTH, SWITCH_LEASE_BERTH_VARS>(
    SWITCH_LEASE_BERTH_MUTATION
  );

  if (leaseLoading || harborLoading) return <LoadingSpinner isLoading />;
  if (!leaseData)
    return (
      <Notification label={t('common.notification.noData.label')}>
        {t('common.notification.noData.description')}
      </Notification>
    );
  if (leaseError || harborError)
    return (
      <Notification label={t('common.notification.error.label')} type="error">
        {t('common.notification.error.description')}
      </Notification>
    );

  const data = harborData?.harbor;
  const tableData = getOfferData(data);
  const harbor = getHarbor(data);
  const piersIdentifiers = getAllPiersIdentifiers(data?.properties?.piers);

  const handleReturn = () => history.goBack();

  const handleClickSelect = (berth: BerthData) => {
    switchBerth({
      variables: {
        input: {
          oldLeaseId: leaseId,
          newBerthId: berth.id,
        },
      },
    }).then(() => {
      history.goBack();
      hdsToast({
        type: 'success',
        autoDismiss: true,
        autoDismissTime: 5000,
        labelText: t('customerView.leases.switchPlace.notifications.berthSwitched.label'),
        text: t('customerView.leases.switchPlace.notifications.berthSwitched.description', {
          harbor: berth.harbor,
          pier: berth.pier,
          berth: berth.berth,
        }),
      });
    });
  };

  return (
    <Offer
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

export default SwitchPlaceViewContainer;
