import React from 'react';
import { IconDocument, IconTrash } from 'hds-react';
import { useTranslation } from 'react-i18next';
import { PureQueryOptions } from 'apollo-client';
import InternalLink from '../../../common/internalLink/InternalLink';
import { IconDocumentCheck, IconFence, IconPlug, IconStreetLight, IconWaterTap } from '../../../common/icons';
import Button from '../../../common/button/Button';
import InvoiceCardContainer from '../../invoiceCard/InvoiceCardContainer';
import { PlaceProperty } from '../../invoiceCard/types';
import PlaceDetails from './PlaceDetails';
import { LeaseDetails } from './types';
import DeleteButton from '../../../common/deleteButton/DeleteButton';
import { canDeleteLease } from '../../../common/utils/leaseUtils';
export interface BerthOfferCardProps {
  className?: string;
  leaseDetails: LeaseDetails;
  refetchQueries: PureQueryOptions[] | string[];
  isDeletingLease: boolean;
  handleDeleteLease: (id: string) => void;
}

const BerthOfferCard = ({
  className,
  leaseDetails: {
    id,
    status,
    berthComment,
    berthDepth,
    berthIsAccessible,
    berthLength,
    berthMooringType,
    berthNum,
    berthWidth,
    customerEmail,
    electricity,
    gate,
    harborId,
    harborName,
    lighting,
    pierIdentifier,
    wasteCollection,
    water,
    order,
  },
  refetchQueries,
  isDeletingLease,
  handleDeleteLease,
}: BerthOfferCardProps) => {
  const { t } = useTranslation();

  const properties: PlaceProperty[] = [
    { prop: wasteCollection, key: 'wasteCollection', icon: IconTrash },
    { prop: electricity, key: 'electricity', icon: IconPlug },
    { prop: lighting, key: 'lighting', icon: IconStreetLight },
    { prop: gate, key: 'gate', icon: IconFence },
    { prop: water, key: 'water', icon: IconWaterTap },
  ];

  return (
    <InvoiceCardContainer
      buttonsRight={
        <>
          <Button variant="supplementary" iconLeft={<IconDocumentCheck />} disabled>
            {t('offer.invoicing.showInvoice')}
          </Button>
          <Button variant="supplementary" iconLeft={<IconDocument />} disabled>
            {t('offer.invoicing.showContract')}
          </Button>
          {canDeleteLease(status) && (
            <DeleteButton
              buttonText={t('offer.invoicing.removeOffer')}
              onConfirm={() => handleDeleteLease(id)}
              disabled={isDeletingLease}
            />
          )}
        </>
      }
      className={className}
      customerEmail={customerEmail}
      leaseStatus={status}
      order={order}
      placeDetails={
        <PlaceDetails
          berthMooringType={berthMooringType}
          berthWidth={berthWidth}
          berthLength={berthLength}
          berthDepth={berthDepth}
          berthIsAccessible={berthIsAccessible}
          berthComment={berthComment}
        />
      }
      placeName={
        <InternalLink to={`/harbors/${harborId}`} underlined>
          {[harborName, pierIdentifier, berthNum].filter(Boolean).join(' ')}
        </InternalLink>
      }
      placeProperties={properties}
      placeType={t('common.terminology.berth').toUpperCase()}
      refetchQueries={refetchQueries}
      sendButtonLabel={t('offer.invoicing.acceptAndSend')}
      title={t('common.terminology.offer').toUpperCase()}
    />
  );
};

export default BerthOfferCard;
