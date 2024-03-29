import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import { TextInput } from 'hds-react';
import { ObjectSchema } from 'yup';

import { Berth, FormProps } from '../types';
import { BerthMooringType } from '../../../../@types/__generated__/globalTypes';
import Grid from '../../../../common/grid/Grid';
import Select from '../../../../common/select/Select';
import styles from './berthForm.module.scss';
import { Pier } from '../../types';
import FormHeader from '../../../../common/formHeader/FormHeader';
import ConfirmationModal from '../../../../common/confirmationModal/ConfirmationModal';
import { isNumber, isPositive, replaceCommaWithDot, replaceDotWithComma } from '../../../../common/utils/forms';
import Checkbox from '../../../../common/checkbox/Checkbox';
import Button from '../../../../common/button/Button';

interface BerthFormProps extends FormProps<Berth> {
  isEditing?: boolean;
  onSubmitText?: string;
  pierOptions: Pier[];
}

interface BerthFormValues extends Omit<Berth, 'width' | 'length' | 'depth'> {
  width?: string;
  length?: string;
  depth?: string;
}

const getBerthValidationSchema = (t: TFunction, pierOptions: Pier[]): ObjectSchema => {
  return Yup.object().shape({
    pierId: Yup.string()
      .oneOf(pierOptions.map((pier) => pier.id))
      .required(t('forms.common.errors.required')),
    number: Yup.string().required(t('forms.common.errors.required')),
    width: Yup.string()
      .test('isNumber', t('forms.common.errors.numberType'), (val) => isNumber(val))
      .test('isPositive', t('forms.common.errors.positive'), (val) => isPositive(val))
      .required(t('forms.common.errors.required')),
    length: Yup.string()
      .test('isNumber', t('forms.common.errors.numberType'), (val) => isNumber(val))
      .test('isPositive', t('forms.common.errors.positive'), (val) => isPositive(val))
      .required(t('forms.common.errors.required')),
    depth: Yup.string()
      .test('isNumber', t('forms.common.errors.numberType'), (val) => isNumber(val))
      .test('isPositive', t('forms.common.errors.positive'), (val) => isPositive(val)),
    mooringType: Yup.string().oneOf(Object.keys(BerthMooringType)).required(t('forms.common.errors.required')),
  });
};

const transformValues = (values: BerthFormValues): Berth => {
  const { number, width, length, depth } = values;
  return {
    ...values,
    number: number,
    width: width ? parseFloat(replaceCommaWithDot(width)) : undefined,
    length: length ? parseFloat(replaceCommaWithDot(length)) : undefined,
    depth: depth ? parseFloat(replaceCommaWithDot(depth)) : undefined,
  };
};

const BerthForm = ({
  isEditing = false,
  initialValues,
  isSubmitting,
  onSubmit,
  onCancel,
  onDelete,
  onSubmitText,
  pierOptions,
}: BerthFormProps) => {
  const { t } = useTranslation();
  const validationSchema = getBerthValidationSchema(t, pierOptions);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const initial: BerthFormValues = initialValues
    ? {
        ...initialValues,
        width: initialValues.width ? replaceDotWithComma(String(initialValues.width)) : '',
        length: initialValues.length ? replaceDotWithComma(String(initialValues.length)) : '',
        depth: initialValues.depth ? replaceDotWithComma(String(initialValues.depth)) : '',
      }
    : {
        pierId: pierOptions[0].id,
        mooringType: BerthMooringType.DINGHY_PLACE,
        comment: '',
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
            title={t('forms.berth.title')}
            isSubmitting={isSubmitting}
            onDelete={onDelete ? () => setIsDeleteModalOpen(true) : undefined}
            onDeleteText={t('forms.berth.delete')}
          />
          <Grid colsCount={3} className={styles.grid}>
            <Select
              id="pierId"
              value={values.pierId}
              options={pierOptions.map((pier) => {
                return {
                  label: pier.identifier,
                  value: pier.id,
                };
              })}
              onChange={handleChange}
              label={t('forms.berth.pier')}
              required
              disabled={isEditing}
            />
            <TextInput
              id="number"
              value={values.number ? String(values.number) : ''}
              onChange={handleChange}
              label={t('forms.berth.number')}
              invalid={!!errors.number}
              helperText={errors.number}
              disabled={isEditing}
            />
            <div />
            <TextInput
              id="width"
              value={values.width ? String(values.width) : ''}
              onChange={handleChange}
              label={t('forms.berth.width')}
              invalid={!!errors.width}
              helperText={errors.width}
            />
            <TextInput
              id="length"
              value={values.length ? String(values.length) : ''}
              onChange={handleChange}
              label={t('forms.berth.length')}
              invalid={!!errors.length}
              helperText={errors.length}
            />
            <TextInput
              id="depth"
              onChange={handleChange}
              value={values.depth ? String(values.number) : ''}
              label={t('forms.berth.depth')}
              invalid={!!errors.depth}
              helperText={errors.depth}
            />
          </Grid>

          <hr />

          <Select
            id="mooringType"
            value={values.mooringType}
            label={t('forms.berth.mooringType')}
            options={Object.keys(BerthMooringType).map((mooringType) => {
              return {
                label: t([`common.mooringTypes.${mooringType}`, mooringType]),
                value: mooringType,
              };
            })}
            onChange={handleChange}
            required
          />
          <TextInput id="comment" onChange={handleChange} value={values.comment} label={t('forms.berth.comment')} />
          <Checkbox id="isActive" onChange={handleChange} checked={values.isActive} label={t('forms.berth.isActive')} />
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
            title={t('forms.berth.title')}
            infoText={t('forms.berth.deleteConfirmation.infoText', {
              pier: values.pier,
              berthNumber: values.number,
            })}
            onCancelText={t('forms.common.cancel')}
            onConfirmText={t('forms.berth.delete')}
            warningText={t('forms.berth.deleteConfirmation.warningText')}
            onCancel={() => setIsDeleteModalOpen(false)}
            onConfirm={() => onDelete?.(transformValues(values))}
            className={styles.confirmationModal}
          />
        </form>
      )}
    </Formik>
  );
};

export default BerthForm;
