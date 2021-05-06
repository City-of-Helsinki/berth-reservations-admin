import React, { useState } from 'react';
import { ButtonProps } from 'hds-react';

import ConfirmationModal, { ConfirmationModalProps } from '../confirmationModal/ConfirmationModal';
import Button from '../button/Button';
import Text from '../text/Text';

export interface ButtonWithConfirmationProps extends Omit<ConfirmationModalProps, 'title' | 'isOpen' | 'onCancel'> {
  buttonClassName?: string;
  buttonSize?: ButtonProps['size'];
  buttonStyle?: 'flat' | 'default';
  buttonText: string;
  buttonVariant?: Exclude<ButtonProps['variant'], 'supplementary'>;
  confirmButtonVariant?: Exclude<ButtonProps['variant'], 'supplementary'>;
  disabled?: boolean;
  modalClassName?: string;
  modalTitle: string;
}

const ButtonWithConfirmation = ({
  buttonClassName,
  buttonSize,
  buttonStyle = 'default',
  buttonText,
  buttonVariant = 'secondary',
  confirmButtonVariant = 'primary',
  disabled,
  infoText,
  modalClassName,
  modalTitle,
  onCancelText,
  onConfirm,
  onConfirmText,
  warningText,
}: ButtonWithConfirmationProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderButton = () => {
    switch (buttonStyle) {
      case 'default':
        return (
          <Button
            variant={buttonVariant}
            theme="coat"
            size={buttonSize}
            onClick={() => setIsModalOpen(true)}
            disabled={disabled}
            className={buttonClassName}
          >
            {buttonText}
          </Button>
        );
      case 'flat':
        return (
          <button onClick={() => setIsModalOpen(true)} disabled={disabled} className={buttonClassName}>
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
        className={modalClassName}
      />
    </>
  );
};

export default ButtonWithConfirmation;
