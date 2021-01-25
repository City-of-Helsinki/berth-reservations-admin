import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import Button from '../../common/button/Button';
import Modal from '../../common/modal/Modal';
import Text from '../../common/text/Text';
import SendMultiOffersForm from '../sendMultiOffersForm/SendMultiOffersForm';
import styles from './sendOffersListTool.module.scss';
import hdsToast from '../../common/toast/hdsToast';

export interface SendOffersListToolProps<A, O> {
  isSubmitting: boolean;
  selectedRows: A[];
  clearSelectedRows(): void;
  filterUnhandledApplications(offer: A): boolean;
  getDraftedOffers(rows: A[]): O[];
  getSentOffers(rows: A[]): O[];
  handleSendOffers(draftedOffers: O[], sentOffers: O[], date: string): void;
}

const SendOffersListTool = <A, O>({
  clearSelectedRows,
  filterUnhandledApplications,
  getDraftedOffers,
  getSentOffers,
  handleSendOffers,
  isSubmitting,
  selectedRows,
}: SendOffersListToolProps<A, O>) => {
  const { t } = useTranslation();
  const [sendInvoiceModalOpen, setSendInvoiceModalOpen] = useState(false);
  const toastId = 'multiApplicationsError';

  const draftedOffers = getDraftedOffers(selectedRows);
  const sentOffers = getSentOffers(selectedRows);
  const unhandledApplicationsCount = selectedRows.filter(filterUnhandledApplications).length;
  const noSelection = selectedRows.length === 0;

  const handleClickSend = () => {
    if (unhandledApplicationsCount > 0) {
      hdsToast({
        autoDismiss: false,
        type: 'error',
        toastId,
        labelText: 'applicationList.errors.unhandledApplications.label',
        text: 'applicationList.errors.unhandledApplications.description',
        translated: true,
      });
    } else {
      toast.dismiss(toastId);
    }
    setSendInvoiceModalOpen(true);
  };

  const handleSubmit = (values: { dueDate: string }) => {
    handleSendOffers(draftedOffers, sentOffers, values.dueDate);
    clearSelectedRows();
    setSendInvoiceModalOpen(false);
  };

  return (
    <>
      <div className={styles.applicationListTools}>
        <Button className={styles.marginLeft} onClick={handleClickSend} variant="secondary" disabled={noSelection}>
          {t('applicationList.tools.sendOffer')}
        </Button>
        <span className={styles.marginLeft}>
          {t('applicationList.tools.selectedRow', { count: selectedRows.length })}
        </span>
        <button className={styles.marginLeft} disabled={noSelection} onClick={clearSelectedRows}>
          <Text color={noSelection ? 'gray' : 'brand'}>{t('applicationList.tools.clearSelectedRows')}</Text>
        </button>
      </div>
      <Modal isOpen={sendInvoiceModalOpen} toggleModal={() => setSendInvoiceModalOpen(false)}>
        <SendMultiOffersForm
          sentOffersCount={sentOffers.length}
          draftedOffersCount={draftedOffers.length}
          onSubmit={handleSubmit}
          onCancel={() => setSendInvoiceModalOpen(false)}
          isSubmitting={isSubmitting}
        />
      </Modal>
    </>
  );
};

export default SendOffersListTool;
