import React from 'react';

import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import ReactComponent from './containers/container';

export default function Routes({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={ReactComponent} />
    </Router>
  );
}
