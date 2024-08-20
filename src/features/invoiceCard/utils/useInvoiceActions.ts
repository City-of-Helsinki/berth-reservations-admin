import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LeaseStatus, OrderStatus } from '../../../@types/__generated__/globalTypes';

enum SupportedActions {
  SEND_OFFER = 'sendOffer',
  MARK_AS_PAID = 'markAsPaid',
  CANCEL_INVOICES = 'cancelInvoice',
  REFUND = 'refund',
}

export interface InvoiceActions {
  selectedAction: number | null;
  actions: {
    [action in SupportedActions]: {
      state: boolean;
      value: number;
      label: string;
      disabled: boolean;
      onSelect(): void;
    };
  };
  onDeselect(): void;
}

export const useInvoiceActions = (
  statuses: Array<{ order: OrderStatus; lease: LeaseStatus | null }>
): InvoiceActions => {
  const { t } = useTranslation();

  const [sendOfferState, setSendOfferState] = useState(false);
  const [markAsPaidState, setMarkAsPaidState] = useState(false);
  const [cancelInvoiceState, setCancelInvoiceState] = useState(false);
  const [refundState, setRefundState] = useState(false);

  const [selectedAction, setSelectedAction] = useState<number | null>(null);

  return {
    selectedAction,
    onDeselect: () => {
      setSendOfferState(false);
      setMarkAsPaidState(false);
      setCancelInvoiceState(false);
      setRefundState(false);

      setSelectedAction(null);
    },
    actions: {
      sendOffer: {
        state: sendOfferState,
        value: 0,
        label: t('invoiceCard.sendInvoice.title'),
        disabled: statuses.some(
          ({ order }) =>
            !(order === OrderStatus.DRAFTED || order === OrderStatus.OFFERED || order === OrderStatus.ERROR)
        ),
        onSelect: () => {
          setSendOfferState(true);
          setSelectedAction(0);
        },
      },
      markAsPaid: {
        state: markAsPaidState,
        value: 1,
        label: t('invoiceCard.markAsPaid.label'),
        disabled: statuses.some(
          ({ order }) =>
            !(order === OrderStatus.ERROR || order === OrderStatus.OFFERED || order === OrderStatus.DRAFTED)
        ),
        onSelect: () => {
          setMarkAsPaidState(true);
          setSelectedAction(1);
        },
      },
      cancelInvoice: {
        state: cancelInvoiceState,
        value: 2,
        label: t('invoiceCard.cancelInvoice.label'),
        disabled: statuses.some(({ order }) => !(order === OrderStatus.ERROR || order === OrderStatus.OFFERED)),
        onSelect: () => {
          setCancelInvoiceState(true);
          setSelectedAction(2);
        },
      },
      refund: {
        state: refundState,
        value: 3,
        label: t('invoiceCard.refund.label'),
        disabled:
          statuses.length > 1 ||
          statuses.some(({ order, lease }) => order !== OrderStatus.PAID || lease !== LeaseStatus.PAID),
        onSelect: () => {
          setRefundState(true);
          setSelectedAction(3);
        },
      },
    },
  };
};
