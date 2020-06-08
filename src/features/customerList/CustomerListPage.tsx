import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './customerListPage.module.scss';
import PageTitle from '../../common/pageTitle/PageTitle';

const CustomerListPage: React.FC = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.customerListPage}>
      <PageTitle title={t('customerList.title')} />
      {children}
    </div>
  );
};

export default CustomerListPage;
