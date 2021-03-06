import React, { useMemo } from 'react';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'hds-react';
import { Form, Formik } from 'formik';

import styles from './sendMultiOffersForm.module.scss';
import FormHeader from '../../common/formHeader/FormHeader';
import Button from '../../common/button/Button';
import Text from '../../common/text/Text';
import { getDefaultDueDate, getDueDateValidation } from '../../common/utils/dates';
import Grid from '../../common/grid/Grid';

type FormValues = {
  dueDate: string;
};

export type SendMultiOffersFormProps = {
  isSubmitting: boolean;
  sentOffersCount: number;
  draftedOffersCount: number;
  onCancel: () => void;
  onSubmit: (data: FormValues) => void;
};

const SendMultiOffersForm = ({
  isSubmitting,
  draftedOffersCount,
  onSubmit,
  onCancel,
  sentOffersCount,
}: SendMultiOffersFormProps) => {
  const { t } = useTranslation();

  const validationSchema = useMemo(
    () =>
      Yup.object<FormValues>().shape({
        dueDate: getDueDateValidation(t),
      }),
    [t]
  );

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
          <FormHeader title={t('forms.sendMultiOffers.title').toUpperCase()} />
          <Grid colsCount={2}>
            <div className={styles.column}>
              <Text as="strong" className={styles.header}>
                {t('forms.sendMultiOffers.draftedOffers')}
              </Text>
              <Text size="xl">{draftedOffersCount}</Text>
            </div>
            <div className={styles.column}>
              <Text as="strong" className={styles.header}>
                {t('forms.sendMultiOffers.sentOffers')}
              </Text>
              <Text size="xl">{sentOffersCount}</Text>
            </div>
          </Grid>

          <div className={styles.instructions}>
            <p className={styles.paragraph}>{t('forms.sendMultiOffers.instructions.paragraph1')}</p>
            <p className={styles.paragraph}>{t('forms.sendMultiOffers.instructions.paragraph2')}</p>
            <p className={styles.paragraph}>{t('forms.sendMultiOffers.instructions.paragraph3')}</p>
          </div>

          <div className={styles.dueDate}>
            <TextInput
              id="dueDate"
              type="date"
              value={values.dueDate}
              onChange={handleChange}
              label={t('forms.sendMultiOffers.dueDate')}
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

export default SendMultiOffersForm;
