import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import browserHistory from 'react-router/lib/browserHistory';
import syncHistoryWithStore from 'react-router-redux/lib/sync';
import { cyan500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import combineReducers from './redux/combineReducer';
// Импорт кастомных компонент
import Routes from './routes';

const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)));

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Routes history={syncHistoryWithStore(browserHistory, store)} />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('component')
);
