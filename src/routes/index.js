import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ROUTES from '../constants/routes.js';

import Home from '../pages/home.js';

const Routes = () => {
  const { HOME, LOGIN } = ROUTES;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route exact path={LOGIN} component={Home} />
        <Route />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
