import React, { useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { atom } from 'recoil';
import { PureQueryOptions } from 'apollo-client';
import { Cell, Row } from 'react-table';

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
import { getInvoiceTypeKey } from '../../../common/utils/translations';
import Pagination from '../../../common/pagination/Pagination';
import Text from '../../../common/text/Text';
import InvoiceModal from '../invoiceModal/InvoiceModal';
import styles from './invoiceCard.module.scss';
import Select from '../../../common/select/Select';
import { OrderStatus } from '../../../@types/__generated__/globalTypes';

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
  const [openInvoice, setOpenInvoice] = useState<Invoice | null>(null);

  const { selectedRows, selectedRowIdsDict, onSelectionChange } = usePreserveSelect<Invoice>(selectedInvoicesAtom);

  const openInvoiceStatues = openInvoice ? [{ order: openInvoice.status, lease: openInvoice.lease.status }] : undefined;
  const selectedInvoicesStatues = invoiceData
    .filter((invoice) => selectedRowIdsDict[invoice.orderId])
    .map((invoice) => ({ order: invoice.status, lease: invoice.lease.status }));

  const { actions, selectedAction, onDeselect } = useInvoiceActions(openInvoiceStatues || selectedInvoicesStatues);

  const columns: ColumnType[] = [
    {
      Header: t('customerView.invoiceCard.tableHeaders.type') || '',
      accessor: (row) => t(getInvoiceTypeKey(row)),
      Cell: ({ cell: { value }, row }: { cell: Cell<Invoice, string>; row: Row<Invoice> }) => (
        <button onClick={() => setOpenInvoice(row.original)}>
          <Text color="brand">{value}</Text>
        </button>
      ),
      id: 'orderType',
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
    },
    {
      Header: t('customerView.invoiceCard.tableHeaders.place') || '',
      accessor: (row) => {
        if (isBerthInvoice(row))
          return [
            row.berthInformation.harborName,
            row.berthInformation.pierIdentifier,
            row.berthInformation.number,
          ].join(' ');
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

  const invoicesToHandle = openInvoice ? [openInvoice] : selectedRows;
  const orderIds = invoicesToHandle.map((invoice) => invoice.orderId);

  const options = [
    { label: t('common.all'), value: undefined },
    ...Object.entries(ORDER_STATUS).map(([key, value]) => {
      return { label: t(value.label), value: OrderStatus[key as OrderStatus] };
    }),
  ];

  return (
    <>
      <div className={classNames(styles.invoiceCard, className)}>
        <Table
          renderTableToolsTop={({ filters }, { resetSelectedRows, setFilter }) => {
            const filterByColumn: ColumnType['accessor'] = 'status';
            const selectedFilter = filters.find((filter) => filter.id === filterByColumn);

            return (
              <div className={styles.tableTools}>
                <ListActions
                  selectClassName={styles.select}
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
                      renderComponent: (resetSelection) => {
                        return (
                          <Modal isOpen={true} toggleModal={resetSelection} shouldCloseOnOverlayClick={false}>
                            <CreateAdditionalInvoiceContainer
                              customerId={customer.id}
                              email={customer.email}
                              berthLeases={berthLeases}
                              closeModal={resetSelection}
                              refetchQueries={refetchQueries}
                            />
                          </Modal>
                        );
                      },
                    },
                  ]}
                />
                <Select
                  className={styles.select}
                  onChange={(e) => setFilter(filterByColumn, e.target.value || undefined)}
                  value={selectedFilter?.value}
                  options={options}
                  visibleOptions={options.length + 1}
                />
              </div>
            );
          }}
          renderEmptyStateRow={() => t('common.notification.noData.description')}
          renderPaginator={({ pageIndex, pageCount, goToPage }) => (
            <Pagination
              pageIndex={pageIndex}
              pageCount={pageCount || 1}
              onPageChange={({ selected }) => goToPage(selected)}
            />
          )}
          onSelectionChange={(selectedRowIds) => onSelectionChange(selectedRowIds, invoiceData)}
          className={className}
          columns={columns}
          data={invoiceData}
          renderMainHeader={() => t('common.terminology.invoices')}
          canSelectRows
        />
      </div>

      <InvoiceModal
        isOpen={!!openInvoice}
        invoice={openInvoice}
        toggleModal={() => setOpenInvoice(null)}
        actions={actions}
        selectedAction={selectedAction}
      />

      <Modal isOpen={actions.sendOffer.state} toggleModal={onDeselect}>
        <SendInvoiceForm
          orders={invoicesToHandle.map((invoice) => ({ orderId: invoice.orderId, email: invoice.customer.email }))}
          isResend={false}
          refetchQueries={refetchQueries}
          onSubmit={onDeselect}
          onCancel={onDeselect}
        />
      </Modal>
      <Modal isOpen={actions.cancelInvoice.state} toggleModal={onDeselect}>
        <CancelInvoice orderIds={orderIds} onClose={onDeselect} refetchQueries={refetchQueries} />
      </Modal>
      <Modal isOpen={actions.markAsPaid.state} toggleModal={onDeselect}>
        <MarkAsPaidForm orderIds={orderIds} onClose={onDeselect} refetchQueries={refetchQueries} />
      </Modal>
      <Modal isOpen={actions.refund.state} toggleModal={onDeselect}>
        <RefundOrder
          amount={invoicesToHandle[0]?.totalPrice}
          orderId={invoicesToHandle[0]?.id}
          onClose={onDeselect}
          refetchQueries={refetchQueries}
        />
      </Modal>
    </>
  );
};

export default InvoiceCard;
