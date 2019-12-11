import React from 'react';
import { useTranslation } from 'react-i18next';

import HelsinkiLogo from '../../common/helsinkiLogo/HelsinkiLogo';
import Button from '../../common/button/Button';
import Text from '../../common/text/Text';
import styles from './loginPage.module.scss';
import Header from '../../common/header/Header';
import Layout from '../../common/layout/Layout';

const LoginPage: React.SFC = () => {
  const { t } = useTranslation();

  return (
    <Layout
      header={
        <Header>
          <HelsinkiLogo size="large" />
        </Header>
      }
    >
      <div className={styles.body}>
        <HelsinkiLogo size="large" />
        <div className={styles.contentWrapper}>
          <Text as="h3">{t('login.heading')}</Text>
        </div>
        <Button size="large">{t('login.loginButton')}</Button>
      </div>
    </Layout>
  );
};

export default LoginPage;
