import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import apolloClient from './apolloClient';
import CustomersPage from '../domain/customers/CustomerPageContainer';
import HarborsPage from '../domain/harbors/HarborsPageContainer';
import IndividualHarborPage from '../domain/individualHarbor/IndividualHarborPageContainer';
import IndividualCustomerPage from '../domain/individualCustomer/IndividualCustomerPageContainer';
import OfferPage from '../domain/offer/OfferPageContainer';
import LoginPage from '../domain/auth/loginPage/LoginPage';
import Page from '../domain/page/Page';
import PrivateRoute from '../domain/auth/privateRoute/PrivateRoute';
import ApplicationsPage from '../domain/applications/ApplicationsPageContainer';
import IndividualApplicationPage from '../domain/individualApplication/IndividualApplicationPageContainer';
import PricingPage from '../domain/pricing/PricingPageContainer';
import CallbackPage from '../domain/auth/callbackPage/CallbackPage';

const App: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route exact path="/callback" component={CallbackPage} />
          <Redirect exact from="/" to="/harbors" />
          <Page>
            <Switch>
              <PrivateRoute exact path="/harbors/:id" component={IndividualHarborPage} />
              <PrivateRoute exact path="/harbors" component={HarborsPage} />
              <PrivateRoute exact path="/customers/:id" component={IndividualCustomerPage} />
              <PrivateRoute exact path="/customers" component={CustomersPage} />
              <PrivateRoute exact path="/applications/:id" component={IndividualApplicationPage} />
              <PrivateRoute exact path="/applications" component={ApplicationsPage} />
              <PrivateRoute exact path="/offer/:applicationId" component={OfferPage} />
              <PrivateRoute exact path="/pricing" component={PricingPage} />
            </Switch>
          </Page>
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;