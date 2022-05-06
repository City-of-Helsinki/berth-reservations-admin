import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';

import { CREATE_PLACE, CREATE_PLACEVariables as CREATE_PLACE_VARS } from './__generated__/CREATE_PLACE';
import { CREATE_PLACE_MUTATION } from './mutations';
import { Place, FormProps } from '../types';
import PlaceForm from './PlaceForm';
import { WinterStorageSection } from '../../types';
import { CreateWinterStoragePlaceMutationInput } from '../../../../@types/__generated__/globalTypes';

interface PlaceCreateFormProps extends Omit<FormProps<Place>, 'initialValues' | 'onDelete'> {
  sectionOptions: WinterStorageSection[];
}

const PlaceCreateForm = ({ onCancel, onSubmit, refetchQueries, sectionOptions }: PlaceCreateFormProps) => {
  const [createWinterStoragePlace, { loading: isSubmitting }] = useMutation<CREATE_PLACE, CREATE_PLACE_VARS>(
    CREATE_PLACE_MUTATION,
    {
      refetchQueries: refetchQueries ?? [],
    }
  );
  const { t } = useTranslation();

  return (
    <PlaceForm
      onCancel={onCancel}
      onSubmitText={t('forms.common.create')}
      onSubmit={(values) => {
        const { winterStorageSectionId, number, width, length, isActive, comment } = values;
        createWinterStoragePlace({
          variables: {
            input: {
              winterStorageSectionId,
              number,
              width,
              length,
              isActive,
              comment,
            } as CreateWinterStoragePlaceMutationInput,
          },
        }).then(() => onSubmit?.(values));
      }}
      isSubmitting={isSubmitting}
      sectionOptions={sectionOptions}
    />
  );
};

export default PlaceCreateForm;
