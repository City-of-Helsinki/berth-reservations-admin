import React from 'react';
import { useTranslation } from 'react-i18next';
import FormHeader from '../../../common/formHeader/FormHeader';
import Button from '../../../common/button/Button';
import styles from './cancelInvoice.module.scss';

export interface CancelInvoiceProps {
  isSubmitting: boolean;
  onClose(): void;
  onSubmit(): void;
}

const CancelInvoice = ({ isSubmitting, onClose, onSubmit }: CancelInvoiceProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.cancelInvoice}>
      <FormHeader title={t('invoiceCard.cancelInvoice.title').toUpperCase()} />
      <p className={styles.description}>{t('invoiceCard.cancelInvoice.description')}</p>
      <div className={styles.buttons}>
        <Button variant="secondary" color={'supplementary'} onClick={onClose} disabled={isSubmitting}>
          {t('forms.common.cancel')}
        </Button>
        <Button variant="danger" onClick={onSubmit} disabled={isSubmitting}>
          {t('invoiceCard.cancelInvoice.cancelInvoice')}
        </Button>
      </div>
    </div>
  );
};

export default CancelInvoice;
