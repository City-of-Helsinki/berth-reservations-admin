import React from 'react';
import { useTranslation } from 'react-i18next';
import ButtonWithConfirmation from '../../../../common/buttonWithConfirmation/ButtonWithConfirmation';

export interface CancelLeaseButtonProps {
  address: string;
  cancelLease: (id: string) => void;
  customerName: string;
  id: string;
}

const CancelLeaseButton = ({ address, cancelLease, customerName, id }: CancelLeaseButtonProps) => {
  const { t } = useTranslation();

  return (
    <ButtonWithConfirmation
      buttonSize="small"
      buttonVariant="danger"
      buttonText={t('customerView.leases.cancelLease')}
      infoText={t('customerView.leases.cancelConfirmation.infoText', {
        customerName,
        address,
      })}
      modalTitle={t('customerView.leases.cancelLease')}
      onCancelText={t('common.cancel')}
      onConfirm={() => cancelLease(id)}
      onConfirmText={t('customerView.leases.cancelLease')}
      confirmButtonVariant="danger"
      warningText={t('customerView.leases.cancelConfirmation.warningText')}
    />
  );
};

export default CancelLeaseButton;
