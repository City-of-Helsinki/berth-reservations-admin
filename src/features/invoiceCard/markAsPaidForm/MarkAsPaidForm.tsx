import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../../common/button/Button';
import FormHeader from '../../../common/formHeader/FormHeader';
import Checkbox from '../../../common/checkbox/Checkbox';
import styles from './markAsPaidForm.module.scss';

export interface MarkAsPaidFormProps {
  isSubmitting: boolean;
  onClose(): void;
  onSubmit(): void;
}

const MarkAsPaidForm = ({ isSubmitting, onClose, onSubmit }: MarkAsPaidFormProps) => {
  const { t } = useTranslation();
  const [markAsPaidChecked, setMarkAsPaidChecked] = useState(false);

  return (
    <div className={styles.markAsPaidForm}>
      <FormHeader title={t('invoiceCard.markAsPaid.title').toUpperCase()} />
      <p className={styles.description}>{t('invoiceCard.markAsPaid.description')}</p>
      <Checkbox
        id="MarkAsPaidFom__Checkbox"
        checked={markAsPaidChecked}
        label={t('invoiceCard.markAsPaid.paidElsewhere')}
        onChange={(e) => setMarkAsPaidChecked(e.target.checked)}
      />
      <div className={styles.buttons}>
        <Button variant="secondary" color={'supplementary'} onClick={onClose} disabled={isSubmitting}>
          {t('forms.common.cancel')}
        </Button>
        <Button onClick={onSubmit} disabled={!markAsPaidChecked || isSubmitting}>
          {t('forms.common.update')}
        </Button>
      </div>
    </div>
  );
};

export default MarkAsPaidForm;
