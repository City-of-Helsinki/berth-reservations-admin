import React, { useMemo } from 'react';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'hds-react';
import { Form, Formik } from 'formik';

import styles from './sendInvoiceForm.module.scss';
import FormHeader from '../../../common/formHeader/FormHeader';
import Button from '../../../common/button/Button';
import Text from '../../../common/text/Text';
import { addDaysToDate, getToday, mapDateToDateInputValue } from '../../../common/utils/dates';

type FormValues = {
  dueDate: string;
};

export type SendInvoiceFormProps = {
  email: string | null;
  isSubmitting: boolean;
  onCancel: () => void;
  onSubmit: (data: FormValues) => void;
};

const SendInvoiceForm = ({ email, onSubmit, onCancel, isSubmitting }: SendInvoiceFormProps) => {
  const { t } = useTranslation();

  const validationSchema = useMemo(
    () =>
      Yup.object<FormValues>().shape({
        dueDate: Yup.date()
          .min(new Date(getToday().toDateString()), t('forms.common.errors.date'))
          .required(t('forms.common.errors.required')),
      }),
    [t]
  );

  const initial: FormValues = {
    dueDate: mapDateToDateInputValue(addDaysToDate(getToday(), 14)),
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
          <FormHeader title={t('invoiceCard.sendInvoice.title').toUpperCase()} />

          <p className={styles.instructions}>
            {t('invoiceCard.sendInvoice.instructions.paragraph1', {
              email: email,
            })}
          </p>
          <p className={styles.instructions}>{t('invoiceCard.sendInvoice.instructions.paragraph2')}</p>

          <div className={styles.dueDate}>
            <TextInput
              id="dueDate"
              type="date"
              value={values.dueDate}
              onChange={handleChange}
              label={t('invoiceCard.sendInvoice.dueDate')}
              invalid={!!errors.dueDate}
              helperText={errors.dueDate}
              required
            />
          </div>

          <div className={styles.formActionButtons}>
            <Button variant="secondary" disabled={isSubmitting} onClick={onCancel}>
              {t('forms.common.cancel')}
            </Button>
            <Button type="submit" disabled={!email || isSubmitting}>
              {t('forms.common.send')}
            </Button>
          </div>
          {email === null && (
            <Text color="critical" className={styles.missingEmail}>
              {t('invoiceCard.sendInvoice.missingEmail')}
            </Text>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SendInvoiceForm;
