import React from 'react'
import ReactDOM from 'react-dom'
import routes from '../share/routes'
import store from './createStore'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </Provider>, 
  document.querySelector('#root')
)