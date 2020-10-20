import React from 'react';
import { useTranslation } from 'react-i18next';

import ButtonWithConfirmation, { ButtonWithConfirmationProps } from '../buttonWithConfirmation/buttonWithConfirmation';
import { ConfirmationModalProps } from '../confirmationModal/ConfirmationModal';

export interface DeleteButtonProps extends Pick<ConfirmationModalProps, 'onConfirm' | 'warningText'> {
  buttonText: string;
  buttonStyle?: ButtonWithConfirmationProps['buttonStyle'];
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
  buttonStyle = 'default',
  buttonClassName,
  modalClassName,
}: DeleteButtonProps) => {
  const { t } = useTranslation();
  return (
    <ButtonWithConfirmation
      buttonText={buttonText}
      modalTitle={modalTitle ?? t('deleteButton.modalTitle')}
      buttonStyle={buttonStyle}
      infoText={infoText ?? t('deleteButton.infoText')}
      onCancelText={onCancelText ?? t('deleteButton.onCancelText')}
      onConfirmText={onConfirmText ?? t('deleteButton.onConfirmText')}
      warningText={warningText ?? t('deleteButton.warningText')}
      onConfirm={onConfirm}
      disabled={disabled}
      confirmButtonVariant="danger"
      buttonClassName={buttonClassName}
      modalClassName={modalClassName}
    />
  );
};

export default DeleteButton;
