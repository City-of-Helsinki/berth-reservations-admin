import React from 'react';
import { TextInput } from 'hds-react';
import { useTranslation } from 'react-i18next';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { TFunction } from 'i18next';
import { useMutation, useQuery } from '@apollo/react-hooks';

import styles from './harborEditForm.module.scss';
import Section from '../../../../common/section/Section';
import Text from '../../../../common/text/Text';
import { HARBOR_FORM_QUERY } from './queries';
import LoadingSpinner from '../../../../common/spinner/LoadingSpinner';
import { FormProps, Harbor } from '../types';
import { getHarbor, mapValuesToMutation } from './utils/utils';
import { UPDATE_HARBOR_MUTATION } from './mutations';
import { UPDATE_HARBOR, UPDATE_HARBORVariables as UPDATE_HARBOR_VARS } from './__generated__/UPDATE_HARBOR';
import { HARBOR_FORM } from './__generated__/HARBOR_FORM';
import Button from '../../../../common/button/Button';

export interface Props extends FormProps<Harbor> {
  harborId: string;
}

const getValidationSchema = (t: TFunction) =>
  Yup.object<Harbor>().shape({
    name: Yup.string().required(t('forms.common.errors.required')),
    streetAddress: Yup.string().required(t('forms.common.errors.required')),
    zipCode: Yup.string().required(t('forms.common.errors.required')),
    municipality: Yup.string().required(t('forms.common.errors.required')),
    wwwUrl: Yup.string().required(t('forms.common.errors.required')),
  });

const HarborEditForm = ({ harborId, onCancel, onSubmit, refetchQueries }: Props) => {
  const { loading, error, data } = useQuery<HARBOR_FORM>(HARBOR_FORM_QUERY, {
    variables: { id: harborId },
  });
  const [updateHarbor, { loading: isSubmitting, error: updateError }] = useMutation<UPDATE_HARBOR, UPDATE_HARBOR_VARS>(
    UPDATE_HARBOR_MUTATION,
    {
      refetchQueries: [...(refetchQueries ?? []), { query: HARBOR_FORM_QUERY, variables: { id: harborId } }],
    }
  );

  const { t } = useTranslation();
  const validationSchema = getValidationSchema(t);

  if (loading) return <LoadingSpinner isLoading={loading} />;
  if (error || updateError) return <div>{t('forms.common.error')}</div>;

  const initial: Harbor = getHarbor(data) ?? {
    name: '',
    streetAddress: '',
    zipCode: '',
    municipality: 'Helsinki',
    wwwUrl: '',
  };

  const handleSubmit = (values: Harbor) =>
    updateHarbor({
      variables: {
        input: mapValuesToMutation(harborId, values),
      },
    }).then(() => onSubmit?.(values));

  return (
    <Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={validationSchema}>
      {({ errors, setFieldValue, values }) => (
        <Form className={styles.harborEditForm}>
          <Text as="h4" color="brand">
            {t('forms.harbor.title').toUpperCase()}
          </Text>

          <Section>
            <Field
              required={true}
              as={TextInput}
              id="name"
              name="name"
              label={t('forms.harbor.name')}
              invalid={!!errors.name}
              helperText={errors.name}
            />
          </Section>

          <Section>
            <Field
              required={true}
              as={TextInput}
              id="streetAddress"
              name="streetAddress"
              label={t('forms.harbor.streetAddress')}
              invalid={!!errors.streetAddress}
              helperText={errors.streetAddress}
            />
            <Field
              required={true}
              as={TextInput}
              id="zipCode"
              name="zipCode"
              label={t('forms.harbor.zipCode')}
              invalid={!!errors.zipCode}
              helperText={errors.zipCode}
            />
            <Field
              required={true}
              as={TextInput}
              id="municipality"
              name="municipality"
              label={t('forms.harbor.municipality')}
              invalid={!!errors.municipality}
              helperText={errors.municipality}
            />
          </Section>

          <Section>
            <Field
              required={true}
              as={TextInput}
              id="wwwUrl"
              name="wwwUrl"
              label={t('forms.harbor.wwwUrl')}
              invalid={!!errors.wwwUrl}
              helperText={errors.wwwUrl}
            />
          </Section>

          <div className={styles.formActionButtons}>
            <Button variant="secondary" onClick={onCancel}>
              {t('common.cancel')}
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {t('common.save')}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default HarborEditForm;
