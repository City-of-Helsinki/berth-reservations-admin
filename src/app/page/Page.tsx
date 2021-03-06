import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconUser } from 'hds-react';

import Layout from '../../common/layout/Layout';
import Sidebar from '../../common/sidebar/Sidebar';
import InternalNavLink from '../../common/internalNavLink/InternalNavLink';
import PageHeader from './pageHeader/PageHeader';
import { IconApplications, IconBoat, IconDocumentCheck, IconInvoice, IconWinter } from '../../common/icons';
import HDSToastContainer from '../../common/toast/HDSToastContainer';
import ExpandableNavItem from '../../common/expandableNavItem/ExpandableNavItem';

interface PageProps {
  children: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
  const { t } = useTranslation();

  return (
    <Layout
      header={<PageHeader />}
      sidebar={
        <Sidebar>
          {[
            <InternalNavLink key="harbors" to="/harbors" icon={<IconBoat />}>
              {t('common.sidebar.harbors')}
            </InternalNavLink>,
            <InternalNavLink key="winterStorageAreas" to="/winter-storage-areas" icon={<IconWinter />}>
              {t('common.sidebar.winterStorageAreas')}
            </InternalNavLink>,
            <ExpandableNavItem
              key="applications"
              label={t('common.sidebar.applications')}
              icon={<IconApplications />}
              openOn={['/']}
            >
              <InternalNavLink key="berthApplications" to="/applications">
                {t('common.sidebar.berthApplications')}
              </InternalNavLink>
              <InternalNavLink key="winterStorageApplications" to="/winter-storage-applications">
                {t('common.sidebar.winterStorageApplications')}
              </InternalNavLink>
              <InternalNavLink key="unmarkedWsNotices" to="/unmarked-ws-notices">
                {t('common.sidebar.unmarkedWsNotices')}
              </InternalNavLink>
            </ExpandableNavItem>,
            <InternalNavLink key="customers" to="/customers" icon={<IconUser />}>
              {t('common.sidebar.customers')}
            </InternalNavLink>,
            <InternalNavLink key="pricing" to="/pricing" icon={<IconInvoice />}>
              {t('common.sidebar.pricing')}
            </InternalNavLink>,
            <ExpandableNavItem
              key="recurringInvoices"
              label={t('common.sidebar.recurringInvoices')}
              icon={<IconDocumentCheck />}
              openOn={['/recurring-berth-invoices', '/recurring-winter-storage-invoices']}
            >
              <InternalNavLink key="recurringBerthInvoices" to="/recurring-berth-invoices">
                {t('common.sidebar.harbors')}
              </InternalNavLink>
              <InternalNavLink key="recurringWinterStorageInvoices" to="/recurring-winter-storage-invoices">
                {t('common.sidebar.winterStorageAreas')}
              </InternalNavLink>
            </ExpandableNavItem>,
          ]}
        </Sidebar>
      }
    >
      <HDSToastContainer />
      {children}
    </Layout>
  );
};

export default Page;
