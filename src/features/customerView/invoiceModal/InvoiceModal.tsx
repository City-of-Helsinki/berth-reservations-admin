import React from 'react';
import { useTranslation } from 'react-i18next';

import Modal, { ModalProps } from '../../../common/modal/Modal';
import { isBerthInvoice, isWinterStorageInvoice } from '../utils';
import Section from '../../../common/section/Section';
import LabelValuePair from '../../../common/labelValuePair/LabelValuePair';
import { formatDate, formatPrice } from '../../../common/utils/format';
import { getInvoiceTypeKey, getMooringTypeTKey, getProductServiceTKey } from '../../../common/utils/translations';
import Text from '../../../common/text/Text';
import styles from './invoiceModal.module.scss';
import { Invoice } from '../types';
import { OrderStatus, PriceUnits } from '../../../@types/__generated__/globalTypes';
import Button from '../../../common/button/Button';
import InvoiceActions from '../../invoiceCard/invoiceActions/InvoiceActions';
import { InvoiceActions as InvoiceActionsInterface } from '../../invoiceCard/utils/useInvoiceActions';
import StatusLabel from '../../../common/statusLabel/StatusLabel';
import { ORDER_STATUS } from '../../../common/utils/constants';
import BerthContractDetails from '../../contractDetails/BerthContractDetailsContainer';
import WinterStorageContractDetails from '../../contractDetails/WinterStorageContractDetailsContainer';

export interface InvoiceModalProps extends Omit<ModalProps, 'children'> {
  invoice: Invoice | null;
  actions: InvoiceActionsInterface['actions'];
  selectedAction: InvoiceActionsInterface['selectedAction'];
}

const InvoiceModal = ({ invoice, toggleModal, actions, selectedAction, ...modalProps }: InvoiceModalProps) => {
  const { t, i18n } = useTranslation();

  return (
    <Modal className={styles.invoiceModal} toggleModal={() => toggleModal?.(false)} {...modalProps}>
      {invoice && (
        <>
          <StatusLabel
            className={styles.statusLabel}
            type={ORDER_STATUS[invoice.status].type}
            label={t(ORDER_STATUS[invoice.status].label)}
          />

          <div className={styles.heading}>
            <Text as="h4" color="brand">
              {t('common.terminology.invoice').toUpperCase()}
            </Text>

            <InvoiceActions
              className={styles.select}
              selectedAction={selectedAction}
              actions={[
                {
                  ...actions.sendOffer,
                  onClick: actions.sendOffer.onSelect,
                },
                {
                  ...actions.markAsPaid,
                  onClick: actions.markAsPaid.onSelect,
                },
                {
                  ...actions.cancelInvoice,
                  onClick: actions.cancelInvoice.onSelect,
                },
                {
                  ...actions.refund,
                  onClick: actions.refund.onSelect,
                },
              ]}
            />
          </div>

          <Section>
            <LabelValuePair label={t('common.terminology.orderNumber')} value={invoice.orderNumber} />
            <LabelValuePair
              label={t('customerView.customerInvoice.dueDate')}
              value={formatDate(invoice.dueDate, i18n.language)}
            />
            <LabelValuePair
              label={t('customerView.customerInvoice.contractPeriod')}
              value={`${formatDate(invoice.contractPeriod.startDate, i18n.language)} - ${formatDate(
                invoice.contractPeriod.endDate,
                i18n.language
              )}`}
            />
          </Section>

          <Section>
            <LabelValuePair
              label={t('customerView.customerInvoice.invoiceType')}
              value={t(getInvoiceTypeKey(invoice))}
            />
            {isBerthInvoice(invoice) && (
              <LabelValuePair
                label={t('common.terminology.berth')}
                value={[
                  invoice.berthInformation.harborName,
                  invoice.berthInformation.pierIdentifier,
                  invoice.berthInformation.number,
                ].join(' ')}
              />
            )}
            {isWinterStorageInvoice(invoice) && (
              <LabelValuePair
                label={t('common.terminology.winterStorageArea')}
                value={invoice.winterStorageInformation.winterStorageAreaName}
              />
            )}
            {invoice.status === OrderStatus.PAID && (
              <LabelValuePair
                label={t('customerView.customerInvoice.paidAt')}
                value={formatDate(invoice.paidAt, i18n.language)}
              />
            )}
          </Section>

          {isBerthInvoice(invoice) && (
            <Section>
              <LabelValuePair
                label={t('common.terminology.mooringType')}
                value={t(getMooringTypeTKey(invoice.berthInformation.mooringType))}
              />
              <LabelValuePair label={t('common.terminology.width')} value={invoice.berthInformation.width} />
              <LabelValuePair label={t('common.terminology.length')} value={invoice.berthInformation.length} />
              <LabelValuePair label={t('common.terminology.depth')} value={invoice.berthInformation.depth} />
            </Section>
          )}

          {isBerthInvoice(invoice) && <BerthContractDetails leaseId={invoice.lease.id} />}
          {isWinterStorageInvoice(invoice) && <WinterStorageContractDetails leaseId={invoice.lease.id} />}

          <hr className={styles.divider} />

          <Section>
            <LabelValuePair
              label={t('common.terminology.basePrice')}
              value={formatPrice(invoice.basePrice, i18n.language)}
              align="right"
            />
            {invoice.orderLines.map((orderLine, id) => (
              <LabelValuePair
                label={t(getProductServiceTKey(orderLine.product))}
                value={
                  orderLine.priceUnit === PriceUnits.PERCENTAGE
                    ? formatPrice(orderLine.price, i18n.language, orderLine.priceValue)
                    : formatPrice(orderLine.price, i18n.language)
                }
                key={id}
                align="right"
              />
            ))}
          </Section>

          <hr className={styles.divider} />

          <Section>
            <LabelValuePair
              className={styles.bolded}
              label={t('common.total').toUpperCase()}
              value={formatPrice(invoice.totalPrice, i18n.language)}
              align="right"
            />
          </Section>
        </>
      )}
      <div className={styles.closeButtonContainer}>
        <Button onClick={() => toggleModal?.(false)}>{t('common.close')}</Button>
      </div>
    </Modal>
  );
};

export default InvoiceModal;
