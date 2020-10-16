import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useHistory, useParams } from 'react-router-dom';

import UnmarkedWsNoticeView from './UnmarkedWsNoticeView';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import { UNMARKED_WINTER_STORAGE_NOTICE_QUERY } from './queries';
import {
  CREATE_UNMARKED_WINTER_STORAGE_LEASE_MUTATION,
  DELETE_UNMARKED_WINTER_STORAGE_LEASE_MUTATION,
  DELETE_UNMARKED_WINTER_STORAGE_NOTICE_MUTATION,
  UPDATE_UNMARKED_WINTER_STORAGE_NOTICE_MUTATION,
} from './mutations';
import {
  UPDATE_UNMARKED_WINTER_STORAGE_NOTICE,
  UPDATE_UNMARKED_WINTER_STORAGE_NOTICEVariables as UPDATE_UNMARKED_WINTER_STORAGE_NOTICE_VARS,
} from './__generated__/UPDATE_UNMARKED_WINTER_STORAGE_NOTICE';
import { getNoticeDetailsData } from './utils';
import {
  UNMARKED_WINTER_STORAGE_NOTICE,
  UNMARKED_WINTER_STORAGE_NOTICEVariables as UNMARKED_WINTER_STORAGE_NOTICE_VARS,
} from './__generated__/UNMARKED_WINTER_STORAGE_NOTICE';
import { getCustomerProfile } from '../customerView/utils';
import {
  DELETE_UNMARKED_WINTER_STORAGE_NOTICE,
  DELETE_UNMARKED_WINTER_STORAGE_NOTICEVariables as DELETE_UNMARKED_WINTER_STORAGE_NOTICE_VARS,
} from './__generated__/DELETE_UNMARKED_WINTER_STORAGE_NOTICE';
import hdsToast from '../../common/toast/hdsToast';
import Modal from '../../common/modal/Modal';
import EditCustomerForm from '../customerForm/EditCustomerFormContainer';
import {
  CREATE_UNMARKED_WINTER_STORAGE_LEASE,
  CREATE_UNMARKED_WINTER_STORAGE_LEASEVariables as CREATE_UNMARKED_WINTER_STORAGE_LEASE_VARS,
} from './__generated__/CREATE_UNMARKED_WINTER_STORAGE_LEASE';
import {
  DELETE_UNMARKED_WINTER_STORAGE_LEASE,
  DELETE_UNMARKED_WINTER_STORAGE_LEASEVariables as DELETE_UNMARKED_WINTER_STORAGE_LEASE_VARS,
} from './__generated__/DELETE_UNMARKED_WINTER_STORAGE_LEASE';
import { getOrder } from '../invoiceCard/utils';

const UnmarkedWsNoticeViewContainer = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [editCustomer, setEditCustomer] = useState<boolean>(false);

  const { loading, data } = useQuery<UNMARKED_WINTER_STORAGE_NOTICE, UNMARKED_WINTER_STORAGE_NOTICE_VARS>(
    UNMARKED_WINTER_STORAGE_NOTICE_QUERY,
    {
      variables: {
        id,
      },
    }
  );
  const refetchQueries = [
    {
      query: UNMARKED_WINTER_STORAGE_NOTICE_QUERY,
      variables: {
        id,
      },
    },
  ];

  const [deleteNotice, { loading: isDeleteNoticeLoading }] = useMutation<
    DELETE_UNMARKED_WINTER_STORAGE_NOTICE,
    DELETE_UNMARKED_WINTER_STORAGE_NOTICE_VARS
  >(DELETE_UNMARKED_WINTER_STORAGE_NOTICE_MUTATION, {
    refetchQueries,
  });
  const [linkCustomer] = useMutation<UPDATE_UNMARKED_WINTER_STORAGE_NOTICE, UPDATE_UNMARKED_WINTER_STORAGE_NOTICE_VARS>(
    UPDATE_UNMARKED_WINTER_STORAGE_NOTICE_MUTATION,
    {
      refetchQueries,
    }
  );
  const [createLease, { loading: isCreateLeaseLoading }] = useMutation<
    CREATE_UNMARKED_WINTER_STORAGE_LEASE,
    CREATE_UNMARKED_WINTER_STORAGE_LEASE_VARS
  >(CREATE_UNMARKED_WINTER_STORAGE_LEASE_MUTATION, {
    refetchQueries,
  });
  const [deleteLease, { loading: isDeleteLeaseLoading }] = useMutation<
    DELETE_UNMARKED_WINTER_STORAGE_LEASE,
    DELETE_UNMARKED_WINTER_STORAGE_LEASE_VARS
  >(DELETE_UNMARKED_WINTER_STORAGE_LEASE_MUTATION, {
    refetchQueries,
  });

  if (loading || !data?.winterStorageNotice) return <LoadingSpinner isLoading={true} />;

  const customer = data?.winterStorageNotice?.customer;
  const customerProfile = customer ? getCustomerProfile(customer) : null;

  const noticeDetails = getNoticeDetailsData(data.winterStorageNotice, data.boatTypes || []);
  const order = data.winterStorageNotice?.lease?.order ? getOrder(data.winterStorageNotice.lease.order) : null;
  const leaseStatus = data.winterStorageNotice?.lease?.status ?? null;

  const handleDeleteNotice = () =>
    deleteNotice({
      variables: {
        input: {
          id: noticeDetails.id,
        },
      },
    }).then(() => {
      history.replace('/unmarked-ws-notices');
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
  const handleCreateLease = () => {
    const options = {
      variables: {
        input: {
          applicationId: noticeDetails.id,
          sectionId: noticeDetails.choice.winterStorageArea,
        },
      },
    };
    return createLease(options);
  };
  const handleDeleteLease = () => {
    if (data.winterStorageNotice?.lease) {
      return deleteLease({
        variables: {
          input: {
            id: data.winterStorageNotice?.lease.id,
          },
        },
      });
    }
  };

  return (
    <>
      <UnmarkedWsNoticeView
        customerProfile={customerProfile}
        handleCreateLease={handleCreateLease}
        handleDeleteNotice={handleDeleteNotice}
        handleDeleteLease={handleDeleteLease}
        handleEditCustomer={() => setEditCustomer(true)}
        handleLinkCustomer={handleLinkCustomer}
        isDeleteNoticeLoading={isDeleteNoticeLoading}
        isCreateLeaseLoading={isCreateLeaseLoading}
        isDeleteLeaseLoading={isDeleteLeaseLoading}
        noticeDetails={noticeDetails}
        order={order}
        leaseStatus={leaseStatus}
        refetchQueries={refetchQueries}
        winterStorageNotice={data.winterStorageNotice}
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

export default UnmarkedWsNoticeViewContainer;
