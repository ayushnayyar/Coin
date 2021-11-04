import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import ROUTES from '../constants/routes.js';

import Home from '../pages/home.js';
import People from '../pages/people.js';

const Routes = () => {
  const { HOME, LOGIN, PEOPLE } = ROUTES;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={HOME} component={withRouter(Home)} />
        <Route path={PEOPLE} component={withRouter(People)} />
        <Route path={LOGIN} component={withRouter(Home)} />
        <Route />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
