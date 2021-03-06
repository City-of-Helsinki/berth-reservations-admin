import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';

import { UNMARKED_WINTER_STORAGE_STICKER_QUERY } from './queries';
import { ASSIGN_NEW_STICKER_NUMBER_MUTATION } from './mutations';
import StickerDetails from './StickerDetails';
import {
  UNMARKED_WINTER_STORAGE_STICKER,
  UNMARKED_WINTER_STORAGE_STICKERVariables as UNMARKED_WINTER_STORAGE_STICKER_VARS,
} from './__generated__/UNMARKED_WINTER_STORAGE_STICKER';
import {
  ASSIGN_NEW_STICKER_NUMBER,
  ASSIGN_NEW_STICKER_NUMBERVariables as ASSIGN_NEW_STICKER_NUMBER_VARS,
} from './__generated__/ASSIGN_NEW_STICKER_NUMBER';
import { LeaseStatus } from '../../../../@types/__generated__/globalTypes';
import hdsToast from '../../../../common/toast/hdsToast';

interface StickerDetailsContainerProps {
  leaseId: string;
  leaseStatus: LeaseStatus;
  onStickerChange?(): void;
}

const StickerDetailsContainer = ({ leaseId, leaseStatus, onStickerChange }: StickerDetailsContainerProps) => {
  const { data, loading } = useQuery<UNMARKED_WINTER_STORAGE_STICKER, UNMARKED_WINTER_STORAGE_STICKER_VARS>(
    UNMARKED_WINTER_STORAGE_STICKER_QUERY,
    {
      variables: { id: leaseId },
    }
  );
  const [assignNewStickerNumber, { loading: isAssigningNewStickerNumber }] = useMutation<
    ASSIGN_NEW_STICKER_NUMBER,
    ASSIGN_NEW_STICKER_NUMBER_VARS
  >(ASSIGN_NEW_STICKER_NUMBER_MUTATION, {
    refetchQueries: [{ query: UNMARKED_WINTER_STORAGE_STICKER_QUERY, variables: { id: leaseId } }],
  });

  const sticker = data?.unmarkedWinterStorageSticker;

  if (loading || !sticker) {
    return null;
  }

  const handleAssignNewStickerNumber =
    leaseStatus === LeaseStatus.PAID
      ? () =>
          assignNewStickerNumber({ variables: { input: { leaseId: leaseId } } })
            .then(() => {
              hdsToast({
                translated: true,
                labelText: 'toast.stickerNumChanged.label',
                text: 'toast.stickerNumChanged.description',
                type: 'success',
              });
            })
            .then(() => onStickerChange?.())
      : undefined;

  return (
    <StickerDetails
      stickerNumber={sticker.stickerNumber}
      stickerSeason={sticker.stickerSeason}
      stickerPosted={sticker.stickerPosted}
      handleAssignNewStickerNumber={handleAssignNewStickerNumber}
      isAssigningNewStickerNumber={isAssigningNewStickerNumber}
    />
  );
};

export default StickerDetailsContainer;
