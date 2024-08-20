import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { getOperationName } from 'apollo-link';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import { BERTH_OFFER_QUERY } from './queries';
import BerthOffer from './components/BerthOffer';
import { BERTH_OFFER, BERTH_OFFERVariables as BERTH_OFFER_VARS } from './__generated__/BERTH_OFFER';
import { getBerthData, getAllPiersIdentifiers, getApplicationBoat, getHarbor, getApplicationTypeTKey } from './utils';
import { formatDate } from '../../common/utils/format';
import { BerthData } from './types';
import useRouterQuery from '../../common/hooks/useRouterQuery';
import {
  showBerthSuccessToast,
  ErrorNotification,
  NoDataNotification,
  NoBoatErrorNotification,
} from './components/notifications';
import { CREATE_BERTH_SWITCH_OFFER_MUTATION } from './mutations';
import {
  CREATE_BERTH_SWITCH_OFFER,
  CREATE_BERTH_SWITCH_OFFERVariables as CREATE_BERTH_SWITCH_OFFER_VARS,
} from './__generated__/CREATE_BERTH_SWITCH_OFFER';
import { BERTH_APPLICATIONS_QUERY } from '../applicationList/queries';
import SelectBerthLease from './selectBerthLease/SelectBerthLease';

const BerthSwitchOfferContainer = () => {
  const { t, i18n } = useTranslation();
  const routerQuery = useRouterQuery();
  const history = useHistory();

  const harborId = routerQuery.get('harbor') || '';
  const applicationId = routerQuery.get('application') || '';

  const [selectedBerth, setSelectedBerth] = useState<BerthData | undefined>(undefined);
  const [showSelectLease, setShowSelectLease] = useState<boolean>(false);

  const { loading: applicationLoading, error: applicationError, data: applicationData } = useQuery<
    BERTH_OFFER,
    BERTH_OFFER_VARS
  >(BERTH_OFFER_QUERY, {
    variables: { applicationId, harborId },
  });

  const [createBerthSwitchOfferMutation, { loading: isSubmitting }] = useMutation<
    CREATE_BERTH_SWITCH_OFFER,
    CREATE_BERTH_SWITCH_OFFER_VARS
  >(CREATE_BERTH_SWITCH_OFFER_MUTATION, {
    refetchQueries: [getOperationName(BERTH_APPLICATIONS_QUERY) || 'BERTH_APPLICATIONS'],
  });
  const createBerthSwitchOffer = (berth: BerthData, oldLeaseId?: string) =>
    createBerthSwitchOfferMutation({
      variables: {
        input: {
          applicationId: applicationId,
          newBerthId: berth.id,
          oldLeaseId: oldLeaseId,
        },
      },
    });

  if (applicationLoading) return <LoadingSpinner />;

  const data = applicationData?.harbor;
  const boat = getApplicationBoat(applicationData?.berthApplication, applicationData?.boatTypes);
  const customerId = applicationData?.berthApplication?.customer?.id;

  if (!data) return <NoDataNotification />;
  if (applicationError) return <ErrorNotification />;
  if (!boat) return <NoBoatErrorNotification />;
  if (!customerId) return <ErrorNotification />;

  const application = applicationData?.berthApplication && {
    date: formatDate(applicationData.berthApplication.createdAt, i18n.language),
    status: applicationData.berthApplication.status,
    type: t(getApplicationTypeTKey(!!applicationData.berthApplication.berthSwitch)),
  };
  const tableData = getBerthData(data);
  const harbor = getHarbor(data);
  const piersIdentifiers = getAllPiersIdentifiers(data?.properties?.piers);

  const handleReturn = () => history.goBack();
  const onSuccess = (berth: BerthData) => {
    history.goBack();
    showBerthSuccessToast(berth, t);
  };
  const handleClickSelect = (berth: BerthData) => {
    setSelectedBerth(berth);
    createBerthSwitchOffer(berth)
      .then((result) => {
        if (result.errors) return;
        onSuccess(berth);
      })
      .catch(() => {
        setShowSelectLease(true);
      });
  };

  return (
    <>
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

      {showSelectLease && (
        <SelectBerthLease
          confirm={(oldLeaseId: string) => {
            createBerthSwitchOffer(selectedBerth as BerthData, oldLeaseId).then((result) => {
              if (result.errors) return;
              onSuccess(selectedBerth as BerthData);
            });
          }}
          closeModal={() => setShowSelectLease(false)}
          customerId={customerId}
          isSubmitting={isSubmitting}
        />
      )}
    </>
  );
};

export default BerthSwitchOfferContainer;
