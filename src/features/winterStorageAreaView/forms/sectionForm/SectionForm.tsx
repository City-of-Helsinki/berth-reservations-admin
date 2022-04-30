import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { TFunction } from 'i18next';
import { ObjectSchema } from 'yup';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'hds-react';

import Text from '../../../../common/text/Text';
import styles from './sectionForm.module.scss';
import { FormProps, Section } from '../types';
import Grid from '../../../../common/grid/Grid';
import FormHeader from '../../../../common/formHeader/FormHeader';
import ConfirmationModal from '../../../../common/confirmationModal/ConfirmationModal';
import Checkbox from '../../../../common/checkbox/Checkbox';
import Button from '../../../../common/button/Button';

interface SectionFormProps extends FormProps<Section> {
  onSubmitText?: string;
}

const getSectionValidationSchema = (t: TFunction): ObjectSchema => {
  return Yup.object().shape({
    identifier: Yup.string().required(t('forms.common.errors.required')),
    electricity: Yup.boolean(),
    water: Yup.boolean(),
    gate: Yup.boolean(),
    summerStorageForBoats: Yup.boolean(),
    summerStorageForDockingEquipment: Yup.boolean(),
    summerStorageForTrailers: Yup.boolean(),
  });
};

const SectionForm = ({ onSubmit, onDelete, onCancel, onSubmitText, isSubmitting, initialValues }: SectionFormProps) => {
  const { t } = useTranslation();
  const validationSchema = getSectionValidationSchema(t);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const initial: Section = {
    identifier: '',
    electricity: false,
    gate: false,
    water: false,
    summerStorageForBoats: false,
    summerStorageForDockingEquipment: false,
    summerStorageForTrailers: false,
    ...initialValues,
  };

  return (
    <Formik
      initialValues={initial}
      onSubmit={(values) => onSubmit?.(values)}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={validationSchema}
    >
      {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <FormHeader
            title={t('forms.winterStorageSection.title')}
            isSubmitting={isSubmitting}
            onDelete={onDelete ? () => setIsDeleteModalOpen(true) : undefined}
            onDeleteText={t('forms.winterStorageSection.delete')}
          />

          <TextInput
            id="identifier"
            type="text"
            value={values.identifier}
            onChange={handleChange}
            label={t('forms.winterStorageSection.identifier')}
            invalid={!!errors.identifier}
            helperText={errors.identifier}
          />

          <Grid colsCount={2}>
            <div className={styles.checkboxes}>
              <Text weight="bold" size="s">
                {t('forms.winterStorageSection.services')}
              </Text>
              {[
                'gate',
                'electricity',
                'water',
                'summerStorageForBoats',
                'summerStorageForDockingEquipment',
                'summerStorageForTrailers',
              ].map((keyForCheckbox, id) => (
                <Checkbox
                  key={id}
                  id={keyForCheckbox}
                  onChange={handleChange}
                  checked={values[keyForCheckbox as keyof Section] as boolean}
                  label={t(`forms.winterStorageSection.${keyForCheckbox}`)}
                />
              ))}
            </div>
          </Grid>
          <div className={styles.formActionButtons}>
            <Button variant="secondary" disabled={isSubmitting} onClick={onCancel}>
              {t('forms.common.cancel')}
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {onSubmitText}
            </Button>
          </div>

          <ConfirmationModal
            isOpen={isDeleteModalOpen}
            title={t('forms.winterStorageSection.title')}
            infoText={t('forms.winterStorageSection.deleteConfirmation.infoText', {
              sectionIdentifier: values.identifier,
            })}
            onCancelText={t('forms.common.cancel')}
            onConfirmText={t('forms.winterStorageSection.delete')}
            warningText={t('forms.winterStorageSection.deleteConfirmation.warningText')}
            onCancel={() => setIsDeleteModalOpen(false)}
            onConfirm={() => onDelete?.(values)}
            className={styles.confirmationModal}
          />
        </form>
      )}
    </Formik>
  );
};

export default SectionForm;
