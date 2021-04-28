import React, { useState } from 'react';
import { PureQueryOptions } from 'apollo-client';
import { useTranslation } from 'react-i18next';

import Modal from '../../common/modal/Modal';
import SendInvoiceForm from './sendInvoiceForm/SendInvoiceFormContainer';
import MarkAsPaidForm from './markAsPaidForm/MarkAsPaidFormContainer';
import CancelInvoice from './cancelInvoice/CancelInvoiceContainer';
import RefundOrder from './refundOrder/RefundOrderContainer';
import EditForm from './editForm/EditForm';
import InvoiceCard, { InvoiceCardProps } from './InvoiceCard';
import InvoiceActions from './invoiceActions/InvoiceActions';
import { SelectedProduct } from './types';
import { useInvoiceActions } from './utils/useInvoiceActions';
import { LeaseStatus } from '../../@types/__generated__/globalTypes';

export interface InvoiceCardContainerProps extends Omit<InvoiceCardProps, 'sendInvoice' | 'editAdditionalServices'> {
  customerEmail: string | null;
  refetchQueries: PureQueryOptions[] | string[];
}

const InvoiceCardContainer = ({
  customerEmail,
  refetchQueries,
  order,
  invoicingDisabled,
  ...invoiceCardProps
}: InvoiceCardContainerProps) => {
  const { selectedAction, actions, onDeselect } = useInvoiceActions(
    order ? [{ order: order.status, lease: invoiceCardProps.leaseStatus }] : []
  );

  const { t } = useTranslation();

  const [editProductsModalOpen, setEditProductsModalOpen] = useState(false);

  const selectedProducts =
    order?.optionalProducts.map<SelectedProduct>((product) => {
      return { productId: product.id, orderId: product.orderId };
    }) ?? [];

  return (
    <>
      <InvoiceActions
        selectedAction={selectedAction}
        actions={[
          {
            value: actions.markAsPaid.value,
            label: t('invoiceCard.markAsPaid.label'),
            disabled: actions.markAsPaid.disabled,
            onClick: actions.markAsPaid.onSelect,
          },
          {
            value: actions.cancelInvoice.value,
            label: t('invoiceCard.cancelInvoice.label'),
            disabled: actions.cancelInvoice.disabled,
            onClick: actions.cancelInvoice.onSelect,
          },
          {
            value: actions.refund.value,
            label: t('invoiceCard.refund.label'),
            disabled: actions.refund.disabled,
            onClick: actions.refund.onSelect,
          },
        ]}
      />
      <InvoiceCard
        editAdditionalServices={() => setEditProductsModalOpen(true)}
        sendInvoice={actions.sendOffer.onSelect}
        order={order}
        invoicingDisabled={actions.sendOffer.disabled || invoicingDisabled}
        {...invoiceCardProps}
      />

      {order && (
        <>
          <Modal isOpen={actions.cancelInvoice.state} toggleModal={onDeselect}>
            <CancelInvoice orderIds={[order.id]} onClose={onDeselect} refetchQueries={refetchQueries} />
          </Modal>
          <Modal isOpen={actions.markAsPaid.state} toggleModal={onDeselect}>
            <MarkAsPaidForm orderIds={[order.id]} onClose={onDeselect} refetchQueries={refetchQueries} />
          </Modal>
          <Modal isOpen={actions.refund.state} toggleModal={onDeselect}>
            <RefundOrder
              amount={order.totalPrice}
              orderId={order.id}
              onClose={onDeselect}
              refetchQueries={refetchQueries}
            />
          </Modal>
          <Modal isOpen={actions.sendOffer.state} toggleModal={onDeselect}>
            <SendInvoiceForm
              orders={[{ orderId: order.id, email: customerEmail }]}
              isResend={invoiceCardProps.leaseStatus === LeaseStatus.OFFERED}
              // email={customerEmail}
              refetchQueries={refetchQueries}
              onSubmit={onDeselect}
              onCancel={onDeselect}
            />
          </Modal>
          <Modal isOpen={editProductsModalOpen} toggleModal={() => setEditProductsModalOpen(false)}>
            <EditForm
              orderId={order.id}
              selectedProducts={selectedProducts}
              refetchQueries={refetchQueries}
              handleCancel={() => setEditProductsModalOpen(false)}
              handleSubmit={() => setEditProductsModalOpen(false)}
            />
          </Modal>
        </>
      )}
    </>
  );
};

export default InvoiceCardContainer;
