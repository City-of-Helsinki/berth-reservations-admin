import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import ConfirmationModal, { ConfirmationModalProps } from '../confirmationModal/ConfirmationModal';
import Button from '../button/Button';

export interface DeleteButtonProps extends Pick<ConfirmationModalProps, 'onConfirm' | 'warningText'> {
  buttonText: string;
  modalTitle?: string;
  infoText?: string;
  onCancelText?: string;
  onConfirmText?: string;
  disabled?: boolean;
  buttonClassName?: string;
  modalClassName?: string;
}

const DeleteButton = ({
  modalTitle,
  infoText,
  onCancelText,
  onConfirmText,
  onConfirm,
  disabled,
  buttonText,
  warningText,
  buttonClassName,
  modalClassName,
}: DeleteButtonProps) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Button
        variant="secondary"
        theme="coat"
        onClick={() => setIsModalOpen(true)}
        disabled={disabled}
        className={buttonClassName}
      >
        {buttonText}
      </Button>
      <ConfirmationModal
        isOpen={isModalOpen}
        title={modalTitle ?? t('deleteButton.modalTitle')}
        infoText={infoText ?? t('deleteButton.infoText')}
        warningText={warningText ?? t('deleteButton.warningText')}
        onCancelText={onCancelText ?? t('deleteButton.onCancelText')}
        onConfirmText={onConfirmText ?? t('deleteButton.onConfirmText')}
        onCancel={() => setIsModalOpen(false)}
        onConfirm={() => {
          onConfirm();
          setIsModalOpen(false);
        }}
        className={modalClassName}
      />
    </>
  );
};

export default DeleteButton;
