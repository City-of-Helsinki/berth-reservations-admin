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
import { LeaseStatus, OrderStatus } from '../../@types/__generated__/globalTypes';

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
  const { t } = useTranslation();

  const [editProductsModalOpen, setEditProductsModalOpen] = useState(false);
  const [sendInvoiceModalOpen, setSendInvoiceModalOpen] = useState(false);
  const [markAsPaidModalOpen, setMarkAsPaidModalOpen] = useState(false);
  const [cancelInvoiceModalOpen, setCancelInvoiceModalOpen] = useState(false);
  const [refundModalOpen, setRefundModalOpen] = useState(false);

  const [selectedInvoiceAction, setSelectedInvoiceAction] = useState<number | null>(null);

  const selectedProducts =
    order?.optionalProducts.map<SelectedProduct>((product) => {
      return { productId: product.id, orderId: product.orderId };
    }) ?? [];

  const closeMarkAsPaidModal = () => {
    setMarkAsPaidModalOpen(false);
    setSelectedInvoiceAction(null);
  };

  const closeRefundModal = () => {
    setRefundModalOpen(false);
    setSelectedInvoiceAction(null);
  };

  const closeCancelInvoice = () => {
    setCancelInvoiceModalOpen(false);
    setSelectedInvoiceAction(null);
  };

  return (
    <>
      <InvoiceActions
        selectedAction={selectedInvoiceAction}
        actions={[
          {
            value: 0,
            label: t('invoiceCard.markAsPaid.label'),
            disabled: !(
              order?.status === OrderStatus.ERROR ||
              order?.status === OrderStatus.OFFERED ||
              order?.status === OrderStatus.DRAFTED
            ),
            onClick: () => {
              setMarkAsPaidModalOpen(true);
              setSelectedInvoiceAction(0);
            },
          },
          {
            value: 1,
            label: t('invoiceCard.cancelInvoice.label'),
            disabled: !(order?.status === OrderStatus.ERROR || order?.status === OrderStatus.OFFERED),
            onClick: () => {
              setCancelInvoiceModalOpen(true);
              setSelectedInvoiceAction(1);
            },
          },
          {
            value: 2,
            label: t('invoiceCard.refund.label'),
            disabled: order?.status !== OrderStatus.PAID || invoiceCardProps.leaseStatus !== LeaseStatus.PAID,
            onClick: () => {
              setRefundModalOpen(true);
              setSelectedInvoiceAction(2);
            },
          },
        ]}
      />
      <InvoiceCard
        editAdditionalServices={() => setEditProductsModalOpen(true)}
        sendInvoice={() => setSendInvoiceModalOpen(true)}
        order={order}
        invoicingDisabled={
          !(
            order?.status === OrderStatus.DRAFTED ||
            order?.status === OrderStatus.OFFERED ||
            order?.status === OrderStatus.ERROR
          ) || invoicingDisabled
        }
        {...invoiceCardProps}
      />

      {order && (
        <>
          <Modal isOpen={cancelInvoiceModalOpen} toggleModal={closeCancelInvoice}>
            <CancelInvoice orderId={order.id} onClose={closeCancelInvoice} refetchQueries={refetchQueries} />
          </Modal>
          <Modal isOpen={markAsPaidModalOpen} toggleModal={closeMarkAsPaidModal}>
            <MarkAsPaidForm orderId={order.id} onClose={closeMarkAsPaidModal} refetchQueries={refetchQueries} />
          </Modal>
          <Modal isOpen={refundModalOpen} toggleModal={closeRefundModal}>
            <RefundOrder
              amount={order.totalPrice}
              orderId={order.id}
              onClose={closeRefundModal}
              refetchQueries={refetchQueries}
            />
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
