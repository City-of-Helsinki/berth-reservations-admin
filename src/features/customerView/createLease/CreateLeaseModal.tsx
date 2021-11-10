import React from 'react';
import { useTranslation } from 'react-i18next';

import Modal from '../../../common/modal/Modal';
import styles from './createLeaseModal.module.scss';
import FormHeader from '../../../common/formHeader/FormHeader';
import Button from '../../../common/button/Button';

export interface CreateLeaseModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  isReadyToContinue?: boolean;
  title: string;
  onClose(): void;
  onContinue(e: React.FormEvent): void;
}

const CreateLeaseModal = ({
  children,
  isOpen,
  isReadyToContinue,
  title,
  onClose,
  onContinue,
}: CreateLeaseModalProps) => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue(e);
  };

  return (
    <Modal isOpen={isOpen} toggleModal={onClose}>
      <form className={styles.createLeaseModal} onSubmit={handleSubmit} noValidate>
        <FormHeader title={title} upperCase />
        {children}
        <div className={styles.buttons}>
          <Button variant="secondary" onClick={onClose}>
            {t('common.cancel')}
          </Button>
          <Button type="submit" disabled={!isReadyToContinue}>
            {t('common.continue')}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateLeaseModal;
