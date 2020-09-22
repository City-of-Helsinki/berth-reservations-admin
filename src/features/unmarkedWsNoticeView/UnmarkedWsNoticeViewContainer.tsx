import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useHistory, useParams } from 'react-router-dom';

import UnmarkedWsNoticeView from './UnmarkedWsNoticeView';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import { UNMARKED_WINTER_STORAGE_NOTICE_QUERY } from './queries';
import {
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
import CustomerEditForm from '../customerForm/CustomerEditFormContainer';

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
  const [deleteNotice] = useMutation<DELETE_UNMARKED_WINTER_STORAGE_NOTICE, DELETE_UNMARKED_WINTER_STORAGE_NOTICE_VARS>(
    DELETE_UNMARKED_WINTER_STORAGE_NOTICE_MUTATION,
    {
      refetchQueries: [
        {
          query: UNMARKED_WINTER_STORAGE_NOTICE_QUERY,
          variables: {
            id,
          },
        },
      ],
    }
  );
  const [linkCustomer] = useMutation<UPDATE_UNMARKED_WINTER_STORAGE_NOTICE, UPDATE_UNMARKED_WINTER_STORAGE_NOTICE_VARS>(
    UPDATE_UNMARKED_WINTER_STORAGE_NOTICE_MUTATION,
    {
      refetchQueries: [
        {
          query: UNMARKED_WINTER_STORAGE_NOTICE_QUERY,
          variables: {
            id,
          },
        },
      ],
    }
  );

  if (loading || !data?.winterStorageNotice) return <LoadingSpinner isLoading={true} />;

  const customer = data?.winterStorageNotice?.customer;
  const customerProfile = customer ? getCustomerProfile(customer) : null;

  const noticeDetails = getNoticeDetailsData(data.winterStorageNotice, data.boatTypes || []);

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
        type: 'notification',
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

  return (
    <>
      <UnmarkedWsNoticeView
        customerProfile={customerProfile}
        noticeDetails={noticeDetails}
        winterStorageNotice={data.winterStorageNotice}
        handleDeleteNotice={handleDeleteNotice}
        handleEditCustomer={() => setEditCustomer(true)}
        handleLinkCustomer={handleLinkCustomer}
      />

      {customerProfile && (
        <Modal isOpen={editCustomer} toggleModal={() => setEditCustomer(false)}>
          <CustomerEditForm
            customerId={customerProfile.customerId as string}
            onCancel={() => setEditCustomer(false)}
            onSubmit={() => setEditCustomer(false)}
            refetchQueries={[
              {
                query: UNMARKED_WINTER_STORAGE_NOTICE_QUERY,
                variables: {
                  id,
                },
              },
            ]}
          />
        </Modal>
      )}
    </>
  );
};

export default UnmarkedWsNoticeViewContainer;
