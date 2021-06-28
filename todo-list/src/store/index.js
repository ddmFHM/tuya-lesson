import createSagaMiddleware from 'redux-saga'
import rootReducers from './reducres/root.reducer'
import { createStore, applyMiddleware } from 'redux'
import todoSaga from './saga/todo.saga'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(todoSaga)

export default store