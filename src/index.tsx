import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import * as Sentry from '@sentry/browser';

import App from './domain/app/App';
import Login from './domain/login/Login';
import { createClient } from './apollo/index';
import * as serviceWorker from './serviceWorker';
import './locales/i18n';
import './assets/styles/main.scss';
import 'hds-core/lib/helsinki.css';

const { REACT_APP_SENTRY_DSN, REACT_APP_SENTRY_ENVIRONMENT } = process.env;

Sentry.init({
  dsn: REACT_APP_SENTRY_DSN,
  environment: REACT_APP_SENTRY_ENVIRONMENT,
});

const client = createClient();

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

function IsLoggedIn() {
  const { data } = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn ? <App /> : <Login />;
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <IsLoggedIn />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
