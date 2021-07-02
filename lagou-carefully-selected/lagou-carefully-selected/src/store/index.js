import { applyMiddleware, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'


export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  createRootReducer(history), 
  applyMiddleware(routerMiddleware(history), sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store