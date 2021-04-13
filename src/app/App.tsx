import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import ApplicationList from '../features/applicationList/ApplicationListContainer';
import ApplicationView from '../features/applicationView/ApplicationViewContainer';
import CallbackPage from '../features/auth/callbackPage/CallbackPage';
import CustomerList from '../features/customerList/CustomerListContainer';
import CustomerView from '../features/customerView/CustomerViewContainer';
import ErrorBoundary from '../common/errorBoundary/ErrorBoundary';
import ErrorPage from '../features/errorPage/ErrorPage';
import HarborList from '../features/harborList/HarborListContainer';
import HarborView from '../features/harborView/HarborViewContainer';
import LoginPage from '../features/auth/loginPage/LoginPage';
import BerthOfferContainer from '../features/berthOffer/BerthOfferContainer';
import Page from './page/Page';
import Pricing from '../features/pricing/PricingContainer';
import PrivateRoute from '../features/auth/privateRoute/PrivateRoute';
import RecurringInvoices from '../features/recurringInvoices/RecurringInvoicesContainer';
import SwitchPlaceViewContainer from '../features/switchPlace/SwitchPlaceViewContainer';
import UnmarkedWsNoticeList from '../features/unmarkedWsNoticeList/UnmarkedWsNoticeListContainer';
import UnmarkedWsNoticeView from '../features/unmarkedWsNoticeView/UnmarkedWsNoticeViewContainer';
import WinterStorageApplicationList from '../features/winterStorageApplicationList/WinterStorageApplicationListContainer';
import WinterStorageApplicationView from '../features/winterStorageApplicationView/WinterStorageApplicationViewContainer';
import WinterStorageAreaList from '../features/winterStorageAreaList/WinterStorageAreaListContainer';
import WinterStorageAreaView from '../features/winterStorageAreaView/WinterStorageAreaViewContainer';
import apolloClient from './apolloClient';

const App = () => {
  return (
    <RecoilRoot>
      <ApolloProvider client={apolloClient}>
        <Router>
          <Switch>
            <Route exact path="/error" component={ErrorPage} />
            <ErrorBoundary errorComponent={<Redirect to="/error" />}>
              <Switch>
                <Route path="/login" component={LoginPage} />
                <Route exact path="/callback" component={CallbackPage} />
                <Redirect exact from="/" to="/harbors" />
                <Page>
                  <Switch>
                    <PrivateRoute exact path="/harbors/:id" component={HarborView} />
                    <PrivateRoute exact path="/harbors" component={HarborList} />
                    <PrivateRoute exact path="/customers/:id" component={CustomerView} />
                    <PrivateRoute exact path="/customers" component={CustomerList} />
                    <PrivateRoute exact path="/applications/:id" component={ApplicationView} />
                    <PrivateRoute exact path="/applications" component={ApplicationList} />
                    <PrivateRoute
                      exact
                      path="/winter-storage-applications/:id"
                      component={WinterStorageApplicationView}
                    />
                    <PrivateRoute exact path="/winter-storage-applications" component={WinterStorageApplicationList} />
                    <PrivateRoute exact path="/unmarked-ws-notices/:id" component={UnmarkedWsNoticeView} />
                    <PrivateRoute exact path="/unmarked-ws-notices" component={UnmarkedWsNoticeList} />

                    <PrivateRoute exact path="/berth-offer" component={BerthOfferContainer} />
                    <PrivateRoute exact path="/switch-berth" component={SwitchPlaceViewContainer} />

                    <PrivateRoute exact path="/pricing" component={Pricing} />
                    <PrivateRoute exact path="/winter-storage-areas/:id" component={WinterStorageAreaView} />
                    <PrivateRoute exact path="/winter-storage-areas" component={WinterStorageAreaList} />
                    <PrivateRoute exact path="/recurring-invoices" component={RecurringInvoices} />
                  </Switch>
                </Page>
              </Switch>
            </ErrorBoundary>
          </Switch>
        </Router>
      </ApolloProvider>
    </RecoilRoot>
  );
};

export default App;
