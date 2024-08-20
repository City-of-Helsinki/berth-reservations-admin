import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import { TextInput } from 'hds-react';
import { ObjectSchema } from 'yup';
import { Place, FormProps } from '../types';
import Grid from '../../../../common/grid/Grid';
import Select from '../../../../common/select/Select';
import styles from './placeForm.module.scss';
import { WinterStorageSection } from '../../types';
import FormHeader from '../../../../common/formHeader/FormHeader';
import ConfirmationModal from '../../../../common/confirmationModal/ConfirmationModal';
import { isNumber, isPositive, replaceCommaWithDot, replaceDotWithComma } from '../../../../common/utils/forms';
import Checkbox from '../../../../common/checkbox/Checkbox';
import Button from '../../../../common/button/Button';

interface PlaceFormProps extends FormProps<Place> {
  isEditing?: boolean;
  onSubmitText?: string;
  sectionOptions: WinterStorageSection[];
}

interface PlaceFormValues extends Omit<Place, 'width' | 'length'> {
  width?: string;
  length?: string;
}

const getPlaceValidationSchema = (t: TFunction, sectionOptions: WinterStorageSection[]): ObjectSchema => {
  return Yup.object().shape({
    winterStorageSectionId: Yup.string()
      .oneOf(sectionOptions.map((section) => section.id))
      .required(t('forms.common.errors.required')),
    number: Yup.string()
      .required(t('forms.common.errors.required'))
      .test('isNumber', t('forms.common.errors.numberType'), (val) => isNumber(val))
      .test('isPositive', t('forms.common.errors.positive'), (val) => isPositive(val)),
    width: Yup.string()
      .test('isNumber', t('forms.common.errors.numberType'), (val) => isNumber(val))
      .test('isPositive', t('forms.common.errors.positive'), (val) => isPositive(val)),
    length: Yup.string()
      .test('isNumber', t('forms.common.errors.numberType'), (val) => isNumber(val))
      .test('isPositive', t('forms.common.errors.positive'), (val) => isPositive(val)),
  });
};

const transformValues = (values: PlaceFormValues): Place => {
  const { winterStorageSectionId, number, width, length, comment, isActive } = values;
  return {
    number: number,
    width: width ? parseFloat(replaceCommaWithDot(width)) : undefined,
    length: length ? parseFloat(replaceCommaWithDot(length)) : undefined,
    winterStorageSectionId: winterStorageSectionId,
    comment,
    isActive,
  };
};

const PlaceForm = ({
  isEditing = false,
  initialValues,
  isSubmitting,
  onSubmit,
  onCancel,
  onDelete,
  onSubmitText,
  sectionOptions,
}: PlaceFormProps) => {
  const { t } = useTranslation();
  const validationSchema = getPlaceValidationSchema(t, sectionOptions);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const initial: PlaceFormValues = initialValues
    ? {
        ...initialValues,
        width: initialValues.width ? replaceDotWithComma(String(initialValues.width)) : '',
        length: initialValues.length ? replaceDotWithComma(String(initialValues.length)) : '',
      }
    : {
        winterStorageSectionId: sectionOptions[0].id,
        isActive: true,
      };

  return (
    <Formik
      initialValues={initial}
      onSubmit={(values) => onSubmit?.(transformValues(values))}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={validationSchema}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <FormHeader
            title={t('forms.winterStoragePlace.title')}
            isSubmitting={isSubmitting}
            onDelete={onDelete ? () => setIsDeleteModalOpen(true) : undefined}
            onDeleteText={t('forms.winterStoragePlace.delete')}
          />
          <Grid colsCount={3} className={styles.grid}>
            <Select
              id="winterStorageSectionId"
              value={values.winterStorageSectionId}
              options={sectionOptions.map((section) => {
                return {
                  label: section.identifier,
                  value: section.id,
                };
              })}
              onChange={handleChange}
              label={t('forms.winterStoragePlace.section')}
              required
              disabled={isEditing}
            />
            <TextInput
              id="number"
              value={values.number ? String(values.number) : ''}
              onChange={handleChange}
              label={t('forms.winterStoragePlace.number')}
              invalid={!!errors.number}
              helperText={errors.number}
              disabled={isEditing}
            />
            <div />
            <TextInput
              id="width"
              value={values.width ? String(values.width) : ''}
              onChange={handleChange}
              label={t('forms.winterStoragePlace.width')}
              invalid={!!errors.width}
              helperText={errors.width}
            />
            <TextInput
              id="length"
              value={values.length ? String(values.length) : ''}
              onChange={handleChange}
              label={t('forms.winterStoragePlace.length')}
              invalid={!!errors.length}
              helperText={errors.length}
            />
          </Grid>
          <hr />
          <TextInput
            id="comment"
            onChange={handleChange}
            value={values.comment}
            label={t('forms.winterStoragePlace.comment')}
          />
          <Checkbox
            id="isActive"
            onChange={handleChange}
            checked={values.isActive}
            label={t('forms.winterStoragePlace.isActive')}
          />
          <div className={styles.formActionButtons}>
            <Button variant="secondary" disabled={isSubmitting} color={'supplementary'} onClick={onCancel}>
              {t('forms.common.cancel')}
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {onSubmitText}
            </Button>
          </div>

          <ConfirmationModal
            isOpen={isDeleteModalOpen}
            title={t('forms.winterStoragePlace.title')}
            infoText={t('forms.winterStoragePlace.deleteConfirmation.infoText', {
              section: values.winterStorageSection,
              placeNumber: values.number,
            })}
            onCancelText={t('forms.common.cancel')}
            onConfirmText={t('forms.winterStoragePlace.delete')}
            warningText={t('forms.winterStoragePlace.deleteConfirmation.warningText')}
            onCancel={() => setIsDeleteModalOpen(false)}
            onConfirm={() => onDelete?.(transformValues(values))}
            className={styles.confirmationModal}
          />
        </form>
      )}
    </Formik>
  );
};

export default PlaceForm;
