import React from 'react';
import { useHistory } from 'react-router-dom';

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

  return (
    <Layout
      header={<Header />}
      sidebar={
        <Sidebar>
          {[
            <Expandable
              key="harbors"
              onClick={() => history.push('/harbors')}
              label={
                <InternalLink to="harbors">
                  <Button
                    variant="text"
                    icon={<Icon name="fence" color="standard" />}
                  >
                    <Text bold>Venepaikat</Text>
                  </Button>
                </InternalLink>
              }
            ></Expandable>,
            <Expandable
              key="customers"
              onClick={() => history.push('/customers')}
              label={
                <InternalLink to="customers">
                  <Button
                    variant="text"
                    icon={<Icon name="individual" color="standard" />}
                  >
                    <Text bold>Asiakkaat</Text>
                  </Button>
                </InternalLink>
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
