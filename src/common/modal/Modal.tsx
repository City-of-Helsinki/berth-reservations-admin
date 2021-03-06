import React from 'react';
import ReactModal from 'react-modal';
import classNames from 'classnames';

import styles from './modal.module.scss';
import Text from '../../common/text/Text';

export type ModalProps = {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  label?: string;
  shouldCloseOnOverlayClick?: boolean;
  toggleModal?: (value: boolean) => void;
};

const Modal = ({ children, className, isOpen, label, shouldCloseOnOverlayClick = true, toggleModal }: ModalProps) => {
  const onClose = () => {
    toggleModal?.(false);
  };

  return (
    <ReactModal
      appElement={document.getElementById('root') as HTMLElement}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={label}
      className={classNames(styles.modal, className)}
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    >
      {label && (
        <Text as="h4" color="brand">
          {label}
        </Text>
      )}
      {children}
    </ReactModal>
  );
};

export default Modal;
