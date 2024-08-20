import React from 'react';
import { useTranslation } from 'react-i18next';
import { PureQueryOptions } from 'apollo-client';
import { LeaseDetails } from './types';
import { PlaceProperty } from '../../invoiceCard/types';
import InvoiceCardContainer from '../../invoiceCard/InvoiceCardContainer';
import { canDeleteLease } from '../../../common/utils/leaseUtils';
import DeleteButton from '../../../common/deleteButton/DeleteButton';
import InternalLink from '../../../common/internalLink/InternalLink';
import LabelValuePair from '../../../common/labelValuePair/LabelValuePair';
import { formatDimension } from '../../../common/utils/format';
import Section from '../../../common/section/Section';
import { IconBoat, IconDollyEmpty, IconFence, IconPlug, IconTrestle, IconWaterTap } from '../../../common/icons';

export interface WinterStorageOfferCardProps {
  className?: string;
  leaseDetails: LeaseDetails;
  refetchQueries: PureQueryOptions[] | string[];
  isDeletingLease: boolean;
  handleDeleteLease: (id: string) => void;
}

const WinterStorageOfferCard = ({
  className,
  leaseDetails: {
    areaId,
    areaName,
    customerEmail,
    electricity,
    gate,
    id,
    order,
    placeLength,
    placeNum,
    placeWidth,
    sectionIdentifier,
    status,
    summerStorageForBoats,
    summerStorageForDockingEquipment,
    summerStorageForTrailers,
    water,
  },
  refetchQueries,
  isDeletingLease,
  handleDeleteLease,
}: WinterStorageOfferCardProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const properties: PlaceProperty[] = [
    { prop: electricity, key: 'electricity', icon: IconPlug },
    { prop: water, key: 'water', icon: IconWaterTap },
    { prop: gate, key: 'gate', icon: IconFence },
    { prop: summerStorageForBoats, key: 'summerStorageForBoats', icon: IconBoat },
    { prop: summerStorageForTrailers, key: 'summerStorageForTrailers', icon: IconDollyEmpty },
    { prop: summerStorageForDockingEquipment, key: 'summerStorageForDockingEquipment', icon: IconTrestle },
  ];

  return (
    <InvoiceCardContainer
      buttonsRight={
        canDeleteLease(status) && (
          <DeleteButton
            buttonText={t('offer.invoicing.removeOffer')}
            onConfirm={() => handleDeleteLease(id)}
            disabled={isDeletingLease}
          />
        )
      }
      className={className}
      customerEmail={customerEmail}
      leaseStatus={status}
      order={order}
      placeDetails={
        <Section>
          <LabelValuePair label={t('common.terminology.width')} value={formatDimension(placeWidth, language)} />
          <LabelValuePair label={t('common.terminology.length')} value={formatDimension(placeLength, language)} />
        </Section>
      }
      placeName={
        <InternalLink to={`/winter-storage-areas/${areaId}`} underlined>
          {[areaName, sectionIdentifier, placeNum].filter(Boolean).join(' ')}
        </InternalLink>
      }
      placeProperties={properties}
      placeType={t('common.terminology.winterStoragePlace').toUpperCase()}
      refetchQueries={refetchQueries}
      sendButtonLabel={t('offer.invoicing.acceptAndSend')}
      title={t('common.terminology.offer').toUpperCase()}
    />
  );
};

export default WinterStorageOfferCard;
