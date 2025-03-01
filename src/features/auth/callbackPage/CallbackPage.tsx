import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';

import authService from '../authService';
import LoadingSpinner from '../../../common/spinner/LoadingSpinner';
import Layout from '../../../common/layout/Layout';
import Header from '../../../common/header/Header';
import HelsinkiLogo from '../../../common/helsinkiLogo/HelsinkiLogo';

export type CallbackPageProps = RouteComponentProps;

const CallbackPage = ({ history }: CallbackPageProps) => {
  const client = useApolloClient();

  useEffect(() => {
    authService
      .endLogin()
      .then((user) => {
        client.writeData({
          data: { currentUser: { __typename: 'CurrentUser', ...user.profile } },
        });
        history.replace(user.url_state || '/');
      })
      .catch(() => {
        history.replace('/error');
      });
  });

  return (
    <Layout
      header={
        <Header>
          <HelsinkiLogo size="small" color="white" />
        </Header>
      }
    >
      <LoadingSpinner />
    </Layout>
  );
};

export default CallbackPage;
