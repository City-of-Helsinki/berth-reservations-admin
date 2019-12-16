import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { OidcProvider } from 'redux-oidc';

import OidcCallback from '../auth/OidcCallback';
import userManager from '../auth/userManager';
import CustomersPage from '../customers/CustomerPageContainer';
import HarborsPage from '../harbors/HarborsPageContainer';
import IndividualHarborPage from '../individualHarbor/IndividualHarborPageContainer';
import LoginPage from '../login/LoginPage';
import Page from '../page/Page';
import { store } from './state/AppStore';
import { apiTokenSelector } from '../auth/state/AuthenticationSelectors';

const client = new ApolloClient({
  request: async operation => {
    try {
      const token = apiTokenSelector(store.getState());
      operation.setContext({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (e) {
      // User not authenticated
      // eslint-disable-next-line no-console
      console.error(e);
      // TODO: add error-handler
    }
  },
  uri: process.env.REACT_APP_API_URI,
});

const App: React.FC = () => {
  return (
    <OidcProvider store={store} userManager={userManager}>
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route
              path="/login"
              component={() => <LoginPage isAuthenticated={true} />}
            />
            <Route
              exact
              path="/silent_renew"
              render={() => {
                userManager.signinSilentCallback();
                return null;
              }}
            />
            <Route path="/callback" component={OidcCallback} />
            <Page>
              <Route path="/harbors/:id" component={IndividualHarborPage} />
              <Route path="/harbors" component={HarborsPage} />
              <Route path="/customers" component={CustomersPage} />
            </Page>
          </Switch>
        </Router>
      </ApolloProvider>
    </OidcProvider>
  );
};

export default App;
