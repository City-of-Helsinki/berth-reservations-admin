import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './customerViewPage.module.scss';
import PageTitle from '../../common/pageTitle/PageTitle';

const CustomerViewPage: React.FC = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.customerViewPage}>
      <PageTitle title={t('customerView.title')} />
      <div className={styles.grid}>{children}</div>
    </div>
  );
};

export default CustomerViewPage;
