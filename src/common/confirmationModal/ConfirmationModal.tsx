import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from 'hds-react';
import Modal from '../modal/Modal';
import Text from '../text/Text';
import styles from './confirmationModal.module.scss';
import Button from '../button/Button';

export interface ConfirmationModalProps {
  isOpen: boolean;
  title: string;
  infoText: string;
  confirmButtonVariant?: Exclude<ButtonProps['variant'], 'supplementary'>;
  warningText?: string;
  onCancelText: string;
  onConfirmText: string;
  className?: string;
  onCancel(): void;
  onConfirm(): void;
}

const ConfirmationModal = ({
  isOpen,
  title,
  infoText,
  confirmButtonVariant = 'danger',
  warningText,
  onCancelText,
  onConfirmText,
  onCancel,
  onConfirm,
  className,
}: ConfirmationModalProps) => {
  return (
    <Modal isOpen={isOpen} toggleModal={onCancel} className={classNames(styles.confirmationModal, className)}>
      <Text as="h4" color="brand" className={styles.uppercase}>
        {title}
      </Text>
      <div className={styles.infoTexts}>
        <Text>{infoText}</Text>
        {warningText && (
          <Text as="strong" color="critical" className={styles.warningText}>
            {warningText}
          </Text>
        )}
      </div>
      <div className={styles.actionButtons}>
        <Button variant="secondary" onClick={onCancel} type="button">
          {onCancelText}
        </Button>
        <Button variant={confirmButtonVariant} onClick={onConfirm} type="button">
          {onConfirmText}
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
