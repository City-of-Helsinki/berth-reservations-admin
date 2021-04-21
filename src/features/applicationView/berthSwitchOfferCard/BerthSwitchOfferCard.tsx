import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PureQueryOptions } from 'apollo-client';
import { IconTrash } from 'hds-react';
import { useMutation } from '@apollo/react-hooks';

import CardHeader from '../../../common/cardHeader/CardHeader';
import Card from '../../../common/card/Card';
import CardBody from '../../../common/cardBody/CardBody';
import Section from '../../../common/section/Section';
import Grid from '../../../common/grid/Grid';
import { BerthSwitchOfferDetails, PlaceProperty } from './types';
import Property from '../../../common/property/Property';
import styles from './berthSwitchOfferCard.module.scss';
import { IconFence, IconPlug, IconStreetLight, IconWaterTap } from '../../../common/icons';
import PlaceDetails from '../berthOfferCard/PlaceDetails';
import Button from '../../../common/button/Button';
import { SEND_BERTH_SWITCH_OFFER_MUTATION, UPDATE_BERTH_SWITCH_OFFER_MUTATION } from './mutations';
import {
  SEND_BERTH_SWITCH_OFFER,
  SEND_BERTH_SWITCH_OFFERVariables as SEND_BERTH_SWITCH_OFFER_VARS,
} from './__generated__/SEND_BERTH_SWITCH_OFFER';
import hdsToast from '../../../common/toast/hdsToast';
import StatusLabel from '../../../common/statusLabel/StatusLabel';
import { OFFER_STATUS } from '../../../common/utils/constants';
import { getProfileToken } from '../../../common/utils/auth';
import Modal from '../../../common/modal/Modal';
import SendSwitchOfferForm from './sendSwitchOfferForm/SendSwitchOfferForm';
import ButtonWithConfirmation from '../../../common/buttonWithConfirmation/ButtonWithConfirmation';
import {
  UPDATE_BERTH_SWITCH_OFFER,
  UPDATE_BERTH_SWITCH_OFFERVariables as UPDATE_BERTH_SWITCH_OFFER_VARS,
} from './__generated__/UPDATE_BERTH_SWITCH_OFFER';
import { OfferStatus } from '../../../@types/__generated__/globalTypes';

export interface BerthSwitchOfferCardProps {
  className?: string;
  customerName: string;
  refetchQueries: PureQueryOptions[] | string[];
  switchOffer: BerthSwitchOfferDetails;
}

const BerthSwitchOfferCard = ({
  className,
  customerName,
  refetchQueries,
  switchOffer: {
    berthComment,
    berthDepth,
    berthIsAccessible,
    berthLength,
    berthMooringType,
    berthNum,
    berthWidth,
    electricity,
    gate,
    harborName,
    id,
    lighting,
    pierIdentifier,
    status,
    wasteCollection,
    water,
  },
}: BerthSwitchOfferCardProps) => {
  const { t } = useTranslation();

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
          offers: [id],
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
          id: id,
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

  const mapPlaceProperties = (placeProperties: PlaceProperty[]) =>
    placeProperties.map(
      ({ prop, key, icon }) =>
        prop !== null && (
          <Property
            className={styles.property}
            key={key}
            active={prop}
            icon={icon}
            label={t(`common.terminology.${key}`)}
          />
        )
    );
  const properties: PlaceProperty[] = [
    { prop: wasteCollection, key: 'wasteCollection', icon: IconTrash },
    { prop: electricity, key: 'electricity', icon: IconPlug },
    { prop: lighting, key: 'lighting', icon: IconStreetLight },
    { prop: gate, key: 'gate', icon: IconFence },
    { prop: water, key: 'water', icon: IconWaterTap },
  ];
  const address = [harborName, pierIdentifier, berthNum].filter(Boolean).join(' ');
  const isSubmitting = isSending || isUpdating;

  return (
    <>
      <Card className={className}>
        <CardHeader title={t('common.terminology.switchOffer').toUpperCase()}>
          <StatusLabel type={OFFER_STATUS[status].type} label={t(OFFER_STATUS[status].label)} />
        </CardHeader>
        <CardBody>
          <Grid colsCount={3}>
            <Section title={t('common.terminology.berth').toUpperCase()}>
              <Section>{address}</Section>
              <Section>
                <div className={styles.properties}>{mapPlaceProperties(properties)}</div>
              </Section>
            </Section>
            <Section title={t('invoiceCard.placeDetails.title').toUpperCase()}>
              <PlaceDetails
                berthMooringType={berthMooringType}
                berthWidth={berthWidth}
                berthLength={berthLength}
                berthDepth={berthDepth}
                berthIsAccessible={berthIsAccessible}
                berthComment={berthComment}
              />
            </Section>
          </Grid>

          <hr />

          <div className={styles.buttonRow}>
            <Button
              disabled={isSubmitting || status === OfferStatus.CANCELLED}
              onClick={() => setSendOfferModalOpen(true)}
            >
              {t('applicationView.berthSwitchOffer.sendOffer')}
            </Button>
            <ButtonWithConfirmation
              disabled={isSubmitting || !(status === OfferStatus.OFFERED || status === OfferStatus.EXPIRED)}
              onConfirm={() => cancelBerthSwitchOffer()}
              buttonText={t('applicationView.berthSwitchOffer.cancelOffer')}
              infoText={t('applicationView.berthSwitchOffer.cancelConfirmation.infoText', {
                customerName: customerName,
                address: address,
              })}
              warningText={t('applicationView.berthSwitchOffer.cancelConfirmation.warningText')}
              modalTitle={t('applicationView.berthSwitchOffer.cancelOffer').toUpperCase()}
              onCancelText={t('common.close')}
              onConfirmText={t('applicationView.berthSwitchOffer.cancelOffer')}
            />
          </div>
        </CardBody>
      </Card>

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

export default BerthSwitchOfferCard;
