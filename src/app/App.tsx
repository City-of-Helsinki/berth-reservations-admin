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
import RecurringBerthInvoicesContainer from '../features/recurringInvoices/RecurringBerthInvoicesContainer';
import RecurringWinterStorageInvoicesContainer from '../features/recurringInvoices/RecurringWinterStorageInvoicesContainer';
import UnmarkedWsNoticeList from '../features/unmarkedWsNoticeList/UnmarkedWsNoticeListContainer';
import UnmarkedWsNoticeView from '../features/unmarkedWsNoticeView/UnmarkedWsNoticeViewContainer';
import WinterStorageApplicationList from '../features/winterStorageApplicationList/WinterStorageApplicationListContainer';
import WinterStorageApplicationView from '../features/winterStorageApplicationView/WinterStorageApplicationViewContainer';
import WinterStorageAreaList from '../features/winterStorageAreaList/WinterStorageAreaListContainer';
import WinterStorageAreaView from '../features/winterStorageAreaView/WinterStorageAreaViewContainer';
import apolloClient from './apolloClient';
import BerthOfferWithoutApplicationContainer from '../features/berthOffer/BerthOfferWithoutApplicationContainer';
import SwitchBerthContainer from '../features/berthOffer/SwitchBerthContainer';
import BerthSwitchOfferContainer from '../features/berthOffer/BerthSwitchOfferContainer';
import WinterStorageOfferContainer from '../features/winterStorageOffer/WinterStorageOfferContainer';
import WinterStorageOfferWithoutApplicationContainer from '../features/winterStorageOffer/WinterStorageOfferWithoutApplicationContainer';

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
                    <PrivateRoute exact path="/berth-switch-offer" component={BerthSwitchOfferContainer} />
                    <PrivateRoute
                      exact
                      path="/berth-offer-without-application"
                      component={BerthOfferWithoutApplicationContainer}
                    />
                    <PrivateRoute exact path="/switch-berth" component={SwitchBerthContainer} />

                    <PrivateRoute exact path="/winter-storage-offer" component={WinterStorageOfferContainer} />
                    <PrivateRoute
                      exact
                      path="/winter-storage-offer-without-application"
                      component={WinterStorageOfferWithoutApplicationContainer}
                    />

                    <PrivateRoute exact path="/pricing" component={Pricing} />
                    <PrivateRoute exact path="/winter-storage-areas/:id" component={WinterStorageAreaView} />
                    <PrivateRoute exact path="/winter-storage-areas" component={WinterStorageAreaList} />
                    <PrivateRoute exact path="/recurring-berth-invoices" component={RecurringBerthInvoicesContainer} />
                    <PrivateRoute
                      exact
                      path="/recurring-winter-storage-invoices"
                      component={RecurringWinterStorageInvoicesContainer}
                    />
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
