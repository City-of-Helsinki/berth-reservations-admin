import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useHistory, useParams } from 'react-router-dom';
import { Notification } from 'hds-react';
import { useTranslation } from 'react-i18next';
import WinterStorageApplicationView from './WinterStorageApplicationView';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import { INDIVIDUAL_WINTER_STORAGE_APPLICATION_QUERY } from './queries';
import { useDeleteWinterStorageApplication } from '../../common/mutations/deleteBerthApplication';
import { UPDATE_WINTER_STORAGE_APPLICATION_MUTATION, DELETE_WINTER_STORAGE_APPLICATION_MUTATION } from './mutations';
import {
  UPDATE_WINTER_STORAGE_APPLICATION,
  UPDATE_WINTER_STORAGE_APPLICATIONVariables as UPDATE_WINTER_STORAGE_APPLICATION_VARS,
} from './__generated__/UPDATE_WINTER_STORAGE_APPLICATION';
import { getWinterStorageApplicationDetailsData } from './utils';
import {
  INDIVIDUAL_WINTER_STORAGE_APPLICATION,
  INDIVIDUAL_WINTER_STORAGE_APPLICATIONVariables as INDIVIDUAL_WINTER_STORAGE_APPLICATION_VARS,
} from './__generated__/INDIVIDUAL_WINTER_STORAGE_APPLICATION';
import {
  DELETE_WINTER_STORAGE_APPLICATION,
  DELETE_WINTER_STORAGE_APPLICATIONVariables as DELETE_WINTER_STORAGE_APPLICATION_VARS,
} from './__generated__/DELETE_WINTER_STORAGE_APPLICATION';
import { getCustomerProfile } from '../customerView/utils';
import Modal from '../../common/modal/Modal';
import EditCustomerForm from '../customerForm/EditCustomerFormContainer';
import hdsToast from '../../common/toast/hdsToast';
import { getOfferDetailsData } from './winterStorageOfferCard/utils';

const WinterStorageApplicationViewContainer = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [editCustomer, setEditCustomer] = useState<boolean>(false);

  const { loading, data } = useQuery<INDIVIDUAL_WINTER_STORAGE_APPLICATION, INDIVIDUAL_WINTER_STORAGE_APPLICATION_VARS>(
    INDIVIDUAL_WINTER_STORAGE_APPLICATION_QUERY,
    {
      variables: {
        id,
      },
    }
  );
  const refetchQueries = [
    {
      query: INDIVIDUAL_WINTER_STORAGE_APPLICATION_QUERY,
      variables: {
        id,
      },
    },
  ];

  const [deleteDraftedApplication, { loading: isDeletingLease }] = useDeleteWinterStorageApplication();
  const handleDeleteLease = (id: string) => {
    deleteDraftedApplication({
      variables: {
        input: {
          id,
        },
      },
    });
  };

  const [deleteApplication, { loading: isDeletingApplication }] = useMutation<
    DELETE_WINTER_STORAGE_APPLICATION,
    DELETE_WINTER_STORAGE_APPLICATION_VARS
  >(DELETE_WINTER_STORAGE_APPLICATION_MUTATION, {
    refetchQueries,
  });
  const handleDeleteApplication = () =>
    deleteApplication({
      variables: {
        input: {
          id: applicationDetails.id,
        },
      },
    }).then(() => {
      history.replace('/winter-storage-applications');
      hdsToast({
        type: 'info',
        labelText: 'toast.noticeDeleted.label',
        text: 'toast.noticeDeleted.description',
        translated: true,
      });
    });

  const [linkCustomer] = useMutation<UPDATE_WINTER_STORAGE_APPLICATION, UPDATE_WINTER_STORAGE_APPLICATION_VARS>(
    UPDATE_WINTER_STORAGE_APPLICATION_MUTATION,
    {
      refetchQueries,
    }
  );
  const handleLinkCustomer = (customerId: string) => {
    linkCustomer({
      variables: {
        input: { id, customerId },
      },
    });
  };
  const handleUnlinkCustomer = () => linkCustomer({ variables: { input: { id, customerId: null } } });

  if (loading) return <LoadingSpinner />;
  if (!data?.winterStorageApplication)
    return (
      <Notification
        size="large"
        closeButtonLabelText={t('toast.closeToast') ?? ''}
        label={t('common.notification.noData.label')}
      >
        {t('common.notification.noData.description')}
      </Notification>
    );

  const { customer } = data.winterStorageApplication;
  const customerProfile = customer ? getCustomerProfile(customer) : null;
  const applicationDetails = getWinterStorageApplicationDetailsData(
    data.winterStorageApplication,
    data.boatTypes || []
  );
  const leaseDetails = getOfferDetailsData(data.winterStorageApplication.lease);

  return (
    <>
      <WinterStorageApplicationView
        applicationDetails={applicationDetails}
        customerProfile={customerProfile}
        handleDeleteApplication={handleDeleteApplication}
        handleDeleteLease={handleDeleteLease}
        handleEditCustomer={() => setEditCustomer(true)}
        handleLinkCustomer={handleLinkCustomer}
        handleUnlinkCustomer={handleUnlinkCustomer}
        isDeletingApplication={isDeletingApplication}
        isDeletingLease={isDeletingLease}
        leaseDetails={leaseDetails}
        refetchQueries={refetchQueries}
        winterStorageApplication={data.winterStorageApplication}
      />

      {customerProfile && (
        <Modal isOpen={editCustomer} toggleModal={() => setEditCustomer(false)}>
          <EditCustomerForm
            customerId={customerProfile.customerId}
            onCancel={() => setEditCustomer(false)}
            onSubmit={() => setEditCustomer(false)}
            refetchQueries={refetchQueries}
          />
        </Modal>
      )}
    </>
  );
};

export default WinterStorageApplicationViewContainer;
