import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Notification } from 'hds-react';
import { getOperationName } from 'apollo-link';

import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import {
  BERTH_OFFER_QUERY,
  BERTH_OFFER_WITHOUT_APPLICATION_PROFILE_QUERY,
  BERTH_OFFER_WITHOUT_APPLICATION_HARBOR_QUERY,
} from './queries';
import BerthOffer from './BerthOffer';
import { BERTH_OFFER, BERTH_OFFERVariables as BERTH_OFFER_VARS } from './__generated__/BERTH_OFFER';
import {
  BERTH_OFFER_WITHOUT_APPLICATION_HARBOR,
  BERTH_OFFER_WITHOUT_APPLICATION_HARBORVariables as BERTH_OFFER_WITHOUT_APPLICATION_HARBOR_VARS,
} from './__generated__/BERTH_OFFER_WITHOUT_APPLICATION_HARBOR';
import {
  BERTH_OFFER_WITHOUT_APPLICATION_PROFILE,
  BERTH_OFFER_WITHOUT_APPLICATION_PROFILEVariables as BERTH_OFFER_WITHOUT_APPLICATION_PROFILE_VARS,
} from './__generated__/BERTH_OFFER_WITHOUT_APPLICATION_PROFILE';
import { getBerthData, getAllPiersIdentifiers, getBoat, getHarbor, getCustomerBoat } from './utils';
import { formatDate } from '../../common/utils/format';
import { CREATE_BERTH_LEASE_MUTATION } from './mutations';
import {
  CREATE_BERTH_LEASE,
  CREATE_BERTH_LEASEVariables as CREATE_BERTH_LEASE_VARS,
} from './__generated__/CREATE_BERTH_LEASE';
import { BERTH_APPLICATIONS_QUERY } from '../applicationList/queries';
import hdsToast from '../../common/toast/hdsToast';
import { BerthData } from './types';
import useRouterQuery from '../../common/hooks/useRouterQuery';

const BerthOfferContainer = () => {
  const routerQuery = useRouterQuery();
  const history = useHistory();

  const harborId = routerQuery.get('harbor') || '';
  const applicationId = routerQuery.get('application') || '';
  const customerId = routerQuery.get('customer') || '';
  const boatId = routerQuery.get('boat') || '';

  const { loading: applicationLoading, error: applicationError, data: applicationData } = useQuery<
    BERTH_OFFER,
    BERTH_OFFER_VARS
  >(BERTH_OFFER_QUERY, {
    variables: { applicationId, servicemapId: harborId },
    skip: !applicationId,
  });
  const { loading: customerLoading, error: customerError, data: customerData } = useQuery<
    BERTH_OFFER_WITHOUT_APPLICATION_PROFILE,
    BERTH_OFFER_WITHOUT_APPLICATION_PROFILE_VARS
  >(BERTH_OFFER_WITHOUT_APPLICATION_PROFILE_QUERY, {
    variables: { customerId },
    skip: !customerId,
  });

  const boatNode = customerData?.profile?.boats?.edges?.find((edge) => edge?.node?.id === boatId)?.node;
  const customerBoat = getCustomerBoat(boatNode);
  const boat = getBoat(applicationData?.berthApplication, applicationData?.boatTypes) || customerBoat;
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
  if (!boat)
    return (
      <Notification label={t('common.notification.error.label')} type="error">
        {t('offer.notifications.noBoat.description')}
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

  const tableData = getBerthData(data);
  const harbor = getHarbor(data);
  const piersIdentifiers = getAllPiersIdentifiers(data?.properties?.piers);

  const handleClickSelect = (berth: BerthData) => {
    createBerthLease({
      variables: {
        input: {
          applicationId: applicationId || undefined,
          customerId: customerId || undefined,
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
    <BerthOffer
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

export default BerthOfferContainer;
