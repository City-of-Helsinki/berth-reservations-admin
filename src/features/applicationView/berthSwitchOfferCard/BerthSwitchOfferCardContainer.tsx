import React, { useState } from 'react';
import { PureQueryOptions } from 'apollo-client';
import { useMutation } from '@apollo/react-hooks';

import { BerthSwitchOfferDetails } from './types';
import { SEND_BERTH_SWITCH_OFFER_MUTATION, UPDATE_BERTH_SWITCH_OFFER_MUTATION } from './mutations';
import {
  SEND_BERTH_SWITCH_OFFER,
  SEND_BERTH_SWITCH_OFFERVariables as SEND_BERTH_SWITCH_OFFER_VARS,
} from './__generated__/SEND_BERTH_SWITCH_OFFER';
import hdsToast from '../../../common/toast/hdsToast';
import { getProfileToken } from '../../../common/utils/auth';
import Modal from '../../../common/modal/Modal';
import SendSwitchOfferForm from './sendSwitchOfferForm/SendSwitchOfferForm';
import {
  UPDATE_BERTH_SWITCH_OFFER,
  UPDATE_BERTH_SWITCH_OFFERVariables as UPDATE_BERTH_SWITCH_OFFER_VARS,
} from './__generated__/UPDATE_BERTH_SWITCH_OFFER';
import { OfferStatus } from '../../../@types/__generated__/globalTypes';
import BerthSwitchOfferCard from './BerthSwitchOfferCard';

export interface BerthSwitchOfferCardContainerProps {
  className?: string;
  customerName: string;
  refetchQueries: PureQueryOptions[] | string[];
  switchOffer: BerthSwitchOfferDetails;
}

const BerthSwitchOfferCardContainer = ({
  className,
  customerName,
  refetchQueries,
  switchOffer,
}: BerthSwitchOfferCardContainerProps) => {
  const [sendOfferModalOpen, setSendOfferModalOpen] = useState<boolean>(false);
  const [sendBerthSwitchOfferMutation, { loading: isSending }] = useMutation<
    SEND_BERTH_SWITCH_OFFER,
    SEND_BERTH_SWITCH_OFFER_VARS
  >(SEND_BERTH_SWITCH_OFFER_MUTATION, {
    refetchQueries: refetchQueries,
  });
  const sendBerthSwitchOffer = ({ dueDate }: { dueDate: string }) => {
    sendBerthSwitchOfferMutation({
      variables: {
        input: {
          offers: [switchOffer.id],
          profileToken: getProfileToken(),
          dueDate: dueDate,
        },
      },
    }).then((res) => {
      if (res.data?.sendBerthSwitchOffer?.failedOffers && res.data?.sendBerthSwitchOffer?.failedOffers.length > 0) {
        hdsToast({
          type: 'error',
          labelText: 'toast.invoiceError.label',
          text: 'toast.invoiceError.description',
          translated: true,
        });
      } else if (!res.errors) {
        hdsToast({
          type: 'success',
          labelText: 'toast.invoiceSent.label',
          text: 'toast.invoiceSent.description',
          translated: true,
        });
      }
    });
  };

  const [updateBerthSwitchOfferMutation, { loading: isUpdating }] = useMutation<
    UPDATE_BERTH_SWITCH_OFFER,
    UPDATE_BERTH_SWITCH_OFFER_VARS
  >(UPDATE_BERTH_SWITCH_OFFER_MUTATION, {
    refetchQueries: refetchQueries,
  });
  const cancelBerthSwitchOffer = () => {
    updateBerthSwitchOfferMutation({
      variables: {
        input: {
          id: switchOffer.id,
          status: OfferStatus.CANCELLED,
        },
      },
    }).then((res) => {
      if (res.errors) {
        hdsToast({
          type: 'error',
          labelText: 'toast.changesError.label',
          text: 'toast.changesError.description',
          translated: true,
        });
      } else {
        hdsToast({
          type: 'success',
          labelText: 'toast.offerCancelled.label',
          text: 'toast.offerCancelled.description',
          translated: true,
        });
      }
    });
  };

  const isSubmitting = isSending || isUpdating;

  return (
    <>
      <BerthSwitchOfferCard
        className={className}
        customerName={customerName}
        switchOffer={switchOffer}
        isSubmitting={isSubmitting}
        sendBerthSwitchOffer={() => setSendOfferModalOpen(true)}
        cancelBerthSwitchOffer={() => cancelBerthSwitchOffer()}
      />

      <Modal isOpen={sendOfferModalOpen} toggleModal={() => setSendOfferModalOpen(false)}>
        <SendSwitchOfferForm
          isSubmitting={isSubmitting}
          onCancel={() => setSendOfferModalOpen(false)}
          onSubmit={(formData) => {
            setSendOfferModalOpen(false);
            sendBerthSwitchOffer(formData);
          }}
        />
      </Modal>
    </>
  );
};

export default BerthSwitchOfferCardContainer;
