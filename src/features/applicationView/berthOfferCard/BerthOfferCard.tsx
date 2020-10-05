import React from 'react';
import { IconTrash } from 'hds-react';
import { useTranslation } from 'react-i18next';
import { PureQueryOptions } from 'apollo-client';

import InternalLink from '../../../common/internalLink/InternalLink';
import { IconFence, IconPlug, IconStreetLight, IconWaterTap } from '../../../common/icons';
import Button from '../../../common/button/Button';
import InvoiceCard from '../../invoiceCard/InvoiceCardContainer';
import { PlaceProperty } from '../../invoiceCard/types';
import PlaceDetails from './PlaceDetails';
import { LeaseDetails } from './types';
import { ApplicationStatus } from '../../../@types/__generated__/globalTypes';

export interface BerthOfferCardProps {
  className?: string;
  applicationStatus: ApplicationStatus;
  leaseDetails: LeaseDetails;
  refetchQueries: PureQueryOptions[] | string[];
  handleDeleteLease: (id: string) => void;
}

const BerthOfferCard = ({
  className,
  applicationStatus,
  leaseDetails: {
    id,
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
    harborName,
    lighting,
    pierIdentifier,
    wasteCollection,
    water,
    order,
  },
  refetchQueries,
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
    <>
      <InvoiceCard
        applicationStatus={applicationStatus}
        buttonsRight={
          <>
            <Button variant="supplementary" disabled>
              {t('offer.billing.showBill')}
            </Button>
            <Button variant="supplementary" disabled>
              {t('offer.billing.showContract')}
            </Button>
            <Button variant="secondary" theme="coat" onClick={() => handleDeleteLease(id)}>
              {t('offer.billing.removeOffer')}
            </Button>
          </>
        }
        className={className}
        customerEmail={customerEmail}
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
          <InternalLink to="/" underlined>
            {[harborName, pierIdentifier, berthNum].filter(Boolean).join(' ')}
          </InternalLink>
        }
        placeProperties={properties}
        placeType={t('common.terminology.berth').toUpperCase()}
        refetchQueries={refetchQueries}
        title={t('offer.title').toUpperCase()}
      />
    </>
  );
};

export default BerthOfferCard;
