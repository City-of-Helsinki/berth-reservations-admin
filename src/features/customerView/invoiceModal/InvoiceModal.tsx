import React from 'react';
import { useTranslation } from 'react-i18next';

import Modal, { ModalProps } from '../../../common/modal/Modal';
import { isBerthInvoice } from '../utils';
import Section from '../../../common/section/Section';
import LabelValuePair from '../../../common/labelValuePair/LabelValuePair';
import { formatDate, formatPrice } from '../../../common/utils/format';
import { getOrderStatusTKey, getProductServiceTKey } from '../../../common/utils/translations';
import Text from '../../../common/text/Text';
import styles from './invoiceModal.module.scss';
import { Invoice } from '../types';
import { PriceUnits } from '../../../@types/__generated__/globalTypes';
import Button from '../../../common/button/Button';

interface InvoiceModalProps extends Omit<ModalProps, 'children'> {
  invoice: Invoice;
}

const InvoiceModal = ({ invoice, toggleModal, ...modalProps }: InvoiceModalProps) => {
  const { t, i18n } = useTranslation();

  const { contractPeriod } = invoice;
  return (
    <Modal toggleModal={() => toggleModal?.(false)} {...modalProps}>
      <Text as="h4" color="brand" className={styles.heading}>
        {t('customerView.customerInvoice.invoice')}
      </Text>

      <Section>
        <LabelValuePair
          label={t('customerView.customerInvoice.invoiceType')}
          value={
            isBerthInvoice(invoice)
              ? t('customerView.customerInvoice.berthInvoice')
              : t('customerView.customerInvoice.winterStorageInvoice')
          }
        />
        {isBerthInvoice(invoice) ? (
          <LabelValuePair
            label={t('customerView.customerInvoice.berthPlace')}
            value={
              invoice.berthInformation.harborName +
              ' ' +
              invoice.berthInformation.pierIdentifier +
              ' ' +
              invoice.berthInformation.number
            }
          />
        ) : (
          'PLACEHOLDER' // TODO
        )}
        <LabelValuePair
          label={t('customerView.customerInvoice.contractPeriod')}
          value={`${formatDate(contractPeriod.startDate, i18n.language)} - ${formatDate(
            contractPeriod.endDate,
            i18n.language
          )}`}
        />
        <LabelValuePair
          label={t('customerView.customerInvoice.dueDate')}
          value={formatDate(invoice.dueDate, i18n.language)}
        />
        <LabelValuePair
          label={t('customerView.customerInvoice.status')}
          value={t(getOrderStatusTKey(invoice.status))}
        />
      </Section>

      <hr className={styles.divider} />

      <Section>
        <LabelValuePair
          label={t('customerView.customerInvoice.basicFee')}
          value={formatPrice(invoice.basePrice, i18n.language)}
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
          />
        ))}
      </Section>

      <hr className={styles.divider} />

      <Section>
        <LabelValuePair
          label={t('customerView.customerInvoice.total')}
          value={formatPrice(invoice.totalPrice, i18n.language)}
        />
      </Section>

      <div className={styles.closeButtonContainer}>
        <Button onClick={() => toggleModal?.(false)}>{t('customerView.customerInvoice.closeModal')}</Button>
      </div>
    </Modal>
  );
};

export default InvoiceModal;
