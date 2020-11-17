import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';

import Button from '../../../common/button/Button';
import { UNMARKED_WINTER_STORAGE_NOTICES_STICKERS_QUERY } from './queries';
import { generateAndSaveStickerPDF, getCustomersWithStickers } from '../utils';
import { UNMARKED_WINTER_STORAGE_NOTICES_STICKERS } from './__generated__/UNMARKED_WINTER_STORAGE_NOTICES_STICKERS';
import styles from './printAllStickersButton.module.scss';

const PrintAllStickersButton = () => {
  const { t } = useTranslation();
  const { loading, data } = useQuery<UNMARKED_WINTER_STORAGE_NOTICES_STICKERS>(
    UNMARKED_WINTER_STORAGE_NOTICES_STICKERS_QUERY
  );

  if (loading) {
    return (
      <Button disabled={loading} className={styles.margin}>
        {t('unmarkedWsNotices.list.allStickerPrint.loading')}
      </Button>
    );
  }

  return (
    <Button onClick={() => generateAndSaveStickerPDF(getCustomersWithStickers(data))} className={styles.margin}>
      {t('unmarkedWsNotices.list.allStickerPrint.buttonText')}
    </Button>
  );
};

export default PrintAllStickersButton;
