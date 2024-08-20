import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/react-hooks';
import { FormProps, Section } from '../types';
import SectionForm from './SectionForm';
import { CREATE_SECTION_MUTATION } from './mutations';
import { CREATE_SECTION, CREATE_SECTIONVariables as CREATE_SECTION_VARS } from './__generated__/CREATE_SECTION';

interface Props extends Omit<FormProps<Section>, 'initialValues' | 'isSubmitting' | 'onDelete'> {
  winterStorageAreaId: string;
}

const SectionCreateForm = ({ winterStorageAreaId, onCancel, onSubmit, refetchQueries }: Props) => {
  const [createSection, { loading: isSubmitting, error: createError }] = useMutation<
    CREATE_SECTION,
    CREATE_SECTION_VARS
  >(CREATE_SECTION_MUTATION, {
    refetchQueries: refetchQueries ?? [],
  });
  const { t } = useTranslation();

  if (createError) return <div>{t('forms.common.error')}</div>;

  return (
    <SectionForm
      onSubmitText={t('forms.common.create')}
      onCancel={onCancel}
      onSubmit={(values: Section) =>
        createSection({ variables: { input: { ...values, areaId: winterStorageAreaId } } }).then(() =>
          onSubmit?.(values)
        )
      }
      isSubmitting={isSubmitting}
    />
  );
};

export default SectionCreateForm;
