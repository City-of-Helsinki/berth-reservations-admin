import React from 'react';
import { useTranslation } from 'react-i18next';
import { atom } from 'recoil';
import { PureQueryOptions } from 'apollo-client';

import Table, { Column, COLUMN_WIDTH } from '../../../common/table/Table';
import { ORDER_STATUS } from '../../../common/utils/constants';
import { formatDate, formatPrice } from '../../../common/utils/format';
import StatusLabel from '../../../common/statusLabel/StatusLabel';
import { Invoice } from '../types';
import { isBerthInvoice, isWinterStorageInvoice } from '../utils';
import Modal from '../../../common/modal/Modal';
import CancelInvoice from '../../invoiceCard/cancelInvoice/CancelInvoiceContainer';
import SendInvoiceForm from '../../invoiceCard/sendInvoiceForm/SendInvoiceFormContainer';
import ListActions from '../../../common/listActions/ListActions';
import { usePreserveSelect } from '../../../common/utils/usePreserveSelect';
import { useInvoiceActions } from '../../invoiceCard/utils/useInvoiceActions';
import MarkAsPaidForm from '../../invoiceCard/markAsPaidForm/MarkAsPaidFormContainer';
import RefundOrder from '../../invoiceCard/refundOrder/RefundOrderContainer';
import CreateAdditionalInvoiceContainer from '../../createAdditionalInvoice/CreateAdditionalInvoiceContainer';
import { CreateAdditionalInvoiceProps } from '../../createAdditionalInvoice/CreateAdditionalInvoiceForm';
import { getOrderTypeTKey } from '../../../common/utils/translations';

export interface InvoiceCardProps {
  className?: string;
  customer: {
    id: string;
    email: string | null | undefined;
  };
  berthLeases: CreateAdditionalInvoiceProps['berthLeases'];
  invoiceData: Invoice[];
  refetchQueries: PureQueryOptions[] | string[];
}

type ColumnType = Column<Invoice>;

const selectedInvoicesAtom = atom<{ [x: string]: Invoice }>({
  key: 'InvoiceCard_selectedInvoicesAtom',
  default: {},
});

