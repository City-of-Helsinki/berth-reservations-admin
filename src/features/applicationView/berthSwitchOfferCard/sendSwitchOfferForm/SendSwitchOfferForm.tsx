import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { TextInput } from 'hds-react';

import { getDefaultDueDate, getDueDateValidation } from '../../../../common/utils/dates';
import styles from '../../../invoiceCard/sendInvoiceForm/sendInvoiceForm.module.scss';
import FormHeader from '../../../../common/formHeader/FormHeader';
import Button from '../../../../common/button/Button';

type FormValues = {
  dueDate: string;
};

export interface SendSwitchOfferFormProps {
  isSubmitting: boolean;
  onCancel: () => void;
  onSubmit: (data: FormValues) => void;
}

const SendSwitchOfferForm = ({ onSubmit, onCancel, isSubmitting }: SendSwitchOfferFormProps) => {
  const { t } = useTranslation();

  const validationSchema = useMemo(() => {
    return Yup.object<FormValues>().shape({
      dueDate: getDueDateValidation(t),
    });
  }, [t]);

  const initial: FormValues = {
    dueDate: getDefaultDueDate(),
  };
  return (
    <Formik
      initialValues={initial}
      onSubmit={(values) => onSubmit(values)}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={validationSchema}
    >
      {({ values, errors, handleChange }) => (
        <Form className={styles.form}>
          <FormHeader title={t('applicationView.berthSwitchOffer.sendOffer').toUpperCase()} />

          <div className={styles.dueDate}>
            <TextInput
              id="dueDate"
              type="date"
              value={values.dueDate}
              onChange={handleChange}
              label={t('common.dueDate')}
              invalid={!!errors.dueDate}
              helperText={errors.dueDate}
              required
            />
          </div>

          <div className={styles.formActionButtons}>
            <Button variant="secondary" disabled={isSubmitting} onClick={onCancel}>
              {t('forms.common.cancel')}
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {t('forms.common.send')}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SendSwitchOfferForm;
