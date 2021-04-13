import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Notification } from 'hds-react';

import BerthOffer from '../berthOffer/components/BerthOffer';
import {
  BERTH_OFFER_WITHOUT_APPLICATION_HARBOR,
  BERTH_OFFER_WITHOUT_APPLICATION_HARBORVariables as BERTH_OFFER_WITHOUT_APPLICATION_HARBOR_VARS,
} from '../berthOffer/__generated__/BERTH_OFFER_WITHOUT_APPLICATION_HARBOR';
import { BERTH_OFFER_WITHOUT_APPLICATION_HARBOR_QUERY, SWITCH_BERTH_LEASE_QUERY } from '../berthOffer/queries';
import { getAllPiersIdentifiers, getHarbor, getBerthData, getLeaseBoat } from '../berthOffer/utils';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import { BerthData } from '../berthOffer/types';
import hdsToast from '../../common/toast/hdsToast';
import useRouterQuery from '../../common/hooks/useRouterQuery';
import {
  SWITCH_BERTH_LEASE,
  SWITCH_BERTH_LEASEVariables as SWITCH_BERTH_LEASE_VARS,
} from './__generated__/SWITCH_BERTH_LEASE';
import { SWITCH_BERTH, SWITCH_BERTHVariables as SWITCH_BERTH_VARS } from './__generated__/SWITCH_BERTH';
import { SWITCH_BERTH_MUTATION } from './mutations';

const SwitchBerthContainer = () => {
  const { t } = useTranslation();
  const routerQuery = useRouterQuery();
  const history = useHistory();

  const harborId = routerQuery.get('harbor') || '';
  const leaseId = routerQuery.get('lease') || '';

  const { data: leaseData, error: leaseError, loading: leaseLoading } = useQuery<
    SWITCH_BERTH_LEASE,
    SWITCH_BERTH_LEASE_VARS
  >(SWITCH_BERTH_LEASE_QUERY, { variables: { leaseId } });

  const boat = getLeaseBoat(leaseData);
  const boatWidth = boat?.boatWidth ?? 0;

  const { data: harborData, error: harborError, loading: harborLoading } = useQuery<
    BERTH_OFFER_WITHOUT_APPLICATION_HARBOR,
    BERTH_OFFER_WITHOUT_APPLICATION_HARBOR_VARS
  >(BERTH_OFFER_WITHOUT_APPLICATION_HARBOR_QUERY, {
    variables: { harborId, boatWidth },
  });

  const [switchBerth, { loading: isSubmitting }] = useMutation<SWITCH_BERTH, SWITCH_BERTH_VARS>(SWITCH_BERTH_MUTATION);

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
  const tableData = getBerthData(data);
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
        labelText: t('offer.notifications.berthSwitched.label'),
        text: t('offer.notifications.berthSwitched.description', {
          harbor: berth.harbor,
          pier: berth.pier,
          berth: berth.berth,
        }),
      });
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

export default SwitchBerthContainer;
