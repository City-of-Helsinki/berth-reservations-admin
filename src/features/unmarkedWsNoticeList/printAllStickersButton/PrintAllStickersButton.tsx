import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';
import Button from '../../../common/button/Button';
import { UNMARKED_WINTER_STORAGE_NOTICES_STICKERS_QUERY } from './queries';
import { generateAndSaveStickerPDF, getCustomersWithUnsentStickers } from '../utils';
import { UNMARKED_WINTER_STORAGE_NOTICES_STICKERS } from './__generated__/UNMARKED_WINTER_STORAGE_NOTICES_STICKERS';
import styles from './printAllStickersButton.module.scss';
import {
  SET_STICKERS_POSTED,
  SET_STICKERS_POSTEDVariables as SET_STICKERS_POSTED_VARS,
} from '../__generated__/SET_STICKERS_POSTED';
import { SET_STICKERS_POSTED_MUTATION } from '../mutations';

const PrintAllStickersButton = () => {
  const { t } = useTranslation();
  const { loading, data } = useQuery<UNMARKED_WINTER_STORAGE_NOTICES_STICKERS>(
    UNMARKED_WINTER_STORAGE_NOTICES_STICKERS_QUERY
  );
  const [setStickersPosted] = useMutation<SET_STICKERS_POSTED, SET_STICKERS_POSTED_VARS>(SET_STICKERS_POSTED_MUTATION);

  const onClick = () => {
    const customers = getCustomersWithUnsentStickers(data);
    generateAndSaveStickerPDF(customers);
    setStickersPosted({
      variables: {
        input: {
          leaseIds: customers.map((customer) => customer.leaseId as string),
          date: new Date().toISOString().split('T')[0],
        },
      },
    });
  };

  if (loading) {
    return (
      <Button disabled={loading} className={styles.margin}>
        {t('unmarkedWsNotices.list.allStickerPrint.loading')}
      </Button>
    );
  }

  return (
    <Button onClick={onClick} className={styles.margin}>
      {t('unmarkedWsNotices.list.allStickerPrint.buttonText')}
    </Button>
  );
};

export default PrintAllStickersButton;
