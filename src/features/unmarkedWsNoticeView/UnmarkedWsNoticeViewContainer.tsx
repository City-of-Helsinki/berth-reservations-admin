import React from 'react';
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
import { getWinterStorageNoticeDetailsData } from './utils';
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

const UnmarkedWsNoticeViewContainer = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

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

  const noticeDetails = getWinterStorageNoticeDetailsData(data.winterStorageNotice, data.boatTypes || []);

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
    <UnmarkedWsNoticeView
      customerProfile={customerProfile}
      noticeDetails={noticeDetails}
      winterStorageNotice={data.winterStorageNotice}
      handleDeleteNotice={handleDeleteNotice}
      handleLinkCustomer={handleLinkCustomer}
    />
  );
};

export default UnmarkedWsNoticeViewContainer;
