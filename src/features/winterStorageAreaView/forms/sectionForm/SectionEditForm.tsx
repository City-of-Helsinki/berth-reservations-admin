import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { FormProps, Section } from '../types';
import SectionForm from './SectionForm';
import { DELETE_SECTION_MUTATION, UPDATE_SECTION_MUTATION } from './mutations';
import { UPDATE_SECTION, UPDATE_SECTIONVariables as UPDATE_SECTION_VARS } from './__generated__/UPDATE_SECTION';
import { SECTION_QUERY } from './queries';
import LoadingSpinner from '../../../../common/spinner/LoadingSpinner';
import { getSection } from './utils/utils';
import { SECTION } from './__generated__/SECTION';
import { DELETE_SECTION, DELETE_SECTIONVariables as DELETE_SECTION_VARS } from './__generated__/DELETE_SECTION';

interface Props extends Omit<FormProps<Section>, 'initialValues' | 'isSubmitting'> {
  winterStorageSectionId: string;
}

const SectionEditForm = ({ winterStorageSectionId, onCancel, onSubmit, onDelete, refetchQueries }: Props) => {
  const { loading, error, data } = useQuery<SECTION>(SECTION_QUERY, {
    variables: { id: winterStorageSectionId },
  });
  const [updateSection, { loading: isSubmitting, error: updateError }] = useMutation<
    UPDATE_SECTION,
    UPDATE_SECTION_VARS
  >(UPDATE_SECTION_MUTATION, {
    refetchQueries: [...(refetchQueries ?? []), { query: SECTION_QUERY, variables: { id: winterStorageSectionId } }],
  });
  const [deleteSection, { error: deleteError }] = useMutation<DELETE_SECTION, DELETE_SECTION_VARS>(
    DELETE_SECTION_MUTATION,
    {
      refetchQueries: refetchQueries ?? [],
    }
  );
  const { t } = useTranslation();

  if (loading) return <LoadingSpinner />;
  if (error || updateError || deleteError) return <div>{t('forms.common.error')}</div>;

  const initialValues = getSection(data);

  return (
    <SectionForm
      initialValues={initialValues}
      onSubmitText={t('forms.common.update')}
      onCancel={onCancel}
      onSubmit={(values) =>
        updateSection({
          variables: { input: { id: winterStorageSectionId, ...values } },
        }).then(() => onSubmit?.(values))
      }
      onDelete={(values) =>
        deleteSection({ variables: { input: { id: winterStorageSectionId } } }).then(() => onDelete?.(values))
      }
      isSubmitting={isSubmitting}
    />
  );
};

export default SectionEditForm;
