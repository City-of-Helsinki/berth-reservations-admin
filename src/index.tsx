import 'focus-visible';
import './assets/styles/main.scss';
import './locales/i18n';

import * as Sentry from '@sentry/browser';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';

const { REACT_APP_SENTRY_DSN, REACT_APP_SENTRY_ENVIRONMENT } = process.env;

Sentry.init({
  dsn: REACT_APP_SENTRY_DSN,
  environment: REACT_APP_SENTRY_ENVIRONMENT,
});

ReactDOM.render(<App />, document.getElementById('root'));
