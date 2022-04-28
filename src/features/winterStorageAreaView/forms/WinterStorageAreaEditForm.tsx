import React from 'react';
import { TextInput } from 'hds-react';
import { useTranslation } from 'react-i18next';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { TFunction } from 'i18next';
import { useMutation, useQuery } from '@apollo/react-hooks';

import styles from './winterStorageAreaEditForm.module.scss';
import Section from '../../../common/section/Section';
import Text from '../../../common/text/Text';
import { WINTER_STORAGE_AREA_FORM_QUERY } from './queries';
import LoadingSpinner from '../../../common/spinner/LoadingSpinner';
import { FormProps, WinterStorageAreaForm } from './types';
import { getWinterStorageAreaForm, mapValuesToMutation } from './utils/utils';
import { UPDATE_WINTER_STORAGE_AREA_MUTATION } from './mutations';
import {
  UPDATE_WINTER_STORAGE_AREA,
  UPDATE_WINTER_STORAGE_AREAVariables as UPDATE_WINTER_STORAGE_AREA_VARS,
} from './__generated__/UPDATE_WINTER_STORAGE_AREA';
import { WINTER_STORAGE_AREA_FORM } from './__generated__/WINTER_STORAGE_AREA_FORM';
import Button from '../../../common/button/Button';

export interface Props extends FormProps<WinterStorageAreaForm> {
  winterStorageAreaId: string;
}

const getValidationSchema = (t: TFunction) =>
  Yup.object<WinterStorageAreaForm>().shape({
    name: Yup.string().required(t('forms.common.errors.required')),
    streetAddress: Yup.string().required(t('forms.common.errors.required')),
    zipCode: Yup.string().required(t('forms.common.errors.required')),
    municipality: Yup.string().required(t('forms.common.errors.required')),
  });

const WinterStorageAreaEditForm = ({ winterStorageAreaId, onCancel, onSubmit, refetchQueries }: Props) => {
  const { loading, error, data } = useQuery<WINTER_STORAGE_AREA_FORM>(WINTER_STORAGE_AREA_FORM_QUERY, {
    variables: { id: winterStorageAreaId },
  });
  const [updateWinterStorageArea, { loading: isSubmitting, error: updateError }] = useMutation<
    UPDATE_WINTER_STORAGE_AREA,
    UPDATE_WINTER_STORAGE_AREA_VARS
  >(UPDATE_WINTER_STORAGE_AREA_MUTATION, {
    refetchQueries: [
      ...(refetchQueries ?? []),
      { query: WINTER_STORAGE_AREA_FORM_QUERY, variables: { id: winterStorageAreaId } },
    ],
  });

  const { t } = useTranslation();
  const validationSchema = getValidationSchema(t);

  if (loading) return <LoadingSpinner />;
  if (error || updateError) return <div>{t('forms.common.error')}</div>;

  const initial: WinterStorageAreaForm = getWinterStorageAreaForm(data) ?? {
    name: '',
    streetAddress: '',
    zipCode: '',
    municipality: 'Helsinki',
    wwwUrl: '',
    imageFile: '',
  };

  const handleSubmit = (values: WinterStorageAreaForm) =>
    updateWinterStorageArea({
      variables: {
        input: mapValuesToMutation(winterStorageAreaId, values),
      },
    }).then(() => onSubmit?.(values));

  return (
    <Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={validationSchema}>
      {({ errors, setFieldValue, values }) => (
        <Form className={styles.winterStorageAreaEditForm}>
          <Text as="h4" color="brand">
            {t('forms.winterStorage.title').toUpperCase()}
          </Text>

          <Section>
            <Field
              required={true}
              as={TextInput}
              id="name"
              name="name"
              label={t('forms.winterStorage.name')}
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
              label={t('forms.winterStorage.streetAddress')}
              invalid={!!errors.streetAddress}
              helperText={errors.streetAddress}
            />
            <Field
              required={true}
              as={TextInput}
              id="zipCode"
              name="zipCode"
              label={t('forms.winterStorage.zipCode')}
              invalid={!!errors.zipCode}
              helperText={errors.zipCode}
            />
            <Field
              required={true}
              as={TextInput}
              id="municipality"
              name="municipality"
              label={t('forms.winterStorage.municipality')}
              invalid={!!errors.municipality}
              helperText={errors.municipality}
            />
          </Section>

          <Section>
            <Field
              as={TextInput}
              id="wwwUrl"
              name="wwwUrl"
              label={t('forms.winterStorage.wwwUrl')}
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

export default WinterStorageAreaEditForm;
