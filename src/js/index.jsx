import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import browserHistory from 'react-router/lib/browserHistory';
import syncHistoryWithStore from 'react-router-redux/lib/sync';
import combineReducers from './redux/combineReducer';
// Импорт кастомных компонент
import Routes from './routes';

const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Routes history={syncHistoryWithStore(browserHistory, store)} />
  </Provider>,
  document.getElementById('component')
);
