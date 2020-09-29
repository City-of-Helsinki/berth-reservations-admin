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
  const [isEditing, setIsEditing] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const selectedProducts =
    order?.optionalProducts.map<SelectedProduct>((product) => {
      return { productId: product.id, orderId: product.orderId };
    }) ?? [];

  return (
    <>
      <InvoiceCard
        editAdditionalServices={() => setIsEditing(true)}
        sendInvoice={() => setIsSending(true)}
        order={order}
        {...invoiceCardProps}
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

export default InvoiceCardContainer;
