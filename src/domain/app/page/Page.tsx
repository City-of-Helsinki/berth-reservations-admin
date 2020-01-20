import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Layout from '../../../common/layout/Layout';
import Sidebar from '../../../common/sidebar/Sidebar';
import Expandable from '../../../common/expandable/Expandable';
import InternalLink from '../../../common/internalLink/InternalLink';
import Text from '../../../common/text/Text';
import Button from '../../../common/button/Button';
import Icon from '../../../common/icon/Icon';
import PageHeader from '../pageHeader/PageHeaderContainer';

const Page: React.SFC = ({ children }) => {
  const history = useHistory();
  const { t } = useTranslation();

  const DefaultIcon = <Icon name="dollyEmpty" color="secondary" />;

  const FillerMenuItem = ({ label, icon = DefaultIcon }) => (
    <InternalLink to="/">
      <Button variant="text" icon={icon}>
        <Text>{label}</Text>
      </Button>
    </InternalLink>
  );

  const FillerMenuItem2 = ({ label, icon = DefaultIcon }) => (
    <Expandable
      key="harbors"
      onClick={() => history.push('/')}
      label={
        <InternalLink to="harbors">
          <Button
            variant="text"
            icon={<Icon name="boatIcon" color="secondary" />}
          >
            <Text>{label}</Text>
          </Button>
        </InternalLink>
      }
    >
      <div>
        <Text color="secondary">Placeholder</Text>
        <div></div>
        <Text color="secondary">Placeholder</Text>
        <div></div>
        <Text color="secondary">Placeholder</Text>
      </div>
    </Expandable>
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
              icon={<Icon name="boatIcon" color="secondary" />}
            >
              <Text bold>{t('common.sidebar.harbors')}</Text>
            </Button>
          </InternalLink>
        }
      >
        <div>
          <Text color="secondary">Vapaat</Text>
          <div></div>
          <Text color="secondary">Varatut</Text>
          <div></div>
          <Text color="secondary">Kaikki</Text>
        </div>
      </Expandable>

      <FillerMenuItem2
        label="Talvisäilytykset"
        icon={<Icon name="winterIcon" color="secondary" />}
      />
      <FillerMenuItem2
        label="Hakemukset"
        icon={<Icon name="applicationsIcon" color="secondary" />}
      />
      <InternalLink to="customers">
        <Button
          variant="text"
          icon={<Icon name="customersIcon" color="secondary" />}
        >
          <Text bold>{t('common.sidebar.customers')}</Text>
        </Button>
      </InternalLink>
      <FillerMenuItem2
        label="Sopimukset"
        icon={<Icon name="contractsIcon" color="secondary" />}
      />
      <FillerMenuItem
        label="Laskutus"
        icon={<Icon name="invoiceIcon" color="secondary" />}
      />
      <FillerMenuItem
        label="Viestintä"
        icon={<Icon name="communicationsIcon" color="secondary" />}
      />
      <FillerMenuItem
        label="Muistutukset"
        icon={<Icon name="remindersIcon" color="secondary" />}
      />

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
      {children}
    </Layout>
  );
};

export default Page;