const InvoiceCard = ({ berthLeases, className, customer, invoiceData, refetchQueries }: InvoiceCardProps) => {
  const { t, i18n } = useTranslation();

  const { selectedRows, selectedRowIdsDict, onSelectionChange } = usePreserveSelect<Invoice>(selectedInvoicesAtom);

  const statues = invoiceData
    .filter((invoice) => selectedRowIdsDict[invoice.orderId])
    .map((invoice) => ({ order: invoice.status, lease: invoice.leaseStatus }));
  const { actions, onDeselect } = useInvoiceActions(statues);

  const columns: ColumnType[] = [
    {
      Header: t('customerView.invoiceCard.tableHeaders.type') || '',
      accessor: (row) => t(getOrderTypeTKey(row.orderType)),
      id: 'orderType',
      width: COLUMN_WIDTH.XS,
      minWidth: COLUMN_WIDTH.XS,
    },
    {
      Header: t('customerView.invoiceCard.tableHeaders.place') || '',
      accessor: (row) => {
        if (isBerthInvoice(row))
          return (
            row.berthInformation.harborName +
            ' ' +
            row.berthInformation.pierIdentifier +
            ' ' +
            row.berthInformation.number
          );
        if (isWinterStorageInvoice(row)) return row.winterStorageInformation.winterStorageAreaName;
      },
      id: 'place',
      width: COLUMN_WIDTH.L,
      minWidth: COLUMN_WIDTH.L,
    },
    {
      Header: t('customerView.invoiceCard.tableHeaders.season') || '',
      accessor: ({ contractPeriod }) =>
        `${formatDate(contractPeriod.startDate, i18n.language)} - ${formatDate(contractPeriod.endDate, i18n.language)}`,
      id: 'contractPeriod',
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
    },
    {
      Header: t('customerView.invoiceCard.tableHeaders.dueDate') || '',
      accessor: 'dueDate',
      Cell: ({ cell: { value } }) => formatDate(value, i18n.language),
      width: COLUMN_WIDTH.XS,
      minWidth: COLUMN_WIDTH.XS,
    },
    {
      Header: t('customerView.invoiceCard.tableHeaders.totalPrice') || '',
      accessor: 'totalPrice',
      Cell: ({ cell: { value } }) => formatPrice(value, i18n.language),
      width: COLUMN_WIDTH.XS,
      minWidth: COLUMN_WIDTH.XS,
    },
    {
      Header: t('customerView.invoiceCard.tableHeaders.orderNumber') || '',
      accessor: 'orderNumber',
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
    },
    {
      Header: t('customerView.invoiceCard.tableHeaders.status') || '',
      accessor: 'status',
      Cell: ({ cell: { value } }) => (
        <StatusLabel type={ORDER_STATUS[value].type} label={t(ORDER_STATUS[value].label)} />
      ),
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
    },
  ];

  const ordersId = selectedRows.map((row) => row.orderId);

  return (
    <>
      <div className={className}>
        <Table
          renderTableToolsTop={(_, { resetSelectedRows }) => {
            return (
              <ListActions
                selectedRows={selectedRows}
                resetSelectedRows={resetSelectedRows}
                listActions={[
                  {
                    id: actions.sendOffer.value,
                    label: actions.sendOffer.label,
                    onClick: actions.sendOffer.onSelect,
                    buttonText: actions.sendOffer.label,
                    buttonDisabled: actions.sendOffer.disabled,
                  },
                  {
                    id: actions.markAsPaid.value,
                    label: actions.markAsPaid.label,
                    onClick: actions.markAsPaid.onSelect,
                    buttonText: actions.markAsPaid.label,
                    buttonDisabled: actions.markAsPaid.disabled,
                  },
                  {
                    id: actions.cancelInvoice.value,
                    label: actions.cancelInvoice.label,
                    onClick: actions.cancelInvoice.onSelect,
                    buttonText: actions.cancelInvoice.label,
                    buttonDisabled: actions.cancelInvoice.disabled,
                  },
                  {
                    id: actions.refund.value,
                    label: actions.refund.label,
                    onClick: actions.refund.onSelect,
                    buttonText: actions.refund.label,
                    buttonDisabled: actions.refund.disabled,
                  },
                  {
                    id: 'InvoiceCard_onCreateAdditionalService',
                    label: t('additionalInvoice.create'),
                    renderComponent: (deselect) => {
                      return (
                        <Modal isOpen={true} toggleModal={deselect} shouldCloseOnOverlayClick={false}>
                          <CreateAdditionalInvoiceContainer
                            customerId={customer.id}
                            email={customer.email}
                            berthLeases={berthLeases}
                            closeModal={deselect}
                            refetchQueries={refetchQueries}
                          />
                        </Modal>
                      );
                    },
                  },
                ]}
              />
            );
          }}
          onSelectionChange={(selectedRowIds) => onSelectionChange(selectedRowIds, invoiceData)}
          className={className}
          columns={columns}
          data={invoiceData}
          renderMainHeader={() => t('common.terminology.invoices')}
          canSelectRows
        />
      </div>
      <Modal isOpen={actions.sendOffer.state} toggleModal={onDeselect}>
        <SendInvoiceForm
          orders={selectedRows.map((row) => ({ orderId: row.orderId, email: row.customer.email }))}
          isResend={false}
          refetchQueries={refetchQueries}
          onSubmit={onDeselect}
          onCancel={onDeselect}
        />
      </Modal>
      <Modal isOpen={actions.cancelInvoice.state} toggleModal={onDeselect}>
        <CancelInvoice ordersId={ordersId} onClose={onDeselect} refetchQueries={refetchQueries} />
      </Modal>
      <Modal isOpen={actions.markAsPaid.state} toggleModal={onDeselect}>
        <MarkAsPaidForm ordersId={ordersId} onClose={onDeselect} refetchQueries={refetchQueries} />
      </Modal>
      <Modal isOpen={actions.refund.state} toggleModal={onDeselect}>
        <RefundOrder
          amount={selectedRows[0]?.totalPrice}
          orderId={selectedRows[0]?.id}
          onClose={onDeselect}
          refetchQueries={refetchQueries}
        />
      </Modal>
    </>
  );
};

export default InvoiceCard;
