import React, { useState } from 'react';
import { IconTrash } from 'hds-react';
import { useTranslation } from 'react-i18next';
import { PureQueryOptions } from 'apollo-client';

import Section from '../../../common/section/Section';
import LabelValuePair from '../../../common/labelValuePair/LabelValuePair';
import InternalLink from '../../../common/internalLink/InternalLink';
import { formatDimension } from '../../../common/utils/format';
import { BerthMooringType } from '../../../@types/__generated__/globalTypes';
import { IconFence, IconPlug, IconStreetLight, IconWaterTap } from '../../../common/icons';
import Button from '../../../common/button/Button';
import Modal from '../../../common/modal/Modal';
import EditForm from './editForm/EditForm';
import SendInvoiceForm from './sendInvoiceForm/SendInvoiceFormContainer';
import InvoiceCard, { InvoiceCardProps } from '../../../common/invoiceCard/InvoiceCard';

export type { Product } from '../../../common/invoiceCard/InvoiceCard';

export interface LeaseDetails {
  id: string;
  berthComment: string;
  berthDepth: number | null;
  berthIsAccessible: boolean;
  berthLength: number | null;
  berthMooringType: BerthMooringType | null;
  berthNum: number | string;
  berthWidth: number | null;
  customerEmail: string | null;
  electricity: boolean;
  gate: boolean;
  harborName: string;
  lighting: boolean;
  pierIdentifier: string;
  wasteCollection: boolean;
  water: boolean;
  order: InvoiceCardProps['order'];
}

export interface OfferCardProps {
  className?: string;
  leaseDetails: LeaseDetails;
  refetchQueries: PureQueryOptions[] | string[];
  handleDeleteLease: (id: string) => void;
}

const OfferCard = ({
  className,
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
}: OfferCardProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const properties: InvoiceCardProps['placeProperties'] = [
    { prop: wasteCollection, key: 'wasteCollection', icon: IconTrash },
    { prop: electricity, key: 'electricity', icon: IconPlug },
    { prop: lighting, key: 'lighting', icon: IconStreetLight },
    { prop: gate, key: 'gate', icon: IconFence },
    { prop: water, key: 'water', icon: IconWaterTap },
  ];

  const selectedProducts =
    order?.optionalProducts.reduce<{ productId: string; orderId: string }[]>((acc, product) => {
      return acc.concat({ productId: product.id, orderId: product.orderId });
    }, []) ?? [];

  const renderPlaceDetails = () => {
    return (
      <>
        <Section>
          <LabelValuePair
            label={t('common.terminology.mooringType')}
            value={t([`common.mooringTypes.${berthMooringType}`])}
          />
          <LabelValuePair label={t('common.terminology.width')} value={formatDimension(berthWidth, language)} />
          <LabelValuePair label={t('common.terminology.length')} value={formatDimension(berthLength, language)} />
          <LabelValuePair label={t('common.terminology.depth')} value={formatDimension(berthDepth, language)} />
        </Section>
        {berthIsAccessible && (
          <Section>
            <span>{t('common.terminology.accessiblePlace')}</span>
          </Section>
        )}
        <Section>
          <LabelValuePair
            label={t('invoiceCard.placeDetails.maintenanceDetails')}
            value={
              <>
                {/* TODO */}
                <InternalLink to="/">123</InternalLink>
                <br />
                <InternalLink to="/">456</InternalLink>
              </>
            }
          />
          <LabelValuePair label={t('common.terminology.comments')} value={berthComment} />
        </Section>
      </>
    );
  };

  return (
    <>
      <InvoiceCard
        title={t('offer.title').toUpperCase()}
        className={className}
        buttonsLeft={
          <Button theme="coat" onClick={() => setIsSending(true)} disabled={order === null}>
            {t('offer.billing.acceptAndSend')}
          </Button>
        }
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
        editAdditionalServices={() => setIsEditing(true)}
        order={order}
        placeType={t('common.terminology.berth').toUpperCase()}
        placeProperties={properties}
        placeName={
          <InternalLink to="/" underlined>
            {[harborName, pierIdentifier, berthNum].filter(Boolean).join(' ')}
          </InternalLink>
        }
        placeDetails={renderPlaceDetails()}
      />

      {order && (
        <>
          <Modal isOpen={isSending}>
            <SendInvoiceForm
              orderId={order.id}
              email={customerEmail}
              refetchQueries={refetchQueries}
              onSubmit={() => setIsSending(false)}
              onCancel={() => setIsSending(false)}
            />
          </Modal>
          <Modal isOpen={isEditing}>
            <EditForm
              orderId={order.id}
              selectedProducts={selectedProducts}
              refetchQueries={refetchQueries}
              handleCancel={() => setIsEditing(false)}
              handleSubmit={() => setIsEditing(false)}
            />
          </Modal>
        </>
      )}
    </>
  );
};

export default OfferCard;
