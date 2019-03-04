import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from '../routes/routes';

export default function MainApp() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact component={ROUTES.HOME.Component} path={ROUTES.HOME.path} />
          <Route component={ROUTES.ALL_NOTES.Component} path={ROUTES.ALL_NOTES.path} />
          <Redirect to={ROUTES.HOME.path} />
        </Switch>
      </Fragment>
    </Router>
  );
}
