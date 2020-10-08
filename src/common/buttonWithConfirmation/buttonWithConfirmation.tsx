import React, { useState } from 'react';
import { ButtonProps } from 'hds-react';

import ConfirmationModal, { ConfirmationModalProps } from '../confirmationModal/ConfirmationModal';
import Button from '../button/Button';
import Text from '../text/Text';

export enum ButtonWithConfirmationStyle {
  DEFAULT,
  FLAT,
}

export interface ButtonWithConfirmationProps extends Omit<ConfirmationModalProps, 'title' | 'isOpen' | 'onCancel'> {
  buttonText: string;
  modalTitle: string;
  buttonStyle?: ButtonWithConfirmationStyle;
  confirmButtonVariant?: ButtonProps['variant'];
  disabled?: boolean;
}

const ButtonWithConfirmation = ({
  modalTitle,
  infoText,
  onCancelText,
  onConfirmText,
  onConfirm,
  disabled,
  buttonText,
  confirmButtonVariant = 'primary',
  warningText,
  buttonStyle = ButtonWithConfirmationStyle.DEFAULT,
}: ButtonWithConfirmationProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderButton = () => {
    switch (buttonStyle) {
      case ButtonWithConfirmationStyle.DEFAULT:
        return (
          <Button variant="secondary" theme="coat" onClick={() => setIsModalOpen(true)} disabled={disabled}>
            {buttonText}
          </Button>
        );
      case ButtonWithConfirmationStyle.FLAT:
        return (
          <button onClick={() => setIsModalOpen(true)} disabled={disabled}>
            <Text color="brand">{buttonText}</Text>
          </button>
        );
    }
  };

  return (
    <>
      {renderButton()}
      <ConfirmationModal
        isOpen={isModalOpen}
        title={modalTitle}
        infoText={infoText}
        confirmButtonVariant={confirmButtonVariant}
        warningText={warningText}
        onCancelText={onCancelText}
        onConfirmText={onConfirmText}
        onCancel={() => setIsModalOpen(false)}
        onConfirm={() => {
          onConfirm();
          setIsModalOpen(false);
        }}
      />
    </>
  );
};

export default ButtonWithConfirmation;
