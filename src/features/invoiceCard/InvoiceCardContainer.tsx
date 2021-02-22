import React, { useState } from 'react';
import { PureQueryOptions } from 'apollo-client';
import { useTranslation } from 'react-i18next';

import Modal from '../../common/modal/Modal';
import SendInvoiceForm from './sendInvoiceForm/SendInvoiceFormContainer';
import MarkAsPaidForm from './markAsPaidForm/MarkAsPaidFormContainer';
import EditForm from './editForm/EditForm';
import InvoiceCard, { InvoiceCardProps } from './InvoiceCard';
import InvoiceActions from './invoiceActions/InvoiceActions';
import { SelectedProduct } from './types';
import { LeaseStatus, OrderStatus } from '../../@types/__generated__/globalTypes';

export interface InvoiceCardContainerProps extends Omit<InvoiceCardProps, 'sendInvoice' | 'editAdditionalServices'> {
  customerEmail: string | null;
  refetchQueries: PureQueryOptions[] | string[];
}

const InvoiceCardContainer = ({
  customerEmail,
  refetchQueries,
  order,
  ...invoiceCardProps
}: InvoiceCardContainerProps) => {
  const { t } = useTranslation();

  const [editProductsModalOpen, setEditProductsModalOpen] = useState(false);
  const [sendInvoiceModalOpen, setSendInvoiceModalOpen] = useState(false);
  const [markAsPaidOpen, setMarkAsPaidOpen] = useState(false);

  const [selectedInvoiceAction, setSelectedInvoiceAction] = useState<number | null>(null);

  const selectedProducts =
    order?.optionalProducts.map<SelectedProduct>((product) => {
      return { productId: product.id, orderId: product.orderId };
    }) ?? [];

  const handleMarkAsPaidClose = () => {
    setMarkAsPaidOpen(false);
    setSelectedInvoiceAction(null);
  };

  const actionsDisabled =
    order?.status === OrderStatus.CANCELLED ||
    order?.status === OrderStatus.REJECTED ||
    order?.status === OrderStatus.PAID;

  return (
    <>
      <InvoiceActions
        disabled={actionsDisabled}
        selectedAction={selectedInvoiceAction}
        actions={[
          {
            value: 0,
            label: t('invoiceCard.markAsPaid.label'),
            onClick: () => {
              setMarkAsPaidOpen(true);
              setSelectedInvoiceAction(0);
            },
          },
        ]}
      />
      <InvoiceCard
        editAdditionalServices={() => setEditProductsModalOpen(true)}
        sendInvoice={() => setSendInvoiceModalOpen(true)}
        order={order}
        {...invoiceCardProps}
      />

      {order && (
        <>
          <Modal isOpen={markAsPaidOpen} toggleModal={handleMarkAsPaidClose}>
            <MarkAsPaidForm orderId={order.id} onClose={handleMarkAsPaidClose} refetchQueries={refetchQueries} />
          </Modal>
          <Modal isOpen={sendInvoiceModalOpen} toggleModal={() => setSendInvoiceModalOpen(false)}>
            <SendInvoiceForm
              orderId={order.id}
              isResend={invoiceCardProps.leaseStatus === LeaseStatus.OFFERED}
              email={customerEmail}
              refetchQueries={refetchQueries}
              onSubmit={() => setSendInvoiceModalOpen(false)}
              onCancel={() => setSendInvoiceModalOpen(false)}
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
