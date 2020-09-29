import React, { useState } from 'react';
import { PureQueryOptions } from 'apollo-client';

import Modal from '../../common/modal/Modal';
import SendInvoiceForm from './sendInvoiceForm/SendInvoiceFormContainer';
import EditForm from './editForm/EditForm';
import InvoiceCard, { InvoiceCardProps } from './InvoiceCard';
import { SelectedProduct } from './types';

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
  const [editProductsModalOpen, setEditProductsModalOpen] = useState(false);
  const [sendInvoiceModalOpen, setSendInvoiceModalOpen] = useState(false);

  const selectedProducts =
    order?.optionalProducts.map<SelectedProduct>((product) => {
      return { productId: product.id, orderId: product.orderId };
    }) ?? [];

  return (
    <>
      <InvoiceCard
        editAdditionalServices={() => setEditProductsModalOpen(true)}
        sendInvoice={() => setSendInvoiceModalOpen(true)}
        order={order}
        {...invoiceCardProps}
      />

      {order && (
        <>
          <Modal isOpen={sendInvoiceModalOpen}>
            <SendInvoiceForm
              orderId={order.id}
              email={customerEmail}
              refetchQueries={refetchQueries}
              onSubmit={() => setSendInvoiceModalOpen(false)}
              onCancel={() => setSendInvoiceModalOpen(false)}
            />
          </Modal>
          <Modal isOpen={editProductsModalOpen}>
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
