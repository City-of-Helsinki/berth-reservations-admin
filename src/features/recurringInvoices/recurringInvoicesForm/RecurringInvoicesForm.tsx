import React, { useMemo } from 'react';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'hds-react';
import { Form, Formik } from 'formik';

import FormHeader from '../../../common/formHeader/FormHeader';
import Button from '../../../common/button/Button';
import { getDefaultDueDate, getDueDateValidation } from '../../../common/utils/dates';
import styles from './recurringInvoicesForm.module.scss';

type FormValues = {
  dueDate: string;
};

export type RecurringInvoicesFormProps = {
  isSubmitting: boolean;
  onCancel: () => void;
  onSubmit: (data: FormValues) => void;
};

const RecurringInvoicesForm = ({ onSubmit, onCancel, isSubmitting }: RecurringInvoicesFormProps) => {
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
          <FormHeader title={t('recurringInvoices.form.title')} upperCase />

          <p className={styles.paragraph}>{t('recurringInvoices.form.description')}</p>

          <div className={styles.centered}>
            <TextInput
              id="dueDate"
              type="date"
              value={values.dueDate}
              onChange={handleChange}
              label={t('recurringInvoices.form.dueDate')}
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

export default RecurringInvoicesForm;
