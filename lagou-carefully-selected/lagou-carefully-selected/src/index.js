import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store from './store/index'
import { history } from './store/index'
import './index.css'
import './style.css'

ReactDOM.render(
  <Provider store={store} >
    <ConnectedRouter history={history} >
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

