import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
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
  UPDATE_BERTH_APPLICATION,
  UPDATE_BERTH_APPLICATIONVariables as UPDATE_BERTH_APPLICATION_VARS,
} from '../linkApplicationToCustomer/__generated__/UPDATE_BERTH_APPLICATION';
import { UPDATE_BERTH_APPLICATION_MUTATION } from '../linkApplicationToCustomer/mutations';
import Modal from '../../common/modal/Modal';
import CustomerEditForm from '../customerForm/CustomerEditFormContainer';

const ApplicationViewContainer = () => {
  const { id } = useParams<{ id: string }>();

  const { loading, data } = useQuery<INDIVIDUAL_APPLICATION, INDIVIDUAL_APPLICATION_VARS>(
    INDIVIDUAL_APPLICATION_QUERY,
    {
      variables: {
        id,
      },
    }
  );

  const [linkCustomer] = useMutation<UPDATE_BERTH_APPLICATION, UPDATE_BERTH_APPLICATION_VARS>(
    UPDATE_BERTH_APPLICATION_MUTATION,
    {
      refetchQueries: [
        {
          query: INDIVIDUAL_APPLICATION_QUERY,
          variables: {
            id,
          },
        },
      ],
    }
  );

  const handleLinkCustomer = (customerId: string) =>
    linkCustomer({
      variables: {
        input: { id, customerId },
      },
    });

  const [editCustomer, setEditCustomer] = useState<boolean>(false);
  const [deleteDraftedApplication] = useDeleteBerthApplication();

  const customer = data?.berthApplication?.customer;

  if (loading || !data?.berthApplication) return <LoadingSpinner isLoading={true} />;

  const customerProfile = customer ? getCustomerProfile(customer) : null;
  const applicationDetails = getApplicationDetailsData(data.berthApplication, data.boatTypes || []);
  const leaseDetails = getOfferDetailsData(data.berthApplication.lease);

  const handleDeleteLease = (id: string) => {
    deleteDraftedApplication({
      variables: {
        input: {
          id,
        },
      },
      refetchQueries: [getOperationName(INDIVIDUAL_APPLICATION_QUERY) || 'INDIVIDUAL_APPLICATION'],
    });
  };

  return (
    <>
      <ApplicationView
        applicationDetails={applicationDetails}
        berthApplication={data.berthApplication}
        customerProfile={customerProfile}
        handleDeleteLease={handleDeleteLease}
        handleEditCustomer={() => setEditCustomer(true)}
        handleLinkCustomer={handleLinkCustomer}
        leaseDetails={leaseDetails}
        refetchQueries={[getOperationName(INDIVIDUAL_APPLICATION_QUERY) || 'INDIVIDUAL_APPLICATION']}
      />

      {customerProfile && (
        <Modal isOpen={editCustomer} toggleModal={() => setEditCustomer(false)}>
          <CustomerEditForm
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
