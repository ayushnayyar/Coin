import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import ROUTES from '../constants/routes.js';

import Home from '../pages/home.js';
import People from '../pages/people.js';
import Login from '../pages/login.js';

const Routes = () => {
  const { HOME, LOGIN, PEOPLE } = ROUTES;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={LOGIN} component={withRouter(Login)} />
        <Route path={HOME} component={withRouter(Home)} />
        <Route path={PEOPLE} component={withRouter(People)} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
