import React from 'react';

import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import ReactComponent from './react-component';
import App from './app';
import BlockHeader from './components/block-header';

export default function Routes({ history }) {
  return (
    <Router history={history}>
      <Route component={App} >
        <Route component={ReactComponent} >
          <Route path="/" component={BlockHeader} />
        </Route>
        <Route path="/btn" component={ReactComponent} />
      </Route>
    </Router>
  );
}
