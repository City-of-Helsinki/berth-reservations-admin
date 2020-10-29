import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../common/button/Button';
import Modal from '../../common/modal/Modal';
import Text from '../../common/text/Text';
import SendMultiOffersForm from '../sendMultiOffersForm/SendMultiOffersForm';
import styles from './applicationListTools.module.scss';

export interface ApplicationListToolsProps {
  offersCount: number;
  selectedApplicationsCount: number;
  isSubmitting: boolean;
  clearSelectedRows(): void;
  handleApproveOrders(): Promise<void>;
}

const ApplicationListTools = ({
  offersCount,
  selectedApplicationsCount,
  isSubmitting,
  clearSelectedRows,
  handleApproveOrders,
}: ApplicationListToolsProps) => {
  const { t } = useTranslation();
  const [sendInvoiceModalOpen, setSendInvoiceModalOpen] = useState(false);
  const noSelection = selectedApplicationsCount === 0;
  const handleSubmit = async () => {
    await handleApproveOrders();
    clearSelectedRows();
    setSendInvoiceModalOpen(false);
  };

  return (
    <>
      <div className={styles.applicationListTools}>
        <Button
          className={styles.marginRight}
          onClick={() => setSendInvoiceModalOpen(true)}
          variant="secondary"
          disabled={noSelection}
        >
          {t('applicationList.tools.sendOffer')}
        </Button>
        <span className={styles.marginRight}>
          {t('applicationList.tools.selectedRow', { count: selectedApplicationsCount })}
        </span>
        <button className={styles.marginRight} disabled={noSelection} onClick={clearSelectedRows}>
          <Text color={noSelection ? 'gray' : 'brand'}>{t('applicationList.tools.clearSelectedRows')}</Text>
        </button>
      </div>
      <Modal isOpen={sendInvoiceModalOpen} toggleModal={() => setSendInvoiceModalOpen(false)}>
        <SendMultiOffersForm
          offersCount={offersCount}
          onSubmit={handleSubmit}
          onCancel={() => setSendInvoiceModalOpen(false)}
          isSubmitting={isSubmitting}
        />
      </Modal>
    </>
  );
};

export default ApplicationListTools;
