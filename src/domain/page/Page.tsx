import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Section } from 'hds-react';

import Layout from '../../common/layout/Layout';
import Sidebar from '../../common/sidebar/Sidebar';
import Expandable from '../../common/expandable/Expandable';
import InternalLink from '../../common/internalLink/InternalLink';
import Text from '../../common/text/Text';
import Header from '../../common/header/Header';
import Button from '../../common/button/Button';
import Icon from '../../common/icon/Icon';

const Page: React.SFC = ({ children }) => {
  const history = useHistory();
  const { t } = useTranslation();

  const PageHeader = () => (
    <Header>
      <Link to="/">
        <Icon name="helsinkiLogo" size="large" rectangle={true} color="white" />
      </Link>
    </Header>
  );

  const FillerMenuItem = ({ label }) => (
    <Expandable
      key="dummy"
      label={
        <InternalLink to="/">
          <Button
            variant="text"
            icon={<Icon name="individual" color="secondary" />}
          >
            <Text color="info" italic>
              {label}
            </Text>
          </Button>
        </InternalLink>
      }
    >
      <div>
        <Text color="secondary">Lorem Ipsum</Text>
        <div></div>
        <Text color="secondary">Lorem Ipsum</Text>
        <div></div>
        <Text color="secondary">Lorem Ipsum</Text>
      </div>
    </Expandable>
  );

  const FillerMenuItem2 = ({ label }) => (
    <InternalLink to="/">
      <Button
        variant="text"
        icon={<Icon name="individual" color="secondary" />}
      >
        <Text bold>{label}</Text>
      </Button>
    </InternalLink>
  );

  const MySidebar = () => (
    <Sidebar>
      <Expandable
        key="harbors"
        onClick={() => history.push('/harbors')}
        label={
          <InternalLink to="harbors">
            <Button
              variant="text"
              color="brand"
              icon={<Icon name="fence" color="secondary" />}
            >
              <Text bold>{t('common.sidebar.harbors')}</Text>
            </Button>
          </InternalLink>
        }
      >
        <div>
          <Text color="secondary">{t('common.sidebar.harbors')}</Text>
          <div></div>
          <Text color="secondary">{t('common.sidebar.harbors')}</Text>
          <div></div>
          <Text color="secondary">{t('common.sidebar.harbors')}</Text>
        </div>
      </Expandable>

      <FillerMenuItem label="Talvisäilytykset" />
      <FillerMenuItem label="Hakemukset" />
      <InternalLink to="customers">
        <Button
          variant="text"
          icon={<Icon name="individual" color="secondary" />}
        >
          <Text bold>{t('common.sidebar.customers')}</Text>
        </Button>
      </InternalLink>
      <FillerMenuItem label="Sopimukset" />
      <FillerMenuItem2 label="Laskutus" />
      <FillerMenuItem2 label="Viestintä" />
      <FillerMenuItem2 label="Muistutukset" />
      <InternalLink to="debug">
        <Button
          variant="text"
          icon={<Icon name="dollyEmpty" color="secondary" />}
        >
          <Text bold>Asetukset</Text>
        </Button>
      </InternalLink>
    </Sidebar>
  );

  return (
    <Layout header={<PageHeader />} sidebar={<MySidebar />}>
      <Section color="secondary">{children}</Section>
    </Layout>
  );
};

export default Page;
