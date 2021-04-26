import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../../common/button/Button';
import FormHeader from '../../../common/formHeader/FormHeader';
import { formatPrice } from '../../../common/utils/format';
import styles from './refundOrder.module.scss';

export interface RefundOrderProps {
  amount: number;
  isSubmitting: boolean;
  onClose(): void;
  onSubmit(): void;
}

const RefundOrder = ({ amount, isSubmitting, onClose, onSubmit }: RefundOrderProps) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.refundOrder}>
      <FormHeader title={t('invoiceCard.refund.title').toUpperCase()} />
      <p className={styles.description}>
        {t('invoiceCard.refund.description', { amount: formatPrice(amount, i18n.language) })}
      </p>
      <div className={styles.buttons}>
        <Button variant="secondary" color={'supplementary'} onClick={onClose} disabled={isSubmitting}>
          {t('forms.common.cancel')}
        </Button>
        <Button onClick={onSubmit} disabled={isSubmitting}>
          {t('common.save')}
        </Button>
      </div>
    </div>
  );
};

export default RefundOrder;
