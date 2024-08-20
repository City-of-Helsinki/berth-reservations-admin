import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import Text from '../text/Text';
import styles from './formHeader.module.scss';

interface Props {
  title: string;
  className?: string;
  upperCase?: boolean;
  isSubmitting?: boolean;
  onDeleteText?: string;
  onDelete?(): void;
}

const FormHeader = ({ title, className, isSubmitting, upperCase, onDelete, onDeleteText }: Props) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.heading, className)}>
      <Text as="h4" color="brand" className={classNames({ [styles.upperCase]: upperCase })}>
        {title}
      </Text>
      {onDelete && (
        <button disabled={isSubmitting} onClick={() => onDelete()} type="button">
          <Text color="critical">{onDeleteText ?? t('forms.common.delete')}</Text>
        </button>
      )}
    </div>
  );
};

export default FormHeader;
