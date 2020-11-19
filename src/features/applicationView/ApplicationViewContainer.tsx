import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useHistory, useParams } from 'react-router-dom';
import { getOperationName } from 'apollo-link';

import ApplicationView from './ApplicationView';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import { INDIVIDUAL_APPLICATION_QUERY } from './queries';
import {
  INDIVIDUAL_APPLICATION,
  INDIVIDUAL_APPLICATIONVariables as INDIVIDUAL_APPLICATION_VARS,
} from './__generated__/INDIVIDUAL_APPLICATION';
import { useDeleteBerthApplication } from '../../common/mutations/deleteBerthApplication';
import { getApplicationDetailsData } from './utils';
import { getOfferDetailsData } from './berthOfferCard/utils';
import { getCustomerProfile } from '../customerView/utils';
import {
  DELETE_BERTH_APPLICATION,
  DELETE_BERTH_APPLICATIONVariables as DELETE_BERTH_APPLICATION_VARS,
} from './__generated__/DELETE_BERTH_APPLICATION';
import {
  UPDATE_BERTH_APPLICATION,
  UPDATE_BERTH_APPLICATIONVariables as UPDATE_BERTH_APPLICATION_VARS,
} from '../linkApplicationToCustomer/__generated__/UPDATE_BERTH_APPLICATION';
import { UPDATE_BERTH_APPLICATION_MUTATION } from '../linkApplicationToCustomer/mutations';
import Modal from '../../common/modal/Modal';
import EditCustomerForm from '../customerForm/EditCustomerFormContainer';
import hdsToast from '../../common/toast/hdsToast';
import { DELETE_BERTH_APPLICATION_MUTATION, REJECT_BERTH_APPLICATION_MUTATION } from './mutations';
import {
  REJECT_BERTH_APPLICATION,
  REJECT_BERTH_APPLICATIONVariables as REJECT_BERTH_APPLICATION_VARS,
} from './__generated__/REJECT_BERTH_APPLICATION';

const ApplicationViewContainer = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [editCustomer, setEditCustomer] = useState<boolean>(false);
  const { loading, data } = useQuery<INDIVIDUAL_APPLICATION, INDIVIDUAL_APPLICATION_VARS>(
    INDIVIDUAL_APPLICATION_QUERY,
    {
      variables: {
        id,
      },
    }
  );
  const refetchQuery = {
    query: INDIVIDUAL_APPLICATION_QUERY,
    variables: {
      id,
    },
  };
  const [deleteApplication, { loading: isDeletingApplication }] = useMutation<
    DELETE_BERTH_APPLICATION,
    DELETE_BERTH_APPLICATION_VARS
  >(DELETE_BERTH_APPLICATION_MUTATION, {
    refetchQueries: [refetchQuery],
  });
  const [linkCustomer] = useMutation<UPDATE_BERTH_APPLICATION, UPDATE_BERTH_APPLICATION_VARS>(
    UPDATE_BERTH_APPLICATION_MUTATION,
    {
      refetchQueries: [refetchQuery],
    }
  );
  const [deleteDraftedApplication, { loading: isDeletingLease }] = useDeleteBerthApplication();
  const [rejectApplication] = useMutation<REJECT_BERTH_APPLICATION, REJECT_BERTH_APPLICATION_VARS>(
    REJECT_BERTH_APPLICATION_MUTATION,
    {
      refetchQueries: [refetchQuery],
    }
  );

  const handleDeleteApplication = () =>
    deleteApplication({
      variables: {
        input: {
          id: applicationDetails.id,
        },
      },
    }).then(() => {
      history.replace('/applications');
      hdsToast({
        type: 'info',
        labelText: 'toast.noticeDeleted.label',
        text: 'toast.noticeDeleted.description',
        translated: true,
      });
    });
  const handleLinkCustomer = (customerId: string) =>
    linkCustomer({
      variables: {
        input: { id, customerId },
      },
    });
  const handleUnlinkCustomer = () => linkCustomer({ variables: { input: { id } } });
  const handleDeleteLease = (id: string) =>
    deleteDraftedApplication({
      variables: {
        input: {
          id,
        },
      },
      refetchQueries: [getOperationName(INDIVIDUAL_APPLICATION_QUERY) || 'INDIVIDUAL_APPLICATION'],
    });
  const handleNoPlacesAvailable = () =>
    rejectApplication({
      variables: {
        input: {
          id,
        },
      },
    });

  if (loading || !data?.berthApplication) return <LoadingSpinner isLoading={true} />;

  const { customer } = data.berthApplication;
  const customerProfile = customer ? getCustomerProfile(customer) : null;
  const applicationDetails = getApplicationDetailsData(data.berthApplication, data.boatTypes || []);
  const leaseDetails = getOfferDetailsData(data.berthApplication.lease);

  return (
    <>
      <ApplicationView
        applicationDetails={applicationDetails}
        berthApplication={data.berthApplication}
        customerProfile={customerProfile}
        handleDeleteApplication={handleDeleteApplication}
        handleDeleteLease={handleDeleteLease}
        handleEditCustomer={() => setEditCustomer(true)}
        handleLinkCustomer={handleLinkCustomer}
        handleNoPlacesAvailable={handleNoPlacesAvailable}
        handleUnlinkCustomer={handleUnlinkCustomer}
        isDeletingApplication={isDeletingApplication}
        isDeletingLease={isDeletingLease}
        leaseDetails={leaseDetails}
        refetchQueries={[getOperationName(INDIVIDUAL_APPLICATION_QUERY) || 'INDIVIDUAL_APPLICATION']}
      />

      {customerProfile && (
        <Modal isOpen={editCustomer} toggleModal={() => setEditCustomer(false)}>
          <EditCustomerForm
            customerId={customerProfile.customerId}
            onCancel={() => setEditCustomer(false)}
            onSubmit={() => setEditCustomer(false)}
            refetchQueries={[getOperationName(INDIVIDUAL_APPLICATION_QUERY) || 'INDIVIDUAL_APPLICATION']}
          />
        </Modal>
      )}
    </>
  );
};

export default ApplicationViewContainer;
