import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';
import { useLocation, useHistory } from 'react-router-dom';
import { Notification } from 'hds-react';
import { getOperationName } from 'apollo-link';

import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import {
  OFFER_QUERY,
  OFFER_WITHOUT_APPLICATION_PROFILE_QUERY,
  OFFER_WITHOUT_APPLICATION_HARBOR_QUERY,
} from './queries';
import Offer from './Offer';
import { OFFER, OFFERVariables as OFFER_VARS } from './__generated__/OFFER';
import {
  OFFER_WITHOUT_APPLICATION_HARBOR,
  OFFER_WITHOUT_APPLICATION_HARBORVariables as OFFER_WITHOUT_APPLICATION_HARBOR_VARS,
} from './__generated__/OFFER_WITHOUT_APPLICATION_HARBOR';
import {
  OFFER_WITHOUT_APPLICATION_PROFILE,
  OFFER_WITHOUT_APPLICATION_PROFILEVariables as OFFER_WITHOUT_APPLICATION_PROFILE_VARS,
} from './__generated__/OFFER_WITHOUT_APPLICATION_PROFILE';
import { getOfferData, getAllPiersIdentifiers, getBoat, getHarbor, getCustomerBoat } from './utils';
import { formatDate } from '../../common/utils/format';
import { CREATE_LEASE_MUTATION } from './mutations';
import { CREATE_LEASE, CREATE_LEASEVariables as CREATE_LEASE_VARS } from './__generated__/CREATE_LEASE';
import { BERTH_APPLICATIONS_QUERY } from '../applicationList/queries';
import hdsToast from '../../common/toast/hdsToast';
import { BerthData } from './types';

function useRouterQuery() {
  return new URLSearchParams(useLocation().search);
}

const OfferContainer = () => {
  const routerQuery = useRouterQuery();
  const history = useHistory();

  const harborId = routerQuery.get('harbor') || '';
  const applicationId = routerQuery.get('application') || '';
  const customerId = routerQuery.get('customer') || '';
  const boatId = routerQuery.get('boat') || '';

  const { loading: applicationLoading, error: applicationError, data: applicationData } = useQuery<OFFER, OFFER_VARS>(
    OFFER_QUERY,
    {
      variables: { applicationId, servicemapId: harborId },
      skip: !applicationId,
    }
  );
  const { loading: customerLoading, error: customerError, data: customerData } = useQuery<
    OFFER_WITHOUT_APPLICATION_PROFILE,
    OFFER_WITHOUT_APPLICATION_PROFILE_VARS
  >(OFFER_WITHOUT_APPLICATION_PROFILE_QUERY, {
    variables: { customerId },
    skip: !customerId,
  });

  const boatWidth = getCustomerBoat(customerData?.profile?.boats?.edges[0]?.node)?.boatWidth;

  const { loading: harborLoading, error: harborError, data: harborData } = useQuery<
    OFFER_WITHOUT_APPLICATION_HARBOR,
    OFFER_WITHOUT_APPLICATION_HARBOR_VARS
  >(OFFER_WITHOUT_APPLICATION_HARBOR_QUERY, {
    variables: { harborId },
    skip: !boatWidth,
  });
  const [createBerthLease, { loading: isSubmitting }] = useMutation<CREATE_LEASE, CREATE_LEASE_VARS>(
    CREATE_LEASE_MUTATION,
    {
      refetchQueries: [getOperationName(BERTH_APPLICATIONS_QUERY) || 'BERTH_APPLICATIONS'],
    }
  );
  const { t, i18n } = useTranslation();

  if (applicationLoading || customerLoading || harborLoading) return <LoadingSpinner isLoading />;

  const data = applicationData?.harborByServicemapId || harborData?.harbor;

  if (!data && !customerData)
    return (
      <Notification label={t('common.notification.noData.label')}>
        {t('common.notification.noData.description')}
      </Notification>
    );
  if (applicationError || customerError || harborError)
    return (
      <Notification label={t('common.notification.error.label')} type="error">
        {t('common.notification.error.description')}
      </Notification>
    );

  const getApplicationType = (isSwitch: boolean) =>
    isSwitch
      ? t('applicationList.applicationType.switchApplication')
      : t('applicationList.applicationType.newApplication');

  const application = applicationData?.berthApplication && {
    date: formatDate(applicationData.berthApplication.createdAt, i18n.language),
    status: applicationData.berthApplication.status,
    type: getApplicationType(!!applicationData.berthApplication.berthSwitch),
  };

  const handleReturn = () => history.goBack();

  const tableData = getOfferData(data);
  const harbor = getHarbor(data);
  const piersIdentifiers = getAllPiersIdentifiers(data?.properties?.piers?.edges);
  const boatNode = customerData?.profile?.boats?.edges?.find((edge) => edge?.node?.id === boatId)?.node;

  const customerBoat = getCustomerBoat(boatNode);
  const boat = getBoat(applicationData?.berthApplication, applicationData?.boatTypes) || customerBoat;

  if (!boat)
    return (
      <Notification label={t('common.notification.error.label')} type="error">
        {t('offer.notifications.noBoat.description')}
      </Notification>
    );

  const handleClickSelect = (berth: BerthData) => {
    createBerthLease({
      variables: {
        input: {
          applicationId: applicationId || '',
          customerId: customerId || '',
          berthId: berth.id,
        },
      },
    }).then(() => {
      history.goBack();
      hdsToast({
        type: 'success',
        autoDismiss: true,
        autoDismissTime: 5000,
        labelText: t('offer.notifications.berthLeaseCreated.label'),
        text: t('offer.notifications.berthLeaseCreated.description', {
          harbor: berth.harbor,
          pier: berth.pier,
          berth: berth.berth,
        }),
      });
    });
  };

  return (
    <Offer
      application={application}
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

export default OfferContainer;
