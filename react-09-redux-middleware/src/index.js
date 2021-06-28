import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import totalReducer from './store/Reducers/index'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import personSaga from './store/saga/root.saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(totalReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(personSaga)


// const store = createStore(totalReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
