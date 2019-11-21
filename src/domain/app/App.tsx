import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Page from '../page/Page';
import HarborsPage from '../harbors/HarborsPageContainer';
import IndividualHarborPage from '../individualHarbor/IndividualHarborPageContainer';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Page>
          <Route exact path="/" component={HarborsPage} />
          <Route path="/harbors/:id" component={IndividualHarborPage} />
          <Route path="/harbors" component={HarborsPage} />
        </Page>
      </Switch>
    </Router>
  );
};

export default App;
