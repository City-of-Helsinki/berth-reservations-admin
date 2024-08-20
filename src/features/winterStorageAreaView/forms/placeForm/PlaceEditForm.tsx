import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';
import { INDIVIDUAL_PLACE_QUERY } from './queries';
import LoadingSpinner from '../../../../common/spinner/LoadingSpinner';
import { INDIVIDUAL_PLACE } from './__generated__/INDIVIDUAL_PLACE';
import { UPDATE_PLACE, UPDATE_PLACEVariables as UPDATE_PLACE_VARS } from './__generated__/UPDATE_PLACE';
import { DELETE_PLACE_MUTATION, UPDATE_PLACE_MUTATION } from './mutations';
import { Place, FormProps } from '../types';
import { DELETE_PLACE, DELETE_PLACEVariables as DELETE_PLACE_VARS } from './__generated__/DELETE_PLACE';
import PlaceForm from './PlaceForm';
import { WinterStorageSection } from '../../types';
import { getWinterStoragePlace } from '../utils/utils';

interface PlaceEditFormProps extends Omit<FormProps<Place>, 'initialValues' | 'onCreate'> {
  placeId: string;
  sectionOptions: WinterStorageSection[];
}

const PlaceEditForm = ({
  placeId,
  onCancel,
  onSubmit,
  onDelete,
  refetchQueries,
  sectionOptions,
}: PlaceEditFormProps) => {
  const { loading, error, data } = useQuery<INDIVIDUAL_PLACE>(INDIVIDUAL_PLACE_QUERY, {
    variables: { id: placeId },
    fetchPolicy: 'no-cache',
  });

  const [updateWinterStoragePlace, { loading: isSubmitting }] = useMutation<UPDATE_PLACE, UPDATE_PLACE_VARS>(
    UPDATE_PLACE_MUTATION,
    {
      refetchQueries: [...(refetchQueries ?? []), { query: INDIVIDUAL_PLACE_QUERY, variables: { id: placeId } }],
    }
  );

  const [deleteWinterStoragePlace] = useMutation<DELETE_PLACE, DELETE_PLACE_VARS>(DELETE_PLACE_MUTATION, {
    refetchQueries: refetchQueries ?? [],
  });

  const { t } = useTranslation();

  if (loading) return <LoadingSpinner />;
  if (error) return <div>{t('forms.common.error')}</div>;

  const initialValues = getWinterStoragePlace(data);

  return (
    <PlaceForm
      initialValues={initialValues}
      isEditing={true}
      onCancel={onCancel}
      onDelete={(values) =>
        deleteWinterStoragePlace({ variables: { input: { id: placeId } } }).then(() => onDelete?.(values))
      }
      onSubmitText={t('forms.common.update')}
      onSubmit={(values) => {
        const { width, length, comment, isActive } = values;
        updateWinterStoragePlace({
          variables: {
            input: {
              id: placeId,
              width,
              length,
              comment,
              isActive,
            },
          },
        }).then(() => onSubmit?.(values));
      }}
      isSubmitting={isSubmitting}
      sectionOptions={sectionOptions}
    />
  );
};

export default PlaceEditForm;
