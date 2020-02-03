import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, IconBoots, IconFood } from 'hds-react';

import Layout from '../../common/layout/Layout';
import Sidebar from '../../common/sidebar/Sidebar';
import Expandable from '../../common/expandable/Expandable';
<<<<<<< HEAD
import Button from '../../common/button/Button';
import Icon from '../../common/icon/Icon';
=======
import InternalLink from '../../common/internalLink/InternalLink';
import Text from '../../common/text/Text';
>>>>>>> 949b375... deprecate button component, break styling a bit
import PageHeader from '../pageHeader/PageHeaderContainer';

const Page: React.SFC = ({ children }) => {
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <Layout
      header={<PageHeader />}
      sidebar={
        <Sidebar>
          {[
            <Expandable
              key="harbors"
              onClick={() => history.push('/harbors')}
              label={
                <Button
                  variant="text"
                  icon={<Icon name="fence" color="standard" />}
                >
                  {t('common.sidebar.harbors')}
                </Button>
              }
            ></Expandable>,
            <Expandable
              key="customers"
              onClick={() => history.push('/applications')}
              label={
                <Button
                  variant="text"
                  icon={<Icon name="applications" color="standard" />}
                >
                  {t('common.sidebar.applications')}
                </Button>
                <InternalLink to="harbors">
                  <Button color="supplementary" iconLeft={<IconBoots />}>
                    <Text bold>{t('common.sidebar.harbors')}</Text>
                  </Button>
                </InternalLink>
              }
            ></Expandable>,
            <Expandable
              key="customers"
              onClick={() => history.push('/customers')}
              label={
<<<<<<< HEAD
                <Button
                  variant="text"
                  icon={<Icon name="user" color="standard" />}
                >
                  {t('common.sidebar.customers')}
                </Button>
=======
                <InternalLink to="customers">
                  <Button color="supplementary" iconLeft={<IconFood />}>
                    <Text bold>{t('common.sidebar.customers')}</Text>
                  </Button>
                </InternalLink>
>>>>>>> 949b375... deprecate button component, break styling a bit
              }
            ></Expandable>,
          ]}
        </Sidebar>
      }
    >
      {children}
    </Layout>
  );
};

export default Page;
