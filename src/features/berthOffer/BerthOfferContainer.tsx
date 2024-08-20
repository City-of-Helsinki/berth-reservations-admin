import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { getOperationName } from 'apollo-link';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import { BERTH_OFFER_QUERY } from './queries';
import BerthOffer from './components/BerthOffer';
import { BERTH_OFFER, BERTH_OFFERVariables as BERTH_OFFER_VARS } from './__generated__/BERTH_OFFER';
import { getBerthData, getAllPiersIdentifiers, getApplicationBoat, getHarbor, getApplicationTypeTKey } from './utils';
import { formatDate } from '../../common/utils/format';
import { CREATE_BERTH_LEASE_MUTATION } from './mutations';
import {
  CREATE_BERTH_LEASE,
  CREATE_BERTH_LEASEVariables as CREATE_BERTH_LEASE_VARS,
} from './__generated__/CREATE_BERTH_LEASE';
import { BERTH_APPLICATIONS_QUERY } from '../applicationList/queries';
import { BerthData } from './types';
import useRouterQuery from '../../common/hooks/useRouterQuery';
import {
  showBerthSuccessToast,
  ErrorNotification,
  NoDataNotification,
  NoBoatErrorNotification,
} from './components/notifications';

const BerthOfferContainer = () => {
  const { t, i18n } = useTranslation();
  const routerQuery = useRouterQuery();
  const history = useHistory();

  const harborId = routerQuery.get('harbor') || '';
  const applicationId = routerQuery.get('application') || '';

  const { loading: applicationLoading, error: applicationError, data: applicationData } = useQuery<
    BERTH_OFFER,
    BERTH_OFFER_VARS
  >(BERTH_OFFER_QUERY, {
    variables: { applicationId, harborId },
  });

  const [createBerthLease, { loading: isSubmitting }] = useMutation<CREATE_BERTH_LEASE, CREATE_BERTH_LEASE_VARS>(
    CREATE_BERTH_LEASE_MUTATION,
    {
      refetchQueries: [getOperationName(BERTH_APPLICATIONS_QUERY) || 'BERTH_APPLICATIONS'],
    }
  );

  if (applicationLoading) return <LoadingSpinner />;

  const data = applicationData?.harbor;
  const boat = getApplicationBoat(applicationData?.berthApplication, applicationData?.boatTypes);

  if (!data) return <NoDataNotification />;
  if (applicationError) return <ErrorNotification />;
  if (!boat) return <NoBoatErrorNotification />;

  const application = applicationData?.berthApplication && {
    date: formatDate(applicationData.berthApplication.createdAt, i18n.language),
    status: applicationData.berthApplication.status,
    type: t(getApplicationTypeTKey(!!applicationData.berthApplication.berthSwitch)),
  };
  const tableData = getBerthData(data);
  const harbor = getHarbor(data);
  const piersIdentifiers = getAllPiersIdentifiers(data?.properties?.piers);

  const handleReturn = () => history.goBack();
  const handleClickSelect = (berth: BerthData) => {
    createBerthLease({
      variables: {
        input: {
          applicationId: applicationId,
          customerId: undefined,
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
